
<template>
  <div
    class="
      w-full
      flex flex-col items-center 
      h-106
      bg-center bg-no-repeat bg-cover
      relative
      font-sans
    "
    :style="`background-image: url(${bgImage});`"
  >
    <div class="flex w-full items-center py-4 text-white justify-around ">
        <!-- LOGO -->
        <div class="flex">
          <a :href="localePath('/')">
            <div id="logo" class="flex w-24 mx-2 lg:mx-8 lg:w-64">
              <p
                class="flex
                  ml-2
                  text-6
                  lg:text-7
                  font-sans font-bold
                  tracking-normal
                  leading-relaxed
                "
              >
                seri<span class="text-primary">yap</span>
              </p>
            </div>
          </a>
        </div>
         <!-- LOGIN BUTTONS -->
        <div class="flex space-x-2 lg-mx-0 mx-2">
          <button
            @click="modalAction()"
            class="
             btn-secondary
            "
          >
            Giriş Yap 
          </button>
          <button
            class="
             btn-primary
            "
          >
            Hizmet Ver
          </button>
        </div>
      </div>

        <!-- WELCOME TEXT -->
    <div
      class="
        w-full
        lg:mt-0
        flex flex-col
        lg:justify-center 
        justify-around
        items-center
      "
    >
      <div class="mx-2 lg:mx-4 text-center text-white">
         <header>
          <slot name="header">
           
          </slot>
        </header>
        <h1 class="font-bold text-10 lg:text-12 mb-2 lg:mb-4 leading-tight">Aradığın Hizmeti Seri Bul</h1>
        <h2 class="font-bold text-xl mb-8">
          İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet
        </h2>
        <div>
          <div
            class="flex items-center max-w-md mx-auto bg-white rounded-lg"
          >
            <div class="w-full">
              <input
                type="search"
                class="
                  w-full
                  px-4
                  py-1
                  text-gray-800
                  rounded-lg
                  focus:outline-none
                "
                v-model="search"
                placeholder="hangi hizmeti ariyorsun"
              />
            </div>
            <div class="flex">
              <button
                type="submit"
                class="
                  bg-theme1
                  flex
                  items-center
                  justify-center
                  w-16
                  h-12
                  text-white
                  rounded-r-lg
                "
                :class="search.length > 0 ? 'bg-purple-500' : 'bg-gray-500 '"
              >
                Ara
                <svg
                  class="w-4 h-4 ml-1 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-- SERVICES -->
    <div class="flex flex-col  bg-opacity-25 bg-black absolute bottom-0">
      <div class="grid lg:gap-10 gap-4 grid-cols-3 md:grid-cols-6 lg:grid-cols-6 mb-3 lg:-mb-12 ">
        <CommonCardsServiceCard
          :service="service"
          v-for="service in services"
          :key="service.id"
        />
      </div>
    </div>

      <!-- LOGIN MODAL -->
      <common-modal-login :modal="modal"/>
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
    icon: 'clean',
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
