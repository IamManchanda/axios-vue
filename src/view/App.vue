<template>
  <div id="app">
    <component-header />
    <router-view />
  </div>
</template>

<script>
import ComponentHeader from './components/header/index.vue';

export default {
  name: 'App',
  components: {
    ComponentHeader,
  },
};
</script>

<!-- <style lang="scss" scoped src="./_scoped.scss"></style> -->

