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
  
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl py-8 sm:py-14">
    <div class="md:flex">
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          <i class="fa-solid fa-exclamation fa-bounce mr-1" style="color: #f84407;"></i>{title}
        </div>
        <p class="mt-2 text-slate-500">{content}</p>
      </div>
    </div>
  </div>
  