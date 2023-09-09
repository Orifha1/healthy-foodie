<template>
<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-justify">
    <div class="relative flex h-16 items-center justify-between text-center">
      <div class="flex flex-1 items-center justify-center sm:items-stretch">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <p class="text-gray-300 rounded-md px-3 py-2 text-sm font-medium">This navbar is just here for the fun of it. I can build a better navbar but I am lazy for this simple app.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <p class="text-gray-300 block rounded-md px-3 py-2 text-base font-medium">This navbar is just here for the fun of it. I can build a better navbar but I am lazy for this simple app.</p>
    </div>
  </div>
</nav>

</template>

<script>


export default {
};
</script>