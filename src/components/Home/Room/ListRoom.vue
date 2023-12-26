<template>
    <div class="w-full fjc bg-[#F3F3F3]">
        <div class="w-[95%] lg:w-[60%] md:w-[90%] py-6">
            <div class="w-full flex lg:flex-row flex-col justify-between">
                <div
                    class="flex justify-start items-start lg:justify-center lg:items-center lg:flex-row flex-col gap-3 lg:gap-5 mb-3">
                    <div class="flex justify-center items-end">
                        <input type="checkbox" class="bg-[#232e48] mr-2 h-[20px] cursor-pointer" />
                        <label for="" class="text-[#1a489c] font-semibold text-[13px]">Book for day-use only</label>
                    </div>
                    <div class="flex justify-center items-end">
                        <input type="checkbox" class="bg-[#232e48] mr-2 h-[20px] cursor-pointer" />
                        <label for="" class="text-[#1a489c] font-semibold text-[13px]">Show only validate</label>
                    </div>
                </div>
                <div class="flex md:gap-5 gap-2 md:justify-normal justify-between">
                    <div class="flex md:gap-3 gap-1">
                        <Dropdown iconPos="left" v-model="selectedCity" :options="cities" :pt="{
                            trigger: {
                                class: 'pr-2 w-4 text-[#1a489c]',
                            },
                            input: {
                                class:
                                    ' px-0 lg:py-2 py-2 lg:px-2 text-[15px] pt-[-3px] flex  item-center justify-center text-[#1a489c]',
                            },
                            root: {
                                class: 'lg:w-[6rem] lg:py-1 text-[#1a489c] fjc',
                            },
                        }" optionLabel="name" placeholder="Sort by" class="w-full md:w-9rem" />
                        <Button label="Filter" :pt="{
                            label: {
                                class: 'font-medium text-[#1a489c] text-sm',
                            },
                            icon: {
                                class: 'text-[#1a489c]  ',
                            },
                            root: {
                                class: 'text-sm h-[1.5rem] lg:h-[3rem] fjc'
                            }

                        }" iconPos="right" class="bg-white border border-[#d1d5db] h-[2.7rem]"
                            icon="pi pi-sliders-h" />
                    </div>
                    <div class="flex">
                        <button v-for="(item, index) in taps" @click="currentTap = index" :key="index"
                            class="lg:px-3 py-1.5 border border-border text-secondary w-[90px] text-xs" :class="[index == 0 ? 'rounded-l-[5px]' : 'rounded-r-[5px]'],
                                { 'bg-[#232e48] text-white': index == currentTap }">
                            {{ item }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-start items-center">
                <h3 class="text-sm lg:text-3xl font-bold font-mono mt-4">
                    11 Rooms & 3 Plans
                </h3>
            </div>
            <div class="mt-4">
                <div class="flex flex-col my-5" v-for="(item, index) in dataSlice" :key="index">
                    <Itemlist :item="item" :index="index" class="transition-all" />
                </div>
            </div>
            <div class="flex justify-center lg:mt-16 ">
                <MyButton class="py-3 lg:py-3.5 px-10 border-[#ccc] w-full max-w-[360px] text-sm lg:text-base"
                    @click="loadMore++" v-if="loadMore <= 2">
                    + Load More
                </MyButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from "vue";
import Dropdown from "primevue/dropdown";
import { useQuery } from "@tanstack/vue-query";
import { fetchProduct } from "@/api/Product.js";
import Itemlist from "@/components/Home/Room/ListItem/item.vue";
import { root } from "postcss";
import MyButton from "@/components/Button/index.vue";
import { dataList } from '@/api/data.js';

const selectedCity = ref();
const cities = ref([
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
]);
const taps = ["Rooms", "Plans"];
const currentTap = ref(0);
const loadMore = ref(2);
const dataSlice = ref([]);


onBeforeMount(() => {
    dataSlice.value = dataList.value.slice(0, loadMore.value);
})

watch(loadMore, (vuewValue) => {
    dataSlice.value = dataList.value.slice(0, vuewValue);
})

// const { data } = useQuery({
//     queryKey: ["getData", loadMore],
//     queryFn: () => fetchProduct(loadMore.value),
//     select: (data) => data.data,
//     keepPreviousData: true,
// });
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
    background-size: contain;
    border: 1px solid #7b7b85;
    width: 20px;
    height: 20px;
    accent-color: #232e48;
}

.fixWidth {
    width: 5rem !important;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

.p-dropdown .p-dropdown-trigger {
    width: 0px !important;
}

.p-dropdown .p-dropdown-label.p-placeholder {
    display: flex;
}

.fixWidth {
    width: 6rem !important;
    padding: 21px 0px !important;
}

.shadow-card {
    --tw-shadow: 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    --tw-shadow-colored: 2px 3px 14px 0 var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
