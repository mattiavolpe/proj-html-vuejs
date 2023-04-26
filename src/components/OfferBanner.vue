<script>
import OfferCountdown from "./OfferCountdown.vue"
export default {
  name: "OfferBanner",
  components: {
    OfferCountdown,
  },
}
</script>

<template>
  <div id="offer_banner" class="d-flex align-items-center justify-content-between rounded-4">
    <div class="left_section">
      <h3 class="mb-4">
        Limited Sale: <span>All courses with 55% off</span>
      </h3>
      <div class="input_wrapper position-relative">
        <input type="email" class="w-100 rounded-5 border-0" placeholder="Enter your e-mail">
        <button class="rounded-5">SUBSCRIBE</button>
      </div>
    </div>
    <!-- /.left_section -->
    <OfferCountdown></OfferCountdown>
  </div>
</template>
