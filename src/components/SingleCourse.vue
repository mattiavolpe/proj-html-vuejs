<script>
export default {
  name: "SingleCourse",
  props: {
    item: Object,
  },
  methods: {
    getImageUrl(image) {
      return new URL(`/src/assets/img/${image}`, import.meta.url).href;
    }
  },
}
</script>

<template>
  <div class="single_course col">
    <div class="card border-0 h-100 rounded-0">
      
      <div class="course_image_wrapper position-relative">
        <img class="w-100" :src="getImageUrl(item.img)" :alt="`${item.title} image`">
        <div class="course_hover">
          <h3>&dollar;{{ item.price }}</h3>
        </div>
        <div v-if="item.special" class="special">SPECIAL</div>
      </div>
      <!-- /.course_hover -->

      <div class="card-body pt-4 pb-0">
        <h5 class="m-0">{{ item.title }}</h5>
        <span class="my-3">{{ item.category }}</span>
      </div>
      <!-- /.card-body -->

      <hr class="m-0 mx-3">

      <div class="card-footer d-flex align-items-center justify-content-between bg-transparent border-0 py-3">
        <div class="level">
          <font-awesome-icon icon="fa-solid fa-signal"/>
          <span>{{ item.level }}</span>
        </div>
        <!-- /.level -->
        <div class="lectures">
          <font-awesome-icon icon="fa-solid fa-list-ul"/>
          <span>{{ item.lectures }} Lectures</span>
        </div>
        <!-- /.lectures -->
        <div class="time">
          <font-awesome-icon icon="fa-regular fa-clock"/>
          <span>{{ item.time }} Hours</span>
        </div>
        <!-- /.time -->
      </div>
      <!-- /.card-footer -->

    </div>
  </div>
</template>
