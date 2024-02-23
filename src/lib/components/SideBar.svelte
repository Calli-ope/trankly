<script lang="ts">
     export let isOpen: boolean;
     export let toggleSidebar: () => void;
</script>

<style>
    @media (max-width: 1870px) {
        .sidebar {
            transform: translateX(-100%);
        }

        .sidebar.open {
            transform: translateX(0);
        }
    }
    @media (min-width: 1871px) {
        .show-button {
            display: none;
        }
    }
</style>

<aside class="{`fixed top-0 left-0 z-40 w-64 h-screen bg-slate-950 sidebar ${isOpen ? 'open' : ''}`}" aria-label="Sidebar">
    <div class="h-full px-3 py-8 overflow-y-auto bg-slate-950">
        <a href="/ranking" class="flex items-center ps-5 mb-8">
            <i class="fa-solid fa-ranking-star fa-2xl mr-4" style="color: #ffd700;"></i>
            <span class="self-center text-2xl font-semibold text-white">Ranking</span>
        </a>
       
        <ul class="space-y-2 font-medium">
            <li>
                <a href="#tgv" class="flex items-center p-2 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">1. TGV</span>
                </a>
            </li>
            <li>
                <a href="#eurostar" class="flex items-center p-2 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">2. Eurostar</span>
                </a>
            </li>
            <li>
                <a href="#sbb" class="flex items-center p-2 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">3. Giruno</span>
                </a>
            </li>
            <li>
                <a href="#frecce" class="flex items-center p-2 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">4. Frecciarossa</span>
                </a>
            </li>
            <li>
                <a href="#ice" class="flex items-center p-2 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                    <span class="ms-3 text-xl">5. ICE</span>
                </a>
            </li>
        </ul>
    </div>
</aside>

<button on:click={toggleSidebar} class="{`lg-hidden fixed top-0 right-0 z-50 p-3 m-2 text-white bg-gray-800 rounded-full ${isOpen ? 'close-button' : 'open-button'} show-button`}">
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