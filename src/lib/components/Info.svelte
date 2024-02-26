<script lang="ts">
    export let href: string;
    export let link: string;
</script>

<a href={href} class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full dark:bg-white bg-black dark:text-black text-white mt-7">
    <div class="absolute top-0 right-full w-full h-full bg-violet-500 opacity-20 group-hover:translate-x-full z-0 duration-500"/>
    <h4 class="relative z-10">{link}</h4>
</a>