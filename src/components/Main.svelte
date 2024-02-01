<script>
import SideBar from './SideBar.svelte';
import Panel from './Panel.svelte';

let isOpen = false;

function toggleSidebar() {
  isOpen = !isOpen;
}
</script>

<style>
  .main-content {
    margin-left: 200px;
  }

  .main-content.open {
    margin-left: 200px;
  }
</style>

<main class="flex flex-col min-h-screen">
  <SideBar {isOpen} {toggleSidebar} />
  <div class="{`main-content lg:ml-64 transition-all duration-300 ${isOpen ? 'open' : ''}`}">
    <section id="/" class="flex flex-col items-center justify-center py-8 sm:py-14">
      <div class="flex flex-col items-center gap-20 leading-loose">
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
          Ranking der besten <span class="hover:text-euBlue">europäischen</span> <br/> Hochgeschwindigkeitszüge
        </h2>
        <div class="gap-1 flex flex-col items-center">
        <p class="text-3xl font-semibold sm:text-lg md:text-xl text-center">
          In diesem Ranking werde ich die besten Hochgeschwindigkeitszüge <i class="fa-solid fa-train fa-beat-fade fa-lg" style="color: #74C0FC;"></i> nach den folgenden Kriterien bewerten:
        </p>
        <ul class="text-left list-disc text-xl italic">
          <li class="hover:text-teal-400">Komfort<br/></li>
          <li class="hover:text-teal-400">Ausstattung<br/></li>
          <li class="hover:text-teal-400">Geschwindigkeit<br/></li>
          <li class="hover:text-teal-400">Anzahl der Strecken<br/></li>
          <li class="hover:text-teal-400">Service<br/></li>
        </ul>
        </div>
      </div>
    </section>

    <section class="max-w-md mx-auto bg-slate-950 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105">
      <div class="md:flex">
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><i class="fa-solid fa-exclamation fa-bounce mr-1" style="color: #f84407;"></i>Disclaimer</div>
            <p class="mt-2 text-slate-500">Das Ranking basiert ausschließlich auf eigenen Erfahrungen und erhebt keinen Anspruch auf Vollständigkeit.</p>
        </div>
      </div>
    </section>

    <section id="tgv" class="flex flex-col items-center justify-center">
      <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <Panel title="1. TGV" content="Der von der französischen Eisenbahngesellschaft SNCF betriebene TGV (französisch: train á grande vitesse) landet auf dem 1. Platz des Rankings, da er mich insgesamt am meisten überzeugt.
        Das Hochgeschwindigkeitszugsystem in Frankreich wurde 1981 eingeführt zeichnet sich durch sehr hohe Geschwindigkeiten mit bis zu 320 km/h aus.
        Diese werden auf extra für den TGV errichteten Hochgeschwindigkeitsstrecken erreicht, die alle großen Städte wie Paris oder Lyon miteinander verbinden."/>
        <div class="grid justify-center">
          <img src="/Logo-SNCF.png" class="ml-10 h-auto max-w-sm rounded-lg py-2" alt="Logo SNCF" />
          <img src="/Logo_TGV_inOui.png" class="ml-10 h-auto max-w-sm rounded-lg py-2" alt="Logo TVG inOiu" />
        </div>
        <img src="/tgv.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Außenansicht TGV" />
        <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
        <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
        <img src="/tgv2.jpg" class="ml-24 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Innenraum TGV" />
      </div>
      <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
        <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
      </a>
    </section>

    <section id="eurostar" class="flex flex-col items-center justify-center">
      <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <img src="/Eurostar_logo.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none mt-10" alt="Logo Eurostar" />
        <Panel title="2. Eurostar" content="Auf dem 2. Platz landet der Eurostar, der vor allem wegen seiner außergewöhnlichen Strecke punktet."/>
        <Panel title="" content="Der Eurostar ist ein Hochgeschwindigkeitszuganbieter, der Europa miteinander verbindet, insbesondere Großbritannien, Frankreich, Belgien und die Niederlande.
        Der Service wurde 1994 eingeführt und hat sich seitdem zu einer effizienten und beliebten Transportoption für Reisende entwickelt.
        Die Hauptstrecke des Eurostars verläuft durch den Eurotunnel, der den Ärmelkanal unterquert und Großbritannien mit dem europäischen Festland verbindet.
        Die Züge fahren von London St. Pancras International ab und erreichen Paris Gare du Nord sowie Brüssel Midi/Zuid in unter 2 Stunden."/>
        <img src="/eurostar.jpg" class="mt-5 ml-24 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Außenansicht Eurostar" />
        <img src="/eurostar2.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Innenraum Eurostar" />
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
        <img src="/tgv.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Außenansicht TGV" />
        <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
        <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
        <img src="/tgv2.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Innenraum TGV" />
      </div>
      <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
        <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
      </a>
    </section>

    <section id="frecce" class="flex flex-col items-center justify-center">
      <hr class="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <Panel title="1. TGV" content="Der von der französischen Eisenbahngesellschaft SNCF betriebene TGV (französisch: train á grande vitesse) landet auf dem 1. Platz des Rankings, da er mich insgesamt am meisten überzeugt.
        Das Hochgeschwindigkeitszugsystem in Frankreich wurde 1981 eingeführt zeichnet sich durch sehr hohe Geschwindigkeiten mit bis zu 320 km/h aus.
        Diese werden auf extra für den TGV errichteten Hochgeschwindigkeitsstrecken erreicht, die alle großen Städte wie Paris oder Lyon miteinander verbinden."/>
        <div class="grid justify-center">
          <img src="/Logo-SNCF.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none py-2" alt="Logo SNCF" />
          <img src="/Logo_TGV_inOui.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none py-2" alt="Logo TVG inOiu" />
        </div>
        <img src="/tgv.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Außenansicht TGV" />
        <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
        <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
        <img src="/tgv2.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Innenraum TGV" />
      </div>
      <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
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
        <img src="/tgv.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Außenansicht TGV" />
        <Panel title="" content="Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben. Das TGV-Netzwerk verbindet Städte und Regionen in Frankreich und erstreckt darüber hinaus sogar über die Grenzen nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien."/>
        <Panel title="" content="Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord. Die Sitze sind sehr bequem und bieten viel Platz für die Beine. Die Kopfstützen sind verstellbar und die Armlehnen lassen sich hochklappen."/>
        <img src="/tgv2.jpg" class="ml-20 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Innenraum TGV" />
      </div>
      <a href="https://www.sncf-connect.com/de-de/tgv-inoui-quer-europa" target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 mt-7">
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
        <h4 class="relative z-9">Weitere Informationen zum Zug &rarr;</h4>
      </a>
    </section>
  </div>
</main>