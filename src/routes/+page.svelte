<script lang="ts">
  import Info from "$lib/components/Info.svelte";
</script>
    
<main class="flex flex-col min-h-screen">
  <section id="/" class="flex flex-col items-center justify-center pt-10">
      <img src="/logo.svg" alt="train" class="h-80 rounded-3xl"/>
      <h2 class="font-semibold text-4xl text-center my-10">
        Die <span class="hover:text-amber-300 ">ultimative </span> Plattform <br/> für Zugfans und Reisende!
      </h2>
  </section>

  <section class="flex flex-col items-center">
    <hr class="w-96 h-1 mx-auto border-0 rounded mb-5 bg-gray-700">
    <Info href="/ranking" text="Zum Ranking der besten europäischen Züge &rarr;" />
    <Info href="/map" text="Zur Karte &rarr;" />
    <Info href="/about" text="Über uns &rarr;" />
  </section>
</main>
