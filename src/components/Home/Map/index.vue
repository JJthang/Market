<template>
    <div class="fjc mt-3 ">
        <div class="lg:w-[60%] md:w-[90%] w-[95%] py-2">
            <h3 class="text-2xl font-bold my-5">Find Us</h3>
            <div class="flex gap-10">
                <div class="h-[135px] lg:h-[265px] lg:w-7/12 ">
                    <img class="w-full h-full"
                        src="https://maps.googleapis.com/maps/api/staticmap?center=37.045997,140.021853&zoom=15&scale=1&size=638x265&maptype=roadmap&key=AIzaSyD9G3yU6CBFBMhuClWTKYsxZIDk5D44Szs&format=png&visual_refresh=true&markers=icon:https://www.mystays.com/Assets/Mystays/images/ms-zoomout-icon.png|shadow:true|37.045997,140.021853&language=en-us&markers=icon:https://www.mystays.com/Assets/Mystays/images/location-map-hover.png|shadow:true|43.05978,141.347616&markers=icon:https://www.mystays.com/Assets/Mystays/images/location-map-hover.png|shadow:true|43.062577,141.353647&markers=icon:https://www.mystays.com/Assets/Mystays/images/location-map-hover.png|shadow:true">
                </div>
                <div class="lg:w-5/12 hidden lg:block ">
                    <div class="py-2 flex justify-start items-center gap-3 border-b">
                        <i class="fa-regular fa-clock"></i>
                        <span class="text-black font-semibold font-sans">3 h and 20 min by Highway Bus from Shinjuku
                            Station</span>
                    </div>
                    <div class="fjc mt-5">
                        <MyButton :classButton="'w-full text-[#1A489C] hover:bg-[#1A489C] hover:text-white'">
                            Get
                            Directions</MyButton>
                    </div>
                </div>
            </div>
            <div class="py-2 content-text">
                <p class="text-[#000000] font-bold py-3 heading">Access from nearby stations</p>
                <ul class="py-2 flex flex-col gap-2">
                    <li class="">About 10 minutes by car from Tohoku Expressway Nasu I.C.</li>
                    <li class="">About 30 minutes by taxi from the Tohoku Shinkansen nasushiobara station</li>
                    <li class="">About 20 minutes by taxi from the Tohoku Line kuroiso station.</li>
                    <li class="">30 minutes by shuttle bus from the Tohoku Shinkansen nasushiobara station.
                        (Reservation required)
                    </li>
                </ul>
                <p class="text-[#000000] font-bold py-3 heading">Access from major transit terminals</p>
                <p class="">3 hours and 20 minutes by Highway Bus from Shinjuku Station.</p>
                <p class="text-[#000000] font-bold py-3 heading">Parking Facility Information</p>

                <ul class="py-2 flex flex-col gap-2">
                    <li class="">We have a parking lot (first come, first served).</li>
                    <li class="">Fee:free</li>
                    <li class="">About 20 minutes by taxi from the Tohoku Line kuroiso station.</li>
                    <li class="">Garage-type: Flat (320 vehicles); Multilevel (0 vehicles)</li>
                </ul>
                <ul class="py-2 flex flex-col gap-2">
                    <li class="">* Notes:</li>
                    <li class="">The fee, the vehicle capacity, etc. may change without prior notice. Your
                        understanding in this matter is appreciated.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyButton from "@/components/Button/index.vue";

</script>

<style lang="scss" scoped>
.heading {
    font-size: 15px;
}
</style>