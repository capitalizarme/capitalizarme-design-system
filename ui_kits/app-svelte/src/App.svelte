<!--
  App shell — composes Header, Sidebar, SimulatorBanner, FilterBar, PropertyGrid, AdvisorList,
  ChatArea, and Footer into the two-view "browse properties" / "mensajes" product surface, owning
  all interactive state via Svelte reactivity (view, filter type, selected advisor, message
  threads) — the Svelte-idiomatic equivalent of ui_kits/app-react/components/App.jsx's
  React.useState calls and ui_kits/app-astro/src/pages/index.astro's data-* attribute script.
-->
<script>
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import SimulatorBanner from './components/SimulatorBanner.svelte';
  import FilterBar from './components/FilterBar.svelte';
  import PropertyGrid from './components/PropertyGrid.svelte';
  import AdvisorList from './components/AdvisorList.svelte';
  import ChatArea from './components/ChatArea.svelte';
  import Footer from './components/Footer.svelte';
  import { advisors, initialThreads } from './data/advisors.js';

  let view = 'explorar';
  let activeType = 'Departamentos';
  let selectedAdvisor = advisors[0].id;
  let threads = structuredClone(initialThreads);

  function handleNavigate(e) {
    view = e.detail === 'mensajes' ? 'mensajes' : 'explorar';
  }

  function handleSend(text) {
    threads = {
      ...threads,
      [selectedAdvisor]: [...threads[selectedAdvisor], { from: 'user', text }],
    };
  }

  $: advisor = advisors.find((a) => a.id === selectedAdvisor);
</script>

<Header />
<div class="flex pt-16">
  <Sidebar view={view === 'mensajes' ? 'mensajes' : 'explorar'} on:navigate={handleNavigate} />
  {#if view === 'explorar'}
    <div class="flex-1 min-w-0">
      <SimulatorBanner />
      <div class="mt-6">
        <FilterBar {activeType} on:typechange={(e) => (activeType = e.detail)} />
      </div>
      <PropertyGrid />
    </div>
  {:else}
    <div class="flex-1 min-w-0 flex h-[calc(100vh-4rem)]">
      <AdvisorList selected={selectedAdvisor} on:select={(e) => (selectedAdvisor = e.detail)} />
      <ChatArea {advisor} messages={threads[selectedAdvisor]} onSend={handleSend} />
    </div>
  {/if}
</div>
<Footer />
