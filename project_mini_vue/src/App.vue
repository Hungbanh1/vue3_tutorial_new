<template>
  <h1>testing</h1>
  <!-- lang nghe thang con gui du lieu len la2 $event va gui thang vao param trong cai ham onHandleBeforeStart -->
  <MainScreen
    v-if="statusMatch == 'default'"
    @onStart="onHandleBeforeStart($event)"
  ></MainScreen>
  <InteractScreen v-if="statusMatch == 'match'"></InteractScreen>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";

export default {
  data() {
    return {
      statusMatch: "default",
    };
  },
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
  },
  methods: {
    onHandleBeforeStart(config) {
      //logic nhu v ne component con tao phuong thuc onStart va dung phuong thuc emit de truyen du lieu total
      // o component cha (app) dung phuong thuc onStart de lang nghe su kien va duoc dat ten la onHandleBeforeStart de lang nghe su kien
      // cho 1 param la event
      //Trong Vue.js, $event là một biến đặc biệt được sử dụng để truyền dữ liệu từ component con tới component cha hoặc các thành phần khác thông qua sự kiện
      // alert(config.total);
      console.log("running handle before start,", config);
      this.statusMatch = "match";
    },
  },
};
</script>

<style></style>
