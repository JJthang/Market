<template>
    <header class="w-full">
        <div class="w-full fjc bg-[#232E48]">
            <div class="lg:w-[60%] md:w-[90%] w-[95%] py-3 flex justify-end items-center">
                <div class="flex justify-center items-center cursor-pointer">
                    <img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" class="mr-2 w-3 h-3" alt="" />
                    <span class="text-base font-sans text-white">EngLish</span>
                    <span class="pi pi-chevron-down ml-2 text-white text-sm font-medium"></span>
                </div>
            </div>
        </div>
    </header>
    <div class="w-full stick z-[999] top-0">
        <div class="w-full transition-all">
            <div class="w-full flex flex-col">
                <div class="w-full flex justify-start items-center">
                    <div class="w-full flex bg-[#1A489C]">
                        <div class="flex justify-center items-center px-2 py-3 gap-2">
                            <span class="pi pi-arrow-left text-sm text-[#F8F6FC]"></span>
                            <span class="text-[#F8F6FC] text-sm">Back</span>
                        </div>
                    </div>
                </div>
                <div class="w-full fjc bg-[#232E48]">
                    <div class="lg:w-[60%] md:w-[90%] w-[95%] flex lg:flex-row justify-between flex-col items-center">
                        <div class="flex items-center lg:justify-between justify-center py-4">
                            <a href="">
                                <img class="w-40" src="@/assets/images/image1.png" alt="" />
                            </a>
                        </div>
                        <div
                            class="flex justify-between items-center md:w-[55%] gap-3 order-2 pb-4 lg:pb-0 lg:order-1 relative">
                            <div class="flex justify-start items-center gap-2 bg-[#FFFFFF] rounded-sm cursor-pointer">
                                <div class="fjc md:px-4 lg:pr-7 px-2 py-[10px]" @click="handopendModelDate">
                                    <span class="pi pi-calendar text-[#1A489C] font-semibold pr-2 lg:block hidden"></span>
                                    <span class="text-[#1A489C] font-semibold lg:text-sm text-xs">{{ handShowdate() }}
                                    </span>
                                </div>
                                <div v-if="modeHeader.dateModel"
                                    class="fixed lg:absolute top-0 left-0 bottom-0 lg:top-[0.1rem] lg:left-[-1rem]">
                                    <div class="lg:w-[200px] wg-in px-6 py-4" @click="handopendModelDate">
                                        <VueDatePicker v-model="date" input-class="hide-input" multi-calendars range
                                            :partial-range="false" ref="datepicker" @cancel="handleCancel">
                                            <template #dp-input="{ value }">
                                                <input type="text" :value="value" class="invisible" />
                                            </template>
                                        </VueDatePicker>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-end items-center gap-2  bg-[#FFFFFF] rounded-sm cursor-pointer">
                                <div class="fjc md:px-4 lg:pr-7 px-2 py-[10px]" @click="handopendModelList">
                                    <span
                                        class="fa-solid fa-user-group text-[#1A489C] font-semibold pr-2 lg:block hidden"></span>
                                    <span class="text-[#1A489C] font-semibold lg:text-sm text-xs">
                                        {{ rentRoom.rentRoom.length }} Room , {{ handReduce(rentRoom.rentRoom) }} Guests
                                    </span>
                                </div>
                                <div class="relative">
                                    <div class="fixed top-0 left-0 bottom-0 w-full lg:absolute lg:top-[3.1rem] lg:left-[-16rem] bg-white"
                                        v-if="modeHeader.list">
                                        <div
                                            class="lg:w-[360px] bg-white wg-in px-6 py-4 overflow-y-auto h-[250px] border-b-4 border-yellow-400">
                                            <div class="flex justify-end items-center pb-1">
                                                <i class="pi pi-times" @click="handCloseModelList"></i>
                                            </div>
                                            <div class="flex flex-col gap-3">
                                                <div class="flex flex-col overflow-hidden transition-all duration-500"
                                                    :class="[
                                                        toggRoom.condis && toggRoom.num == index
                                                            ? 'h-[160px]'
                                                            : 'h-[50px]',
                                                    ]" v-for="(item, index) in rentRoom.rentRoom" :key="index">
                                                    <ListRental :item="item" :index="index" :rentRoom="rentRoom"
                                                        :toggRoom="toggRoom" @indexItem="handDeleteItem" />
                                                </div>
                                                <div class="flex justify-between items-center gap-2 mt-2">
                                                    <button
                                                        class="py-[9px] border px-4 font-semibold rounded-[5px] hover:text-white hover:bg-[#1A489C] transition-all duration-200 text-[#1a489c]"
                                                        @click="handAddRoom">+
                                                        Add
                                                        A
                                                        Room</button>
                                                    <button
                                                        class="py-[9px] border px-11 font-medium rounded-[5px] bg-[#FFD25D] transition-all duration-200 hover:bg-[#232E48] hover:text-[#FFD25D]"
                                                        @click="handCloseModelList">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-start items-center gap-2 bg-[#FFFFFF] rounded-sm cursor-pointer">
                                <div class="fjc md:px-4 lg:pr-7 px-2 py-[10px]">
                                    <span class="fa-solid fa-tag text-[#1A489C] font-semibold lg:block hidden"></span>
                                    <span class="text-[#1A489C] font-semibold lg:text-sm text-xs px-2">+ Add Promo</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between lg:pt-3 items-center gap-[75px] md:gap-0 pb-3 order-1 lg:order-2">
                            <div class="flex justify-center items-center gap-2 mr-10">
                                <span class="pi pi-user text-white mr-1"></span>
                                <span class="text-[#FFD25D]">Login</span>
                                <span class="text-[#FFD25D]">or</span>
                                <span class="text-[#FFD25D]">Join</span>
                            </div>
                            <a href="/">
                                <span class="pi pi-phone text-base text-white lg:block hidden lg:pr-2"></span></a>
                            <div class="flex items-center">
                                <span class="pi pi-bars text-base cursor-pointer text-white"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    ref,
    inject,
    reactive,
    watch,
    nextTick
} from "vue";
import ListRental from '@/components/Global/Header/Rental-list/index.vue'
import { format } from 'date-fns';
import { addDays } from 'date-fns';
const datepicker = ref(null);
const currentDate = ref([]);
const date = ref([new Date(), addDays(new Date(), 5)]);
const model = inject("model");
const modeHeader = reactive({
    list: false,
    dateModel: false
})
const toggRoom = reactive({
    num: null,
    condis: false,
});
const rentRoom = reactive({
    Adults: 0,
    Childrens: 0,
    rentRoom: [{
        Adults: 0,
        Childrens: 0,
    }],
});
const handShowdate = () => {
    if (currentDate.value.length > 0) {
        return `${currentDate.value[0]} - ${currentDate.value[1]}`
    } else {
        return 'Dec 10 - Dec 11'
    }
}
const handopendModelList = () => {
    model.value = true;
    modeHeader.list = true;
    modeHeader.dateModel = false;
};
const handCloseModelList = () => {
    model.value = false;
    modeHeader.list = false;
};
const handopendModelDate = () => {
    model.value = true;
    modeHeader.dateModel = true;
    modeHeader.list = false;
    nextTick(() => {
        if (datepicker.value) {
            datepicker.value.openMenu();
        }
    });
};
const handAddRoom = () => {
    rentRoom.rentRoom.push({
        Adults: rentRoom.Adults,
        Childrens: rentRoom.Childrens,
    })
}
const handDeleteItem = (index) => {
    rentRoom.rentRoom = rentRoom.rentRoom.filter((_, indexRoom) => indexRoom != index);
}
const handReduce = (data) => {
    return data.reduce((total, curr) => total += (curr.Adults + curr.Childrens), 0)
}
const handleCancel = () => {
    console.log("Đã hủy");
}
// Close when model equal false
watch(model, (newData, _) => {
    if (newData == false) {
        modeHeader.list = false
        modeHeader.dateModel = false
    }
})
// set Adults and Childrens
watch(() => [rentRoom.Adults, rentRoom.Childrens], (newVal, _) => {
    rentRoom.rentRoom = rentRoom.rentRoom.map(_ => ({
        Adults: newVal[0],
        Childrens: newVal[1]
    }))
}, { deep: true })
//todo Change Time
watch(date, (newVlue, _) => {
    newVlue.forEach(item => {
        const yourDate = new Date(item);
        const formatDate = format(yourDate, 'MMM dd');
        currentDate.value.push(formatDate);
    })
    modeHeader.list = true;
})
</script>

<style lang="scss" scoped>
.stick {
    position: sticky;
    top: 0;
    z-index: 50px;
}

.wg-in {
    animation-duration: 0.3s;
    animation-name: mdn_ani;
}

@keyframes mdn_ani {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>