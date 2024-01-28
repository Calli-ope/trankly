<script>
import SideBar from './SideBar.svelte';
import Panel from './Panel.svelte';
</script>

<main class="flex flex-col flex-1 p-4">
  <SideBar />
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

  <section class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><i class="fa-solid fa-exclamation fa-bounce mr-1" style="color: #f84407;"></i>Disclaimer</div>
          <p class="mt-2 text-slate-500">Das Ranking basiert ausschließlich auf eigenen Erfahrungen und erhebt keinen Anspruch auf Vollständigkeit.</p>
      </div>
    </div>
  </section>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <div class="grid grid-cols-2 gap-4">
    <Panel title="Disclaimer 1" content="Content for Disclaimer 1." />
    <Panel title="Disclaimer 2" content="Content for Disclaimer 2 kann der Pimmel hier auch breiter werden?." />
    <Panel title="Disclaimer 3" content="Content for Disclaimer 3." />
    <Panel title="Disclaimer 4" content="Content for Disclaimer 4." />
  </div>

  <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
</main>