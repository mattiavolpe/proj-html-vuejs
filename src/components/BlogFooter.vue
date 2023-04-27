<script>
import { blog } from "./../assets/data/blog.js"
import ArticlePreview from "./ArticlePreview.vue"
export default {
  name: "BlogFooter",
  components: {
    ArticlePreview,
  },
  data() {
    return {
      blog,
    }
  },
}
</script>

<template>
  <section class="blog col">
    <h5>BLOG</h5>
    <ul>
      <ArticlePreview v-for="item in blog" :item="item"></ArticlePreview>
    </ul>
  </section>
  <!-- /.col -->
</template>
