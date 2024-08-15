<template>
  <v-container ref="hero" class="homepage">
    <v-row class="pt-extra">
      <v-col class="text-center">
        <v-img height="70px" :src="Logo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.homepage {
  background-image: url("/images/homepage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  max-width: 100vw;
  width: 100%;
}
.pt-extra {
  padding-top: 150pt;
}
</style>

<script setup>
import Logo from "~/assets/images/FKAL_Black.png";
</script>
<script>
export default {
  name: "Hero",
};
</script>
