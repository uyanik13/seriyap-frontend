<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";
interface Props {
  sectionTitle: String;
  sectionIcon: String;
  items: Array<any>;
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: "",
  sectionIcon: "",
  items: () => [],
});



const swiperOption = ref({
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3.5,
  speed: 600,
  parallax: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    390: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
</script>
<template>
  <div class="lg:mx-24 justify-center py-2 my-3 flex">
    <h2 class="lg:text-7 text-xl font-bold">{{ sectionTitle }}</h2>
  </div>
  <div class="lg:w-full lg:px-24 px-8">
    <client-only>
      <swiper
        :slides-per-view="swiperOption.slidesPerView"
        :space-between="swiperOption.spaceBetween"
        :auto-update="true"
        :auto-destroy="true"
        :options="swiperOption"
        :breakpoints="swiperOption.breakpoints"
        :navigation="true"
        :modules="[Navigation]"
        ref="swiperTop"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <NuxtLink to="/">
            <div
              class="
                rounded rounded-lg
                overflow-hidden
                shadow
                my-3
                bg-white
                no-underline
                shadow-md
              "
            >
              <div
                class="
                  absolute
                  top-5
                  left-0
                  m-2
                "
              >
                <span
                  class="
                    relative
                    inline-block
                    p-2
                    font-semibold
                    text-white
                    leading-tight
                  "
                >
                  <span
                    aria-hidden="true"
                    class="
                      absolute
                      inset-0
                      bg-green-600
                      rounded-full
                    "
                  >
                  </span>
                  <span class="relative"> {{item.service}} </span>
                </span>
              </div>
              <div
                class="
                  absolute
                  top-5
                  right-0
                  m-2
                "
              >
                <span
                  class="
                    relative
                    inline-block
                    p-3
                    font-semibold
                    text-white
                    leading-tight
                  "
                >
                  <span
                    aria-hidden="true"
                    class="
                      absolute
                      inset-0
                      bg-primary
                      rounded-full
                    "
                  >
                  </span>
                  <span class="relative"> {{item.serviceCount}} </span>
                </span>
              </div>
              <img :src="item.image" class="object-cover w-full h-64" />
              <div v-if="item.itemId" class="text-center px-3 pb-3 pt-2">
                <div class="flex justify-between items-center">
                  <p class="ml-1 mt-1 text-3.5 font-light text-gray-500">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-3.5 font-light text-gray-500">Price</p>
                </div>
                <div class="flex justify-between items-center">
                  <p class="ml-1 mt-1 text-4 font-bold text-gray-900">
                    {{ item.title }}
                  </p>
                  <p class="mt-1 text-4 font-bold text-gray-900">
                    {{ item.price }}
                  </p>
                </div>
              </div>
              <div v-else class="text-center px-3 pb-3 pt-2">
                <div class="flex justify-between items-center">
                  <p class="ml-1 mt-1 text-4 font-bold text-gray-800">
                    {{ item.name }}
                  </p>
                  <div class="flex text-sm">
                    <CommonStuffStar :star="item.star" />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </swiper-slide>

        
      </swiper>
    </client-only>
  </div>
</template>


<style >
.swiper-button-next,
.swiper-button-prev {
    background-color: white;
    background-color: rgba(255, 255, 255, 0.685);
    right:10px;
    padding: 30px;
    color: #FF6000 !important;
    fill: #FF6000 !important;
    stroke: #FF6000 !important;
}
</style>