<template>
  <v-app id="app">
    <v-navigation-drawer
      app
      width="500"
      height="100vh"
      location="right"
      v-model="drawer"
      temporary
      color="background"
    >
      <v-container class="h-150">
        <v-row class="h-100">
          <v-col class="text-right my-auto">
            <v-icon icon="mdi-close" class="close" @click="drawer = !drawer" />
          </v-col>
        </v-row>

        <v-col class="px-10">
          <v-list-item
            class="text-h5 pt-10 no-active-background"
            v-for="item in items"
            :key="item.name"
            :to="{ path: item.link.path, hash: item.link.hash }"
            :active="false"
          >
            <span style="color: rgb(var(--v-theme-anchor))">
              {{ item.name }}
            </span>
          </v-list-item>
        </v-col>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar variant="flat" elevation="0" height="150" color="transparent">
      <v-spacer />
      <v-container class="text-right">
        <v-icon
          :color="iconColor"
          icon="mdi-menu"
          class="menu"
          @click.stop="drawer = !drawer"
        />
      </v-container>
    </v-app-bar>
    <NuxtPage />
  </v-app>
</template>

<script>
// Add your component options here
export default {
  data() {
    return {
      drawer: false,
      iconColor: "white", // Default to white since it's at the top initially
      items: [
        {
          name: "What We Do",
          link: { hash: "#what-we-do" },
        },
        {
          name: "About Us",
          link: { hash: "#about-us" },
        },
        {
          name: "Team",
          link: { hash: "#team" },
        },
        {
          name: "Contact",
          link: { hash: "#contact" },
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateIconColor);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateIconColor);
  },
  methods: {
    updateIconColor() {
      const scrollPosition = window.scrollY;

      // Change color based on scroll position relative to 100vh
      if (scrollPosition > window.innerHeight) {
        this.iconColor = "black";
      } else {
        this.iconColor = "white";
      }
    },
  },
};
</script>

<style>
.close {
  font-size: 50px;
  padding-right: 50px;
  padding-top: 35px;
}
.h-150 {
  height: 150px;
}
.h-100 {
  height: 100%;
}
.menu {
  font-size: 50px !important;
  padding-right: 50px;
}
.no-active-background {
  background-color: transparent !important;
}

.full-screen {
  min-height: 100vh;
}
@media (min-width: 1280px) {
  .px-extra {
    padding-left: 150px;
    padding-right: 150px;
  }
}
</style>
