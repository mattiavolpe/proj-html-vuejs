<script>
import { contacts } from "./../assets/data/contacts.js"
import { pages } from "./../assets/data/pages.js"
import { blog } from "./../assets/data/blog.js"
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
  data() {
    return {
      contacts,
      pages,
      blog,
    }
  },
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        <AboutFooter></AboutFooter>
        <ContactFooter :contacts="contacts"></ContactFooter>
        <PagesFooter :pages="pages"></PagesFooter>
        <BlogFooter :blog="blog"></BlogFooter>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>
</template>
