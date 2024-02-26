<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<div class="grid justify-center">
    <img src={src} alt={alt} class="h-auto max-w-sm rounded-lg shadow-none mt-10" />
</div>