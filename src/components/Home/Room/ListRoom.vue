<template>
    <div class="w-full fjc bg-[#F3F3F3]">
        <div class="w-[60%] py-6">
            <div class="w-full flex justify-between">
                <div class="fjc gap-5">
                    <div class="flex justify-center items-end">
                        <input type="checkbox" class="bg-[#232e48] mr-2 h-[20px] cursor-pointer" />
                        <label for="" class="text-[#1a489c] font-semibold text-[13px]">Book for day-use only</label>
                    </div>
                    <div class="flex justify-center items-end">
                        <input type="checkbox" class="bg-[#232e48] mr-2 h-[20px] cursor-pointer" />
                        <label for="" class="text-[#1a489c] font-semibold text-[13px]">Show only validate</label>
                    </div>
                </div>
                <div class="flex gap-5">
                    <div class="flex gap-3">
                        <Dropdown iconPos="left" v-model="selectedCity" :options="cities" :pt="{
                            trigger: {
                                class: 'pr-2 w-4 text-[#1a489c]',
                            },
                            input: {
                                class:
                                    'px-2 text-[15px] pt-[-3px] flex  item-center justify-center text-[#1a489c]',
                            },
                            root: {
                                class: 'fixWidth text-[#1a489c]',
                            },
                        }" optionLabel="name" placeholder="Sort by" class="w-full md:w-9rem" />
                        <Button label="Filter" :pt="{
                            label: {
                                class: 'font-medium text-[#1a489c]',
                            },
                            icon: {
                                class: 'text-[#1a489c]',
                            },
                        }" iconPos="right" class="bg-white border border-[#d1d5db] h-[2.7rem]" icon="pi pi-sliders-h" />
                    </div>
                    <div class="flex">
                        <button v-for="(item, index) in taps" @click="currentTap = index" :key="index"
                            class="lg:px-3 py-1.5 border border-border text-secondary w-[90px] text-xs" :class="([index == 0 ? 'rounded-l-[5px]' : 'rounded-r-[5px]'],
                                    { 'bg-[#232e48] text-white': index == currentTap })
                                ">
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
                <div class="flex flex-col my-5" v-for="(item, index) in data" :key="index">
                    <Itemlist :item="item" :index="index" />
                </div>
            </div>
            <div class="flex justify-center lg:mt-16">
                <button
                    class="py-3 lg:py-3.5 px-10 border border-[#ccc] text-center w-full max-w-[360px] font-bold text-sm lg:text-base"
                    @click="loadMore++" v-if="loadMore <= 2">
                    + Load More
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import { useQuery } from "@tanstack/vue-query";
import { fetchProduct } from "@/api/Product.js";
import Itemlist from "@/components/Home/Room/ListItem/item.vue";

const selectedCity = ref();
const cities = ref([
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
]);
const taps = ["Rooms", "Plans"];
const currentTap = ref(0);
const loadMore = ref(2);

const { data } = useQuery({
    queryKey: ["getData", loadMore],
    queryFn: () => fetchProduct(loadMore.value),
    select: (data) => data.data,
    keepPreviousData: true,
});
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
    width: 7rem !important;
    height: 2.7rem;
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

.shadow-card {
    --tw-shadow: 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    --tw-shadow-colored: 2px 3px 14px 0 var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
