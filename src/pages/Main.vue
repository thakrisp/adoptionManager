<template>
  <div class="flex flex-col sm:grid grid-cols-3 gap-4 pt-3 px-5" id="find">
    <div v-for="dog in sortedByAdopted" :key="dog._id">
      <AnimalItem :dog="dog" />
    </div>
  </div>
</template>

<script>
import AnimalItem from '../components/AnimalItem.vue';
export default {
  name: '',
  components: {
    AnimalItem,
  },
  props: {},
  data() {
    return {
      dogs: [
        {
          _id: '00001',
          name: 'Axel',
          breed: 'Pitbull',
          age: '3 years',
          adopted: false,
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
          name: 'Kovu',
          breed: 'Husky',
          age: '3 years',
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
          name: 'Sadie',
          breed: 'Rat mix',
          age: '7 Months',
          adopted: false,
          applications: [],
        },
        {
          _id: '00003',
          name: 'Tia',
          breed: 'Shepard Mix',
          age: '6 Months',
          adopted: true,
          applications: [],
        },
      ],
    };
  },
  computed: {
    sortedByAdopted() {
      let dogs = this.dogs;
      return dogs.sort((a, b) => a.adopted - b.adopted);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
