<script lang="ts">
     export let y: number;
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-center border border-solid rounded-lg ' + 
(y > 0 ? ' py-4 bg-slate-950 border-violet-950' : ' py-6 bg-transparent border-transparent')}>
    <a href="/">
        <h1 class="font-extrabold text-white text-4xl">Konrads Rankings</h1>
    </a>
</header>
