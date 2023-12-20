<template>
    <div class="w-full lg:block hidden">
        <div class="w-full py-5">
            <div class="w-full fjc">
                <div class="w-[75%] md:w-[90%] lg:w-[60%] flex justify-between items-center">
                    <div class="flex flex-col">
                        <h3 class="text-lg lg:text-2xl text-center lg:text-left font-bold mb-2">Hotel Epinard Nasu</h3>
                        <div class="flex items-center gap-2">
                            <span class="pi pi-map-marker text-[#5E5E66] text-xs"></span>
                            <span class="text-[#5E5E66] text-primary-thin text-15">1 Ōaza TakakuheiNasu,
                                Nasu-gun,
                                Tochigi</span>
                            <!-- font-sans -->
                        </div>
                    </div>
                    <div class="flex gap-7">
                        <div class="flex flex-col">
                            <h3 class="text-3xl font-bold">¥22.000</h3>
                            <p class="text-sm font-serif text-[#000000af]">per room / 1 night(s)</p>
                        </div>
                        <div class="flex justify-center items-center ">
                            <MyButton
                                :classButton="'bg-[#1A489C] hover:bg-white hover:text-[#1A489C] rounded-[3px] py-[13px] text-sm text-neutral-50 border-[#1A489C] lg:w-[195px]'">
                                Find
                                a
                                Room</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full relative">
        <vueper-slides class="no-shadow thumbnails" :visible-slides="windowScreen <= 700 ? 1 : 3" :gap="1"
            :arrows-outside="false" ref="vueperslides1" :bullets="false" :slideMultiple="false" @click="hadnTogg"
            @slide="handleSlideChange" :slide-ratio="windowScreen <= 700 ? 2 / 4 : 1 / 4" :dragging-distance="70">
            <vueper-slide v-for="(slide, i) in images" :key="i" :image="slide" :class="[currentSlide === i ? '' : 'lala']"
                @click.native="$refs.vueperslides2.goToSlide(i)" class="gap-5 relative">
            </vueper-slide>
        </vueper-slides>
        <div class="absolute flex items-center px-3 py-2 bg-[#232E48] rounded-sm resp z-[99]">
            <i class="fa-solid fa-camera px-2 text-white"></i>
            <h1 class="text-lg text-white px-2">{{ currentSlide }} / {{ images.length }}</h1>
        </div>
    </div>
    <img src="" alt="">
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css';
import MyButton from "@/components/Button/index.vue";
const currentSlide = ref(window.innerWidth <= 700 ? 1 : 1);
const windowScreen = ref(window.innerWidth);

onMounted(() => {
    window.addEventListener('resize', value => {
        windowScreen.value = window.innerWidth
    });
    console.log(windowScreen.value);
});
onUnmounted(() => {
    window.removeEventListener('resize', () => { windowScreen.value = window.innerWidth })
})

const handleSlideChange = (event) => {
    currentSlide.value = event.currentSlide.index;
};
const images = ref([
    'https://cdn.pixabay.com/photo/2014/05/16/04/13/log-huts-345360_1280.jpg',
    'https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png',
    'https://motogo.vn/wp-content/uploads/2023/05/homestay-kon-tum-40.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/406023161.jpg?k=31be8fcb8f7feb6cc33b055eeb9abd7f65b8659ce70c55083a2b89dfda797fa3&o=&hp=1',
    'https://diadiembaoloc.net/wp-content/uploads/2021/07/boong-house-home-stay-bao-loc-22.jpg',
    'https://ik.imagekit.io/tvlk/blog/2022/04/homestay-da-lat-view-dep-1.jpeg',
    'https://cdn.pixabay.com/photo/2014/05/16/04/13/log-huts-345360_1280.jpg',
    'https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png',
    'https://motogo.vn/wp-content/uploads/2023/05/homestay-kon-tum-40.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/406023161.jpg?k=31be8fcb8f7feb6cc33b055eeb9abd7f65b8659ce70c55083a2b89dfda797fa3&o=&hp=1',
    'https://diadiembaoloc.net/wp-content/uploads/2021/07/boong-house-home-stay-bao-loc-22.jpg',
    'https://ik.imagekit.io/tvlk/blog/2022/04/homestay-da-lat-view-dep-1.jpeg',
]);
</script>

<style lang="scss">
.vueper-slides-item {
    margin-right: 10px;
}

.lala {
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
}

.vueperslides__arrow {
    background-color: #232E48 !important;
    padding: 0px 10px !important;
    opacity: 1;
}

.vueperslides__arrow svg {
    width: 3em !important;
}

.vueperslides__arrow--next {
    @media screen and (max-width: 1023px) {
        right: 0.5em;
    }

    @media screen and (min-width: 1024px) {
        right: 33.5em;
    }
}

.vueperslides__arrow--prev {
    @media screen and (max-width: 1023px) {
        left: 0.5em;
    }

    @media screen and (min-width: 1024px) {
        left: 33.5em;
    }
}

.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {}

.vueperslide__title {
    display: flex;
    width: 80px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #232E48;
}

.text-primary-thin {
    --tw-text-opacity: 1;
}

.resp {
    top: 10px;
    right: 34%;

    @media screen and (max-width : 768px) {
        right: 0px;
    }
}
</style>
