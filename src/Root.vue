<template>
  <div class="app-root">
    <Theming />
    <notifications group="global" />
    <router-view />
  </div>
</template>

<script>
import Theming from './Theming'

export default {
  components: {
    Theming,
  },
}
</script>

<style lang="postcss" scoped>
.app-root {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
