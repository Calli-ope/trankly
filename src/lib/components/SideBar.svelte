<script lang="ts">
    import SideBarItem from "./SideBarItem.svelte";

    export let isOpen: boolean;
    export let toggleSidebar: () => void;
</script>

<aside>
    <div class="{`fixed top-0 left-0 z-20 w-64 h-screen sidebar ${isOpen ? 'open' : ''}`}" aria-label="Sidebar">
        <div class="h-full px-3 py-8 overflow-y-auto bg-gray-950 border-gray-900 sidebar-style shadow-md">
            <a href="/ranking" class="flex items-center ps-5 mb-8">
                <i class="fa-solid fa-ranking-star fa-2xl mr-4" style="color: #ffd700;"></i>
                <span class="self-center text-2xl font-semibold text-white">Ranking</span>
            </a>
            <ul class="space-y-2 font-medium">
                <SideBarItem href="#tgv" title="1. TGV" />
                <SideBarItem href="#eurostar" title="2. Eurostar" />
                <SideBarItem href="#sbb" title="3. Giruno" />
                <SideBarItem href="#frecce" title="4. Frecciarossa" />
                <SideBarItem href="#ice" title="5. ICE" />
            </ul>
        </div>
    </div>
    <button on:click={toggleSidebar} class="{`lg-hidden fixed bottom-10 left-0 z-30 p-3 m-2 text-white bg-slate-600 hover:bg-slate-500 rounded-full show-button`}">
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