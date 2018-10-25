<template lang="html">
  <md-card @click.native="$router.push({ name: 'pokemon', params: { id: item.id }})">
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img :src="item.img" alt="Skyscraper">
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">{{ item.name }}</span>
          <span class="md-subhead">Experiencia: {{ item.base_exp}} </span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    gotoComponent: {
      type: String,
      default: 'pokemon',
    },
  },
};
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer,
  }
</style>
