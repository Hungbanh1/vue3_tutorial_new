<template>
  <h1>layout homdsadsae</h1>
  <!-- <h2>{{ firstName }}</h2> -->
  <!-- <h2>{{ second }}</h2> -->
  <!-- <h2>{{ car }}</h2> -->
  <input type="text" v-model="searchText" />
  <!-- <button @click="onChangeSomething">Click</button> -->
  <ul>
    <li v-for="(customer, index) in customersFilted" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
//ref se bao boc 1 lop object o ngoai , phai truy cap qua thuoc tinh value ms co the lay du lieu
//reaction se bao boc 1 proxy object , co the truy cap gia tri 1 cach bth price, name , .,...
//watch theo doi 1 cai bien
//watcheffect giong computed tao ra su thay doi khi noi tai thay doi  chay lai lien tuc , kh tra du lieu
export default {
  setup() {
    const firstName = ref("hung");
    const searchText = ref("");
    const customers = reactive(["hung", "Porsche", "ga", "SG"]);
    //ham tim kiem
    const customersFilted = computed(() =>
      //   customers.filter((customers) => customers.includes(searchText.value))\
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          //   console.log(customer);
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    watch(searchText, (newVal, oldVal) => {
      // ham nay show ra gia tri moi dung truoc , gia tri cu dung sau : 12 1
      console.log(newVal, oldVal);
    });
    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });
    const second = ref({
      name: "Hung123",
      age: 16,
    });
    let car = reactive({
      price: "1000",
      name: "Porsche",
    });
    function onChangeSomething() {
      //   firstName = "ga";
      //   console.log(firstName);
      second.value.name = "hhudasdsadsa";
      //   car.price = "2000000";
      //   car.price = "2000000";
      console.log("running");
      console.log(car);
      console.log(second);

      car = {
        price: "099099",
        name: "Merc",
      };
    }
    return {
      customers,
      customersFilted,
      onChangeSomething,
      firstName,
      second,
      car,
      searchText,
    };
    // console.log(firstName);
  },
};
</script>
