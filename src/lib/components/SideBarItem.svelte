<script lang="ts">
    export let href: string;
    export let title: string;
</script>

<li>
    <a href={href} class="flex items-center p-2 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-violet-400">
        <span class="ms-3 text-xl">{title}</span>
    </a>
</li>