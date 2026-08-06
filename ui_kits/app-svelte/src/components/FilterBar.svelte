<!--
  FilterBar — reuses the underline-input pattern from ContactForm.astro (no boxed inputs, per
  DESIGN.md §9) plus the pill-button property-type toggle. `activeType` is owned by App.svelte.
-->
<script>
  import { createEventDispatcher } from 'svelte';

  export let activeType = 'Departamentos';

  const dispatch = createEventDispatcher();
  const types = ['Departamentos', 'Terrenos', 'Bodegas', 'Estacionamientos'];
</script>

<div class="mx-auto max-w-[1440px] px-6 lg:px-[140px]">
  <div class="rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10 flex flex-wrap items-end gap-6">
    <div class="flex flex-col gap-1">
      <label for="filter-city" class="font-medium text-sm text-brand-navy">Comuna</label>
      <input
        id="filter-city"
        type="text"
        placeholder="Las Condes"
        class="border-0 border-b border-gray-300 bg-transparent focus:border-brand-blue focus:outline-none py-1 transition-all duration-150 ease-in-out"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label for="filter-min" class="font-medium text-sm text-brand-navy">Desde (UF)</label>
      <input
        id="filter-min"
        type="number"
        placeholder="1.665"
        class="border-0 border-b border-gray-300 bg-transparent focus:border-brand-blue focus:outline-none py-1 transition-all duration-150 ease-in-out"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label for="filter-max" class="font-medium text-sm text-brand-navy">Hasta (UF)</label>
      <input
        id="filter-max"
        type="number"
        placeholder="5.000"
        class="border-0 border-b border-gray-300 bg-transparent focus:border-brand-blue focus:outline-none py-1 transition-all duration-150 ease-in-out"
      />
    </div>
    <div class="flex gap-3 flex-wrap">
      {#each types as type}
        <button
          type="button"
          on:click={() => dispatch('typechange', type)}
          class="font-cta font-bold uppercase tracking-wider text-sm rounded-full px-8 py-3 transition-all duration-300 ease-in-out border-2 border-brand-blue hover:bg-brand-blue hover:text-white"
          class:bg-brand-blue={activeType === type}
          class:text-white={activeType === type}
          class:text-brand-blue={activeType !== type}
        >
          {type}
        </button>
      {/each}
    </div>
  </div>
</div>
