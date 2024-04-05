<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row mt-6 first:mt-0">
          <label class="flex flex-col" for="fullname">
            <span class="font-semibold">FullName</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="iMoney...."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="emailaddress">
            <span class="font-semibold">Email Address</span>
            <input
              id="emailaddress"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="example@gmail"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="iMoney...."
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg cursor-not-allowed bg-gray-800"
            type="button"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <!-- Start Error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>
      <!-- Start Direction  -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm aready a number</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign in</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  name: "RegisterLayout", // Updated component name to 'AuthLayout'
  setup() {
    const { error, isPending, signup } = useSignUp();
    const router = useRouter();
    const fullName = ref("");
    const password = ref("");
    const email = ref("");
    async function onSubmit() {
      await signup(email.value, password.value, fullName.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return { onSubmit, fullName, password, error, isPending, email };
  },
};
</script>
