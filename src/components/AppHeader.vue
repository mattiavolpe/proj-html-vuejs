<script>
import MenuComponent from "./MenuComponent.vue"
import SocialIcons from "./SocialIcons.vue"
export default {
  name: "AppHeader",
  components: {
    MenuComponent,
    SocialIcons,
  },
}
</script>

<template>
  <header class="bg-white py-5">
    <div class="container d-flex justify-content-between align-items-center">
      <div id="logo">
        <img src="./../assets/img/MasterStudy-1.svg" alt="Master Study logo">
      </div>
      <!-- /#logo -->
      <nav class="d-flex">
        <MenuComponent></MenuComponent>
        <SocialIcons></SocialIcons>
      </nav>
    </div>
    <!-- /.container -->
  </header>
</template>
