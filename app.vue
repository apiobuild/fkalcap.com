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
            :to="item.link.to"
            :active="false"
          >
            <span style="color: rgb(var(--v-theme-anchor))">{{
              item.name
            }}</span>
          </v-list-item>
        </v-col>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar variant="flat" elevation="0" height="150" color="transparent">
      <v-spacer />
      <v-container class="text-right">
        <v-icon
          :color="isIndexPage ? 'white' : 'black'"
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
      items: [
        {
          name: "Team",
          link: { to: "/team" },
        },
        {
          name: "What We Do",
          link: { to: "/what-we-do" },
        },
        {
          name: "About Us",
          link: { to: "/about-us" },
        },
        {
          name: "Investor Login",
          link: { to: "/" },
        },
        {
          name: "Contact",
          link: { to: "/contact" },
        },
        {
          name: "Back",
          link: { to: "/" },
        },
      ],
    };
  },
  computed: {
    isIndexPage() {
      return this.$route.name === "index"; // Adjust based on your route naming
    },
  },
};
</script>

<style scoped>
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
  font-size: 50px;
  padding-right: 50px;
}
.no-active-background {
  background-color: transparent !important;
}
</style>
