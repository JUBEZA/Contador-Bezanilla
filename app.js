
// createApp
const {createApp} = Vue;

createApp({
  data() {


    return{
      titulo: "Contador-Bezanilla 🌖",
      counter: 0

    }
  },


    methods: {
      increment() {
        this.counter++;
      },
      decrement() {
        this.counter--;
      }
    }

}).mount("#app")


