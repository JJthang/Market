<template>
    <div class="w-full justify-center items-center lg:py-6 border-t border-border lg:block hidden">
        <div class="w-[95%] lg:w-[75%] m-auto">
            <h3 class="text-xl font-bold my-5">Review</h3>
            <div class="flex justify-between gap-5">
                <div class="w-6/12">
                    {{
                        lengthString
                        ? checkSubString(text)
                        : checkSubString(text, text.length)
                    }}
                    <span class="text-secondary text-[#1a489c] ml-2.5 font-bold text-13 lg:text-15 lg:cursor-pointer"
                        @click="readMore">
                        {{ lengthString ? "Read less" : "Read more" }}</span>
                    <div class="flex items-center mt-3">
                        <div class="flex items-center gap-2">
                            <ul class="flex">
                                <li class="item"></li>
                                <li class="item"></li>
                                <li class="item"></li>
                                <li class="item"></li>
                            </ul>
                            <span> Jun 01, 2021</span>
                        </div>
                    </div>
                </div>
                <div class="w-6/12"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const lengthString = ref(false);
const text = ref(
    "Epinard Nasu is one of our absolute favorite places to stay at. Everything about this place - from the serene surrounding; close vicinity to most major spots in Nasu; the clean, comfortable rooms with fantastic view, the plentiful facilities, the friendly, helpful staff; to the mouth - watering buffet with a wild variety of food - is near perfection.Fancy yet never pretentious; classy but welcoming to all.We love it so much that we have decided to make it our yearly destination.The only thing I really wish to see is if they can install more EV chargers to accommodate to the increasing demand - it would definitely make it more attractive for us as the ultimate stress - free stop."
);
const checkSubString = (value, length = 100) => {
    if (value) {
        let str = value.substring(0, length);
        if (str.length >= length) {
            str += "...";
        }
        return str;
    }
    return "";
};
const readMore = () => {
    lengthString.value = !lengthString.value;
};
</script>

<style lang="scss" scoped>
.item {
    align-items: center;
    border: 1px solid #078171;
    border-radius: 50%;
    display: flex;
    height: 12px;
    justify-content: center;
    margin-right: 2px;
    position: relative;
    width: 12px;

    &::before {
        background: #078171;
        border-radius: 50%;
        content: "";
        height: 8px;
        position: absolute;
        width: 8px;
    }
}
</style>
