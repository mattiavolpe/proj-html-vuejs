<script>
import { contacts } from "./../assets/data/contacts.js"
export default {
  name: "ContactFooter",
  data() {
    return {
      contacts,
    }
  },
}
</script>

<template>
  <section class="contacts col">
    <h5>CONTACT</h5>
    <p class="address m-0">{{ `${contacts.country}, ${contacts.state} ${contacts.houseNumber}, ${contacts.street}, ${contacts.state}` }}</p>
    <p class="phone_numbers my-3">
      Tel.: {{ contacts.tel }}
      <br>
      Fax.: {{ contacts.fax }}
    </p>
    <p class="email m-0">{{ contacts.email }}</p>
  </section>
  <!-- /.col -->
</template>
