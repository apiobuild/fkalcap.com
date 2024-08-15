<template>
  <v-container class="pt-extra px-extra pb-15">
    <v-row>
      <v-col>
        <p class="text-h3" style="color: rgb(var(--v-theme-primary))">
          Contact
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field label="First Name"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field label="Last Name"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field label="Firm"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field label="Phone"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Email"></v-text-field>
      </v-col>
      <v-col cols="12">
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
