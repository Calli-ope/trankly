<script>
    import * as Card from "$lib/components/ui/card/index.ts";
    import * as Carousel from "$lib/components/ui/carousel/index.ts";
    import Autoplay from "embla-carousel-autoplay";
    
    const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
    let criteria = [
        "1. Komfort",
        "2. Ausstattung",
        "3. Geschwindigkeit",
        "4. Strecken",
        "5. Service",
        "6. Preis"
    ];
</script>

<main>
    <section>
        <div class="flex flex-col items-center leading-loose">
            <div class="gap-1 flex flex-col items-center my-8">
                <p class="text-xl font-semibold text-center">
                In diesem Ranking werden die besten <br/> Hochgeschwindigkeitszüge nach den folgenden Kriterien bewertet:
                </p>
            </div>
            <Carousel.Root
            plugins={[plugin]}
            class="w-full max-w-3xl"
            on:mousenter={plugin.stop}
            on:mouseleave={plugin.reset}
            >
            <Carousel.Content class="-ml-1">
                {#each criteria as criteria}
                <Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div class="p-1">
                    <Card.Root>
                        <Card.Content
                        class="flex aspect-square items-center justify-center p-2">
                        <span class="text-lg font-md">{criteria}</span>
                        </Card.Content>
                    </Card.Root>
                    </div>
                </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
            </Carousel.Root>
        </div>
    </section>

    <section class="max-w-md mx-auto bg-slate-500 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 my-8">
        <div class="md:flex p-5">
          <div class="p-8">
            <div class="uppercase tracking-wide text-md text-violet-950 font-semibold"><i class="fa-solid fa-exclamation fa-bounce mr-1" style="color: #f84407;"></i>Disclaimer</div>
              <p class="mt-2 text-slate-950">Das Ranking basiert ausschließlich auf eigenen Erfahrungen und erhebt keinen Anspruch auf Vollständigkeit.</p>
          </div>
        </div>
      </section>
</main>