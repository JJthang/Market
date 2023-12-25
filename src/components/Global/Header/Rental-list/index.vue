<template>
    <div class="flex border-b border-b-[#DDDEE0] py-1" @click="handChangeTogg(index)">
        <div class="py-2 flex-1">
            <span class="font-semibold text-[13px] text-black">Room {{ index + 1 }}</span>
        </div>
        <div class="flex justify-end items-center">
            <div class="mr-3 py-2">
                <span class="text-secondary text-[11px] text-[#1A489C] font-semibold">{{ rentRoom.Adults }}
                    Adults , {{ rentRoom.Childrens }} Childrens</span>
            </div>
            <span class="pi pi-trash" @click="handDeleteRoom(index)"></span>
        </div>
    </div>
    <div class="pt-3">
        <div class="flex items-center">
            <div class="flex-1">
                <span class="text-[13px] text-black">Adults</span>
            </div>
            <div class="flex">
                <button class="rounded-l-[4px] px-[9px] py-[6px]"
                    :class="[rentRoom.Adults == 0 || index >= 1 ? 'bg-[#D3D3D3] cursor-not-allowed' : 'bg-[#1A489C]']"
                    @click="handReduce(Object.keys(item), 'Adults', index)">
                    <span class="pi pi-minus text-white"></span>
                </button>
                <div class="w-[40px] text-center py-[7px] border-y-2">
                    {{ rentRoom.Adults }}
                </div>
                <button class="rounded-r-[4px] bg-[#1A489C] px-[9px] py-[6px]"
                    :class="[rentRoom.Adults == 10 || index >= 1 ? 'bg-[#D3D3D3] cursor-not-allowed' : 'bg-[#1A489C]']"
                    @click="handIncrease(Object.keys(item), 'Adults', index)
                        ">
                    <span class="pi pi-plus text-white"></span>
                </button>
            </div>
        </div>
        <div class="flex items-center pt-3">
            <div class="flex-1">
                <span class="text-[13px] text-black">Childrens</span>
            </div>
            <div class="flex">
                <button class="rounded-l-[4px] bg-[#1A489C] px-[9px] py-[6px]"
                    :class="[rentRoom.Childrens == 0 || index >= 1 ? 'bg-[#D3D3D3] cursor-not-allowed' : 'bg-[#1A489C]']"
                    @click="handReduce(Object.keys(item), 'Childrens', index)">
                    <span class="pi pi-minus text-white"></span>
                </button>
                <div class="w-[40px] text-center py-[7px] border-y-2">
                    {{ rentRoom.Childrens }}
                </div>
                <button class="rounded-r-[4px] bg-[#1A489C] px-[9px] py-[6px]"
                    :class="[rentRoom.Childrens == 10 || index >= 1 ? 'bg-[#D3D3D3] cursor-not-allowed' : 'bg-[#1A489C]']"
                    @click="handIncrease(Object.keys(item), 'Childrens', index)">
                    <span class="pi pi-plus text-white"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { item, toggRoom, rentRoom, index } = defineProps(["item", "toggRoom", "rentRoom", "index"]);
const emit = defineEmits(["indexItem"]);
const handIncrease = (roomKey, name, index) => {
    if (index >= 1) {
        return;
    }
    if (roomKey.includes(name) && name == 'Adults') {
        rentRoom.Adults == 10 ? rentRoom.Adults : rentRoom.Adults++;
    } else {
        rentRoom.Childrens == 10 ? rentRoom.Childrens : rentRoom.Childrens++;
    }
};
const handReduce = (roomKey, name, index) => {
    if (index >= 1) {
        return;
    }
    if (roomKey.includes(name) && name == 'Adults') {
        rentRoom.Adults == 0 ? rentRoom.Adults : rentRoom.Adults--;
    } else {
        rentRoom.Childrens == 0 ? rentRoom.Childrens : rentRoom.Childrens--;
    }
};
const handChangeTogg = (index) => {
    if (toggRoom.num != index) {
        toggRoom.condis = false;
    }
    toggRoom.num = index;
    toggRoom.condis = !toggRoom.condis;
};
const handDeleteRoom = (index) => {
    emit("indexItem", index)
}
</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: grey;
}
</style>