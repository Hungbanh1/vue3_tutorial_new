<template>
  <div class="screen">
    <div
      class="screen__inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <Card
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imgBackFaceUrl="`${card}.png`"
        :card="{ index, value: card }"
        :cardsContext="cardsContext"
        :rules="rules"
        @onFlip="checkRule($event)"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "./CardScreen.vue";
export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // test1: function () {},
    // test2: function () {},
  },
  components: {
    Card,
  },
  data() {
    return {
      //mang chua cac the giong , cart da~ mo?, day gia tri vua click vao mang
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);

      console.log(this.rules);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right");
        let temp = [...this.rules];
        console.log("temp:", temp);
        //neu truong hop dung se day temp vao 1 mang
        this.temp = [];
        console.log("temp sau khi:", temp);

        let index0 = this.rules[0].index;
        let index1 = this.rules[1].index;

        this.$refs[`card-${index0}`][0].onEnableDisableMode();
        this.$refs[`card-${index1}`][0].onEnableDisableMode();
        //reset rules
        this.rules = [];
        const disabledElements = document.querySelectorAll(
          ".screen .card.disabled"
        );
        if (
          disabledElements &&
          disabledElements.length === this.cardsContext.length - 2
        )
          setTimeout(() => {
            this.$emit("onFinish");
          }, 920);
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("Wrong");
        // console.log(this.$refs);
        //gan mang rules vao temp ;
        let temp = [...this.rules];
        console.log("temp:", temp);
        //luu tru thuoc tinh index
        let index0 = this.rules[0].index;
        let index1 = this.rules[1].index;
        //dat mang rules ve rong
        this.rules = [];

        // temp = [];
        console.log("this.rules:", this.rules);

        setTimeout(() => {
          // close two cards
          // console.log(this.$refs[`card-${this.rules[0].index}`]);
          this.$refs[`card-${index0}`][0].onFlipBackCard();
          this.$refs[`card-${index1}`][0].onFlipBackCard();
        }, 800);
        //reset rules = 0
        this.rules = [];
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: var(--light);
}

.screen__inner {
  width: calc(424px);
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
