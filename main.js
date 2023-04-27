const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      google: 'https://www.google.co.uk'
    };
  },
});

const mountedApp = app.mount("#app");
