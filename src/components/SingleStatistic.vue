<script>
export default {
  name: "SingleStatistic",
  props: {
    item: Object,
  },
}
</script>

<template>
  <div class="single_statistic d-flex align-items-center">
    <font-awesome-icon :icon="item.icon"/>
    <div class="right_section flex-grow-1">
      <h3>{{ item.amount }}</h3>
      <span>{{ item.text }}</span>
    </div>
    <!-- /.right_section -->
  </div>
</template>
