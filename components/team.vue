<template>
  <v-container class="pt-extra px-extra">
    <v-row>
      <v-col>
        <p class="text-h3" style="color: rgb(var(--v-theme-primary))">Team</p>
      </v-col>
    </v-row>
    <v-row v-for="p in team" :key="p.name" class="pt-15 px-0">
      <!-- <v-col cols="12" md="2">
        <v-img width="150" :src="p.img" />
      </v-col> -->
      <v-col cols="12" md="10">
        <v-card variant="flat" color="transparent">
          <v-card-title>
            {{ p.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ p.title }}
          </v-card-subtitle>

          <v-card-text>
            <span v-html="p.description"></span>
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
          name: "Francis Leung",
          title: "Managing Principal, CEO",
          description: `
            Francis Leung is Managing Principal, CEO, and co-founder of FKAL Capital. Founded in 2011, FKAL Capital is the family office of the Leung family that focuses on real estate investments across property types and throughout the capital stack. 
            <br />
            Prior to the formation of FKAL Capital, Francis oversaw the development of over 1 million square feet spread across four hotels including a Four Points by Sheraton (244 keys), a Sheraton Hotel (322 keys), a Fairfield Inn by Marriott (244 keys) and an Aloft (200 keys). 
            <br />
            In addition to managing FKAL Capital, Francis has executed over 30 leases totaling 75,000 square feet of space, primarily in the Midtown South submarket of Manhattan, as a Partner at Okada & Company. 
            <br />
            Francis departed this partnership in 2024 to focus on expanding the FKAL Capital platform as he views the real estate climate today as prime for investment for his family and third party investors. 
            <br />
            Francis is originally from New Jersey and received his Bachelor of Computer Science from the New Jersey Institute of Technology. He is the Foundation Chair and active member for Urban Land Institute’s Commercial and Retail Development Council National Product Council. 
            `,
        },
        {
          img: Placeholder,
          name: "Kevin Leung",
          title: "Managing Principal, CIO",
          description: `
            Kevin Leung Esq. is a Managing Principal, CIO, and co-founder of FKAL Capital.
            <br />
            In 2017, Kevin joined FKAL full time as CIO, overseeing the investment activity of FKAL. 
            <br />
            Prior to the formation of FKAL Capital, Kevin was a Partner at Dean Fong ESQ representing clients in real estate transactions. During his tenure, he focused on all facets of the real estate process including Purchase and Sale Agreements, Leasing, Contract Closings, Debt Refinancing, Partnership disputes, and Foreclosures. 
            <br />
            Kevin is originally from New Jersey and received his Bachelor of Arts, English Honors and Asian Studies degree from Seton Hall University and his Juris Doctorate from Brooklyn Law School. He passed the NY Bar Exam in 2012.
            `,
        },
      ],
    };
  },
};
</script>
<style>
.blue-line {
  height: 2px;
  background-color: rgb(var(--v-theme-primary));
  margin-top: 20px;
}
</style>
