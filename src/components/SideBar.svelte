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
       <a href="/" class="flex items-center ps-2.5 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-20 sm:w-20 text-red-600" viewBox="0 0 20 20">
                <path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
            </svg>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ranking</span>
       </a>
       
       <ul class="space-y-2 font-medium">
        <li>
            <a href="#öbb" class="sm:flex gap-4 flex items-center p-2 text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span class="ms-3">1. ÖBB</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-20 sm:w-20 text-red-600" viewBox="0 0 900 330">
                    <path d="M704 331H1V1h900v330H704M485 23H367v288h127c14 0 29 0 43-3 20-4 37-14 51-30 12-15 17-32 16-52-1-17-5-32-14-46l-19-23 5-4 5-6c14-18 19-39 14-62-6-29-27-46-54-55-18-6-36-7-56-7m373 140-6-5 9-10c15-17 20-36 17-59-4-23-17-40-37-51s-43-14-65-15H649v288h135l28-2c20-3 38-11 53-26 17-18 24-40 21-64-3-22-12-40-28-56M276 75l-34 38a92 92 0 1 1-81-38c3 0 6-2 8-4l28-29 17-20A152 152 0 0 0 83 293 152 152 0 0 0 284 68l-7 7m21-44 7-7a1432 1432 0 0 0-74 1l-25 28-46 51-29 31-3 4h69c1 0 4-1 5-3l36-39 11-12 49-54z"/><path fill="#E33C3E" d="M486 23c19 0 37 1 55 7 27 9 48 26 54 55 5 23 0 44-14 62l-5 6-5 4 19 23c9 14 13 29 14 46 1 20-4 37-16 52a85 85 0 0 1-51 30c-14 3-29 3-43 3H367V23h119m44 233 11-13c4-7 4-15 4-24-1-22-13-30-30-31h-86v73h78c8 0 15-2 23-5M469 73h-40v64h79c14-1 27-8 30-25 2-15-3-31-20-36-7-2-15-2-22-3h-27zM858 164c16 15 25 33 28 55 3 24-4 46-21 64a86 86 0 0 1-53 26l-28 2H649V23h127c22 1 45 4 65 15s33 28 37 51c3 23-2 42-17 59l-9 10 6 6m-41 87 5-6c5-8 5-16 5-25 0-23-13-32-32-32h-84v73h82c9 0 17-3 24-10m-14-117 7-5c9-7 11-17 10-28-1-12-8-22-20-25-7-2-14-3-22-3h-67v65h69c7 0 15-3 23-4zM276 75l7-7a152 152 0 1 1-69-46l-17 20-28 29c-2 2-5 4-8 4a90 90 0 0 0-77 128 90 90 0 0 0 76 54c22 2 42-3 60-16a92 92 0 0 0 22-128l34-38z"/><path fill="#E33C3E" d="m297 31-49 54-11 12-36 39c-1 2-4 3-5 3h-69l3-4 29-31 46-51 25-28 5-2 69 1-7 7z"/><path d="M530 256c-8 3-15 5-23 5h-78v-73h86c17 1 29 9 30 31 0 9 0 17-4 24l-11 13zM469 73h27c7 1 15 1 22 3 17 5 22 21 20 36-3 17-16 24-30 25h-79V73h40zM817 251c-7 7-15 10-24 10h-82v-73h84c19 0 32 9 32 32 0 9 0 17-5 25l-5 6zM803 134c-8 1-16 4-23 4h-69V73h67c8 0 15 1 22 3 12 3 19 13 20 25 1 11-1 21-10 28l-7 5z"/>
                </svg>
            </a>
          </li>
          
            <li>
                <a href="#eurostar" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <span class="flex-1 ms-3 whitespace-nowrap">2. Eurostar</span>
                </a>
            </li>
            <li>
                <a href="#ibb" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <span class="flex-1 ms-3 whitespace-nowrap">Italienische Bahn</span>
                </a>
            </li>
       </ul>
    </div>
 </aside>