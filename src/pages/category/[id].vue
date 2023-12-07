<template>
    <div class="w-full px-6 py-4 fjc">
        <div class="w-[82%] flex-col">
            <div class="fjc">
                <h2 class="p-5 font-medium text-[1.5rem]">{{ Category }}</h2>
            </div>
            <div class="w-full">
                <div class="card">
                    <ListCategoryId :data="data" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { fetchOneCategory } from "@/api/Category.js";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import ListCategoryId from "@/components/CategoryId/listCategoryId.vue";
const { id: Category } = useRoute().params;

const { data } = useQuery({
    queryKey: ["categoryId", Category],
    queryFn: () => fetchOneCategory(Category),
    select: ({ data }) => data.products
});
</script>

<style lang="scss" scoped>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #ffc436 !important;
}
</style>
