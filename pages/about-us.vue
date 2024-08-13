<template>
  <v-container class="pt-extra px-extra">
    <v-row>
      <v-col>
        <p class="text-h3" style="color: rgb(var(--v-theme-primary))">
          About Us
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pt-15">
        <p>
          We are a family owned and operated company, with strong family values
          that are represented in our high level of service and integrity. Our
          values and the deep expertise of our team are what make FKAL
          Properties known throughout the industry as one of the most agile,
          creative, and operationally savvy real estate investors and owner-
          operators in New York.
        </p>
        <v-img :src="Doors" class="pt-15" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import Doors from "~/assets/images/Doors.png";
</script>
<script>
export default {
  name: "About Us",
};
</script>
<style scoped>
.pt-extra {
  padding-top: 200px;
}
@media (min-width: 1280px) {
  .px-extra {
    padding-left: 150px;
    padding-right: 150px;
  }
}
</style>
