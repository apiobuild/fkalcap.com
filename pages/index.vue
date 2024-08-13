<template>
  <v-container class="homepage">
    <v-row class="pt-extra">
      <v-col class="text-center">
        <v-img height="70px" :src="Logo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Logo from "~/assets/images/FKAL_Black.png";
</script>

<script>
export default {
  name: "index",
};
</script>

<style scoped>
.homepage {
  background-image: url("/images/homepage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  max-width: 100vw;
  height: 100%;
  width: 100%;
}
.pt-extra {
  padding-top: 150pt;
}
</style>
