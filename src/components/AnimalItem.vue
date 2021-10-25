<template>
  <!-- <router-link :to="{ path: '/animals/' + dog._id, params: { msg } }"> -->
  <router-link
    :to="{
      name: 'animalPage',
      params: { id: dog._id, name: dog.name, breed: dog.breed, age: dog.age },
    }"
  >
    <div
      class="bg-white flex items-center p-2 rounded-xl shadow border group hover:scale-110 hover:bg-gray-200 hover:opacity-100"
      :class="dog.adopted ? 'opacity-25' : 'opacity-100'"
    >
      <div class="flex items-center space-x-4">
        <img
          src="https://previews.123rf.com/images/lar01joka/lar01joka1804/lar01joka180400019/100152648-cute-shiba-inu-dog-avatar.jpg"
          alt="profile image"
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
  </router-link>
</template>

<script>
export default {
  name: 'AnimalItem',
  components: {},
  data: function() {
    return {
      msg: 'this is a message',
    };
  },
  props: {
    dog: Object,
  },
};
</script>

<style></style>
