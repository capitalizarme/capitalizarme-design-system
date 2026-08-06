<!--
  AdvisorList — the "Mensajes" rail: real advisor threads a Capitalizarme investor is talking
  to. Direct product application of ContactForm.astro's whole purpose (booking time with an
  advisor) continued as an ongoing conversation. `selected` is owned by App.svelte.
-->
<script>
  import { createEventDispatcher } from 'svelte';
  import { advisors } from '../data/advisors.js';

  export let selected = advisors[0].id;

  const dispatch = createEventDispatcher();
</script>

<div class="w-72 shrink-0 border-r border-gray-100 pt-6 px-4">
  <h2 class="font-display font-bold text-lg text-brand-navy px-2 mb-4">Mensajes</h2>
  <ul class="flex flex-col gap-1">
    {#each advisors as advisor}
      <li>
        <button
          type="button"
          on:click={() => dispatch('select', advisor.id)}
          class="w-full text-left flex items-center gap-3 px-3 py-3 rounded-2xl transition-colors duration-200"
          class:bg-blue-50={selected === advisor.id}
        >
          <span class="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold shrink-0">
            {advisor.initials}
          </span>
          <span class="flex flex-col min-w-0">
            <span class="font-medium text-brand-navy text-sm truncate">{advisor.name}</span>
            <span class="text-xs text-brand-navy/60 truncate">{advisor.lastMessage}</span>
          </span>
        </button>
      </li>
    {/each}
  </ul>
</div>
