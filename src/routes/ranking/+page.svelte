<script lang="ts">
  import SideBar from '$lib/components/SideBar.svelte';
  import Panel from '$lib/components/Panel.svelte';
  import PhotoWrapper from '$lib/components/PhotoWrapper.svelte';
  import LogoWrapper from '$lib/components/LogoWrapper.svelte';
  import Info from '$lib/components/Info.svelte';
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
  <div class="flex flex-col items-center leading-loose">
    <h1 class="font-semibold text-2xl text-center mt-10 mb-5">
      Die 5 besten Hochgeschwindigkeitszüge in Europa!
    </h1>
  </div>
  <div class="{`main-content transition-all duration-300 ${isOpen ? 'open' : ''}`}">
    <section id="tgv" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[0]}
          <Panel title={ranking[0].title} content={ranking[0].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[0].logo1} alt="Logo SNCF" />
            <LogoWrapper src={ranking[0].logo2} alt="Logo TVG inOiu" />
          </div>
          <PhotoWrapper src={ranking[0].photo1} alt="Außenansicht TGV" />
          <Panel title="" content={ranking[0].description2}/>
          <Panel title="" content={ranking[0].description3}/>
          <PhotoWrapper src={ranking[0].photo2} alt="Innenraum TGV" />
        {/if}
      </div>
      <Info href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="eurostar" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[1]}
          <LogoWrapper src={ranking[1].logo1} alt="Logo Eurostar" />
          <Panel title={ranking[1].title} content={ranking[1].description1}/>
          <Panel title="" content={ranking[1].description2}/>
          <PhotoWrapper src={ranking[1].photo1} alt="Außenansicht Eurostar" />
          <PhotoWrapper src={ranking[1].photo2} alt="Innenraum Eurostar" />
          <Panel title="" content={ranking[1].description3}/>
        {/if}
      </div>
      <Info href="https://www.eurostar.com/de-de/zug" text="Weitere Informationen zum Zug &rarr;"/>
    </section>

    <section id="sbb" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[0]}
          <Panel title={ranking[0].title} content={ranking[0].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[0].logo1} alt="Logo SNCF" />
            <LogoWrapper src={ranking[0].logo2} alt="Logo TVG inOiu" />
          </div>
          <PhotoWrapper src={ranking[0].photo1} alt="Außenansicht TGV" />
          <Panel title="" content={ranking[0].description2}/>
          <Panel title="" content={ranking[0].description3}/>
          <PhotoWrapper src={ranking[0].photo2} alt="Innenraum TGV" />
        {/if}
      </div>
      <Info href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="frecce" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[1]}
          <LogoWrapper src={ranking[1].logo1} alt="Logo Eurostar" />
          <Panel title={ranking[1].title} content={ranking[1].description1}/>
          <Panel title="" content={ranking[1].description2}/>
          <PhotoWrapper src={ranking[1].photo1} alt="Außenansicht Eurostar" />
          <PhotoWrapper src={ranking[1].photo2} alt="Innenraum Eurostar" />
          <Panel title="" content={ranking[1].description3}/>
        {/if}
      </div>
      <Info href="https://www.eurostar.com/de-de/zug" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="ice" class="flex flex-col items-center justify-center mb-7">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[0]}
          <Panel title={ranking[0].title} content={ranking[0].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[0].logo1} alt="Logo SNCF" />
            <LogoWrapper src={ranking[0].logo2} alt="Logo TVG inOiu" />
          </div>
          <PhotoWrapper src={ranking[0].photo1} alt="Außenansicht TGV" />
          <Panel title="" content={ranking[0].description2}/>
          <Panel title="" content={ranking[0].description3}/>
          <PhotoWrapper src={ranking[0].photo2} alt="Innenraum TGV" />
        {/if}
      </div>
      <Info href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" text="Weitere Informationen zum Zug &rarr;" />
    </section>
  </div>
</main>