<script>
  export let number;
  export let label;
</script>

<div class="p-5 border-2 border-secondary bg-primary">
  <span
    class="block text-center pb-1 text-lg text-title font-bold tracking-tighter"
    >{label}</span
  >
  <div class="text-center">
    <span class="text-4xl text-gray-100 tracking-[-0.075em]">{number}</span>
  </div>
</div>
