<template>
  <div class="min-h-screen">
    <Header />
    <RouterView />
    <Footer />
  </div>
  <Transition name="fade">
    <WellCome v-if="sidebar" @opendSign="handOpendSignIn" />
  </Transition>
  <Transition name="fade">
    <SignIn v-if="signUpBar" />
  </Transition>
  <div class="fixed top-0 left-0 w-full h-full bg-primary-model transition-all duration-1000"
    :class="[sidebar | signUpBar ? 'z-[1000]' : 'z-50']" v-if="model" @click="handcloseModel">
  </div>
</template>


<script setup>
import { ref, provide, onUpdated, Transition } from "vue"
import { RouterView } from 'vue-router'
import Header from '@/components/Global/Header/index.vue'
import Footer from '@/components/Global/Footer/index.vue'
import WellCome from "@/components/SideBar/WellCome.vue";
import SignIn from '@/components/SideBar/Sign/SignIn.vue'
const model = ref(false);
const sidebar = ref(false);
const signUpBar = ref(false);
provide("model", model);
provide("sidebar", sidebar);
provide("signUpBar", signUpBar);
const handOpendSignIn = () => {
  sidebar.value = false;
  signUpBar.value = true;
}
const handcloseModel = () => {
  model.value = false;
  sidebar.value = false;
  signUpBar.value = false;
}
const handleScroll = () => {
  window.scrollTo(0, 0);
};
onUpdated(() => {
  if (model.value) {
    window.addEventListener("scroll", handleScroll)
  } else {
    window.removeEventListener("scroll", handleScroll)
  }
})

</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(500px);
}

.dp__clear_icon {
  visibility: hidden !important;
}

* {
  --dp-menu-width: 700px !important;
}

.dp__action_row {
  width: 550px !important;
}

.dp__range_between {
  background-color: #1A4699;
}

.dp__inner_nav {
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 40px;
  height: 30px;
}

.dp__action_buttons {
  gap: 15px;
}

.dp__action_cancel {
  padding: 0px 20px;
  height: 40px;
}

.dp__action_select {
  padding: 0px 20px;
  height: 40px;
}

.dp__today {
  border: none;
}

.dp__range_between {
  color: white;
}

.dp__range_start {
  background-color: #1A4699;
}

.dp__range_end {
  background-color: #1A4699;
}

.dp__arrow_top {
  width: 0px;
  height: 0px;
}

.line-h {
  line-height: 27px !important;
}

.mh-checkbox input[type=checkbox]:checked+label[data-v-f0305e6e]:before {
  background: #232e48 !important;
}

.dp--menu-wrapper {
  top: 60px !important;
  left: -130px !important;
}

.bg-primary-model {
  --tw-bg-opacity: 1;
  background-color: #232e48;
  background-color: rgb(35 46 72/var(--tw-bg-opacity));
  opacity: 0.8;
}
</style>
