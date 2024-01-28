<script>
import FlexiblePanel from './FlexiblePanel.svelte';
import SideBar from './SideBar.svelte';
</script>

<main class="flex flex-col flex-1 p-4">
  <SideBar />
  <section id="introPage" class="flex flex-col items-center justify-center py-8 sm:py-14">
    <div class="flex flex-col items-center gap-10 md:gap-8 lg:gap-10 leading-loose">
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
        Ranking der besten <span class="hover:text-euBlue">europäischen</span> <br/> Hochgeschwindigkeitszüge
      </h2>
      <div class="text-2xl sm:text-lg md:text-xl text-center leading-relaxed">
        In diesem Ranking werde ich die besten Hochgeschwindigkeitszüge nach den Kriterien <br/>
        <p class="text-left">
        <span class="hover:text-teal-400">Komfort,<br/></span>
        <span class="hover:text-teal-400">Geschwindigkeit,<br/></span>
        <span class="hover:text-teal-400">Ausstattung,<br/></span>
        <span class="hover:text-teal-400">& Service<br/></span>
        </p>
        bewerten.
      </div>
    </div>
  </section>

  


    <!--<section>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
        </div>
        <FlexiblePanel title="My Flexible Panel">
             Additional content can be added here if needed
        </FlexiblePanel>

    </section> -->
</main>