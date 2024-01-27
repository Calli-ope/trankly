<script>
    export let title = "Panel Title";
  </script>
  
  <div class="flex bg-gray-200 p-4 rounded shadow">
    <div class="flex-shrink-0 w-1/4">
      <!-- Sidebar content -->
      <p class="text-xl font-bold">{{ title }}</p>
      <!-- Add more sidebar content as needed -->
    </div>
  
    <div class="flex-grow ml-4">
      <!-- Main content -->
      <p>This is the main content of the flexible panel.</p>
      <!-- Add more main content as needed -->
    </div>
  </div>
  
  <style>
    /* Add custom styles here if needed */
  </style>
  