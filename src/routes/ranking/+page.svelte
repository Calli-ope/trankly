<script lang="ts">
    import SideBar from '$lib/components/SideBar.svelte';
    import Panel from '$lib/components/Panel.svelte';
    import ImageWrapper from '$lib/components/ImageWrapper.svelte';
    
    let isOpen = false;
    
    function toggleSidebar() {
      isOpen = !isOpen;
    }
</script>

<main class="flex flex-col min-h-screen">
    <SideBar {isOpen} {toggleSidebar} />
    <div class="{`main-content transition-all duration-300 ${isOpen ? 'open' : ''}`}">
      <section id="tgv" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <Panel title="1. TGV" content="Der von der französischen Eisenbahngesellschaft SNCF betriebene TGV (französisch: train á grande vitesse) landet auf dem 1. Platz des Rankings, da er mich insgesamt am meisten überzeugt.
          Das Hochgeschwindigkeitszugsystem in Frankreich wurde 1981 eingeführt zeichnet sich durch sehr hohe Geschwindigkeiten mit bis zu 320 km/h aus.
          Diese werden auf extra für den TGV errichteten Hochgeschwindigkeitsstrecken erreicht, die alle großen Städte wie Paris oder Lyon miteinander verbinden."/>
          <div class="grid justify-center">
            <img src="/Logo-SNCF.png" class="h-auto max-w-sm rounded-lg py-2" alt="Logo SNCF" />
            <img src="/Logo_TGV_inOui.png" class="h-auto max-w-sm rounded-lg py-2" alt="Logo TVG inOiu" />
          </div>
          <ImageWrapper src="/tgv.jpg" alt="Außenansicht TGV" />
          <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
          <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
          <ImageWrapper src="/tgv2.jpg" alt="Innenraum TGV" />
        </div>
        <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="eurostar" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div class="grid justify-center">
              <img src="/Eurostar_logo.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none mt-10" alt="Logo Eurostar" />
          </div>
          <Panel title="2. Eurostar" content="Auf dem 2. Platz landet der Eurostar, der vor allem wegen seiner außergewöhnlichen Strecke punktet."/>
          <Panel title="" content="Der Eurostar ist ein Hochgeschwindigkeitszuganbieter, der Europa miteinander verbindet, insbesondere Großbritannien, Frankreich, Belgien und die Niederlande.
          Der Service wurde 1994 eingeführt und hat sich seitdem zu einer effizienten und beliebten Transportoption für Reisende entwickelt.
          Die Hauptstrecke des Eurostars verläuft durch den Eurotunnel, der den Ärmelkanal unterquert und Großbritannien mit dem europäischen Festland verbindet.
          Die Züge fahren von London St. Pancras International ab und erreichen Paris Gare du Nord sowie Brüssel Midi/Zuid in unter 2 Stunden."/>
          <ImageWrapper src="/eurostar.jpg" alt="Außenansicht Eurostar" />
          <ImageWrapper src="/eurostar2.jpg" alt="Innenraum Eurostar" />
          <Panel title="" content="Der Eurostar zeichnet sich durch seine hohe Geschwindigkeit, Komfort und Zuverlässigkeit aus.
          Die modernen Züge bieten Reisenden Annehmlichkeiten wie WLAN, Steckdosen, Bordrestaurants und großzügige Sitzplatzarrangements.
          Dies macht den Eurostar zu einer attraktiven Wahl für Geschäftsreisende und Urlauber, die schnell und bequem zwischen den europäischen Städten reisen möchten."/>
        </div>
        <a href="https://www.eurostar.com/de-de/zug" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="sbb" class="flex flex-col items-center justify-center">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <Panel title="1. TGV" content="Der von der französischen Eisenbahngesellschaft SNCF betriebene TGV (französisch: train á grande vitesse) landet auf dem 1. Platz des Rankings, da er mich insgesamt am meisten überzeugt.
          Das Hochgeschwindigkeitszugsystem in Frankreich wurde 1981 eingeführt zeichnet sich durch sehr hohe Geschwindigkeiten mit bis zu 320 km/h aus.
          Diese werden auf extra für den TGV errichteten Hochgeschwindigkeitsstrecken erreicht, die alle großen Städte wie Paris oder Lyon miteinander verbinden."/>
          <div class="grid justify-center">
            <img src="/Logo-SNCF.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none py-2" alt="Logo SNCF" />
            <img src="/Logo_TGV_inOui.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none py-2" alt="Logo TVG inOiu" />
          </div>
          <ImageWrapper src="/tgv.jpg" alt="Außenansicht TGV" />
          <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
          <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
          <ImageWrapper src="/tgv2.jpg" alt="Innenraum TGV" />
        </div>
        <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
  
      <section id="frecce" class="flex flex-col items-center justify-center">
          <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
              <div class="grid justify-center">
                  <img src="/Eurostar_logo.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none mt-10" alt="Logo Eurostar" />
              </div>
              <Panel title="2. Eurostar" content="Auf dem 2. Platz landet der Eurostar, der vor allem wegen seiner außergewöhnlichen Strecke punktet."/>
              <Panel title="" content="Der Eurostar ist ein Hochgeschwindigkeitszuganbieter, der Europa miteinander verbindet, insbesondere Großbritannien, Frankreich, Belgien und die Niederlande.
              Der Service wurde 1994 eingeführt und hat sich seitdem zu einer effizienten und beliebten Transportoption für Reisende entwickelt.
              Die Hauptstrecke des Eurostars verläuft durch den Eurotunnel, der den Ärmelkanal unterquert und Großbritannien mit dem europäischen Festland verbindet.
              Die Züge fahren von London St. Pancras International ab und erreichen Paris Gare du Nord sowie Brüssel Midi/Zuid in unter 2 Stunden."/>
              <ImageWrapper src="/eurostar.jpg" alt="Außenansicht Eurostar" />
              <ImageWrapper src="/eurostar2.jpg" alt="Innenraum Eurostar" />
              <Panel title="" content="Der Eurostar zeichnet sich durch seine hohe Geschwindigkeit, Komfort und Zuverlässigkeit aus.
              Die modernen Züge bieten Reisenden Annehmlichkeiten wie WLAN, Steckdosen, Bordrestaurants und großzügige Sitzplatzarrangements.
              Dies macht den Eurostar zu einer attraktiven Wahl für Geschäftsreisende und Urlauber, die schnell und bequem zwischen den europäischen Städten reisen möchten."/>
          </div>
          <a href="https://www.eurostar.com/de-de/zug" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
            <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
            <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
          </a>
        </section>
  
      <section id="ice" class="flex flex-col items-center justify-center mb-10">
        <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <Panel title="1. TGV" content="Der von der französischen Eisenbahngesellschaft SNCF betriebene TGV (französisch: train á grande vitesse) landet auf dem 1. Platz des Rankings, da er mich insgesamt am meisten überzeugt.
          Das Hochgeschwindigkeitszugsystem in Frankreich wurde 1981 eingeführt zeichnet sich durch sehr hohe Geschwindigkeiten mit bis zu 320 km/h aus.
          Diese werden auf extra für den TGV errichteten Hochgeschwindigkeitsstrecken erreicht, die alle großen Städte wie Paris oder Lyon miteinander verbinden."/>
          <div class="grid justify-center">
            <img src="/Logo-SNCF.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none py-2" alt="Logo SNCF" />
            <img src="/Logo_TGV_inOui.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none py-2" alt="Logo TVG inOiu" />
          </div>
          <ImageWrapper src="/tgv.jpg" alt="Außenansicht TGV" />
          <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
          <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
          <ImageWrapper src="/tgv2.jpg" alt="Innenraum TGV" />
        </div>
        <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
          <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
          <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
        </a>
      </section>
    </div>
  </main>