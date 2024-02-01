<script>
    import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";

    /**
	 * @type {number}
	 */
    let y;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }
  </script>
  
  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-20 right-0 duration-200 flex p-10 z-[1] " + (y > 0 ? 'opacity-full pointer-events-auto':'opacity-0 pointer-events-none')}>
        <button on:click={goTop} class="ml-auto rounded-full bg-slate-600 text-violett-400 py-3 px-4 hover:bg-slate-500 cursor-pointer">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>
    </div>
    <Header y={y}/>
    <slot />
    <Footer />
  </div>

  <svelte:window bind:scrollY={y}  bind:innerHeight bind:innerWidth/>