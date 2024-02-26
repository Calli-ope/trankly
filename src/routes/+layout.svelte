<script lang="ts">
    import "../app.css";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
    import { ModeWatcher } from "mode-watcher";

    let y: number;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }
  </script>
  
  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-10 right-0 duration-200 flex p-10 z-20 " + (y > 0 ? 'opacity-full pointer-events-auto ' : 'opacity-0 pointer-events-none')}>
        <button on:click={goTop} class="ml-auto rounded-full py-3 px-4 dark:bg-slate-600 dark:hover:bg-slate-500 bg-slate-300 hover:bg-slate-200 shadow-md">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>
    </div>
    <Header y={y}/>
    <ModeWatcher />
    <slot />
    <Footer />
  </div>

  <svelte:window bind:scrollY={y}  bind:innerHeight bind:innerWidth/>