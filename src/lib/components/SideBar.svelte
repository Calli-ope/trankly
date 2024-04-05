<script lang="ts">
    import SideBarItem from "./SideBarItem.svelte";

    export let isOpen: boolean;
    export let toggleSidebar: () => void;
</script>

<aside>
    <div class="{`fixed top-0 left-0 z-20 w-64 h-screen sidebar ${isOpen ? 'open' : ''}`}" aria-label="Sidebar">
        <div class="h-full px-3 py-8 overflow-y-auto dark:bg-gray-950 dark:border-gray-900 bg-gray-400 border-gray-300 sidebar-style shadow-md">
            <a href="/ranking" class="flex items-center ps-5 mb-8">
                <i class="fa-solid fa-ranking-star fa-2xl mr-4" style="color: #ffd700;"></i>
                <span class="self-center text-2xl font-semibold dark:text-white text-black">Ranking</span>
            </a>
            <ul class="space-y-2 font-medium">
                <SideBarItem href="#personenwagen" title="7. Personenwagen" />
                <SideBarItem href="#ice" title="6. ICE" />
                <SideBarItem href="#enterprise" title="5. Enterprise" />
                <SideBarItem href="#frecce" title="4. Frecciarossa" />
                <SideBarItem href="#bernina" title="3. Bernina-Express" />
                <SideBarItem href="#eurostar" title="2. Eurostar" />
                <SideBarItem href="#tgv" title="1. TGV" />
                <hr class="w-52 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
                <div class="font-normal">
                    <SideBarItem href="/map" title="Zur Karte" />
                    <SideBarItem href="/about" title="Über uns" />
                </div>
            </ul>
        </div>
    </div>
    <button on:click={toggleSidebar} class="{`lg-hidden fixed bottom-10 left-0 z-30 p-3 m-2 dark:bg-slate-600 dark:hover:bg-slate-500 bg-slate-300 hover:bg-slate-200 rounded-full shadow-md show-button`}">
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
</aside>

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

    .sidebar-style {
        border-radius: 0px 12px 12px 0px;
    }
</style>