<template>
  <form action="" @submit.prevent="onSubmit">
    <!-- Start main form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span>Total</span>
                <input
                  class="text-4xl text-dark w-full outline-none mt-1"
                  id="total"
                  type="text"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto text-dark w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-xl text-dark w-full outline-none"
                  id="category"
                  type="text"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span class="flex flex-none w-10 mr-4">
                  <i class="fa-solid fa-book text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-dark w-full outline-none"
                  id="note"
                  type="text"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="fa-solid fa-calendar-days text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2 border border-gray-100">
                <div class="text-dark w-full">
                  {{ new Date() }}
                </div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="fa-solid fa-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- Start more Details -->
    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More details
      </button>
    </div>
    <template v-if="isMoreDetails">
      <!-- Start advanced form -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex flex-none w-10 mr-4">
                    <i class="fa-solid fa-location-dot text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    id="location"
                    type="text"
                    placeholder="Select a location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="person" class="flex items-center">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex flex-none w-10 mr-4">
                    <i class="fa-solid fa-people-arrows text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    id="person"
                    type="text"
                    placeholder="With person"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Start upload photo -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex flex-none w-10 mr-4">
                    <i class="fa-solid fa-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <div class="w-full font-semibold">Upload Photos</div>
                  <input
                    id="file"
                    type="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onFileChange"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- error file -->
      <div class="text-red my-3">{{ errorFile }}</div>
    </template>
    <button type="submit" class="bg-primary text-white">
      Testing Add button
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    const isMoreDetails = ref(false);
    const total = ref(0);
    // transaction la collection trong firebase  co the tao moi hoac dung collection da tao
    const { error, addRecord } = useCollection("transactions");
    const { uploadFile, url } = useStorage("transactions");
    //id
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const person = ref("");
    const file = ref(null);
    const errorFile = ref(null);
    const { getUser } = useUser();
    //input luon luon truyen params la event
    function onFileChange(event) {
      const selectedImg = event.target.files[0];
      //type files
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];
      //type dạng image/png
      if (selectedImg && typesFile.includes(selectedImg.type)) {
        file.value = selectedImg;
      } else {
        file.value = null;
        errorFile.value = "Please select a file type png,jpg or jpeg .";
      }
    }
    async function onSubmit() {
      if (file.value) await uploadFile(file.value);
      console.log("url: ", url);
      const { user } = getUser();

      // // console.log(user);
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
        thumbnail: url.value,
        location: location.value,
        person: person.value,
      };

      await addRecord(transaction);
      console.log(error);
      console.log("created");
    }

    return {
      onSubmit,
      isMoreDetails,
      total,
      category,
      note,
      time,
      onFileChange,
      errorFile,
      location,
      person,
      file,
    };
  },
};
</script>
