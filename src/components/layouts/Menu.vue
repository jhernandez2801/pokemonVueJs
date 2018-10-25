<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger @click.native="$router.push({ name: 'home'})">Listado</md-button>
    </md-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
