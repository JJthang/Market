<template>
    <div class="sign-up-template fixed w-full md:w-[500px] top-0 right-0 h-full z-[1001] bg-white p-6">
        <div class="w-full flex justify-end items-center">
            <span class="pi pi-times text-xl cursor-pointer" @click="handCloseSideBar"></span>
        </div>
        <form class="flex flex-col h-screen" @submit.prevent="onSubmit">
            <div class="fjc">
                <h2 class="sign-in-template__title">Go To Pass Enrollment</h2>
            </div>
            <div class="flex flex-col">
                <div class="">
                    <div class="my-2">
                        <label for="" class="text-xs font-bold" :class="[errors.email ? 'text-[#f5455a]' : '']">Email
                            Address</label>
                        <div class="relative">
                            <input type="email" v-model="email" v-bind="emailAttrs" class="w-full border py-3"
                                :class="[errors.email ? 'border-[#f5455a]' : '']">
                            <div class="absolute bottom-[-2px] right-1">
                                <i class="fa-solid fa-caret-down text-[#ffd25d] tranformRote text-base"></i>
                            </div>
                        </div>
                        <span class="text-[#f5455a]">{{ errors.email }}</span>
                    </div>
                </div>
                <div class="">
                    <div class="my-2">
                        <label for="" class="text-xs font-bold" :class="[errors.password ? 'text-[#f5455a]' : '']">
                            Password</label>
                        <div class="relative">
                            <input type="password" v-model="password" v-bind="passwordAttrs" class="w-full border py-3"
                                :class="[errors.password ? 'border-[#f5455a]' : '']">

                            <div class="absolute bottom-[-2px] right-1">
                                <i class="fa-solid fa-caret-down text-[#ffd25d] tranformRote text-base"></i>
                            </div>
                        </div>
                        <span class="text-[#f5455a]">{{ errors.password }}</span>
                    </div>
                </div>
            </div>
            <div class="fjc py-6 text-[#1a489c] cursor-pointer">
                Forgot your password ?
            </div>
            <div class="flex flex-col gap-4">
                <button type="submit"
                    class="py-4 bg-[#FFD25D] transition-all rounded-[4px] text-[15px] hover:bg-[#232E48] hover:text-[#FFD25D] font-semibold">LOGIN</button>
                <button
                    class="py-4 bg-[#1A489C] text-white transition-all text-[15px] rounded-[4px] hover:bg-white hover:text-[#1A489C] font-semibold border">Not
                    a member? Join for FREE</button>
            </div>
            <div class="text-center text-[11px] py-6">
                <div>
                    Make changes to a booking by talking with our japan → concierge
                    <a href="/" class="underline">Chat concierge</a>
                </div>
                <div class="py-1"> By creating an account, you're agreeing with our japan → to the terms </div>
                <div>
                    <a href="" class="underline">Terms & Conditions</a>
                    and
                    <a href="" class="underline">Privacy Statement</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
const sidebar = inject("signUpBar");
const model = inject("model");
const { errors, handleSubmit, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    }),
});
const onSubmit = handleSubmit((value) => {
    console.log(value);
})
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const handCloseSideBar = () => {
    sidebar.value = false
    model.value = false;
}

</script>

<style lang="scss" scoped>
.sign-up-template {
    background: linear-gradient(40deg, #fff 59%, #f5f8ff 0, #f5f8ff);
}

.sign-in-template__title {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #1a489c, #ffd25d);
    -webkit-background-clip: text;
    font-size: 38px;
    line-height: 50px;
    margin-bottom: 20px;
    padding: 20px 0 0;
    text-align: center;
}

.tranformRote {
    transform: rotate(-35deg);
}
</style>