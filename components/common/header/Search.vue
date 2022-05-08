<script setup>
const search = ref("");
const results = ref("");
const query = ref("");
const searchResultsVisible = ref(false);
const searchResults = ref([]);
const highlightedIndex = ref(0);

const reset = () => {
  query.value = "";
  highlightedIndex.value = 0;
};
const softReset = () => {
  searchResults.valueVisible = true;
  highlightedIndex.value = 0;
};
const focusSearch = (e) => {
  if (e.key === "/") {
    search.valuee.focus();
  }
};
const performSearch = () => {
  if (query.value.length < 2) return false;
  // axios
  //   .get(`/api/search-name/${query.value.toLowerCase()}`)
  //   .then((response) => {
  //     searchResults.value = response.data.filter((item) =>
  //       item.name.toLowerCase().includes(query.value.toLowerCase())
  //     );
  //   });
};
const highlightPrevious = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value = highlightedIndex.value - 1;
    this.scrollIntoView();
  }
};
const highlightNext = () => {
  if (highlightedIndex.value < searchResults.value.length - 1) {
    highlightedIndex.value = highlightedIndex.value + 1;
    this.scrollIntoView();
  }
};
const scrollIntoView = () => {
  results.value.children[highlightedIndex.value].scrollIntoView({
    block: "nearest",
  });
};
const gotoLink = () => {
  if (searchResults.value[highlightedIndex.value]) {
    window.location = searchResults.value[highlightedIndex.value].item.slug;
  }
};
</script>

<template>
  <div class="relative">
    <div class="relative w-full">
      <input
        ref="search"
        v-model="query"
        type="text"
        :placeholder="$t('components.header.search_place_holder')"
        class="focus:indigo-500 z-30 w-full rounded-lg border-1 border-gray-400 py-3 pl-10 text-sm focus:outline-none focus:ring-1 lg:px-10 lg:py-4"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="softReset"
        @keyup="performSearch"
        @keydown.up.prevent="highlightPrevious"
        @keydown.down.prevent="highlightNext"
        @keydown.enter="gotoLink"
      />

      <div class="absolute top-0 ml-3">
        <svg
          fill="currentColor"
          class="mt-4 h-5 w-5 text-gray-500"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          ></path>
        </svg>
      </div>

      <div
        v-if="query.length > 0"
        class="absolute top-0 right-0 mr-5 cursor-pointer text-5 text-gray-600 hover:text-gray-800"
        style="top: 2px"
        @click="reset"
      >
        &times;
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="query.length > 0 && searchResultsVisible"
        class="border shadow absolute left-0 right-0 z-10 mt-2 mb-4 w-108 overflow-hidden overflow-y-auto rounded-lg bg-white text-left normal-case"
        style="max-height: 32rem"
      >
        <div ref="results" class="flex flex-col">
          <nuxt-link
            v-for="(item, index) in searchResults"
            :key="index"
            :to="localePath({ name: 'name-slug', params: { slug: item.slug } })"
            class="border-b hover:bg-blue-00 cursor-pointer border-gray-400 p-4 text-xl"
            :class="{ 'bg-blue-100': index === highlightedIndex }"
            @mousedown.prevent="searchResultsVisible = true"
          >
            {{ item.title }}
            <div class="flex">
              <img
                v-if="item.image"
                class="mx-1 h-16 w-16 rounded-full lg:w-16"
                :src="item.image"
              />
              <img
                v-else
                class="mx-1 h-16 w-24 rounded-full"
                :src="`~/assets/images/baby-images/boy/e-11.jpg`"
              />
              <div class="grid">
                <span class="mx-1 my-1 text-sm font-normal">{{
                  item.name
                }}</span>
                <span class="mx-2 flex">
                  <p class="mx-1 text-sm text-gray-800">
                    {{ item.mean[$i18n.locale] }}
                  </p>
                </span>
              </div>
            </div>
          </nuxt-link>

          <div
            v-if="searchResults.length === 0"
            class="border-b w-full cursor-pointer p-4 font-normal shadow-lg"
          >
            <p class="my-0">
              {{ $t("No results for ") }}'<strong>{{ query }}</strong
              >'
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
