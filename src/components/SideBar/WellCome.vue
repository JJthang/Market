<template>
    <div class="fixed w-[500px] top-0 right-0 h-full z-[1001] bg-white">
        <div class="w-full flex justify-end items-center p-6">
            <span class="pi pi-times text-xl cursor-pointer" @click="handCloseSideBar"></span>
        </div>
        <div class="flex flex-col h-screen">
            <div class="fjc py-5">
                <img src="@/assets/images/Logo-Reverse.02d443d7.svg" class="w-[250px]" alt="">
            </div>
            <ul class="flex-1 text-[#1a489c]">
                <li class="py-3 border-b border-border px-[15px] lg:px-[20px] flex items-center cursor-pointer text-[15px]">
                    <span class="pi pi-search pr-3 text-[#1A489C]"></span>
                    Find a hotel
                </li>
                <li
                    class="py-3 border-b border-border px-[15px] lg:px-[20px] flex items-center cursor-pointer text-[15px] text-[#1A489C]">
                    <span class="pi pi-user pr-3 font-normal text-[#1A489C]"></span>
                    <span class="pr-1 text-[#1A489C] hover:underline" @click="opendSignIn">Login</span> or <span
                        class="pl-1 text-[#1A489C] hover:underline">Join</span>
                </li>
            </ul>
            <div class="flex flex-col px-4 pb-4 mb-14">
                <p class="my-2 text-xs text-[#5e5e66]">© 2018 MyStays Hotel Management Co., Ltd. </p>
                <div class="flex gap-3">
                    <a href="" class="text-[#1a489c] font-semibold text-sm hover:text-[#1a489cb4]">Visit Website</a>
                    <a href="" class="text-[#1a489c] font-semibold text-sm hover:text-[#1a489cb4]">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, defineEmits } from 'vue'
const emit = defineEmits(['opendSign'])
const sidebar = inject("sidebar");
const model = inject("model");
const handCloseSideBar = () => {
    sidebar.value = false;
    model.value = false;
}
const opendSignIn = () => {
    emit("opendSign", true);
} 
</script>

<style lang="scss" scoped></style>