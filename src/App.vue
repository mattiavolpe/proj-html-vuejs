<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
import ToTop from "./components/ToTop.vue"
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ToTop,
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
  <ToTop></ToTop>
</template>

<style>
</style>
