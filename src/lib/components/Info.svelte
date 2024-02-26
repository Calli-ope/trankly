<script lang="ts">
    export let href: string;
</script>

<a href={href} target="_blank" class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full dark:bg-white bg-black dark:text-black text-white mt-7">
    <div class="absolute top-0 right-full w-full h-full bg-violet-500 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
    <h4 class="relative z-10">Weitere Informationen zum Zug &rarr;</h4>
</a>