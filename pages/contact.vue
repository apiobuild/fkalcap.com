<template>
  <v-container class="pt-extra px-extra">
    <v-row>
      <v-col>
        <p class="text-h3" style="color: rgb(var(--v-theme-primary))">
          Contact
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pt-15">
        <v-text-field label="Email"></v-text-field>
        <v-btn color="primary">Submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Contact",
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
