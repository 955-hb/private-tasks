Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    mouseClick(e) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeBtn(index) {
      this.fruitBasket.splice(index, 1);
    },
  },
}).mount("#app");
