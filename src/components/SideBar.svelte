<script>
    /**
	 * @type {any}
	 */
     export let isOpen;
    /**
	 * @type {any}
	 */
     export let toggleSidebar;
</script>

<style>
    @media (max-width: 1480px) {
        .sidebar {
            transform: translateX(-100%);
        }

        .sidebar.open {
            transform: translateX(0);
        }
    }
    @media (min-width: 1481px) {
        .show-button {
            display: none;
        }
    }
</style>

<aside class="{`fixed top-0 left-0 z-40 w-64 h-screen bg-slate-950 sidebar ${isOpen ? 'open' : ''}`}" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-950">
        <a href="/" class="flex items-center ps-5 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-current text-yellow-400 mr-4" viewBox="0 0 20 20">
                <path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
            </svg>
            <span class="self-center text-2xl font-semibold text-white">Ranking</span>
        </a>
       
        <ul class="space-y-2 font-medium">
            <li>
                <a href="#öbb" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">1. ÖBB</span>
                </a>
            </li>
            <li>
                <a href="#eurostar" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">2. Eurostar</span>
                </a>
            </li>
            <li>
                <a href="ibb" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">Italienische Bahn</span>
                </a>
            </li>
        </ul>
    </div>
</aside>

<button on:click={toggleSidebar} class="{`lg-hidden fixed top-0 right-0 z-50 p-3 m-2 text-white bg-gray-800 rounded-full ${isOpen ? 'close-button' : 'open-button'} show-button`}"
    transition:opacity
    style:opacity="{isOpen ? 1 : 1}">
    {#if isOpen}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    {/if}
</button>