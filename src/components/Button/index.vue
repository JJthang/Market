<template>
    <button class="border rounded-md py-[10px] font-semibold transition-all text-center" :class="classButton">
        <slot></slot>
    </button>
</template>

<script setup>
import { defineProps } from "vue";
const { classButton } = defineProps(['classButton']);

</script>

<style lang="scss" scoped></style>