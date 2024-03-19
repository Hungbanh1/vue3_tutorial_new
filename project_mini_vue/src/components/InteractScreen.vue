<template>
  <div class="screen">
    <h1>Interact Component</h1>

    <Card
      v-for="(card, index) in cardsContext"
      :key="index"
      :imgBackFaceUrl="`${card}.png`"
      :ref="`card-${index}`"
      :card="{ index: index, value: card }"
      :index="index"
      @onFlip="checkRule($event)"
    ></Card>
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
      // this.rules.push(event);
      // console.log(card);
      // kiem tra mang 2 phan tu
      if (this.rules.length === 2) {
        return false;
      }
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right");
      } else if (
        this.rules.length === 2 &&
        !this.rules[0].value !== this.rules[1].value
      ) {
        console.log("wrong");

        //tao do true
        setTimeout(() => {
          // truong hop 2 the sai thi dong' và reset mang rules ve 0 , dong 2 the?
          this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();
        }, 800);
        //reset array rules
        this.rules = [];
      } else {
        return false;
      }
      console.log(this.rules);
    },
  },
};
</script>

<style scoped></style>
