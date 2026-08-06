<!--
  MessageBubble — one chat row. User bubbles reuse the CTA banner's blue-fill/white-text
  pairing; advisor bubbles reuse the .card border language.
-->
<script>
  export let from = 'advisor';
  export let text = '';
</script>

<div class="flex mb-3" class:justify-end={from === 'user'} class:justify-start={from !== 'user'}>
  <div
    class="max-w-[75%] rounded-2xl px-4 py-3 text-sm"
    class:bg-brand-blue={from === 'user'}
    class:text-white={from === 'user'}
    class:bg-white={from !== 'user'}
    class:border={from !== 'user'}
    class:border-gray-200={from !== 'user'}
    class:text-brand-navy={from !== 'user'}
  >
    {text}
  </div>
</div>
