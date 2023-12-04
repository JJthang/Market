<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen">
    <div class="w-full fjc border-b-[1px]">
      <div class="w-[80%] px-6 py-4 flex justify-between">
        <div class="flex">
          <span class="pi pi-slack line-h text-[#EF4444] "></span>
          <span class="ml-2 font-semibold text-[#252C32] font-sans">What a Market</span>
        </div>
        <div class="flex justify-center items-center gap-3">
          <a href="/">
            <div class="gap-1 flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <span class="pi pi-inbox text-[#6B7280]"></span>
              <span class="text-sm font-medium font-sans">Orders</span>
            </div>
          </a>
          <div class="gap-1 flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
            <span class="pi pi-heart-fill"></span>
            <span class="text-sm font-medium font-sans">Favourites</span>
          </div>
          <a href="/cardItem">
            <div class="gap-1 flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <div class="relative">
                <span class="pi pi-inbox"></span>
                <span
                  class="absolute px-[5px] text-[10px] rounded-full top-[-5px] left-[6px] bg-[#FF8F8F] text-[white]">5</span>
              </div>
              <span class="text-sm font-medium font-sans">Card</span>
            </div>
          </a>
          <div class="flex items-center mr-2 text-emerald-400"> Hi - Jeanne Halvorson</div>
          <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
            <span class="text-sm font-medium font-sans"> Sign out </span>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="css">
.line-h {
  line-height: 27px !important;
}
</style>
