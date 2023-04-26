<script>
import { menu } from "./../assets/data/headerMenu.js"
import { socials } from "./../assets/data/socialIcons.js"
export default {
  name: "AppHeader",
  data() {
    return {
      menu,
      socials,
      activeMenu: 0,
    }
  }
}
</script>

<template>
  <header class="bg-white py-5">
    <div class="container d-flex justify-content-between align-items-center">
      <div id="logo">
        <img src="./../assets/img/MasterStudy-1.svg" alt="Master Study logo">
      </div>
      <nav class="d-flex">
        <ul id="menu" class="d-flex">
          <li v-for="(item, index) in menu" class="position-relative" @click="activeMenu = index">
            <div v-if="item.new" class="badge_new">NEW</div>
            <a class="text-decoration-none" :href="item.ref">{{ item.name }}</a>
            <div v-if="index === activeMenu" class="active_menu"></div>
          </li>
        </ul>
        <ul id="socials" class="d-flex ms-5">
          <li v-for="item in socials">
            <a :href="item.ref">
              <font-awesome-icon :icon="item.icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.container -->
  </header>
</template>

<style lang="scss" scoped>
@use "./../assets/scss/partials/_variables.scss" as *;

header {
  #logo > img {
    height: 45px;
  }

  nav {

    #menu {

      li:nth-child(even) {
        margin: 0 1.5rem;
      }

      .badge_new {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(0.75rem, -80%);
        font-size: 0.625rem;
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        color: $lighter;
        background-color: $badge;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      .active_menu {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(0, 10px);
        width: 100%;
        height: 7px;
        background-color: $accent;
        clip-path: polygon(0 4px, calc(50% - 4px) 4px, 50% 0, calc(50% + 4px) 4px, 100% 4px, 100% 100%, 0 100%);
      }

    }

    #socials {

      li:nth-child(even) {
        margin: 0 0.5rem;
      }

    }

    a {
      color: $darker;
      font-weight: 700;
    }
  }
}
</style>
