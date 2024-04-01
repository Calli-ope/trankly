<script lang="ts">
    let home = "/";
    let ranking = "/ranking";
    let map = "/map";
    let about = "/about";
    let impressum = "/Impressum";
    let datenschutz = "/Datenschutz";
</script>

<footer class="dark:bg-gray-950 dark:border-gray-900 bg-gray-400 border-gray-300 rounded-lg mt-auto mb-1">
    <div class="mx-auto p-4">
        <ul class="flex flex-wrap justify-center my-2 text-sm font-medium text-white">
            <li><a class="px-4 dark:hover:text-violet-300 hover:text-violet-700 hover:underline" href={home}>Home</a></li>
            <li><a class="px-4 dark:hover:text-violet-300 hover:text-violet-700 hover:underline" href={ranking}>Ranking</a></li>
            <li><a class="px-4 dark:hover:text-violet-300 hover:text-violet-700 hover:underline" href={map}>Map</a></li>
            <li><a class="px-4 dark:hover:text-violet-300 hover:text-violet-700 hover:underline" href={about}>About</a></li>
            <li><a class="px-4 dark:hover:text-violet-300 hover:text-violet-700 hover:underline" href={impressum}>Impressum</a></li>
            <li><a class="px-4 dark:hover:text-violet-300 hover:text-violet-700 hover:underline" href={datenschutz}>Datenschutz</a></li>
        </ul>
    </div>
</footer>