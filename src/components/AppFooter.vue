<script>
import AboutFooter from "./AboutFooter.vue"
import ContactFooter from "./ContactFooter.vue"
import PagesFooter from "./PagesFooter.vue"
import BlogFooter from "./BlogFooter.vue"
export default {
  name: "AppFooter",
  components: {
    AboutFooter,
    ContactFooter,
    PagesFooter,
    BlogFooter,
  },
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        <AboutFooter></AboutFooter>
        <ContactFooter></ContactFooter>
        <PagesFooter></PagesFooter>
        <BlogFooter></BlogFooter>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>
</template>
