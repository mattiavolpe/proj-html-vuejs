<script>
export default {
  name: "SliderTop",
  emits: ["lookForPrevReview", "lookForNextReview"],
  props: {
    reviews: Array,
    activeReview: Number,
  },
  methods: {
    getAvatarSource(index) {
      if (index < 0) {
        return `src/assets/img/${this.reviews[this.reviews.length - 1].img}`
      } else if (index > this.reviews.length - 1) {
        return `src/assets/img/${this.reviews[0].img}`
      }
      return `src/assets/img/${this.reviews[index].img}`
    },
  }
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mb-4">
    <font-awesome-icon @click="$emit('lookForPrevReview')" class="ms-4 slider_arrow" icon="fa-solid fa-arrow-left"/>

    <div id="user_images_wrapper">
      <img width="70" :src="getAvatarSource(activeReview - 1)" alt="Previous review avatar">
      <img class="mx-3" width="100" :src="getAvatarSource(activeReview)" alt="Current review avatar">
      <img width="70" :src="getAvatarSource(activeReview + 1)" alt="Next review avatar">
    </div>
    <!-- /#user_images_wrapper -->
    
    <font-awesome-icon @click="$emit('lookForNextReview')" class="me-4 slider_arrow" icon="fa-solid fa-arrow-right"/>
  </div>
</template>
