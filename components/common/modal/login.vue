<script setup lang="ts">
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

const props = defineProps({
  modal: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const form = ref({
  email: "",
  password: "",
});
const { modal, modalAction } = useModal();
</script>

<template>
  <TransitionRoot appear :show="modal" as="template">
    <div v-if="modal" class="absolute min-h-max w-full">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="z-999! inset-0 h-screen w-full overflow-y-auto">
          <div
            class="absolute inset-0 h-full w-full bg-gray-600 opacity-50"
            @click="modalAction"
          ></div>
          <div class="flex min-h-screen items-center justify-center">
            <div
              class="inline-block w-full transform overflow-hidden transition-all sm:max-w-lg sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="w-full max-w-lg space-y-4 rounded bg-white p-6">
                <button class="absolute top-0 right-0 m-5">
                  <IconIc:outline-close @click="modalAction" />
                </button>
                <div class="mb-4">
                  <p class="text-gray-800">Giris yap</p>
                  <h2 class="text-xl font-bold">
                    Hemen hizmet almak icin giris yapin
                  </h2>
                </div>
                <div>
                  <FormTextInput
                    v-model="form.email"
                    :placeholder="`Please type an email`"
                    size="md"
                  />
                </div>
                <div>
                  <FormTextInput
                    v-model="form.password"
                    :placeholder="`Password`"
                    size="md"
                  />
                </div>
                <div>
                  <Button
                    :text="`Giris Yap`"
                    size="md"
                    :type="`secondary`"
                    class="font-extrabold"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex flex-row items-center">
                    <input
                      type="checkbox"
                      class="accent-primary h-4 w-4 rounded focus:ring-blue-500"
                    />
                    <label
                      for="comments"
                      class="ml-2 text-sm font-normal text-gray-600"
                      >Remember me</label
                    >
                  </div>
                  <div>
                    <a class="text-sm text-blue-600 hover:underline" href="#"
                      >Forgot password?</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionChild>
    </div>
  </TransitionRoot>
</template>
