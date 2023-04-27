const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
    };
  },
});

const mountedApp = app.mount("#app");
