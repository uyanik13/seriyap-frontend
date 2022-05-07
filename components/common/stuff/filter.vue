<script setup lang="ts">
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


const searchQuery = ref('')
const commentFilter = ref(1)
const commentFilterOptions = [
    {
        name:'1 star',
        value: 1,
    },
    {
        name:'2 stars',
        value: 2,
    },
    {
        name:'3 stars',
        value:3,
    },
    {
        name:'4 stars',
        value:4,
    },
    {
        name:'5 stars',
        value:5,
    },
]



</script>
<template>
  <div class="px-5 pb-3 bg-white rounded shadow-lg rounded-sm">
    <div class="flex flex-row bg-gray-200 ">
         <div class="flex flex-col ">
             <label class="my-2">Comment Filter</label>
            <v-select
              v-model="commentFilter"
              :options="commentFilterOptions"
              class="w-40"
              placeholder="1 star"
              :reduce="item => item.value" label="name"
            />
          </div>
          <div class="flex flex-col ">
             <label class="my-2">Comment Filter</label>
            <v-select
              v-model="commentFilter"
              :options="commentFilterOptions"
              class="w-40"
              placeholder="1 star"
              :reduce="item => item.value" label="name"
            />
          </div>
    </div>
  </div>
</template>

