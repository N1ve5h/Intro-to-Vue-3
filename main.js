const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A garment for the foot and lower part of the leg, typically knitted from wool, cotton, or nylon."
    };
  },
});

const mountedApp = app.mount("#app");
