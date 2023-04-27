<script>
import { courses } from "./../assets/data/courses.js"
import SingleCourse from "./SingleCourse.vue"
export default {
  name: "NewCourses",
  components: {
    SingleCourse,
  },
  data() {
    return {
      courses,
    }
  },
}
</script>

<template>
  <section id="new_courses" class="py-5">
    <div class="container text-center">
      <h2 class="section_title mb-5">New Courses</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
        <SingleCourse v-for="item in courses" :key="item.title + item.img" :item="item"></SingleCourse>
      </div>
      <!-- /.row row-cols-3 -->
      <button class="rounded-5 mt-5">LOAD MORE</button>
    </div>
    <!-- /.container -->
  </section>
  <!-- /#new_courses -->
</template>
