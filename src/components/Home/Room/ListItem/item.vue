<template>
    <div class="my-3">
        <div class="mb-2 hidden lg:block">
            <p class="text-md font-bold mb-1">【Annex Tower】 Kizuna-family room／ Japanese and Western Style
                Room/
                Non-Smoking /34㎡</p>
        </div>
        <div class="mb-2 hidden lg:block">
            <span class="text-md font-bold mb-1 text-[#000000]">【</span>
            <span class="text-base text-[#000000] font-sans">Japanese Western Style Room/ 34㎡/ Annex Tower
                4～14/F (Except
                6･7･12/F)/
                Non-Smoking】With 2
                regular beds and 2 futons (Japanese traditional bedding). No bathtubs, shower booth only. We
                set
                up a spacious tatami space so the bonds (Kizuna) can be deepened between the guests and have
                a
                cozy time barefoot.</span>
        </div>
    </div>
    <div class="p-3 bg-white shadow-card pb-3 ">
        <div class="flex gap-3">
            <div class="lg:w-[250px] lg:h-[150px] lg:cursor-pointer relative">
                <div class="card flex justify-center">
                    <Galleria v-model:visible="displayBasic" :value="item.images" :responsiveOptions="responsiveOptions"
                        :numVisible="3" containerStyle="max-width: 850px" :circular="true" :fullScreen="true"
                        :showItemNavigators="true" :showThumbnails="false">
                        <template #item="slotProps">
                            <img :src="slotProps.item" class="sharper" :alt="slotProps.item.alt"
                                style="width: 100%; display: block" />
                        </template>
                        <template #thumbnail="slotProps">
                            <img :src="slotProps.item" :alt="slotProps.item.alt" style="display: block" />
                        </template>
                    </Galleria>
                    <figure class="w-full h-full relative" alt="" @click="displayBasic = true">
                        <img class="w-full h-full" :src="`${item.images[index]}`" alt="">
                        <div class="flex absolute top-0 py-2 px-2 fjc gap-2 bg-[#FFD25D]">
                            <i class="fa-solid fa-medal text-xs"></i>
                            <span class="text-[#000000] text-[10px] font-sans font-bold">Earn 231 Points</span>
                        </div>
                        <div class="flex absolute bottom-0 right-0 py-2 px-2 fjc gap-2 bg-[#232E48]">
                            <i class="pi pi-camera text-xs text-white"></i>
                            <span class="text-white text-[10px] font-sans font-bold">1 / {{ item.images.length }}</span>
                        </div>
                    </figure>
                </div>

            </div>
            <div class="flex-1 lg:px-2 mt-2 hidden lg:block">
                <div class="gridContainer">
                    <div class="py-1 border-b border-[#dddee0] flex items-center"
                        v-for="(itemConven, index1) in item.convenient" :key="index1">
                        <div class="w-[30px]">
                            <i class="text-sm text-[#424d52d2] mr-2 px-1" :class="itemConven.icon"></i>
                        </div>
                        <div>
                            <span class="text-xs text-[#424d52d2]">{{ itemConven.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[300px] hidden lg:block">
                <div>
                    <span class="text-red-400 text-[10px] font-bold">Rates From</span>
                    <div class="px-2 py-1 text-[11px] rounded-[5px] bg-[#e6ee9c] w-fit font-bold my-1">
                        [5％OFF]
                        Friendship Rate </div>
                    <div class="flex justify-between items-center py-2 border-b border-[#DDDEE0]">
                        <div>
                            <p class="text-xl text-[#F5455A] font-bold">¥{{ percentage(item.sale,
                                item.price) }}</p>
                            <p class="text-[12px] text-[#F5455A]">2 Adults / 1 night</p>
                        </div>
                        <div>
                            <button class="btn_pink">Sign
                                in /
                                up</button>
                        </div>
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-xl font-bold">¥{{
                                Math.floor(item.price).toLocaleString('en-US').replace(',', '.') }}</p>
                            <p class="text-[12px]">2 Adults / 1 night</p>
                        </div>
                        <button class="btn_plans transition-all" @click="handToggPlan(currenIndex = index, index)">See
                            Plans</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="hid-plan itemlist">
            <!-- :class="[currenIndex && currenIndex == index ? 'transition-all duration-1000 overflow-hidden h-[200px]' : 'hidden']" -->
            <div class="pt-2 lg:ml-[100px]">
                <div class="flex py-4 border-t" v-for="itemPlan in item.plan">
                    <div class="w-[175px] hidden lg:block">
                        <figure>
                            <img class="w-full h-[120px]" :src="`${itemPlan.images}`" alt="">
                        </figure>
                    </div>
                    <div class="flex-1 lg:pl-4 lg:pr-12">
                        <h4 class="text-[#1a489c] font-bold text-[15px] font-sans">{{ itemPlan.title }}</h4>
                        <div class="mt-2 flex gap-2 items-center">
                            <i
                                class="fa-solid fa-info text-[#c0900cf7] text-[8px] border border-[#c0900cf7] px-[7px] py-1 rounded-full"></i>
                            <span class="text-[#c0900cf7] font-bold text-xs font-sans">Cancellation
                                Policy</span>
                        </div>
                    </div>

                    <div class="lg:w-[300px]">
                        <div>
                            <span class="text-red-400 text-[10px] font-bold">Rates From</span>
                            <div class="px-2 py-1 text-[11px] rounded-[5px] bg-[#e6ee9c] w-fit font-bold my-1">
                                [{{ itemPlan.sale }}％OFF]
                                Friendship Rate </div>
                            <div class="flex justify-between items-center py-2 border-b border-[#DDDEE0]">
                                <div>
                                    <p class="text-xl text-[#F5455A] font-bold">¥ {{
                                        percentage(itemPlan.sale,
                                            itemPlan.price) }}
                                    </p>
                                    <p class="text-[12px] text-[#F5455A]">2 Adults / 1 night</p>
                                </div>
                                <div>
                                    <button class="btn_pink">Sign
                                        in /
                                        up</button>
                                </div>
                            </div>
                            <div class="py-2 flex justify-between">
                                <div>
                                    <p class="text-xl font-bold">¥{{
                                        itemPlan.price.toLocaleString('en-US').replace(',', '.') }}</p>
                                    <p class="text-[12px] ">2 Adults / 1 night</p>
                                </div>
                                <div>
                                    <button class="btn_book">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
