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
      Die 7 besten Züge in Europa!
    </h1>
  </div>
  <div class="{`main-content transition-all duration-300 ${isOpen ? 'open' : ''}`}">
    <section id="personenwagen" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[0]}
          <Panel title={ranking[0].title} content={ranking[0].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[0].logo1} alt="Logo SZ" />
            <LogoWrapper src={ranking[0].logo2} alt="Logo HZPP" />
          </div>
          <PhotoWrapper src={ranking[0].photo1} alt="Außenansicht Personenwagen" />
          <Panel title="" content={ranking[0].description2}/>
          <Panel title="" content={ranking[0].description3}/>
          <PhotoWrapper src={ranking[0].photo2} alt="Innenraum Personenwagen" />
        {/if}
      </div>
      <Info href="https://potniski.sz.si/" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="ice" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[1]}
          <LogoWrapper src={ranking[1].logo1} alt="Logo DB" />
          <Panel title={ranking[1].title} content={ranking[1].description1}/>
          <Panel title="" content={ranking[1].description2}/>
          <PhotoWrapper src={ranking[1].photo1} alt="Außenansicht ICE" />
          <PhotoWrapper src={ranking[1].photo2} alt="Außenansicht ICE" />
          <Panel title="" content={ranking[1].description3}/>
        {/if}
      </div>
      <Info href="https://www.bahn.de/service/ueber-uns/zugtypen" text="Weitere Informationen zum Zug &rarr;"/>
    </section>

    <section id="enterprise" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[2]}
          <Panel title={ranking[2].title} content={ranking[2].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[2].logo1} alt="Logo Irish Rail" />
            <LogoWrapper src={ranking[2].logo2} alt="Logo Translink" />
          </div>
          <PhotoWrapper src={ranking[2].photo1} alt="Außenansicht Enterprise" />
          <Panel title="" content={ranking[2].description2}/>
          <Panel title="" content={ranking[2].description3}/>
          <PhotoWrapper src={ranking[2].photo2} alt="Innenraum Enterprise" />
        {/if}
      </div>
      <Info href="https://www.irishrail.ie/en-ie/offer/take-the-enterprise-service-to-belfast" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="frecce" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[3]}
          <LogoWrapper src={ranking[3].logo1} alt="Logo Trenitalia" />
          <Panel title={ranking[3].title} content={ranking[3].description1}/>
          <Panel title="" content={ranking[3].description2}/>
          <PhotoWrapper src={ranking[3].photo1} alt="Außenansicht Frecciarossa" />
          <PhotoWrapper src={ranking[3].photo2} alt="Innenraum Frecciarossa" />
          <Panel title="" content={ranking[3].description3}/>
        {/if}
      </div>
      <Info href="https://www.trenitalia.com/de.html" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="bernina" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[4]}
          <Panel title={ranking[4].title} content={ranking[4].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[4].logo1} alt="Logo Bernina-Express" />
            <LogoWrapper src={ranking[4].logo2} alt="Logo RhB" />
          </div>
          <PhotoWrapper src={ranking[4].photo1} alt="Außenansicht Bernina-Express" />
          <Panel title="" content={ranking[4].description2}/>
          <Panel title="" content={ranking[4].description3}/>
          <PhotoWrapper src={ranking[4].photo2} alt="Innenraum Bernina-Express" />
        {/if}
      </div>
      <Info href="https://tickets.rhb.ch/de/pages/bernina-express" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="eurostar" class="flex flex-col items-center justify-center">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[5]}
          <LogoWrapper src={ranking[5].logo1} alt="Logo Eurostar" />
          <Panel title={ranking[5].title} content={ranking[5].description1}/>
          <Panel title="" content={ranking[5].description2}/>
          <PhotoWrapper src={ranking[5].photo1} alt="Außenansicht Eurostar" />
          <PhotoWrapper src={ranking[5].photo2} alt="Innenraum Eurostar" />
          <Panel title="" content={ranking[5].description3}/>
        {/if}
      </div>
      <Info href="https://www.eurostar.com/de-de/zug" text="Weitere Informationen zum Zug &rarr;" />
    </section>

    <section id="tgv" class="flex flex-col items-center justify-center mb-7">
      <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {#if ranking[6]}
          <Panel title={ranking[6].title} content={ranking[6].description1}/>
          <div class="grid justify-center">
            <LogoWrapper src={ranking[6].logo1} alt="Logo SNCF" />
            <LogoWrapper src={ranking[6].logo2} alt="Logo TVG inOiu" />
          </div>
          <PhotoWrapper src={ranking[6].photo1} alt="Außenansicht TGV" />
          <Panel title="" content={ranking[6].description2}/>
          <Panel title="" content={ranking[6].description3}/>
          <PhotoWrapper src={ranking[6].photo2} alt="Innenraum TGV" />
        {/if}
      </div>
      <Info href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" text="Weitere Informationen zum Zug &rarr;" />
    </section>
  </div>
</main>