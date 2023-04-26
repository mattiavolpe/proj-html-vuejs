<script>
import { pages } from "./../assets/data/pages.js"
export default {
  name: "PagesFooter",
  data() {
    return {
      pages,
    }
  },
}
</script>

<template>
  <div class="pages col">
    <h5>PAGES</h5>
    <ul class="d-flex align-items-center flex-wrap">
      <li class="w-50 py-1" v-for="item in pages">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
  <!-- /.col -->
</template>
