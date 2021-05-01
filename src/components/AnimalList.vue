<template>
  <div
    class="bg-white flex items-center p-2 rounded-xl shadow border group hover:scale-110 hover:bg-gray-200"
  >
    <div class="flex items-center space-x-4">
      <img
        src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
        alt="My profile"
        class="w-16 h-16 rounded-full"
      />
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700 group-hover:text-black">
        {{ dog.name }}
      </div>
      <div class="text-sm text-gray-500 group-hover:text-black">
        {{ dog.age }}
      </div>
      <div class="text-sm text-gray-500 group-hover:text-black">
        {{ dog.breed }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimalList',
  components: {},
  props: {
    dog: Object,
  },
};
</script>

<style></style>
