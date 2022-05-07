<script setup lang="ts">

const props = defineProps({
  modal: {
    type: Boolean,
    required: true,
    default: false,
  }
})

const { modal, modalAction } = useModal();

watch (modal, (val) => {
    console.log(val);
})



</script>

<template>
  <div class="absolute w-full min-h-max" v-if="modal" >
    <div class="h-screen w-full z-10 inset-0 overflow-y-auto">
      <div class="absolute w-full h-full inset-0 bg-gray-600 opacity-50"  @click="modalAction"></div>
      <div class="flex justify-center items-center min-h-screen">
        <div
          class="
            inline-block
            w-full
            overflow-hidden
            transform
            transition-all
            sm:align-middle sm:max-w-lg
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="max-w-lg w-full bg-white rounded p-6 space-y-4">
            <div class="absolute top-0 right-0 m-5">
               <IconsClose @click="modalAction"/>
            </div>
            <div class="mb-4">
              <p class="text-gray-600">Giris yap</p>
              <h2 class="text-xl font-bold">
                Hemen hizmet almak icin giris yapin
              </h2>
            </div>
            <div>
              <input class="custom-input-2" type="text" placeholder="Email" />
            </div>
            <div>
              <input
                class="custom-input-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <button class="btn-primary w-full">Sign In</button>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-row items-center">
                <input
                  type="checkbox"
                  class="
                    focus:ring-blue-500
                    h-4
                    w-4
                    text-blue-600
                    border-gray-300
                    rounded
                  "
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
  </div>
</template>