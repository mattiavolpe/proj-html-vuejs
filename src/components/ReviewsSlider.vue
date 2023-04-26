<script>
import { reviews } from "./../assets/data/reviews.js"
import SliderTop from "./SliderTop.vue"
import ScoreComponent from "./ScoreComponent.vue"
export default {
  name: "ReviewsSlider",
  components: {
    SliderTop,
    ScoreComponent,
  },
  data() {
    return {
      reviews,
      activeReview: 0,
    }
  },
  methods: {
    prevReview(index) {
      if (index === 0) {
        this.activeReview = this.reviews.length - 1;
      } else {
        this.activeReview--;
      }
    },
    nextReview(index) {
      if (index === this.reviews.length - 1) {
        this.activeReview = 0;
      } else {
        this.activeReview++;
      }
    },
  }
}
</script>

<template>
  <SliderTop @lookForPrevReview="prevReview(activeReview)" @lookForNextReview="nextReview(activeReview)" :reviews="reviews" :activeReview="activeReview"></SliderTop>
  <h5 class="m-0 fw-bold">{{ reviews[activeReview].name }}</h5>
  <ScoreComponent :review="reviews[activeReview]"></ScoreComponent>
  <p class="m-0">{{ reviews[activeReview].text }}</p>
</template>
