<template>
    <div class="w-full fjc mt-2 border-b border-[#dddee0] bg-[#FFFFFF] sticky lg:top-[167px] z-10">
        <ul class="w-[95%] lg:w-[60%] flex" @click="handTakeElement">
            <li v-for="(item, index) in tabs" @click="currentTab = index" id="hotel-tab"
                class="w-full cursor-pointer py-3 text-center"
                :class="{ 'border-b-4 border-[#1A489C]': currentTab === index }">
                <span class="text-[#1A489C] font-bold lg:text-[15px] ">{{ item }}</span>
            </li>
        </ul>
    </div>
    <div class="w-full fjc">
        <div
            class="pt-3 pb-7 lg:py-4 text-white fjc lg:w-[60%] md:w-[90%] flex lg:justify-between lg:flex-row flex-col py-6 gap-10">
            <div class="w-full lg:w-7/12">
                <div class="overflow-hidden" :class="[read ? 'h-auto' : 'h-[230px]']">
                    <div v-for="(item, index) in aboutUs" :key="index" class="py-1.5 text-sm text-black leading-7">
                        {{ item }}
                        <br>
                    </div>
                </div>
                <div class="flex justify-start items-center mt-5">
                    <span class="text-[#1A489C] font-bold cursor-pointer" @click="handToggRead">
                        {{ read ? '- Read less' : '+ Read more' }}
                    </span>
                </div>
            </div>
            <div class="w-full lg:w-4/12">
                <ul class="w-full">
                    <li class="py-4 border-b border-border flex justify-between items-center text-sm gap-2">
                        <span class="pi pi-clock"></span>
                        <span class="flex-1 font-sans font-bold text-[#000000]">Check In and Check Out</span>
                        <span class="text-sm font-sans">15:00 / 11:00</span>
                    </li>
                    <li class="py-4 border-b border-border flex justify-between items-center text-sm gap-2">
                        <span class="pi pi-phone"></span>
                        <span class="flex-1 font-sans font-bold text-[#000000]">Call to inquire</span>
                        <span class="text-sm font-sans">+81-287-78-6000</span>
                    </li>
                    <li class="py-4 border-b border-border flex justify-between items-center text-sm gap-2">
                        <span class="pi pi-envelope"></span>
                        <span class="flex-1 font-sans font-bold text-[#000000]">Contact Us</span>
                        <span class="text-sm font-sans">epinard-nasu@mystays.com</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref(0)
const read = ref(false)
const tabs = ['Hothel', 'Room & Plan', 'Find Us', 'Reviews']
const aboutUs = [
    'Golf, kayaking, hiking and horseback riding.'
    , 'In the heart of the Nasu Kogen region, this Hotel Épinard Nasu is surrounded by beautiful Japanese countryside. With hiking trails, golf courses and multiple ski resorts nearby, this all-season resort hotel isperfectly placedto help you make the most of your trip. Favored by the Imperial Familyas a highland retreat, Nasu - with its nature, museums, galleries and sporting opportunities - istruly the royal standard.',
    'The hotel is 30 minutes from the Tohoku Shinkansen stop at Nasu Shiobara Station, where the Shinkansen from Tokyo arrives. From here, guests can enjoy the hotels free shuttle bus service. Adirect shuttle bus is also available from both Tokyo station and Ikebukuro station.'
    , 'The family rooms and themed kids rooms are perfect for entertaining even our littlest guests andcome stocked with numerous amenities. You can also try the hotels traditional hot spring baths andunwind in Nasu s largest sauna, featuring a jacuzzi, indoor pool, and spa facilities. In terms of salons, La beauté, BRILLIANT, Nagomi and ELMO are all available for a spot of pampering. The hotel also boasts tennis courts, as well as newly-opened pet rooms and a dog run.'
    , 'Visitors can enjoy delicious cuisine at the hotels three restaurants, Herbage, Nasuno, Méli Mél andrsquo;Anges,. Several rooms are equipped with private dining areas where authentic French cuisine can be served, and Komorebi Table, the La Stella cocktail bar, and a nightclub at the hotel give you the perfect excuse to unwind with a drink or dance the night away.'
    , 'There are a variety of activities to do in Nasu, such as golf, kayaking, hiking and horsebackriding. Alternatively, visit the Nasu Highland Park, or take an excursion to the Nikko UNESCO World Heritage Sites. Theres never a dull moment during a vacation at our Nasu resort.'
    , 'Visitors can enjoy delicious cuisine at the hotels three restaurants, Herbage, Nasuno, Méli Mél andrsquo;Anges,. Several rooms are equipped with private dining areas where authentic French cuisinecan be served, and Komorebi Table, the La Stella cocktail bar, and a nightclub at the hotel give you the perfect excuse to unwind with a drink or dance the night away.'
]

const handToggRead = () => {
    read.value = !read.value
}
</script>

<style lang="scss" scoped>
.borderButtom {
    border-bottom: 4px solid #1A489C;
}
</style>