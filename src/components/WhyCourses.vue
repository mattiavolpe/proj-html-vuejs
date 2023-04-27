<script>
import { reasons } from "./../assets/data/reasons.js"
import SingleReason from "./SingleReason.vue"
export default {
  name: "WhyCourses",
  components: {
    SingleReason,
  },
  data() {
    return {
      reasons,
    }
  },
}
</script>

<template>
  <section id="why_courses" class="py-5">
    <div class="container">
      <h2 class="section_title mb-5 text-center">Why my Courses?</h2>
      <div class="row row-cols-1 row-cols-md-2 g-5">
        <SingleReason v-for="item in reasons" :key="item.title + item.description" :item="item"></SingleReason>
      </div>
      <!-- /.row row-cols-3 -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /#new_courses -->
</template>
