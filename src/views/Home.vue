<template>
  <div>
    <card-list v-for="(item, key) in pokemones" v-bind:key="key" :item="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/material/CardList.vue';

export default {
  name: 'Home',
  components: {
    CardList,
  },
  data() {
    return {
      pokemones: [],
    };
  },
  mounted() {
    this.axios
      .get('https://pokeapi.co/api/v2/ability/94/')
      .then((response) => {
        this.pokemones = [];
        const data = response.data.pokemon;
        let i = 0;
        while (i < 3) {
          this.axios.get(data[i].pokemon.url)
            .then((res) => {
              this.pokemones.push({
                id: res.data.id,
                name: res.data.name,
                img: res.data.sprites.front_default,
                base_exp: res.data.base_experience,
              });
            });
          i += 1;
        }
      });
  },
};
</script>
