import { ref } from "vue";
export default function () {
  const transactions = ref([]);
  const error = ref(null);
  console.log(transactions, error);
  const fetchAll = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");

      if (!response.ok)
        throw new Error("Something went wrong, please try again");

      transactions.value = await response.json();
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };

  return { transactions, error, fetchAll };
}
