<template>
    <DataView :value="data" :layout="layout" :pt="{}">
        <template #header>
            <div class="flex justify-content-end">
                <DataViewLayoutOptions v-model="layout" />
            </div>
        </template>
        <template #grid="slotProps">
            <div class="grid grid-nogutter">
                <div v-for="(item, index) in slotProps.items" :key="index"
                    class="col-12 sm:col-6 lg:col-12 xl:col-3 p-2 flex flex-col justify-between">
                    <div
                        class="border-1 surface-border surface-card border-round h-full flex justify-between flex-col rounded-t-lg">
                        <div class="flex flex-column justify-between items-start gap-2 pb-1 h-full">
                            <a :href="`/productDetail/${item.id}`" class="w-full">
                                <img class="w-full h-56 shadow-2 rounded-t-lg" :src="`${item.images[1]}`"
                                    :alt="item.title" />
                            </a>
                            <div class="px-5 flex flex-col justify-between w-full pb-3 gap-3">
                                <div class="text-lg tracking-tight text-slate-900 h-16 capitalize pt-3">
                                    {{ item.title }}
                                </div>
                                <div class="flex justify-start items-center gap-3">
                                    <span class="text-3xl font-semibold text-[#EF4444] pt-4">${{ item.price
                                    }}</span>
                                    <span class="text-[15px] line-through font-semibold text-black pt-4">${{
                                        handCalculate(item.price, item.discountPercentage)
                                    }}</span>
                                </div>
                                <div class="flex justify-start items-center gap-3">
                                    <Rating class="" :modelValue="item.rating" readonly :cancel="false">
                                    </Rating>
                                    <span
                                        class="text-[12px] font-semibold text-black px-2 py-1 rounded-[4px] bg-[#FDE047]">{{
                                            item.rating }}</span>
                                </div>
                                <button class="px-5 py-[10px] w-full bg-[#0F172A] rounded-lg hover:opacity-[0.9]">
                                    <span class="pi pi-shopping-cart text-white pr-2"></span>
                                    <span class="text-white">Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </DataView>
</template>

<script setup>
import { ref } from 'vue'

const { data } = defineProps(['data']);
const handCalculate = (oldPrice, percent) => {
    const sale = (oldPrice * percent) / 100;
    const total = oldPrice + sale;
    return Math.floor(total);
};
const layout = ref("grid");


</script>

<style lang="scss" scoped></style>