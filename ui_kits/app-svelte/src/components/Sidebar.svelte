<!--
  Sidebar — logged-in product nav. Capi appears as a small, uncropped brand mark above the nav
  items (assets/mascot/capi-3.png), never recolored or vectorized — see DESIGN.md §6. `view` is
  the normalized "explorar" | "mensajes" state owned by App.svelte; clicking a nav item dispatches
  `navigate` so the parent decides how to route it (mirrors ui_kits/app-react/components/Sidebar.jsx).
-->
<script>
  import { createEventDispatcher } from 'svelte';

  export let view = 'explorar';

  const dispatch = createEventDispatcher();

  const items = [
    { key: 'explorar', label: 'Explorar propiedades' },
    { key: 'favoritos', label: 'Mis favoritos' },
    { key: 'mensajes', label: 'Mensajes' },
    { key: 'simulador', label: 'Mi simulador' },
  ];
</script>

<aside class="w-64 shrink-0 border-r border-gray-100 pt-6 px-4 flex flex-col gap-1">
  <img class="w-14 h-14 mx-auto mb-4" src="/assets/mascot/capi-3.png" alt="Capi" />
  {#each items as item}
    <button
      type="button"
      on:click={() => dispatch('navigate', item.key)}
      class="text-left px-4 py-3 rounded-full font-body transition-colors duration-200"
      class:text-brand-navy={view !== item.key}
      class:hover:bg-blue-50={view !== item.key}
      class:bg-brand-blue={view === item.key}
      class:text-white={view === item.key}
    >
      {item.label}
    </button>
  {/each}
</aside>
