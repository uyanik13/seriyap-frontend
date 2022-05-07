<script setup lang="ts">
interface Props {
  star: number;
}

withDefaults(defineProps<Props>(), {
  star:3
});
</script>
<template>
    <div class="flex justify-center items-center">
    <div class="flex items-center">
        <svg v-for="(yellow) in star" :key="yellow" class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        <svg v-for="gray in 5-star" :key="gray" class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    </div>
    </div>
</template>