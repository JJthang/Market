<template>
  <div class="min-h-screen">
    <Header />
    <RouterView />
    <Footer />
  </div>
  <div class="fixed top-0 left-0 w-full h-full bg-primary-model transition-all duration-1000" v-if="model"
    @click="handcloseModel">
  </div>
</template>


<script setup>
import { ref, provide, onUpdated } from "vue"
import { RouterView } from 'vue-router'
import Header from '@/components/Global/Header/index.vue'
import Footer from '@/components/Global/Footer/index.vue'
const model = ref(false);
provide("model", model);
const handcloseModel = () => {
  model.value = false;
}
onUpdated(() => {
  if (model.value) {
    window.addEventListener("scroll", () => window.scrollTo(0, 0))
  }
})

</script>



<style lang="scss">
.line-h {
  line-height: 27px !important;
}

.mh-checkbox input[type=checkbox]:checked+label[data-v-f0305e6e]:before {
  background: #232e48 !important;
}

.bg-primary-model {
  --tw-bg-opacity: 1;
  background-color: #232e48;
  background-color: rgb(35 46 72/var(--tw-bg-opacity));
  opacity: 0.8;
  z-index: 50;
}
</style>
