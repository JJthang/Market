<template>
    <div class="w-full px-6 py-4 fjc">
        <div class="w-[82%] flex flex-col">
            <div class="fjc">
                <h2 class="p-5 font-semibold text-[2rem]">Cart Items</h2>
            </div>
            <div class="w-full flex gap-4">
                <div class="w-[70%]" v-for="item in data">
                    <DataView :value="item.products">
                        <template #list="slotProps">
                            <div class="grid grid-nogutter gap-5">
                                <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                    <ListCardItem :item="item" />
                                </div>
                            </div>
                        </template>
                    </DataView>
                </div>
                <div class="w-[30%] h-full flex flex-col p-3 rounded-lg border border-[#b6bbc4b9]" v-for="item in data">
                    <CheckOut :item="{ item }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuery } from "@tanstack/vue-query";
import { fetchUser } from '@/api/User.js'
import ListCardItem from "@/components/CardItem/ListCardItem.vue";
import CheckOut from "@/components/CardItem/CheckOut.vue";


const { data } = useQuery({
    queryKey: ['cardUser'],
    queryFn: () => fetchUser(),
    select: ({ data }) => data.carts
})


</script>

<style lang="scss" scoped></style>