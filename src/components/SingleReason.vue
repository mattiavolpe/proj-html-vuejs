<script>
export default {
  name: "SingleReason",
  props: {
    item: Object,
  },
}
</script>

<template>
  <div class="single_reason col">
    <div class="card h-100 rounded-0">

      <div class="card-body d-flex align-items-start px-4 py-5">
        <font-awesome-icon :icon="item.icon"/>
        <div class="right_section flex-grow-1">
          <h4 class="mb-3">{{ item.title }}</h4>
          <span>{{ item.description }}</span>
        </div>
        <!-- /.right_section -->
      </div>
      <!-- /.card-body -->

    </div>
  </div>
</template>
