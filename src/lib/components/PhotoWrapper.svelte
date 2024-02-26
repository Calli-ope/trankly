<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<div class="grid justify-center">
  <img src={src} alt={alt} class="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" />
</div>