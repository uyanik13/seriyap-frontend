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
const search = ref('');
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
  <div class="lg:container flex flex-col justify-center mx-auto">
    <div class="mb-8 flex justify-between">
      <div id="bread-crumb" class="w-1/5">
        <NuxtLink to="/"
          >Anasayfa <span>></span>
          <NuxtLink to="/service/tadilat" class="font-semibold"
            >Tadilat</NuxtLink
          ></NuxtLink
        >
      </div>
      <div class="flex justify-between w-4/5">
        <div id="search" class="flex w-3/5 mx-4" >
         <input
                type="search"
                class="
                 text-sm
                  w-full
                  px-4
                  py-1
                  text-gray-800
                  rounded-lg
                  focus:outline-none
                "
                v-model="search"
                placeholder="Hizmet veren ara"
              />
              
      </div>
      <div id="location-filter" class="flex space-x-2">
        <div class="bg-white">
          <v-select
            v-model="cityFilter"
            :options="cityFilterOptions"
            class="w-40 text-sm"
            placeholder="Select a city"
            :reduce="(item) => item"
            label="name"
          />
        </div>
       <div class="bg-white" v-if="cityFilter && cityFilter.id">
          <v-select
            v-model="districtFilter"
            :options="cityFilter && cityFilter.id ?  cityFilter.districts : []"
            class="w-40 text-sm"
            placeholder="Select a district"
            :reduce="(item) => item"
            label="name"
          />
        </div>
      </div>
      </div>
    </div>
    <div class="flex mt-4">
      <div id="filter-side" class="w-1/5 mr-4">
        <common-stuff-side-filter />
      </div>
      <div id="content" class="w-4/5">
        <div class="flex flex-col sm:flex-row">
          <div
            class="
              grid
              lg:gap-4
              gap-4
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              4xl:grid-cols-6
              5xl:grid-cols-6
              mb-3
              lg:-mb-12
            "
          >
            <div
              class="
                px-8
                bg-white
                py-4
                rounded-lg
                shadow-lg
                text-center
                relative
              "
              v-for="item in serviceProviders"
              :key="item.slug"
            >
              <div class="flex items-center justify-center mb-3">
                <img class="w-24 h-24 rounded-full" :src="item.image" alt="" />
              </div>
              <h2 class="text-xl font-medium text-gray-700">
                {{ item.name.slice(0, 17) }}
              </h2>
              <span class="text-blue-500 block mb-5">{{
                item.description.slice(0, 100)
              }}</span>
              <div class="flex justify-center items-center text-sm space-x-2">
                <CommonStuffStar :star="item.star" />
                <nuxt-link to="/" class="text-blue-500 text-sm">
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
</style> >
