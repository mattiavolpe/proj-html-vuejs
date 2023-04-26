<script>
export default {
  name: "SingleCourse",
  props: {
    item: Object,
  }
}
</script>

<template>
  <div class="col single_course">
    <div class="card border-0 h-100 rounded-0">

      <img :src="`src/assets/img/${item.img}`" :alt="`${item.title} image`">

      <div class="card-body pt-4 pb-0">
        <h5 class="m-0">{{ item.title }}</h5>
        <span class="my-3">{{ item.category }}</span>
      </div>
      <!-- /.card-body -->

      <hr class="m-0 mx-3">

      <div class="card-footer d-flex align-items-center justify-content-between bg-transparent border-0 py-3">
        <div class="level">
          <font-awesome-icon icon="fa-solid fa-signal"/>
          {{ item.level }}
        </div>
        <!-- /.level -->
        <div class="lectures">
          <font-awesome-icon icon="fa-solid fa-list-ul"/>
          {{ item.lectures }} Lectures
        </div>
        <!-- /.lectures -->
        <div class="time">
          <font-awesome-icon icon="fa-regular fa-clock"/>
          {{ item.time }} Hours
        </div>
        <!-- /.time -->
      </div>
      <!-- /.card-footer -->

    </div>
  </div>
</template>
