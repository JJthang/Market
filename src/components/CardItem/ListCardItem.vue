<template>
    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 shadow-md rounded-lg">
        <img class="w-5 sm:w-13rem xl:w-7rem shadow-2 block xl:block mx-auto border-round" :src="`${item.thumbnail}`"
            :alt="item.thumbnail" />
        <div
            class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                <div class="text-lg font-bold text-gray-900 flex flex-col gap-2">
                    <span>{{ item.title }}</span>
                    <span class="text-[10px] text-gray-500">${{ item.price }} /
                        item</span>
                </div>
                <div class="flex align-items-center gap-3">
                </div>
            </div>
            <div class="flex w-[100px] sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-5">
                <div class="flex ">
                    <Button icon="pi pi-minus"
                        class="bg-[#F3F4F6] w-1/3 h-[33px] rounded-r-sm hover:bg-[#dedfe0] border-none">
                    </Button>
                    <input type="number" :value="`${item.quantity}`"
                        class="border h-8 w-1/3 bg-white text-center text-xs outline-none">
                    <Button icon="pi pi-plus"
                        class="bg-[#F3F4F6] w-1/3 h-[33px] hover:bg-[#dedfe0] rounded-l-sm border-none">
                    </Button>
                </div>
                <div class="w-full flex items-center justify-between">
                    <span class="text-base text-[#535557]">
                        ${{ item.price * item.quantity }}
                    </span>
                    <span class="pi pi-times cursor-pointer hover:text-[#FF8F8F] transition-all"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { item } = defineProps(['item'])
</script>

<style lang="scss" scoped></style>