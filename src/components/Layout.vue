<template>
  <div class="bg-blue-500 text-yellow-300 text-center">Test</div>
  <div class="grid grid-cols-3 px-6">
    <div
      v-for="dog in dogs"
      :key="dog._id"
      class="flex flex-row justify-evenly py-3"
    >
      <AnimalList :dog="dog" class="w-2/3 transform" />
    </div>
  </div>
</template>

<script>
import AnimalList from './AnimalList';
export default {
  name: '',
  components: {
    AnimalList,
  },
  props: {},
  data() {
    return {
      dogs: [
        {
          _id: '00001',
          name: 'Zoey',
          breed: 'German Shepard',
          age: '4 Months',
          adopted: true,
          applications: [
            {
              id: '00001',
              file: '',
              name: '',
              favorite: true,
            },
          ],
        },
        {
          _id: '00002',
          name: 'Bandit',
          breed: 'Lab Mix',
          age: '8 Months',
          adopted: true,
          applications: [],
        },
        {
          _id: '00003',
          name: 'Tia',
          breed: 'German Shepard Mix',
          age: '6 Months',
          adopted: false,
          applications: [],
        },
        {
          _id: '00001',
          name: 'Zoey',
          breed: 'German Shepard',
          age: '4 Months',
          adopted: true,
          applications: [
            {
              id: '00001',
              file: '',
              name: '',
              favorite: true,
            },
          ],
        },
        {
          _id: '00002',
          name: 'Bandit',
          breed: 'Lab Mix',
          age: '8 Months',
          adopted: true,
          applications: [],
        },
        {
          _id: '00003',
          name: 'Tia',
          breed: 'German Shepard Mix',
          age: '6 Months',
          adopted: false,
          applications: [],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
