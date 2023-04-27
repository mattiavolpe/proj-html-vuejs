<script>
import MenuComponent from "./MenuComponent.vue"
import SocialIcons from "./SocialIcons.vue"
export default {
  name: "AppHeader",
  components: {
    MenuComponent,
    SocialIcons,
  },
  data() {
    return {
      mobileMenuVisible: false,
    }
  },
  methods: {
    reloadPage() {
      location.reload();
    }
  }
}
</script>

<template>
  <header class="bg-white position-sticky top-0">
    <div class="container d-flex justify-content-between align-items-center position-relative">
      <a @click="reloadPage()" id="logo">
        <img src="./../assets/img/MasterStudy-1.svg" alt="Master Study logo">
      </a>
      <!-- /#logo -->
      <nav :class="mobileMenuVisible ? 'opened' : ''" class="d-flex align-items-center">
        <MenuComponent :class="mobileMenuVisible ? 'menu_visible' : ''"></MenuComponent>
        <SocialIcons :class="mobileMenuVisible ? 'menu_visible' : ''"></SocialIcons>
        <font-awesome-icon v-if="!mobileMenuVisible" icon="fa-solid fa-bars" class="mobile_menu d-none" @click="mobileMenuVisible = !mobileMenuVisible"/>
        <font-awesome-icon v-if="mobileMenuVisible" icon="fa-solid fa-xmark" class="mobile_menu d-none" @click="mobileMenuVisible = !mobileMenuVisible"/>
      </nav>
    </div>
    <!-- /.container -->
  </header>
</template>
