<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import { fireStoreCore } from "./config/firebase";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    async function getTransactions() {
      const response = await fireStoreCore.collection("transactions").get();
      console.log(response.docs);
      const data = response.docs.map((doc) => {
        //day vao trong ... object va lay id
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(data);
    }
    getTransactions();
  },
};
</script>
