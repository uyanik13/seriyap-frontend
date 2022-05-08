<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const steps = ref([
  {
    id: 1,
    title: "Ihtiyacini Belirt",
    description:
      "Kategoriler arasından ihtiyacın olan hizmeti seç ve formu doldur.",
    icon: "1",
  },
  {
    id: 2,
    title: "Birçok Teklif Al",
    description:
      "Hizmet talebini inceleyen yüzlerce usta sana teklif vermeye hazır",
    icon: "2",
  },
  {
    id: 3,
    title: "Ustanı Seç",
    description:
      "Sana teklif veren ustalarımız ararasından birisini fiyat ve yorumları baz alarak seç!",
    icon: "3",
  },
]);

const trendingCollections = [
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/3b65c117-9e3b-4c5e-bc67-46702e13ecd3.jpeg",
    name: "Murathan Yeni",
    slug: "voxoDeus",
    star: 5,
    service: "Elektrik",
    serviceCount: 164,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/fcc12322-a61a-4778-978c-fed376114059.jpeg",
    name: "Lokman Sekmen",
    slug: "ghxsts",
    star: 3,
    service: "Temizlik",
    serviceCount: 125,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/68e8fb5d-792f-4611-a6f7-0bfeb1ac118e.jpeg",
    name: "Fahri İşeri",
    slug: "polka-city-asset",
    star: 4,
    service: "Boya",
    serviceCount: 98,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/5fa55200-821e-4261-b5f1-69751d0c7f3b.jpeg",
    name: "Emrah Köftercioglu",
    slug: "zed-run",
    star: 2,
    service: "Elektrik",
    serviceCount: 75,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/cc82a8c7-a827-41bc-bd86-a52936e5446f.jpeg",
    name: "Zafer Özoğul",
    slug: "voxoDeus",
    star: 5,
    service: "Tadilat",
    serviceCount: 10,
  },
];
</script>

<template>
  <div class="flex flex-col justify-center pb-8">
    <h2 class="lg:text-7 mb-8 text-center text-xl font-semibold">
      İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet
    </h2>
    <div class="flex flex-col items-center justify-center lg:flex-row">
      <common-cards-steps-card
        v-for="step in steps"
        :key="step.id"
        :step="step"
      />
    </div>
  </div>
  <div class="flex flex-col justify-center py-8">
    <CommonSliderCardSlide
      :section-icon="`~/assets/images/icons/arrow-up.svg`"
      :section-title="`Ayin Trend hizmet verenleri`"
      :items="trendingCollections"
    />
  </div>
</template>
