<script lang="ts">

</script>

<main class="flex flex-col min-h-screen">
    <h1 class="font-bold text-3xl text-center my-5">Karte</h1>
    <div class="flex flex-col items-center leading-loose">
        <h2 class="font-semibold text-xl text-center my-5">
            Auf dieser interaktiven Karte werden die vorgestellten Züge den Ländern zugeordnet, in denen sie verkehren.
            <p class="font-medium text-lg">
                Einige Züge verkehren in mehreren Ländern und sind daher mehrmals zu finden.
            </p>
        </h2>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <div id="trains_map" style="width: 800px; height: 500px;"></div>
    </div>
</main>