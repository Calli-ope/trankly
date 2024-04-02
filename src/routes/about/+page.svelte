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
        "5. Service an Bord",
        "6. Preis der Tickets"
    ];
</script>

<main class="flex flex-col min-h-screen">
    <h1 class="font-bold text-3xl text-center my-5">About</h1>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <section class="max-w-md mx-auto bg-slate-400 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 my-4">
            <div class="md:flex p-5">
                <div class="p-8">
                    <div class="uppercase tracking-wide text-md text-violet-500 font-semibold">Über uns</div>
                    <p class="mt-2 text-slate-950">Nach vielen Zugreisen quer durch Europa, haben wir beschlossen, verschiedene Hochgeschwindigkeitszüge zu bewerten und zu vergleichen. 
                        <br> Dabei haben wir uns für Hochgeschwindigkeitszüge entschieden, da diese diese die Flagschiffe unter den aktuell verkerenden Zügen darstellen.</p>
                </div>
            </div>
        </section>

        <section class="max-w-md mx-auto bg-slate-500 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 my-4">
            <div class="md:flex p-5">
                <div class="p-8">
                    <div class="uppercase tracking-wide text-md text-violet-950 font-semibold">Unsere Mission</div>
                    <p class="mt-2 text-white">Wir möchten Reisenden und Zugfans eine Plattform bieten, auf der sie sich über die besten europäischen Züge informieren können.
                        <br> Dabei ist unsere Vision, die ultimative Plattform für Zugfans und Reisende zu schaffen, auf der sie sich über die besten europäischen Züge informieren können.</p>
                </div>
            </div>
        </section>

        <section class="max-w-md mx-auto bg-slate-500 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 my-4">
            <div class="md:flex p-5">
                <div class="p-8">
                    <div class="uppercase tracking-wide text-md text-violet-950 font-semibold">Unser Team</div>
                    <p class="mt-2 text-white">Unser Team besteht aus Zugfans und Reisenden, die sich regelmäßig über die neuesten Entwicklungen im Bereich der Hochgeschwindigkeitszüge informieren.</p>
                </div>
            </div>
        </section>

        <section class="max-w-md mx-auto bg-slate-400 rounded-xl shadow-md md:max-w-2xl transition-transform transform hover:scale-105 my-4">
            <div class="md:flex p-5">
                <div class="p-8">
                    <div class="uppercase tracking-wide text-md text-violet-500 font-semibold">Unser Name</div>
                    <p class="mt-2 text-black">Der Name 'Trankly' setzt sich aus den Wörtern 'Train' und 'Rank' zusammen, die die Kerntätigkeiten unseres Produktes beschreiben.</p>
                </div>
            </div>
        </section>
    </div>

    <section>
        <div class="flex flex-col items-center leading-loose">
            <hr class="w-96 h-1 mx-auto border-0 rounded my-14 bg-gray-700">
            <div class="gap-1 flex flex-col items-center my-5">
                <h1 class="text-3xl font-semibold text-center">
                Bewertungskriterien
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