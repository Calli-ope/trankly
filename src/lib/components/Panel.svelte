<script lang="ts">
    export let title: string;
    export let content: string;
</script>

<div class="flex items-center justify-center transition-transform transform hover:scale-105">
    <div class="max-w-md mx-auto dark:bg-slate-100 bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl py-5">
        <div class="md:flex">
            <div class="p-8">
                <div class="uppercase tracking-wide dark:text-slate-950 text-slate-100 font-semibold text-2xl">
                    {title}
                </div>
                <p class="mt-2 dark:text-slate-600 text-slate-300">{content}</p>
            </div>
        </div>
    </div>
</div>
  