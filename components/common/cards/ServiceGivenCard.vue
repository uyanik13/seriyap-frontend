<script setup lang="ts">
interface Props {
  step: object;
}

const props = withDefaults(defineProps<Props>(), {
  step: {
    id:1,
    title:'Ihtiyacini Belirt',
    description:'Kategoriler arasından ihtiyacın olan hizmeti seç ve formu doldur.',
    icon:''
  },
 
});
</script>
<template>
 

<div class="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="pb-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr >
                            <th scope="col" class="px-5 py-3 bg-white  border-b-0.5 border-gray-400 text-gray-800  text-left text-sm uppercase font-normal">
                                Name
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b-1 border-gray-400 text-gray-800  text-left text-sm uppercase font-normal">
                                Service
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b-1 border-gray-400 text-gray-800  text-left text-sm uppercase font-normal">
                                Services / Star
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="block relative">
                                            <img alt="profil" src="https://www.tailwind-kit.com/images/person/8.jpg" class="mx-auto object-cover rounded-full h-8 w-8 "/>
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-gray-900 font-bold text-md">
                                            Jean
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    Temizlik
                                </p>
                            </td>
                            <td class="flex px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-3 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                        127
                                    </span>
                                </span>
                                <CommonStuffStar :star="5"/>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>

</template>