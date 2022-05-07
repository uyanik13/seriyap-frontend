
<template>
  <div
    class="
      w-full
      flex flex-col items-center 
      h-64
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
        <h1 class="font-bold text-10 lg:text-12 mb-2 lg:mb-4 leading-tight">Tadilat</h1>
        <h2 class="font-bold text-xl mb-8">
          İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet
        </h2>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const { width, type } = useBreakPoints();

definePageMeta({
        layout: false,
    });

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
