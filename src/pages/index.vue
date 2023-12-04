<template>
    <div class="w-full px-6 py-4 fjc">
        <div class="w-[82%] flex flex-col">
            <div class="fjc">
                <h2 class="p-5 font-medium text-[1.5rem]">Products Categories</h2>
            </div>
            <div class="gridData">
                <a :href="`/category/${item}`" v-for="(item, index) in data" :key="index">
                    <div class="border border-[#B6BBC4] px-4 py-14 cursor-pointer capitalize text-center text-black hover:text-white rounded-lg font-sans"
                        :style="{ backgroundColor: colors[index] }">{{ item }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchCategory } from '../api/Category.js'

import { useQuery } from "@tanstack/vue-query";
const colors = ['#363062', '#435585', '#818FB4', '#2B3499', '#2D9596', '#2B2A4C', '#FF8F8F', '#DC8686', '#0E2954',
    '#3F72AF', '#FCD1D1', '#C3BEF0', '#6C5B7B', '#C06C84', '#B5EAEA', '#2D4356', '#08D9D6', '#FF9494', '#232D3F', '#352F44']
const { data } = useQuery({
    queryKey: ['Category'],
    queryFn: () => fetchCategory(),
    select: (value) => value.data
})

</script>

<style lang="scss" scoped>
.gridData {
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 15px;
}
</style>