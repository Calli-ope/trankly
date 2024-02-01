<script>
    export let home = "/";
    export let impressum = "/Impressum";
    export let datenschutz = "/Datenschutz";
</script>

<footer class="bg-slate-950 rounded-lg mb-4 mt-auto">
    <div class="mx-auto p-4">
        <ul class="flex flex-wrap justify-center my-2 text-sm font-medium text-white">
            <li><a class="px-4 hover:text-violet-300 hover:underline" href={home}>Home</a></li>
            <li><a class="px-4 hover:text-violet-300 hover:underline" href={impressum}>Impressum</a></li>
            <li><a class="px-4 hover:text-violet-300 hover:underline" href={datenschutz}>Datenschutz</a></li>
        </ul>
    </div>
</footer>