<!--
  InputBar — the chat composer. Pill-shaped container matches this system's button radius
  language. Owns its own draft text (matches ui_kits/app-react/components/InputBar.jsx) and
  dispatches `send` with the trimmed message on submit.
-->
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let draft = '';

  function send() {
    const text = draft.trim();
    if (!text) return;
    dispatch('send', text);
    draft = '';
  }

  function onKeydown(e) {
    if (e.key === 'Enter') send();
  }
</script>

<div class="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 m-4">
  <input
    type="text"
    placeholder="Escribe tu mensaje…"
    bind:value={draft}
    on:keydown={onKeydown}
    class="flex-1 border-0 bg-transparent focus:outline-none text-sm"
  />
  <button
    type="button"
    aria-label="Enviar"
    on:click={send}
    class="w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0"
  >
    →
  </button>
</div>
