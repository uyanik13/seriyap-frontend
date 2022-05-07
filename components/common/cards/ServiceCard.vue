<script setup lang="ts">
interface Props {
  service: object;
}

const props = withDefaults(defineProps<Props>(), {
  service: {
    id:1,
    name:'Temizlik',
    slug:'temizlik',
    icon:null
  },
 
});


</script>
<template>
  <div class="p-5 bg-white rounded shadow-lg rounded-sm">
    <div class="flex flex-col items-center pt-1">

      <svg class="h-8 w-16 mb-1 fill-current" >       
        <image :xlink:href="`/assets/image/icons/${service.icon}.svg`"/>    
        </svg>
      <div class="text-4 font-bold text-gray-900">{{service.name}}</div>
    </div>
  </div>
</template>