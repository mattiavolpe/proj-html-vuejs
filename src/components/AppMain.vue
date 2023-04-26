<script>
import JumbotronComponent from "./JumbotronComponent.vue"
import OfferBanner from "./OfferBanner.vue"
import PresentationComponent from "./PresentationComponent.vue"
import NewCourses from "./NewCourses.vue"
import BookComponent from "./BookComponent.vue"
import WhyCourses from "./WhyCourses.vue"
import StatisticsComponent from "./StatisticsComponent.vue"
import ReviewsComponent from "./ReviewsComponent.vue"
export default {
  name: "AppMain",
}
</script>

<template>
  <JumbotronComponent></JumbotronComponent>
  <OfferBanner></OfferBanner>
  <PresentationComponent></PresentationComponent>
  <NewCourses></NewCourses>
  <BookComponent></BookComponent>
  <WhyCourses></WhyCourses>
  <StatisticsComponent></StatisticsComponent>
  <ReviewsComponent></ReviewsComponent>
</template>
