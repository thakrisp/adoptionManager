<template>
  <div class="container mx-auto bg-red-500 rounded-lg flex justify-between p-5">
    <div class="w-40">
      <img
        src="https://image.freepik.com/free-vector/cute-australian-shepherd-dog-avatar-cartoon_357749-252.jpg"
        alt=""
        class="rounded-full"
      />
    </div>
    <div class="pl-5 flex flex-col justify-between flex-grow items-end">
      <div class="text-lg font-bold text-black">NAME</div>
      <div class="text-white">{{ name }}</div>
      <div class="text-lg font-bold text-black">AGE</div>
      <div class="text-white">{{ age }}</div>
      <div class="text-lg font-bold text-black">BREED</div>
      <div class="text-white">{{ breed }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animalPage',
  props: {
    dogInfo: Object,
    name: String,
    age: String,
    breed: String,
  },
  mounted() {},
};
</script>

<style></style>
