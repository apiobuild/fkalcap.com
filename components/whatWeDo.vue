<template>
  <v-container class="pt-extra px-extra ">
    <v-row>
      <v-col cols="12">
        <p class="text-h3" style="color: rgb(var(--v-theme-primary))">
          What We Do
        </p>
        <p class="pt-15">
          FKAL Capital is a commercial real estate company focused on the
          acquisition and repositioning of well located assets. We are a real
          estate firm specialized in the acquisition and management of well
          positioned commercial properties in the New York Metro as well as in
          select urban markets nationwide.
        </p>
      </v-col cols=12>
      <v-col class="pt-15">
        <PhotoAlbum :photos="photos" layout="rows" rows="3" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>

import Photo1 from "~/assets/images/AloftFidi_1.jpg"
import Photo2 from "~/assets/images/Bridge Street.jpg"
import Photo3 from "~/assets/images/FourPoints_1.jpg"
import Photo4 from "~/assets/images/IMG_4644.jpg"
import Photo5 from "~/assets/images/IMG_4647.jpg"

import { ref } from "vue";
import { PhotoAlbum } from "vue-photo-album";

const photos = ref([
  {
    src: Photo1,
    width: 1280,
    height: 853,
    title: "Aloft"
  },
  {
    src: Photo2,
    width: 1448,
    height: 800,
    title: "Bridge Street"
  },
  {
    src: Photo3,
    width:1400,
    height: 933,
    title: "Four Points"

  },
    {
    src: Photo4,
    width: 2016,
    height: 1512,
  },
    {
    src: Photo5,
    width: 2016,
    height: 1512,
  },
]);
</script>

<script>
export default {
  name: "what-we-do",
};
</script>
