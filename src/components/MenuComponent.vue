<script>
import { menu } from "./../assets/data/headerMenu.js"
export default {
  name: "MenuComponent",
  data() {
    return {
      menu,
      activeMenu: 0,
    }
  }
}
</script>

<template>
  <ul id="menu" class="d-flex">
    <li v-for="(item, index) in menu" class="position-relative" @click="activeMenu = index">
      <div v-if="item.new" class="badge_new">NEW</div>
      <a class="text-decoration-none" :href="item.ref">{{ item.name }}</a>
      <div v-if="index === activeMenu" class="active_menu"></div>
    </li>
  </ul>
</template>
