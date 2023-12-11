<template>
  <div class="min-h-screen">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>


<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Global/Header/index.vue'
import Footer from '@/components/Global/Footer/index.vue'
</script>



<style lang="scss">
.line-h {
  line-height: 27px !important;
}

.mh-checkbox input[type=checkbox]:checked+label[data-v-f0305e6e]:before {
  background: #232e48 !important;
}
</style>
