<template>
  <v-container class="pt-extra px-extra">
    <v-row>
      <v-col>
        <p class="text-h3" style="color: rgb(var(--v-theme-primary))">Team</p>
      </v-col>
    </v-row>
    <v-row v-for="p in team" :key="p.name" class="pt-15">
      <v-col cols="12" md="2">
        <v-img width="150" :src="p.img" />
      </v-col>
      <v-col cols="12" md="10">
        <v-card variant="flat" color="transparent">
          <v-card-title>
            {{ p.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ p.title }}
          </v-card-subtitle>

          <v-card-text>
            {{ p.description }}
          </v-card-text>
          <div class="blue-line"></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Placeholder from "~/assets/images/photo-placeholder.png";
</script>

<script>
export default {
  name: "team",
  data() {
    return {
      team: [
        {
          img: Placeholder,
          name: "FRANCIS LEUNG",
          title: "CEO",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" +
            "nonummy nibh euismod tincidunt ut laoreet dolore magna" +
            "aliquam erat volutpat. Ut wisi enim ad minim veniam, quis" +
            "nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip" +
            "ex ea commodo consequat. Duis autem vel eum iriure dolor in" +
            "hendrerit in vulputate velit esse molestie consequat.",
        },
        {
          img: Placeholder,
          name: "KEVIN LEUNG",
          title: "MANAGING DIRECTOR",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" +
            "nonummy nibh euismod tincidunt ut laoreet dolore magna" +
            "aliquam erat volutpat. Ut wisi enim ad minim veniam, quis" +
            "nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip" +
            "ex ea commodo consequat. Duis autem vel eum iriure dolor in" +
            "hendrerit in vulputate velit esse molestie consequat.",
        },
        {
          img: Placeholder,
          name: "ALBERT LEUNG",
          title: "TITLE",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam" +
            "nonummy nibh euismod tincidunt ut laoreet dolore magna" +
            "aliquam erat volutpat. Ut wisi enim ad minim veniam, quis" +
            "nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip" +
            "ex ea commodo consequat. Duis autem vel eum iriure dolor in" +
            "hendrerit in vulputate velit esse molestie consequat.",
        },
      ],
    };
  },
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

.blue-line {
  height: 2px;
  background-color: rgb(var(--v-theme-primary));
  margin-top: 20px;
}
</style>
