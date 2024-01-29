<script>
    /**
     * @type {any}
     */
    export let title;
    /**
     * @type {any}
     */
    export let content;
</script>

<div class="flex items-center justify-center transition-transform transform hover:scale-105">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl py-5">
        <div class="md:flex">
            <div class="p-8">
                <div class="uppercase tracking-wide text-slate-950 font-semibold text-2xl">
                    {title}
                </div>
                <p class="mt-2 text-slate-500">{content}</p>
            </div>
        </div>
    </div>
</div>
  