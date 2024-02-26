<script lang="ts">
    export let href: string;
    export let title: string;
</script>

<li>
    <a href={href} class="flex items-center p-2 py-3 rounded-lg dark:text-white text-black dark:hover:bg-gray-700 dark:hover:text-violet-400 hover:bg-gray-300 hover:text-violet-700">
        <span class="ms-3 text-xl">{title}</span>
    </a>
</li>