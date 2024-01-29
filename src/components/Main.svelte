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
    margin-left: 200px; /* Adjust this value to match the width of your sidebar */
  }

  .main-content.open {
    margin-left: 200px; /* Adjust this value to match the width of your sidebar */
  }
</style>

<main class="flex flex-col flex-1 p-4">
  <SideBar {isOpen} {toggleSidebar} />
  <div class="{`main-content lg:ml-64 transition-all duration-300 ${isOpen ? 'open' : ''}`}">
    <section id="/" class="flex flex-col items-center justify-center py-8 sm:py-14">
      <div class="flex flex-col items-center gap-20 leading-loose">
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
          Ranking der besten <span class="hover:text-euBlue">europäischen</span> <br/> Hochgeschwindigkeitszüge
        </h2>
        <div class="gap-1 flex flex-col items-center">
        <p class="text-2xl sm:text-lg md:text-xl text-center">
          In diesem Ranking werde ich die besten Hochgeschwindigkeitszüge <i class="fa-solid fa-train fa-beat-fade fa-lg" style="color: #74C0FC;"></i> nach den folgenden Kriterien bewerten:
        </p>
        <ul class="text-left list-disc text-xl">
          <li class="hover:text-teal-400">Komfort<br/></li>
          <li class="hover:text-teal-400">Geschwindigkeit<br/></li>
          <li class="hover:text-teal-400">Ausstattung<br/></li>
          <li class="hover:text-teal-400">& Service<br/></li>
        </ul>
        </div>
      </div>
    </section>

    <section class="max-w-md mx-auto bg-slate-950 rounded-xl shadow-md overflow-hidden md:max-w-2xl transition-transform transform hover:scale-105">
      <div class="md:flex">
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><i class="fa-solid fa-exclamation fa-bounce mr-1" style="color: #f84407;"></i>Disclaimer</div>
            <p class="mt-2 text-slate-500">Das Ranking basiert ausschließlich auf eigenen Erfahrungen und erhebt keinen Anspruch auf Vollständigkeit.</p>
        </div>
      </div>
    </section>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

    <section id="tgv">
      <div class="grid grid-cols-2 gap-4">
        <Panel title="1. TGV" content="Der von der SNCF (Société nationale des chemins de fer français) betriebene TGV (französisch: train á grande vitesse) landet auf dem 1. Platz des Rankings, da er mich insgesamt am meisten überzeugt.
        Das Hochgeschwindigkeitszugsystem in Frankreich wurde 1981 eingeführt zeichnet sich durch sehr hohe Geschwindigkeiten bis zu 320 km/h aus.
        Meistens werden diese auf extra für den TGV errichteten Hochgeschwindigkeitsstrecken erreicht.
        Die Züge sind aerodynamisch gestaltet und werden durch elektrische Triebköpfe angetrieben."/>
        <div class="grid justify-center">
          <img src="/Logo-SNCF.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Logo SNCF" />
          <img src="/Logo_TGV_inOui.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Logo TVG inOiu" />
        </div>
        <img src="/Logo-SNCF.png" class="ml-10 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-500" alt="Logo SNCF" />
        <Panel title="" content="Das TGV-Netzwerk verbindet verschiedene Städte und Regionen in Frankreich und erstreckt sich sogar über die Grenzen hinaus nach Belgien, Deutschland, der Schweiz, Luxemburg, Spanien und Italien.
        Die Hochgeschwindigkeitszüge bieten Passagieren nicht nur eine effiziente Möglichkeit, große Entfernungen zurückzulegen, sondern auch Komfort und Annehmlichkeiten an Bord."/>
      </div>
    </section>

    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
  </div>
</main>