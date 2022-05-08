<template>
  <div
    class="h-106 relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat font-sans"
    :style="`background-image: url(${bgImage});`"
  >
    <div class="flex w-full items-center justify-around py-4 text-white">
      <!-- LOGO -->
      <div class="flex">
        <a :href="localePath('/')">
          <div id="logo" class="mx-2 flex w-24 lg:mx-8 lg:w-64">
            <p
              class="text-6 lg:text-7 ml-2 flex font-sans font-bold leading-relaxed tracking-normal"
            >
              seri<span class="text-primary">yap</span>
            </p>
          </div>
        </a>
      </div>
      <!-- LOGIN BUTTONS -->
      <div class="lg-mx-0 mx-2 flex space-x-2">
        <Button
          :text="`Giriş Yap`"
          size="md"
          class="font-extrabold capitalize"
          @click="modalAction"
        />

        <Button
          :text="`Hizmet Ver`"
          size="md"
          :type="`secondary`"
          class="font-extrabold"
        />
      </div>
    </div>

    <!-- WELCOME TEXT -->
    <div
      class="flex w-full flex-col items-center justify-around lg:mt-0 lg:justify-center"
    >
      <div class="mx-2 text-center text-white lg:mx-4">
        <header>
          <slot name="header"> </slot>
        </header>
        <h1 class="text-10 lg:text-12 mb-2 font-bold leading-tight lg:mb-4" >
          Aradığın Hizmeti Seri Bul
        </h1>
        <h2 class="mb-8 text-xl font-bold">
          İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet
        </h2>
        <div>
          <div id="search" class="my-2">
            <common-header-search></common-header-search>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICES -->
    <div class="absolute bottom-0 flex flex-col bg-black bg-opacity-25">
      <div
        class="mb-3 grid grid-cols-3 gap-4 md:grid-cols-6 lg:-mb-12 lg:grid-cols-6 lg:gap-10"
      >
        <CommonCardsServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>

    <!-- LOGIN MODAL -->
    <common-modal-login :modal="modal" />
  </div>
</template>

<script setup lang="ts">
const { modal, modalAction } = useModal();

const search = ref([]);
const services = ref([
  {
    id: 1,
    name: "Temizlik",
    slug: "temizlik",
    icon: "clean",
  },
  {
    id: 2,
    name: "Boya",
    slug: "boya",
    icon: "paint",
  },
  {
    id: 3,
    name: "Tadilat",
    slug: "tadilat",
    icon: "repair",
  },
  {
    id: 4,
    name: "Elektrik",
    slug: "elektrik",
    icon: "electric",
  },
  {
    id: 5,
    name: "Nakliyat",
    slug: "nakliyat",
    icon: "",
  },
  {
    id: 6,
    name: "Diger",
    slug: "diger",
    icon: "",
  },
]);
const bgImage = ref(
  "https://cdn.armut.com/images/custom-web-elements/hero-november-19/10.jpg"
);

// const getLocale = (locale) => {
//   locale = locales.filter((i) => i.code == locale);
//   if (locale.length > 0) {
//     return locale[0].name;
//   } else {
//     return "Türkçe";
//   }
// };

const localePath = (val) => {
  return val;
};
</script>
