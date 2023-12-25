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
                                <img class="w-40"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAABXCAIAAADzmPw5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAA8gSURBVHhe7Z2/7ya1Ecbzv6RHSp0iLQVdRBGaSDSHaI4GKlKcSENEChqgIsVRgo60h6A8EVGRIkqTKgQlZYD+mw/7OKPnxl6vd/e9bAqPHp32tcf2eOaZsd8fX/jJT597fmLiEkzyTVyGSb6JyzDJN3EZJvkmLsMk38RlmOSbuAyTfBOXYZJv4jJM8k1chkm+icswyTdxGSb5Ji7DJN/EZZjkm7gMNyDfG7/5fWrZi/MzHMYvnv/1r15+/fU33+Ff8LOf/zIp/M/w2999cOHqDszAFffuPwA84KKkcCvcgHyfffHkpZffSI3jeOW1B5/88bPUCJjzy6++DuxyAYGMgZiXegH+ffe9h3//xz/vKvn408f1dl548dWYcBf+8NGjNNUa/v3dD5tJiNl/+urPMTmuSwodjPiTCekqjjChkfxMyudxA/IRwmaAB8HG/vLXv6VGAUeX3S/7T71rIEIEsgy7u3v3/Y+SAmFo0s7lrbc/SENKx05hCz7PGqAdyliV2muQqJoZGdEPfPPtv8qwu7s623Fak3YuKKCWBp7BWfJhjSw7VpwZpeGpXUghrwtSEx4ePJ56FeYR8aL1rMkXyTBS/L77vpdaTXAUlAF3dwxPwWJO8r90dwU7b8i/s+SLqDSPzk0EUdaI5UxaK5AOzseivUg6mILrIbATkhEbwIOXBySseqbk83wYKfAQrmjf3VHjN9mAQv8o8BMGgZ3hE5STT8aPoE2cJV84YsQLCe4U9pl6Bejiib5ZGNyPdeC5HpS+RZplA7+X7oGM8uXW8mcT6bwbmccJ4RW6Cd8RA1OY0lHAlus4ug4zHDvlapwln4dzjUBrQL+M7IZ5PNGpc0VvEaqg96ay12SeQLRg/Mh1/jz56po6coFOO+2wIe26zl7fQmdp8Q/P7C0xHZwln9/cd91/gY/tHKns1hO9QxpXq9nsYYZbqTdhMLnPky8VY8nI6r505yh0NZ5TLyh9i/TXHfTJOE6RD1oUq/8rdWKtIeUukhQcXvaRphe8QMKtOkFdoRmGAzhJPjZSBj8tm8c9SLfb5uqprKajAKQIpt5njVPkS3tDxm+j6aKD1K5xeJgff55PB5zod+rmBcDJt7dIr+Ek+SBZGbzkrVfukTLjw5s76h8FQulepM7YZ4pT5PNwhvQ5JDQzvl81E9FTpD0MeNy7Aptl4ADOkM+rjq4B7k+eXbkJZvB3Yynl/ErdPAoEn2H84LoJTpGveV8ZOTKcKyGb79p8lN8RRw4gwR3NDOcT/Qz5aqo5HQc/PXCG+RAe/CjoUNmDyJCb5OQgTpEv3jEQ1PEjw/3CqCAEgUyaCQxspqkzoD+JxxvBjJPfGh0mXyJHkMYTrHl5qOGejwROH6+Eco2Uulj17nsPw55niuPkw75i7xJyT8H+keGaEMjjlzRrOHtwEzaMf+gA0K8/yieF3nr74Jf6h8nHxsuwp88Kp8LgxZR1y4BF8EC61Wx+ZpRyEsG3Hz581HfmeRwnn+8Z6wlelCVMT8oOr5eM8hwdqfme6KzbzPsOmvyTNH9S0Mdh8oUTkBRjnzOqex8+hHdy/pLnpNxEzT8Js927v+PnC7twnHxurnzkR8aa1zzjmYGWVAhduYn6MxqJqJyU18DSfoK74O7xe88x8rkTanJ4b+fjT0cqdS7je8F+z2QXUmWzfB7AcfL5RVU7dBesHRn+CYsy3ivoSOkCHvKQwRtSAKZ2KMi9J+k3cYx8XnqbQXUSDE7rB0iIH+iDgPprFHz8+ZPx9B7BcfL5wRGNzsjaa36hcb+UpuEzwueR4K+kMwi8ibubBzGncFKucYB8nmxrZvupQrqm3ibYSEqkXUdBAkb6ORaCo27Iv4Pkw4JiztNHg3sWIka74Pvx4yBSrX9ZdCTXDAa+A+yp3a2LQQcHyOe1H96nXsHdiwxe/P0Cg2wavwnMqA+HwZvACA6Sr0MyL9ruNXdoqnBeLwcdvcb+k2Bf6dDp27OXfMxWtLcqk2cCz6l3DWXAIqnrMDDSA4Ss5cxeHCSfnwspw7CsdDx9h/Mh6aLT6eqgDBg+rAeBrz3X+9fQveRzSiW/JaSrxWBOFu1FUtdJuOVrF/q9OEi+/t0ugqeP4tQYd8T6ouNvYPshcZQBtyYf8Pzpl9Vd5POyh3Cn5G1NB3ivqA67pWgvkrpOIuVk6j2Gg+Tzdxt1Unol05tQD2ddtD3Lx5lUBjwD8oEy9SKpy7GLfO6WveJp3EHRXiR1nYcXv9R1DEfIhxeKCYukXuAprhIdt+y1i456kfH3HGXAsyGfsyp1OcbJx669kh2QkeJXVBdJXefhyZO6juEI+fByMWE98OlyU57WPehR3Hu/GSEfxfX1N9/hpOMY3SxRALUy+43Il96KHpCRm1ZRXSR11SAf7t1/wPlOaRj5hPX/gnxuxJrR6b4cskYsJ+vge46iPUY+Z8nIx9FFdZHU5Rgnn19UuHigPAh/913fWBKK3iKpq4bfhUZ86Bf91HUMR8jnRnQC6YGRwLCkE/DCsFYdE4r2mOM8YTY/tvWosNnU6xgkn0+494Mht3yz+BW9RVJXjV1vqNO1IfUewxHyeRIPelzCbpNOgHmK0thf0ICiPUY+v4YinRKCl32D/TI5SL5U9lJvH9jjbzM7q4CitEjqasJvF/Xvwx3+9d2Iw0ewm3z4opiwSOpN8COjb7FPu5nfQtEe9oUThSRuHu6Y4fFYe3sUGCGf51X9MdMIxst2UVokdTWRCsTaN4rpwtpPgHHsJt8uV7rRmzc5z+9+yIWiOkw+ip8vgeDr+L0Qvbwj8RKFbNo8Qj7/Pq1fR9eAN9zyzgFSNBZJXWvwLSB4AD+E//GA248MensEu8nnWbhpR3htJONHAukoqnvcUd8EOtK5oQY2bfZ71WYd7cDfkHUMKxqLpK41JGb3hWPh8BZq7Cafe2HknYH0Ry46TuuRmYvqzlzEkhFfjxgANsm3111rSHfWtTcHpXuR1NUBGeKXjTVhszdkHthNPrdy5DMRHXYjRntZGnnPUVT3HwSY5JxIwmwjdVfok2+QMYNwm9c+4Srdi6SuPggQubGWlhxcI+VjL47c+QKDeVBHpQlmi5k715rALuUaUIEbGBGFQIAHXu7lB0uHGbU3mC16jxnpGPFPKIDUNQKWoKDAbPmEEgAjj001gt3km5i4FSb5Ji7DJN/EZZjkm7gMk3wTl2GSb+IyTPJNXIZJvonLMMk3cRkm+SYuw0HyDX6xtom98xxY94UXX73t/0DsVnsfxEsvv/Hhw0dffvX148+fvPV2/gLw3fc/0t9Z3rv/YG2PeICBoZZ6mZ/21AjiizWm1VgmwZOucxIHyffJyq964gvvz754Uv+13zff/gvQCD7+9LG+tEZNX1r7l/Qh6YvF9IMDhqRfnjIzE8o8nv23aITQNQN4md7NRoz0H1VAhbBNykl+pEWrHX0G6qGPsP+7739gp7G6c0UtIYlGzICdtON2ZuBfnvGYe7W5ffDjbMvPcGRtSMTrPA6SDyMSLQA2BRVIF3RkvaAflspu/UCDXibR5tGPL+nxMtAz7osZeBkzrLXEbDzDVMJGL2p6bn4fryGdRmxQ4DH7ldceMBtzKlVEaJajEbjlPxaMZRK9DKDPv/WKCSxKmGV/NDInG2EsM6slnumSV7UEkNmyRy2AZ+0lfpHU3D6Imd1aHKjhenkSR8iHBSxPUqZ2xSNe6lf/4oFciYK6aPca5gwDqIWmQ85NpY55mFkzsBYKHhj/5XBaJdD0vjdiTJO40CItkSxfi+sI+frZEnthntgvYIiqPsASiFLvmhbaw2lrRsbMyVrtOl6ewRHyaXlExBJkIsKDWthb+EI7DFfSnjjkSCEURCwt7b8jdMKxFjOHuzll1n735mh6Pxq1L9b13oBTH9yKfCmLOkhqbFkOV4GIWCTIAA1cMzIUpByxxvlN/QM4Qj793ovsiSQDPNOIWV4JtDExxpV1BMM//3OBQAqhoPl54N9UdFVitYqvLjeh3P8Pu8pIrtIOXUnpZV0I7foOxTiSIVlez6z02ySf/OO5vQbURBEgDyhPaISIam9Ct0AeZKR3CTGzrBWPCdbFxy5GExJtVdRRphKDxEigS64XJAFldVE50jU5hRAwFk251X0RvcxPY+1ugq1LEkQPiiTI+02htzYmAbUIf1KuZ1bvJvmahGCb5Cq+EkRN1Mgu/ZcYeA7nq0DouQl6tURzLUCj9iVrmV/vfhAF4jyOkI9IyyyCrQe2qsAT6bRncVRqNXAo/koKzJAmodeJRS8LxUuAQscpxEmxccoGNJYuh6yitzYmwY1Pypo5XgaYv9keUOVL6apRIbykkQdWrHfH0n2z6ZVL14ykUfvSujiEl2CkHg9iN/lU5LRPTKGi4COqlwJf70Smu19q4Ai/AvLSHaf58W8kvVLQvbC5CpOQM80rYG2zN+pMTzwI6GTvH7vxMiBrU6NDp/laLmnRqHysIn3fnXJ+zWza6VUCN41UlHWHGYngMewmn3auXWkP0CJOVRmqm41Qm87GPnz4yHXS/lMI5Uc1BljRz/d6FZ7Tn+BjZ6qXQtP70agw8NJ7A1iSSjKIl82ZgaxNjQnMo8RO7cCPl7BNxTLSgIG4aO2PwJVRcpcC6uGIRinIWj3fFrvJx1bZVbzU8RQ5p1CFC0BtuigbQ3iJl50WKYRE13kmpMyuV3H3AdUGfzsSaFLEGxWqug5p777ZZPkZ8uFJ/Ez+JP5pztgXz7TomaX9rbdcxEGhlwHNEA5HXwuFAi0kKm7XVLVvb4Xd5Ev+VVDxVLS4O0DTdO2f0xPXwDyePfN8CXnQ5xfksliouQqT0EiVBTq4IzAOGdNvFP9ksP6zYpiNAYmRyTmxTQftsjZaIg8T8AkMwHLs16JsgYG+KC/DCeKrlhDkPUxlLO+1w9swz10RavKVdCKpmr69CXaTD7tT/UgvcaV7Ew8SD+eWwIYVKupH4pbPgGfrsiewbqRvcxX8y3CtwkOTeUCWbDbifazSbIDV6wnT3mOPDtplbcCH1GAh10y+opFV4iWMocWJgj4OhJQQCMFjrh9gCANRAzy4J5u+vQl2k29i4laY5Ju4DJN8E5dhkm/iMkzyTVyGSb6JyzDJN3EZJvkmLsMk38RlmOSbuAyTfBOXYZJv4jJM8k1chkm+icswyTdxEZ57/j9O7KN0qsaxvAAAAABJRU5ErkJggg=="
                                    alt="" />
                            </a>
                        </div>
                        <div
                            class="flex justify-between items-center md:w-[55%] gap-3 order-2 pb-4 lg:pb-0 lg:order-1 relative">
                            <div
                                class="flex justify-start items-center gap-2 bg-[#FFFFFF] py-[10px] rounded-sm cursor-pointer">
                                <div class="fjc md:px-4 lg:pr-7 px-2" @click="handopendModelDate">
                                    <span class="pi pi-calendar text-[#1A489C] font-semibold pr-2 lg:block hidden"></span>
                                    <span class="text-[#1A489C] font-semibold lg:text-sm text-xs">{{ handShowdate() }}
                                    </span>
                                </div>
                                <div v-if="modeHeader.dateModel"
                                    class="fixed lg:absolute top-0 left-0 bottom-0 lg:top-[0.1rem] lg:left-[-1rem]">
                                    <div class="lg:w-[200px] wg-in px-6 py-4" @click="handopendModelDate">
                                        <VueDatePicker v-model="date" input-class="hide-input" multi-calendars range
                                            :partial-range="false" ref="datepicker">
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
                            <div
                                class="flex justify-start items-center gap-2 bg-[#FFFFFF] py-[10px] rounded-sm cursor-pointer">
                                <div class="fjc md:px-4 lg:pr-7 px-2">
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
// import DatePick from '@/components/Global/Header/Date/index.vue'
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
watch(model, (newData, _) => {
    if (newData == false) {
        modeHeader.list = false
        modeHeader.dateModel = false
    }
})
watch(() => [rentRoom.Adults, rentRoom.Childrens], (newVal, _) => {
    rentRoom.rentRoom = rentRoom.rentRoom.map(_ => ({
        Adults: newVal[0],
        Childrens: newVal[1]
    }))
}, { deep: true })
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