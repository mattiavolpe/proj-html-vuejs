<script>
export default {
  name: "SocialIcons",
  props: {
    socials: Array,
  },
}
</script>

<template>
  <ul id="socials" class="d-flex ms-5">
    <li v-for="item in socials" :key="item.social + item.icon">
      <a :href="item.ref">
        <font-awesome-icon :icon="item.icon"/>
      </a>
    </li>
  </ul>
</template>
