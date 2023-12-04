<template>
    <div class="w-full flex justify-between">
        <span>Subtotal</span>
        <span class="text-gray-700">${{ item.total }}</span>
    </div>
    <div class="w-full flex justify-between">
        <span>Discount Price</span>
        <span class="text-[#B31312]">${{ item.total - item.discountedTotal }}</span>
    </div>
    <hr class="my-3">
    <div class="flex justify-between">
        <p class="text-lg font-bold">Total</p>
        <div class="flex flex-col">
            <p class="mb-1 text-lg font-bold text-right">${{ item.discountedTotal }}</p>
            <p class="text-sm -text-gray-700">including VAT</p>
        </div>
    </div>
    <button class="w-full mt-5 bg-[#3B82F6] text-white py-2.5 rounded-md">Check out</button>
</template>

<script setup>

const { item } = defineProps(['item']);

</script>

<style lang="scss" scoped></style>