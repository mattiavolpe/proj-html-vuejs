<script>
export default {
  name: "SliderTop",
  emits: ["lookForPrevReview", "lookForNextReview"],
  props: {
    reviews: Array,
    activeReview: Number,
  },
  methods: {
    getIndex(index) {
      if (index < 0) {
        return this.reviews.length - 1;
      } else if (index > this.reviews.length - 1) {
        return 0;
      }
      return index;
    },
    getImageUrl(index) {
      return new URL(`/src/assets/img/${this.reviews[index].img}`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mb-4">
    <font-awesome-icon @click="$emit('lookForPrevReview')" class="ms-4 slider_arrow" icon="fa-solid fa-arrow-left"/>

    <div id="user_images_wrapper">
      <img :src="getImageUrl(getIndex(activeReview - 1))" alt="Previous review avatar">
      <img class="mx-3" :src="getImageUrl(getIndex(activeReview))" alt="Current review avatar">
      <img :src="getImageUrl(getIndex(activeReview + 1))" alt="Next review avatar">
    </div>
    <!-- /#user_images_wrapper -->
    
    <font-awesome-icon @click="$emit('lookForNextReview')" class="me-4 slider_arrow" icon="fa-solid fa-arrow-right"/>
  </div>
</template>
