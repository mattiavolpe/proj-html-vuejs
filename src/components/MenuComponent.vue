<script>
export default {
  name: "MenuComponent",
  props: {
    menu: Array,
  },
  data() {
    return {
      activeMenu: 0,
    }
  }
}
</script>

<template>
  <ul id="menu" class="d-flex">
    <li v-for="(item, index) in menu" :key="item.name" class="position-relative" @click="activeMenu = index">
      <div v-if="item.new" class="badge_new">NEW</div>
      <a class="text-decoration-none" :class="activeMenu === index ? 'active' : ''" :href="item.ref">{{ item.name }}</a>
      <div v-if="index === activeMenu" class="active_menu"></div>
    </li>
  </ul>
</template>
