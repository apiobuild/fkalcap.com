// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { mdi, aliases } from "vuetify/lib/iconsets/mdi";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "lightColorTheme",
      themes: {
        lightColorTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    }
  });
  app.vueApp.use(vuetify);
});

// color theme
const lightColorTheme = {
  dark: false,
  colors: {
    background: "#f2f3e1",
    surface: "#FFFFFF",
    primary: "#498fd3",
    "primary-darken-1": "#144db2",
    secondary: "#18b9f3",
    "secondary-darken-1": "#2bcd95",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    anchor: "#144db2",
  },
};
