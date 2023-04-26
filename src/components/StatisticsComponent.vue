<script>
import { statistics } from "./../assets/data/statistics.js"
import SingleStatistic from "./SingleStatistic.vue"
export default {
  name: "StatisticsComponent",
  components: {
    SingleStatistic,
  },
  data() {
    return {
      statistics,
    }
  },
}
</script>

<template>
  <div id="statistics">
    <div class="container d-flex align-items-center justify-content-between">
      <SingleStatistic v-for="item in statistics" :item="item"></SingleStatistic>
    </div>
    <!-- /.container -->
  </div>
  <!-- /#statistics -->
</template>
