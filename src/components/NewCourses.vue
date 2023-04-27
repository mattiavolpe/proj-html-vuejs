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
      coursesToShow: 3,
    }
  },
  methods: {
    loadMore() {
      if (this.coursesToShow + 3 > this.courses.length) {
        this.coursesToShow = this.courses.length;
      } else {
        this.coursesToShow += 3;
      }
    }
  }
}
</script>

<template>
  <section id="new_courses" class="py-5">
    <div class="container text-center">
      <h2 class="section_title mb-5">New Courses</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
        <SingleCourse v-for="n in coursesToShow" :key="courses[n - 1].title + courses[n - 1].img" :item="courses[n - 1]"></SingleCourse>
      </div>
      <!-- /.row row-cols-3 -->
      <button v-if="coursesToShow < courses.length" @click="loadMore()" class="rounded-5 mt-5">LOAD MORE</button>
    </div>
    <!-- /.container -->
  </section>
  <!-- /#new_courses -->
</template>
