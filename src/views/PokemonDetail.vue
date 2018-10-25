<template>
  <div>
    <md-card>
      <md-card-header>
        <md-avatar>
          <img :src="pokemon.avatar" alt="Avatar">
        </md-avatar>

        <div class="md-title">Nombre: {{ pokemon.name }}</div>
        <div class="md-subhead">Peso: {{ pokemon.weight }} </div>
      </md-card-header>

      <md-card-media>
        <img :src="pokemon.img" alt="Pokemon">
      </md-card-media>
      <md-card-content>
        <md-list :md-expand-single="expandSingle">
          <md-list-item md-expand :md-expanded.sync="expandAbilities">
            <md-icon>whatshot</md-icon>
            <span class="md-list-item-text">Habilidades</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset" v-for="(item, key) in pokemon.abilities" v-bind:key="key">{{ item.ability.name }}</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'PokemonDetail',
  data() {
    return {
      pokemon: [],
      expandAbilities: true,
      expandSingle: false,
    };
  },
  mounted() {
    let url = 'https://pokeapi.co/api/v2/pokemon/:id/';
    url = url.replace(':id', this.$route.params.id);
    this.pokemon = [];
    this.axios
      .get(url)
      .then((response) => {
        this.pokemon = {
          abilities: response.data.abilities,
          name: response.data.name,
          weight: response.data.weight,
          avatar: response.data.sprites.back_default,
          img: response.data.sprites.front_default,
        };
      });
  },
};
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
</style>
