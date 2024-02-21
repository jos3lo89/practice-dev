import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// directiva simple
app.directive("font-size", {
  beforeMount: (el) => {
    el.style.fontSize = "100px";
  },
});

//directiva custom value
app.directive("custom-size", {
  beforeMount: (el, binding) => {
    el.style.fontSize = binding.value + "px";
  },
});

// directivar con argumentos v-bind:
app.directive("custom-size2", {
  beforeMount: (el, binding) => {
    let size = 18;

    switch (binding.arg) {
      case "sm":
        size = 10;
        break;
      case "md":
        size = 18;
        break;
      case "lg":
        size = 25;
        break;
      case "xl":
        size = 40;
        break;
      case "xxl":
        size = 72;
        break;
    }

    el.style.fontSize = size + "px";
  },
});


// app.directive("custom-font", {
//   beforeMount: (el, binding) => {
//     let size = 18
//     if (){
      
//     }
//   }
// })

app.mount("#app");
