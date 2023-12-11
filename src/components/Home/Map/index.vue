<template>
    <div class="fjc mt-3 ">
        <div class="w-[60%]">
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
                        <button
                            class="w-full py-[10px] rounded-[4px] text-[#1A489C] font-semibold hover:bg-[#1A489C] hover:text-white transition-all border">Get
                            Directions</button>
                    </div>
                </div>
            </div>
            <div class="py-2 ">
                <p class="text-[#000000] font-bold py-3">Access from nearby stations</p>
                <ul class="py-2 flex flex-col gap-2">
                    <li class="font-sans">About 10 minutes by car from Tohoku Expressway Nasu I.C.</li>
                    <li class="font-sans">About 30 minutes by taxi from the Tohoku Shinkansen nasushiobara station</li>
                    <li class="font-sans">About 20 minutes by taxi from the Tohoku Line kuroiso station.</li>
                    <li class="font-sans">30 minutes by shuttle bus from the Tohoku Shinkansen nasushiobara station.
                        (Reservation required)
                    </li>
                </ul>
                <p class="text-[#000000] font-bold py-3">Access from major transit terminals</p>
                <p class="font-sans">3 hours and 20 minutes by Highway Bus from Shinjuku Station.</p>
                <p class="text-[#000000] font-bold py-3">Parking Facility Information</p>

                <ul class="py-2 flex flex-col gap-2">
                    <li class="font-sans">We have a parking lot (first come, first served).</li>
                    <li class="font-sans">Fee:free</li>
                    <li class="font-sans">About 20 minutes by taxi from the Tohoku Line kuroiso station.</li>
                    <li class="font-sans">Garage-type: Flat (320 vehicles); Multilevel (0 vehicles)</li>
                </ul>
                <ul class="py-2 flex flex-col gap-2">
                    <li class="font-sans">* Notes:</li>
                    <li class="font-sans">The fee, the vehicle capacity, etc. may change without prior notice. Your
                        understanding in this matter is appreciated.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>