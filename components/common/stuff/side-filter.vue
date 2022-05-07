<script setup lang="ts">
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const commentCount = ref(0);
const serviceCount = ref(0);
const searchQuery = ref("");
const commentFilter = ref(1);
const commentFilterOptions = [
  {
    name: "1 star",
    value: 1,
  },
  {
    name: "2 stars",
    value: 2,
  },
  {
    name: "3 stars",
    value: 3,
  },
  {
    name: "4 stars",
    value: 4,
  },
  {
    name: "5 stars",
    value: 5,
  },
];

// const rangeCommentCount = computed(() => commentCount.value * 10)

</script>
<template>
  <div class="mb-2 -mt-8">
    <span class="text-4">Filters</span>
  </div>
  <div class="p-3 bg-white rounded shadow-lg rounded-sm my-2">
    <div class="flex flex-col">
      <span class="text-3.5 mb-2">Star Rates</span>
      <div class="flex justify-start my-1" v-for="i in 5" :key="i">
        <label class="inline-flex items-center">
          <input type="checkbox" class="custom-checkbox" /><span
            class="text-gray-700"
          >
            <CommonStuffStar :star="i" />
          </span>
        </label>
      </div>
    </div>
  </div>
  <div class="p-3 bg-white rounded shadow-lg rounded-sm my-2">
    <div class="flex flex-col">
      <span class="text-3.5 mb-2">Comment Count</span>
      <div class="flex space-x-2">
        <input type="range" class="w-8/12" min="0" max="5000" step="1" v-model="commentCount"> 
        <input type="number"
          :class="{ 'w-14': commentCount > 999, 'w-10': commentCount > 99  }"
          class="w-8 inline-block rounded-lg border-1 border-gray-400 py-2 px-2 text-sm focus:outline-none focus:ring-1" v-model="commentCount"/>
      </div>
      
    </div>
  </div>
  <div class="p-3 bg-white rounded shadow-lg rounded-sm my-2">
    <div class="flex flex-col">
      <span class="text-3.5 mb-2">Service Count</span>
      <div class="flex space-x-2">
        <input type="range" class="w-8/12" min="0" max="5000" step="1" v-model="serviceCount"> 
        <input type="number"
          :class="{ 'w-14': serviceCount > 999, 'w-10': serviceCount > 99  }"
          class="w-8 inline-block rounded-lg border-1 border-gray-400 py-2 px-2 text-sm focus:outline-none focus:ring-1" v-model="serviceCount"/>
      </div>
      
    </div>
  </div>
</template>

<style>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }

</style>

