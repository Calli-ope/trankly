<script>
    import * as Card from "$lib/components/ui/card/index.ts";
    import * as Carousel from "$lib/components/ui/carousel/index.ts";
    import Autoplay from "embla-carousel-autoplay";
    
    const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
    let criteria = [
        "1. Komfort",
        "2. Ausstattung",
        "3. Geschwindigkeit",
        "4. Streckennetz",
        "5. Service",
        "6. Preis der Tickets"
    ];
</script>

<main>
    <h1 class="font-bold text-3xl text-center mt-5">About</h1>

    <section class="max-w-md mx-auto bg-slate-400 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 my-8">
        <div class="md:flex p-5">
            <div class="p-8">
                <div class="uppercase tracking-wide text-md text-violet-950 font-semibold"><i class="fa-solid fa-info-circle fa-bounce mr-1" style="color: #f84407;"></i>Über uns</div>
                <p class="mt-2 text-slate-950">Nach vielen Zugreisen quer durch Europa, haben wir beschlossen, verschiedene Hochgeschwindigkeitszüge zu bewerten und zu vergleichen. 
                    <br> Dabei haben wir uns für Hochgeschwindigkeitszüge entschieden, da diese diese die Flagschiffe unter den aktuell verkerenden Zügen sind.</p>
            </div>
        </div>
    </section>

    <section>
        <div class="flex flex-col items-center leading-loose">
            <div class="gap-1 flex flex-col items-center my-5">
                <h1 class="text-xl font-semibold text-center">
                Die Bewertung des Rankings <br/> findet nach folgenden Kriterien statt:
                </h1>
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
        <hr class="w-96 h-1 mx-auto border-0 rounded my-14 bg-gray-700">
    </section>

    <section class="max-w-md mx-auto bg-slate-600 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 mb-5">
        <div class="md:flex p-5">
            <div class="p-8">
                <div class="uppercase tracking-wide text-md text-violet-500 font-semibold"><i class="fa-solid fa-exclamation fa-bounce mr-1" style="color: #f84407;"></i>Disclaimer</div>
                <p class="mt-2 text-white">Das Ranking basiert ausschließlich auf eigenen Erfahrungen und erhebt keinen Anspruch auf Vollständigkeit.</p>
            </div>
        </div>
    </section>
</main>