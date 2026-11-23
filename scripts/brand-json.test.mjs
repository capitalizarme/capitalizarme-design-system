import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const raw = readFileSync(join(ROOT, "brand.json"), "utf8");
const brand = JSON.parse(raw);
const countMascots = (text) => (text.match(/"kind": "mascot"/g) ?? []).length;

test("brand.json declares the kit record identity first", () => {
  assert.deepEqual(Object.keys(brand).slice(0, 2), ["version", "kind"]);
  assert.equal(brand.version, 1);
  assert.equal(brand.kind, "own");
});

test("brand.json marks have the kit roles and point at real files", () => {
  assert.deepEqual(
    brand.marks.map((m) => m.role),
    ["logo", "logo-on-dark", "icon", "touch-icon"],
  );
  for (const mark of brand.marks) {
    assert.equal(typeof mark.path, "string");
    assert.ok(existsSync(join(ROOT, mark.path)), `missing ${mark.path}`);
  }
  assert.equal(brand.marks[1].seenOn, "#25397f");
});

test("brand.json fonts are the two Google families", () => {
  assert.deepEqual(brand.fonts.map((f) => f.family), ["Space Grotesk", "Raleway"]);
  for (const font of brand.fonts) assert.equal(font.source, "google");
});

test("brand.json has a descriptor and kit imagery keys", () => {
  assert.ok(brand.descriptor.industries.includes("finance"));
  assert.equal(brand.imagery.hero, "3d");
  assert.deepEqual(brand.imagery.icons, { set: "custom" });
});

test("brand.json preserves every pre-existing fact", () => {
  for (const key of ["name", "colors", "logo", "typography", "imagery"]) {
    assert.ok(key in brand, `lost ${key}`);
  }
  assert.equal(
    brand.logo.primary,
    "assets/logo/horizontal/070726_logo-capitalizarme-negro-sin-com.png",
  );
  const before = execSync("git show 8db9d37:brand.json", { cwd: ROOT, encoding: "utf8" });
  assert.ok(countMascots(before) > 0);
  assert.equal(countMascots(raw), countMascots(before));
});
