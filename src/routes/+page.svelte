<script lang="ts">
  import Info from "$lib/components/Info.svelte";
</script>
    
<main class="flex flex-col min-h-screen">
  <section id="/" class="flex flex-col items-center justify-center pt-10">
    <div class="flex flex-col items-center leading-loose">
      <h2 class="font-semibold text-3xl text-center mb-5">
        Die <span class="hover:text-amber-300 ">ultimative </span> Plattform <br/> für Zugfans und Reisende!
      </h2>
      <img src="/logo.svg" alt="train" class="w-40 h-40 sm:w-60 sm:h-60 rounded-3xl"/>
    </div>
  </section>

  <section class="flex flex-col items-center">
    <hr class="w-48 h-1 mx-auto my-6 border-0 rounded md:my-6 bg-gray-700">
    <Info href="/ranking" link="Zum Ranking &rarr;" />
    <Info href="/map" link="Zur Karte &rarr;" />
  </section>
</main>
