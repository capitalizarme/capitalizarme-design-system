<!--
  ChatArea — the main workspace pane for the selected advisor thread. Composes InputBar and
  MessageBubble, and auto-scrolls to the newest message via a reactive statement + `tick()`.
-->
<script>
  import { tick } from 'svelte';
  import InputBar from './InputBar.svelte';
  import MessageBubble from './MessageBubble.svelte';

  export let advisor;
  export let messages = [];
  export let onSend = () => {};

  let scrollEl;

  $: if (messages && scrollEl) {
    tick().then(() => {
      if (scrollEl) scrollEl.scrollTop = scrollEl.scrollHeight;
    });
  }
</script>

<div class="flex-1 flex flex-col min-w-0">
  <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4">
    <p class="leading-tight">
      <span class="block font-display font-bold text-brand-navy">{advisor.name}</span>
      <span class="block text-sm text-brand-navy/60">{advisor.role}</span>
    </p>
    <a
      href="#"
      class="font-cta font-bold uppercase tracking-wider text-xs rounded-full border-2 border-brand-blue text-brand-blue px-6 py-2 hover:bg-brand-blue hover:text-white transition-all duration-300 ease-in-out"
    >
      Agenda tu reunión
    </a>
  </div>
  <div class="flex-1 overflow-y-auto px-6 py-4" bind:this={scrollEl}>
    {#each messages as message}
      <MessageBubble from={message.from} text={message.text} />
    {/each}
  </div>
  <InputBar on:send={(e) => onSend(e.detail)} />
</div>
