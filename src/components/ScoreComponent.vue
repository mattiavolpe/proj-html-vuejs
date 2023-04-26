<script>
export default {
  name: "ScoreComponent",
  props: {
    review: Object, 
  }
}
</script>

<template>
  <div id="score_wrapper" class="d-flex align-items-center justify-content-center mt-3 mb-5">
    <font-awesome-icon icon="fa-solid fa-star" class="mx-1" v-for="n in review.rating"/>
  </div>
  <!-- /#score_wrapper -->
</template>
