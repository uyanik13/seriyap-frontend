<script setup lang="ts">
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const serviceProviders = [
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/3b65c117-9e3b-4c5e-bc67-46702e13ecd3.jpeg",
    name: "Murathan Yeni",
    slug: "voxoDeus",
    star: 5,
    service: "Elektrik",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 7,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/fcc12322-a61a-4778-978c-fed376114059.jpeg",
    name: "Lokman Sekmen",
    slug: "ghxsts",
    star: 3,
    service: "Temizlik",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 250,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/68e8fb5d-792f-4611-a6f7-0bfeb1ac118e.jpeg",
    name: "Fahri İşeri",
    slug: "polka-city-asset",
    star: 4,
    service: "Boya",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 75,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/5fa55200-821e-4261-b5f1-69751d0c7f3b.jpeg",
    name: "Emrah Köftercioglu",
    slug: "zed-run",
    star: 2,
    service: "Elektrik",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 9,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/cc82a8c7-a827-41bc-bd86-a52936e5446f.jpeg",
    name: "Zafer Özoğul",
    slug: "voxoDeus",
    star: 5,
    service: "Tadilat",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 10,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/cc82a8c7-a827-41bc-bd86-a52936e5446f.jpeg",
    name: "Yusuf Akaydın",
    slug: "voxoD2eus",
    star: 5,
    service: "Tadilat",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 10,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/cc82a8c7-a827-41bc-bd86-a52936e5446f.jpeg",
    name: "Abdülkadir Vural",
    slug: "voxoD2e2us",
    star: 5,
    service: "Tadilat",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 10,
  },
  {
    image:
      "https://cdn.armut.com/UserPics/tr:w-250,h-250/cc82a8c7-a827-41bc-bd86-a52936e5446f.jpeg",
    name: "Asiye Demir",
    slug: "voxoD2e2u2s",
    star: 5,
    service: "Tadilat",
    description:
      "İstanbul'da 7 sene direksiyon usta öğreticisi olarak çalıştım. Antalya'ya taşındıktan sonra ara verdiğim işime, bireysel olarak devam ediyorum. Kendi aracınızda birebir özel ders alabilirsiniz.",
    commentCount: 10,
  },
];
const search = ref("");
const cityFilter = ref(null);
const districtFilter = ref(null);
const cityFilterOptions = [
  {
    id: 34,
    name: "Istanbul",
    districts: [
      {
        id: 1,
        name: "Kadıköy",
      },
    ],
  },
  {
    id: 6,
    name: "Ankara",
  },
  {
    id: 13,
    name: "Bitlis",
  },
];
</script>

<template>
  <div class="mx-auto flex flex-col justify-center lg:container xl:container">
    <div class="mb-8 flex justify-between">
      <div id="bread-crumb" class="w-1/5">
        <div>
          <nuxt-link to="/">Anasayfa</nuxt-link> <span>> </span>
          <span class="font-semibold"> Tadilat</span>
          {{$route.params.slug}}
        </div>
      </div>
      <div class="flex w-4/5 justify-between">
        <div id="search" class="mx-4 flex w-4/5">
          <input
            v-model="search"
            type="search"
            class="focus:border-theme1 border-1 w-full rounded-lg border-gray-400 px-4 py-1 text-sm text-gray-800 focus:outline-none"
            placeholder="Hizmet veren ara"
          />
        </div>
        <div id="location-filter" class="flex space-x-2">
          <div class="bg-white">
            <v-select
              v-model="cityFilter"
              :options="cityFilterOptions"
              class="z-0 w-40 rounded-lg text-sm"
              placeholder="Select a city"
              :reduce="(item) => item"
              label="name"
            />
          </div>
          <div v-if="cityFilter && cityFilter.id" class="bg-white">
            <v-select
              v-model="districtFilter"
              :options="cityFilter && cityFilter.id ? cityFilter.districts : []"
              class="z-0 w-40 rounded-lg text-sm"
              placeholder="Select a district"
              :reduce="(item) => item"
              label="name"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex">
      <div id="filter-side" class="mr-4 w-1/5">
        <common-stuff-side-filter />
      </div>
      <div id="content" class="w-4/5">
        <div class="flex flex-col sm:flex-row">
          <div
            class="4xl:grid-cols-6 5xl:grid-cols-6 mb-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:-mb-12 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4"
          >
            <div
              v-for="item in serviceProviders"
              :key="item.slug"
              class="rounded-lg bg-white px-8 py-4 text-center shadow-lg"
            >
              <div class="mb-3 flex items-center justify-center">
                <img class="h-24 w-24 rounded-full" :src="item.image" alt="" />
              </div>
              <h2 class="text-xl font-medium text-gray-700">
                {{ item.name.slice(0, 17) }}
              </h2>
              <span class="mb-5 block text-gray-500">{{
                item.description.slice(0, 100)
              }}</span>
              <div class="flex items-center justify-center space-x-2 text-sm">
                <CommonStuffStar :star="item.star" />
                <nuxt-link to="/" class="text-sm text-blue-500">
                  {{ item.commentCount }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// This will also work in `<script setup>`
definePageMeta({
  layout: "service",
});
</script>

<style lang="scss">
@import "assets/scss/components/_vueSelect.scss";
</style>


