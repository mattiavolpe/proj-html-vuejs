<script>
import ArticlePreview from "./ArticlePreview.vue"
export default {
  name: "BlogFooter",
  components: {
    ArticlePreview,
  },
  props: {
    blog: Array,
  },
}
</script>

<template>
  <section class="blog col">
    <h5>BLOG</h5>
    <ul>
      <ArticlePreview v-for="n in 2" :key="blog[n - 1].title + blog[n - 1].date" :item="blog[n - 1]"></ArticlePreview>
    </ul>
  </section>
  <!-- /.col -->
</template>
