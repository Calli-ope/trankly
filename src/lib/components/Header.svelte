<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import { toggleMode } from "mode-watcher";
    
    export let y: number;
</script>

<header class={'sticky z-[10] top-0 duration-200 grid grid-cols-3 ' 
    + (y > 0 ? ' py-3 dark:bg-gray-950 dark:border-gray-900 bg-gray-400 border-gray-300 shadow-md rounded-lg ' : ' py-6 bg-transparent border-transparent')}>
    <a href="/" class="col-start-2 flex items-center justify-center">
        <h1 class="font-extrabold dark:text-white text-black text-4xl">Rail Ranking</h1>
    </a>
    <div class="col-span-1 flex justify-end px-5 rounded-lg">
        <Button on:click={toggleMode} variant="secondary" size="icon">
            <Sun
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</header>
