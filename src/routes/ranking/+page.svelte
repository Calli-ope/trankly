<script lang="ts">
  import SideBar from '$lib/components/SideBar.svelte';
  import Panel from '$lib/components/Panel.svelte';
  import ImageWrapper from '$lib/components/ImageWrapper.svelte';
  import type { RankingData } from '$lib/helper';
  
  let isOpen = false;
  let ranking: RankingData[] = [];
  
  function toggleSidebar() {
    isOpen = !isOpen;
  }

  fetch('http://localhost:3000/ranking')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log('Ranking data:', data);
      ranking = data;
    })
    .catch(error => {
      console.error('Error fetching ranking data:', error);
    });
</script>

<main class="flex flex-col min-h-screen">
    <SideBar {isOpen} {toggleSidebar} />
    <div class="{`main-content transition-all duration-300 ${isOpen ? 'open' : ''}`}">
      <section id="tgv" class="flex flex-col items-center justify-center">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          {#if ranking[0]}
            <Panel title={ranking[0].titel} content={ranking[0].description1}/>
            <div class="grid justify-center">
              <img src={ranking[0].logo1} class="h-auto max-w-sm rounded-lg py-2" alt="Logo SNCF" />
              <img src={ranking[0].logo2} class="h-auto max-w-sm rounded-lg py-2" alt="Logo TVG inOiu" />
            </div>
            <ImageWrapper src={ranking[0].photo1} alt="Außenansicht TGV" />
            <Panel title="" content={ranking[0].description2}/>
            <Panel title="" content={ranking[0].description3}/>
            <ImageWrapper src={ranking[0].photo2} alt="Innenraum TGV" />
          {/if}
        </div>
        <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="eurostar" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          {#if ranking[1]}
            <div class="grid justify-center">
                <img src={ranking[1].logo1} class="ml-10 h-auto max-w-sm rounded-lg shadow-none mt-10" alt="Logo Eurostar" />
            </div>
            <Panel title={ranking[1].titel} content={ranking[1].description1}/>
            <Panel title="" content={ranking[1].description2}/>
            <ImageWrapper src={ranking[1].photo1} alt="Außenansicht Eurostar" />
            <ImageWrapper src={ranking[1].photo2} alt="Innenraum Eurostar" />
            <Panel title="" content={ranking[1].description3}/>
          {/if}
        </div>
        <a href="https://www.eurostar.com/de-de/zug" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="sbb" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          {#if ranking[0]}
            <Panel title={ranking[0].titel} content={ranking[0].description1}/>
            <div class="grid justify-center">
              <img src={ranking[0].logo1} class="h-auto max-w-sm rounded-lg py-2" alt="Logo SNCF" />
              <img src={ranking[0].logo2} class="h-auto max-w-sm rounded-lg py-2" alt="Logo TVG inOiu" />
            </div>
            <ImageWrapper src={ranking[0].photo1} alt="Außenansicht TGV" />
            <Panel title="" content={ranking[0].description2}/>
            <Panel title="" content={ranking[0].description3}/>
            <ImageWrapper src={ranking[0].photo2} alt="Innenraum TGV" />
          {/if}
        </div>
        <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="frecce" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          {#if ranking[1]}
            <div class="grid justify-center">
                <img src={ranking[1].logo1} class="ml-10 h-auto max-w-sm rounded-lg shadow-none mt-10" alt="Logo Eurostar" />
            </div>
            <Panel title={ranking[1].titel} content={ranking[1].description1}/>
            <Panel title="" content={ranking[1].description2}/>
            <ImageWrapper src={ranking[1].photo1} alt="Außenansicht Eurostar" />
            <ImageWrapper src={ranking[1].photo2} alt="Innenraum Eurostar" />
            <Panel title="" content={ranking[1].description3}/>
          {/if}
        </div>
        <a href="https://www.eurostar.com/de-de/zug" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="ice" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          {#if ranking[0]}
            <Panel title={ranking[0].titel} content={ranking[0].description1}/>
            <div class="grid justify-center">
              <img src={ranking[0].logo1} class="h-auto max-w-sm rounded-lg py-2" alt="Logo SNCF" />
              <img src={ranking[0].logo2} class="h-auto max-w-sm rounded-lg py-2" alt="Logo TVG inOiu" />
            </div>
            <ImageWrapper src={ranking[0].photo1} alt="Außenansicht TGV" />
            <Panel title="" content={ranking[0].description2}/>
            <Panel title="" content={ranking[0].description3}/>
            <ImageWrapper src={ranking[0].photo2} alt="Innenraum TGV" />
          {/if}
        </div>
        <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 my-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4>Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
    </div>
  </main>