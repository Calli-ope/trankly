<script lang="ts">
    export let y: number;
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-center rounded-lg ' + 
(y > 0 ? ' py-4 bg-gray-950 border-gray-900 shadow-md ' : ' py-6 bg-transparent border-transparent')}>
    <a href="/">
        <h1 class="font-extrabold text-white text-4xl">Rail Ranking</h1>
    </a>
</header>
