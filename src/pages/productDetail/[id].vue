<template>
    <div class="w-full px-40 py-4 fjc mt-10">
        <div class="w-[80%] lg:flex">
            <div class="lg:w-5/12">
                <Galleria :value="data.images" :responsiveOptions="responsiveOptions" :pt="{
                    thumbnailItem: {
                        class: 'w-full px-2'
                    },
                }" :numVisible="4" :showItemNavigators="true" :circular="true" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="slotProps.item" :alt="slotProps.item" class="h-[400px]"
                            style="width: 100%; display: block" />
                    </template>
                    <template #thumbnail="slotProps">
                        <div class="grid grid-nogutter justify-content-center gap-2">
                            <img :src="slotProps.item" class="w-full h-[80px]" :alt="slotProps.item"
                                style="width: 100%; display: block" />
                        </div>
                    </template>
                </Galleria>
            </div>
            <div class="lg:w-7/12 px-5 py-3">
                <h2 class="text-[#616060]">{{ data.category }}</h2>
                <h1 class="text-gray-900 text-2xl title-font font-medium mb-1 capitalize font-sans">{{ data.title }}</h1>
                <div class="flex gap-3 pt-3">
                    <Rating class="text-red-500" :pt="{
                        onIcon: {
                            class: 'text-red-500 w-[15px]'
                        },
                        offIcon: {
                            class: 'w-[15px]'
                        },
                        root: {
                            class: 'gap-[0.2rem]'
                        }
                    }" :modelValue="data.rating" readonly :cancel="false"></Rating>
                    <span class="text-gray-600 fjc">{{ data.rating }} Stars</span>
                    <span class="flex items-center border-l-[2px] py-[6px] px-4 gap-2">
                        <span class="pi pi-facebook"></span>
                        <span class="pi pi-twitter"></span>
                        <span class="pi pi-comment"></span>
                    </span>
                </div>
                <p class="leading-relaxed py-3">{{ data.description }}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <p class="text-2xl font-bold mr-4 text-red-500">${{ data.price }}</p>
                        <p class="font-medium text-base text-gray-900 line-through">${{ handCalculate(data.price,
                            data.discountPercentage) }}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="px-5 py-2 bg-[#EF4444] rounded-md text-white hover:opacity-[0.9]">Add to
                            Cart</button>
                        <Button icon="pi pi-heart" class="bg-[#E5E7EB] text-red-600 focus:border-none" :pt="{
                            icon: {
                                class: 'text-red-600'
                            }
                        }" text raised rounded aria-label="Favorite" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query'
import { fetchOneProduct } from '@/api/Product';
import { useRoute } from 'vue-router';
import Galleria from 'primevue/galleria';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import { ref } from 'vue'
const { params } = useRoute();
const id = params.id;
const { data } = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => fetchOneProduct(id),
    select: ({ data }) => data
})
console.log(data);
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
const handCalculate = (oldPrice, percent) => {
    const sale = (oldPrice * percent) / 100;
    const total = oldPrice + sale;
    return Math.floor(total);
};


</script>

<style lang="scss" scoped>
.p-galleria-thumbnail-item {
    flex: 1 !important;
    gap: 0;
}
</style>