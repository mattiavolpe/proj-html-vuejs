<script>
import MenuComponent from "./MenuComponent.vue"
import SocialIcons from "./SocialIcons.vue"
export default {
  name: "AppHeader",
  components: {
    MenuComponent,
    SocialIcons,
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
    <div class="container d-flex justify-content-between align-items-center">
      <a @click="reloadPage()" id="logo">
        <img src="./../assets/img/MasterStudy-1.svg" alt="Master Study logo">
      </a>
      <!-- /#logo -->
      <nav class="d-flex">
        <MenuComponent></MenuComponent>
        <SocialIcons></SocialIcons>
      </nav>
    </div>
    <!-- /.container -->
  </header>
</template>
