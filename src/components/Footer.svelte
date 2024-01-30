<script>
    export let impressumLink = "#";
    export let datenschutzLink = "#";
</script>

<footer class="bg-slate-950 rounded-lg shadow m-4 ">
    <div class="w-full mx-auto max-w-screen-xl p-4">
        <ul class="flex flex-wrap justify-center ml-40 mt-3 text-sm font-medium text-white">
                <li><a class="px-4 hover:text-violet-300 hover:underline" href={impressumLink}>Impressum</a></li>
                <li><a class="px-4 hover:text-violet-300 hover:underline" href={datenschutzLink}>Datenschutz</a></li>
        </ul>
    </div>
</footer>