const { item, index } = defineProps(['item', 'index'])

const currenIndex = ref(null);
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);

const displayBasic = ref(false);
const percentage = (partialValue, totalValue) => {
    return Math.floor(totalValue - (totalValue * partialValue / 100)).toLocaleString('en-US').replace(',', '.');
}
const handToggPlan = (curr, index) => {
    const itemList = document.querySelectorAll(".itemlist");
    itemList[curr].classList.toggle("togg-plan");
    itemList[curr].classList.toggle("hid-plan");
}

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



.togg-plan {
    transition: all 2s linear ease-in-out;
    overflow: hidden;
    height: auto;
}

.hid-plan {
    display: none;
}

.p-dropdown .p-dropdown-trigger {
    width: 0px !important;
}

.sharper {
    width: 736px !important;
    background-size: cover !important;
    background-position: 50% !important;
    image-rendering: pixelated !important;
}

.p-dropdown .p-dropdown-label.p-placeholder {
    display: flex;
}

.shadow-card {
    --tw-shadow: 2px 3px 14px 0 rgba(74, 74, 74, .25);
    --tw-shadow-colored: 2px 3px 14px 0 var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, 2px 3px 14px 0 rgba(74, 74, 74, .25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.gridContainer {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 1.5rem;
}

.btn_pink {
    background-color: #E02D47;
    color: white;
    border-radius: 4px;
    padding: 10px 16px;
    transition: 0.4s;
    font-weight: 600;

    &:hover {
        border: 1px solid #E02D47;
        background-color: white;
        color: #E02D47;
    }
}

.btn_book {
    background-color: #FFD25D;
    color: #232E48;
    border-radius: 4px;
    padding: 10px 40px;
    transition: 0.4s;
    font-weight: 600;

    &:hover {
        background-color: #232E48;
        color: #FFD25D;
    }
}

.hd-plan {
    display: none;
}

.btn_plans {
    width: 100%;
    background-color: #FFD25D;
    color: #232e48;
    padding: 10px 0px;
    margin-top: 10px;
    transition: 0.4s;
    border-radius: 4px;
    font-weight: 600;

    &:hover {
        color: #FFD25D;
        background-color: #232e48;
    }
}
</style>