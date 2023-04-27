<script>
export default {
  name: "OfferCountdown",
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      offerEnded: false,
    }
  },
  mounted() {
    const endDate = new Date("Dec 31, 2023 23:59:59").getTime();
    const nowDate = new Date().getTime();
    const timeLeft = endDate - nowDate;
    this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (timeLeft < 0) {
      this.offerEnded = true;
    }
    const count = setInterval(() => {
      const nowDate = new Date().getTime();
      const timeLeft = endDate - nowDate;
      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (timeLeft < 0) {
        clearInterval(count);
        this.offerEnded = true;
      }
    }, 1000);
  }
}
</script>

<template>
  <ul v-if="!offerEnded" class="right_section d-flex justify-content-center">
    <li class="text-center">
      <h2>{{ days }}</h2>
      <h5>Days</h5>
    </li>
    <li class="text-center">
      <h2>{{ hours }}</h2>
      <h5>Hours</h5>
    </li>
    <li class="text-center">
      <h2>{{ minutes }}</h2>
      <h5>Minutes</h5>
    </li>
    <li class="text-center">
      <h2>{{ seconds }}</h2>
      <h5>Seconds</h5>
    </li>
  </ul>
  <h2 v-else class="offer_over right_section text-center m-0">Offer is over!</h2>
</template>
