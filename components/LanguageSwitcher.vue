<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">Theme</ListboxLabel>
      <ListboxButton type="button" title="Change Language">
        <span class="flex items-center justify-center">
          <IconLa:language />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="dark:highlight-white/5 absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg bg-white p-1 py-1 text-sm font-semibold text-gray-700 shadow-lg outline-none ring-1 ring-gray-900/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-0"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          :class="{
            'flex cursor-pointer items-center py-2 px-2': true,
            'bg-gray-100 text-sky-500 dark:bg-gray-600/30':
              localeSetting === lang.iso,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              localeSetting !== lang.iso,
          }"
        >
          <span class="mr-2 text-sm">
            {{ lang.flag }}
          </span>
          <span class="flex-1 truncate">
            {{ lang.name }}
            <span class="text-xs">({{ lang.iso }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="localeSetting"
      class="w-full rounded border border-gray-900/10 bg-transparent px-2 py-1 pr-3 text-gray-700 outline-none dark:border-gray-50/[0.2] dark:text-gray-300"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
        class="flex items-center space-x-2"
      >
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { availableLocales } from "~/utils/lang";

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: "dropdown-right-top",
  },
});

// state
const currentStyle = toRef(props, "type");
const localeSetting = useState<string>("locale.setting");
</script>
