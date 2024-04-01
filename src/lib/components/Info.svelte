<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<a href={href} class="text-2xl relative overflow-hidden px-6 py-3 group rounded-full dark:bg-slate-100 bg-slate-900 dark:text-black text-white mt-9 w-80">
    <div class="absolute top-0 right-full w-full h-full bg-violet-700 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
    <h4 class="relative z-10 text-center">{text}</h4>
</a>