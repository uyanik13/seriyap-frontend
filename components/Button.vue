<template>
  <a
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: "",
  },
  callback: {
    type: Function,
    default: null,
  },
});

// state:styles
const defaultStyle = `
  cursor-pointer
  transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center
`;
const styles = reactive({
  primary:
    "text-gray-800 bg-white hover:bg-gray-800 hover:text-white hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white",
  secondary:
    "rounded-lg bg-primary  text-center text-sm font-bold text-white transition duration-500 ease-in-out hover:bg-gray-800 hover:border-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white",
});
const sizes = reactive({
  lg: "h-12 px-8 text-lg rounded-lg",
  md: "h-10 px-6 text-base rounded",
  sm: "h-8 px-4 text-sm rounded",
  xs: "h-6 px-3 text-xs rounded",
});

// state
const selectedStyle = computed(() => styles[props.type] || styles.primary);
const selectedSize = computed(() => sizes[props.size] || sizes.lg);

// methods
const onClick = () => {
  console.log('ss')
  if (props.callback) {
    props.callback();
  }
};
</script>
