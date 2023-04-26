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
  <div id="why_courses" class="py-5">
    <div class="container">
      <h2 class="mb-5 text-center">Why my Courses?</h2>
      <div class="row row-cols-2 g-5">
        <SingleReason v-for="item in reasons" :item="item"></SingleReason>
      </div>
      <!-- /.row row-cols-3 -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /#new_courses -->
</template>
