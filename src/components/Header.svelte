<script>
    export let y;

    let tabs = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
</script>

<header>
    <h1>
        Konrad Martens
    </h1>
    <div class="">
        {#each tabs as tab, index}
            <a>
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>