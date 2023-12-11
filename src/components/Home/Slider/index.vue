<template>
    <div class="w-full">
        <div class="w-full py-5">
            <div class="w-full fjc">
                <div class="w-[60%] flex justify-between items-center">
                    <div class="flex flex-col gap-3">
                        <h3 class="text-lg lg:text-2xl text-center lg:text-left font-bold mb-2">Hotel Epinard Nasu</h3>
                        <div class="flex items-center gap-2">
                            <span class="pi pi-map-marker text-[#5E5E66]"></span>
                            <span class="text-[#5E5E66] font-sans">1 Ōaza TakakuheiNasu, Nasu-gun, Tochigi</span>
                        </div>
                    </div>
                    <div class="flex gap-7">
                        <div class="flex flex-col">
                            <h3 class="text-3xl font-bold">¥22.000</h3>
                            <p class="text-sm font-serif text-[#000000]">per room / 1 night(s)</p>
                        </div>
                        <div class="flex justify-center items-center">
                            <button
                                class="bg-[#1A489C] transition-all hover:bg-white hover:text-[#1A489C] border text-sm text-neutral-50 font-semibold border-[#1A489C] rounded- py-[10px] lg:w-[195px]">Find
                                a
                                Room</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full">
        <!-- thumbnails -->
        <vueper-slides class="no-shadow thumbnails" :visible-slides="3" :gap="2" :arrows-outside="false" ref="vueperslides1"
            :bullets="false" :slideMultiple="false" @slide="handleSlideChange" :slide-ratio="1 / 4" :dragging-distance="70">
            <vueper-slide v-for="(slide, i) in images" :key="i" :image="slide"
                :style="{ opacity: (currentSlide === i ? '1' : '.2') }" @click.native="$refs.vueperslides2.goToSlide(i)"
                class="gap-5" />
        </vueper-slides>
    </div>
    <img src="" alt="">
</template>

<script setup>
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css';
const currentSlide = ref(1);

const handleSlideChange = (event) => {
    currentSlide.value = event.currentSlide.index;
};
const images = ref([
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/8F920C357989465CB850390406F3E272.jpg%3Fd=20171113T074010',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/337C60252E564366B0EEB22DF023AD75.jpg%3Fd=20171113T074015',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/600886F02B8E4B73AA33BDD276F0CBF1.jpg%3Fd=20230411T054446',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/7796D05B92A94240AE5F9106BC88A8E5.jpg%3Fd=20171113T074016',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/F88BD262E982402EA7068A07EB3DB06F.jpg%3Fd=20171113T074016',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/3DBC8E95D06C4E17AEA064E58782FCF3.jpg%3Fd=20171113T074016',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/E74EA323503947E39F98A96345E813E1.jpg%3Fd=20171113T074016',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/002B7AA475A64CD3A4C2C31A5DD4416C.jpg%3Fd=20171113T074017',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/D887407F5A804CDABC1B863D56A0C9B1.jpg%3Fd=20171113T074017',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/66778D9BC88C487692315ED3D05E57A9.jpg%3Fd=20171113T074017',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/15BB510FFC5446C8A08E82B2F1C1017E.jpg%3Fd=20171113T074018',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/F399992B5F794FB3A9DAA1D8455B1CC7.jpg%3Fd=20171113T074018',
    'https://mh-de.netlify.app/_ipx/s_1410x870/https://d2ahiw9kb7is19.cloudfront.net/-/media/F5184648084B475FA835ED8BFA47DA6A.jpg%3Fd=20171113T074012'
]);
</script>

<style lang="scss" scoped>
.vueper-slides-item {
    margin-right: 10px;
}
</style>
