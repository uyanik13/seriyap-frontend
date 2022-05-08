<script setup lang="ts">
interface Props {
  service: object;
}

const props = withDefaults(defineProps<Props>(), {
  service: {
    id: 1,
    name: "Temizlik",
    slug: "temizlik",
    icon: null,
  },
});
</script>
<template>
  <Anchor
    :to="service.slug ? `/service/` + service.slug : undefined"
    :href="service.href ? service.href : undefined"
    class="cursor-pointer rounded rounded-sm bg-white p-5 capitalize shadow-lg hover:text-slate-900 hover:no-underline hover:dark:text-white"
  >
    <div class="flex flex-col items-center pt-1">
      <svg class="mb-1 h-8 w-16 fill-current">
        <image :xlink:href="`/assets/image/icons/${service.icon}.svg`" />
      </svg>
      <div class="text-4 font-bold text-gray-900">{{ service.name }}</div>
    </div>
  </Anchor>
</template>
