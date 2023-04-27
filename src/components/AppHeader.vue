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
      menuVisible: false,
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
  <header class="bg-white py-5">
    <div class="container d-flex justify-content-between align-items-center position-relative">
      <a @click="reloadPage()" id="logo">
        <img src="./../assets/img/MasterStudy-1.svg" alt="Master Study logo">
      </a>
      <!-- /#logo -->
      <nav :class="menuVisible ? 'opened' : ''" class="d-flex align-items-center">
        <MenuComponent v-if="menuVisible"></MenuComponent>
        <SocialIcons v-if="menuVisible"></SocialIcons>
        <font-awesome-icon v-if="!menuVisible" icon="fa-solid fa-bars" class="mobile_menu d-none" @click="menuVisible = !menuVisible"/>
        <font-awesome-icon v-if="menuVisible" icon="fa-solid fa-xmark" class="mobile_menu d-none" @click="menuVisible = !menuVisible"/>
      </nav>
    </div>
    <!-- /.container -->
  </header>
</template>
