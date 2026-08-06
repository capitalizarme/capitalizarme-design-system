<!--
  PropertyGrid — applied from Features.astro / FeaturedWork.astro layout patterns, real listing
  copy from ../data/properties.js (mirrors source-evidence/capitalizarme-boilerplate-html/data/content.ts's specificity —
  never generic "Property 1 / Property 2" filler, per DESIGN.md §9).
-->
<script>
  import { properties } from '../data/properties.js';
</script>

<section class="mx-auto max-w-[1440px] px-6 lg:px-[140px] py-16">
  <h2 class="font-display font-black text-3xl lg:text-4xl text-brand-navy mb-8">Proyectos destacados</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    {#each properties as property}
      <div class="rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="bg-blue-50 h-40 flex items-center justify-center text-brand-navy/40 text-sm">
          foto de la propiedad
        </div>
        <div class="p-6">
          <p class="text-xs uppercase tracking-wider text-brand-blue font-bold">{property.label}</p>
          <h3 class="font-display font-bold text-xl text-brand-navy mt-1">{property.title}</h3>
          <p class="text-brand-navy/70 text-sm mt-1">{property.subtitle}</p>
          <ul class="mt-4 flex flex-col gap-2">
            {#each property.checks as check}
              <li class="flex items-center gap-2 text-sm text-brand-navy">
                <svg width="18" height="18" viewBox="0 0 25 25" aria-hidden="true">
                  <circle cx="12.5" cy="12.5" r="12.5" class="fill-brand-blue" />
                  <path d="M7 12.5l3.5 3.5 7-7" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{check}</span>
              </li>
            {/each}
          </ul>
          <a
            href={`#${property.slug}`}
            class="inline-block mt-6 font-cta font-bold uppercase tracking-wider text-sm rounded-full border-2 border-brand-blue text-brand-blue px-8 py-3 hover:bg-brand-blue hover:text-white transition-all duration-300 ease-in-out"
          >
            Ver detalle
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>
