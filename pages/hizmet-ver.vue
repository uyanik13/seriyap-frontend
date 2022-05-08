<script lang="ts" setup>
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

definePageMeta({
  layout: "full",
});

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

const selected = ref(plans[0]);
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <h1 class="mb-4 text-center font-black text-gray-700">STEPS</h1>
      <div class="flex">
        <div class="w-1/3 px-6 text-center">
          <div
            class="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-300"
          >
            <div
              class="icon-step flex h-20 w-1/3 items-center justify-center bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"
                />
              </svg>
            </div>
            <div
              class="body-step flex h-24 w-2/3 flex-col items-center justify-center rounded-r-lg bg-gray-200 px-1"
            >
              <h2 class="text-sm font-bold">Personal Info</h2>
              <p class="text-xs text-gray-600">
                Just your personal information
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"
            />
          </svg>
        </div>
        <div class="w-1/3 px-6 text-center">
          <div
            class="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-300"
          >
            <div
              class="icon-step flex h-20 w-1/3 items-center justify-center bg-transparent"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z"
                />
              </svg>
            </div>
            <div
              class="body-step flex h-24 w-2/3 flex-col items-center justify-center rounded-r-lg bg-gray-200 px-1"
            >
              <h2 class="text-sm font-bold">Account Info</h2>
              <p class="text-xs text-gray-600">
                Anything you want for your credentials
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"
            />
          </svg>
        </div>
        <div class="w-1/3 px-6 text-center">
          <div
            class="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-300"
          >
            <div
              class="icon-step flex h-20 w-1/3 items-center justify-center bg-transparent"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"
                />
              </svg>
            </div>
            <div
              class="body-step flex h-24 w-2/3 flex-col items-center justify-center rounded-r-lg bg-gray-200 px-1"
            >
              <h2 class="text-sm font-bold">Confirmation</h2>
              <p class="text-xs text-gray-600">Finish it!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="w-full px-4 py-16">
        <div class="mx-auto w-full max-w-md">
          <RadioGroup v-model="selected">
            <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
            <div class="space-y-2">
              <RadioGroupOption
                v-for="plan in plans"
                :key="plan.name"
                v-slot="{ active, checked }"
                as="template"
                :value="plan"
              >
                <div
                  :class="[
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : '',
                    checked
                      ? 'bg-sky-900 bg-opacity-75 text-white '
                      : 'bg-white ',
                  ]"
                  class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
                >
                  <div class="flex w-full items-center justify-between">
                    <div class="flex items-center">
                      <div class="text-sm">
                        <RadioGroupLabel
                          as="p"
                          :class="checked ? 'text-white' : 'text-gray-900'"
                          class="font-medium"
                        >
                          {{ plan.name }}
                        </RadioGroupLabel>
                        <RadioGroupDescription
                          as="span"
                          :class="checked ? 'text-sky-100' : 'text-gray-500'"
                          class="inline"
                        >
                          <span> {{ plan.ram }}/{{ plan.cpus }}</span>
                          <span aria-hidden="true"> &middot; </span>
                          <span>{{ plan.disk }}</span>
                        </RadioGroupDescription>
                      </div>
                    </div>
                    <div v-show="checked" class="shrink-0 text-white">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#fff"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M7 13l3 3 7-7"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  </div>
</template>
