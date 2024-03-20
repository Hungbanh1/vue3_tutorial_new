<template>
  <h1>testing</h1>
  <!-- lang nghe thang con gui du lieu len la2 $event va gui thang vao param trong cai ham onHandleBeforeStart -->
  <MainScreen
    v-if="statusMatch == 'default'"
    @onStart="onHandleBeforeStart($event)"
  ></MainScreen>
  <InteractScreen
    v-if="statusMatch == 'match'"
    :cardsContext="settings.cardsContext"
    @onFinish="onGetResult"
  ></InteractScreen>
  <ResultScreen
    :timer="timer"
    v-if="statusMatch == 'result'"
    @onStartAgain="statusMatch == 'default'"
  ></ResultScreen>
  <CopyRightScreen></CopyRightScreen>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import { shuffled } from "./ultis/array.js";
import ResultScreen from "./components/ResultScreen.vue";
import CopyRightScreen from "./components/CopyRightScreen.vue";
export default {
  data() {
    return {
      statusMatch: "default",
      settings: {
        total: 0,
        cardsContext: [],
        startedAt: null,
      },
      timer: 0,
    };
  },
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    CopyRightScreen,
  },
  methods: {
    onHandleBeforeStart(config) {
      //logic nhu v ne component con tao phuong thuc onStart va dung phuong thuc emit de truyen du lieu total
      // o component cha (app) dung phuong thuc onStart de lang nghe su kien va duoc dat ten la onHandleBeforeStart de lang nghe su kien
      // cho 1 param la event
      //Trong Vue.js, $event là một biến đặc biệt được sử dụng để truyền dữ liệu từ component con tới component cha hoặc các thành phần khác thông qua sự kiện
      // alert(config.total);
      // console.log("running handle before start,", config);
      const total = config.total;
      const firstCards = Array.from(
        { length: total / 2 },
        //default params
        (_, i) => i + 1
      );
      //es6 copy
      const secondCards = [...firstCards];
      // gop 2 mang
      const cards = [...secondCards, ...firstCards];
      //gan mang
      this.settings.cardsContext = shuffled(
        shuffled(shuffled(shuffled(shuffled(cards))))
      );
      this.settings.startedAt = new Date().getTime();

      this.settings.total = config.total;
      //data ready
      this.statusMatch = "match";
    },
    onGetResult() {
      //get timer
      this.timer = new Date().getTime() - this.settings.startedAt;
      //switch to result component
      this.statusMatch = "result";
    },
  },
};
</script>

<style></style>
