<script>
    let tabs = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Österreische Bahn",
            link: "#öbb"
        },
        {
            name: "Eurostar",
            link: "#eurostar"
        },
        {
            name: "Italienische Bahn",
            link: "#ibb"
        },
        {
            name: "Eurostar",
            link: "#projekte"
        },
        {
            name: "Kontakt",
            link: "#contact"
        },
        {
            name: "Impressum",
            link: "#Impressum"}
    ]
</script>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900">
       <a href="/" class="flex items-center ps-5 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-10 sm:w-10 fill-current text-yellow-400 mr-4" viewBox="0 0 20 20">
                <path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
            </svg>
            <span class="self-center text-2xl font-semibold text-white">Ranking</span>
       </a>
       
       <ul class="space-y-2 font-medium">
        <li>
            <a href="#öbb" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                <span class="ms-3">1. ÖBB</span>
            </a>
          </li>
          
            <li>
                <a href="#eurostar" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                   <span class="flex-1 ms-3 whitespace-nowrap">2. Eurostar</span>
                </a>
            </li>
            <li>
                <a href="#ibb" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:text-violet-300">
                   <span class="flex-1 ms-3 whitespace-nowrap">Italienische Bahn</span>
                </a>
            </li>
       </ul>
    </div>
 </aside>