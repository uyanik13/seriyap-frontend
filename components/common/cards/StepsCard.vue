<script setup lang="ts">
interface Props {
  step: object;
}

const props = withDefaults(defineProps<Props>(), {
  step: {
    id:1,
    title:'Ihtiyacini Belirt',
    description:'Kategoriler arasından ihtiyacın olan hizmeti seç ve formu doldur.',
    icon:''
  },
 
});
</script>
<template>
  <div class="bg-white text-center rounded-lg border shadow-xl p-10 max-w-xs overflow-hidden mx-4 my-2">
    <div class="mb-3 w-20 h-20 rounded-full shadow-lg mx-auto flex justify-center items-center">
      <p class="text-6 text-primary"> {{step.icon}}</p>
    </div>
     <h3 class="lg:text-6 text-xl text-black font-semibold leading-tight"> {{step.title}} </h3>
     <p class="lg:text-5 text-md text-gray-700 mt-4 leading-none"> {{step.description}} </p>
   </div>
</template>