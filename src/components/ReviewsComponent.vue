<script>
import ReviewsSlider from './ReviewsSlider.vue';
export default {
  name: "ReviewsComponent",
  components: {
    ReviewsSlider,
  },
}
</script>

<template>
  <section id="reviews">
    <div class="container">
      <div class="my_container text-center">
        <h2 class="section_title mb-5">What Students Say</h2>
        <ReviewsSlider></ReviewsSlider>
      </div>
      <!-- /.my_container -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /#reviews -->
</template>
