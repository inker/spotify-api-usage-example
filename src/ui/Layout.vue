<template>
  <div class="dashboard-root">
    <Resize
      v-model="isResizing"
    />
    <div
      class="sidebar"
      :style="{
        width: sideBarLeft,
      }"
    >
      <slot name="sidebar" />
    </div>
    <main
      class="content"
      :style="{
        'margin-left': sideBarLeft,
      }"
    >
      <slot name="content" />
    </main>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex'

import Resize from './Resize'

export default {
  components: {
    Resize,
  },

  data() {
    return {
      isResizing: false,
    }
  },

  computed: {
    ...mapState('sidebar', {
      sideBarLeft: 'x',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.dashboard-root {
  --sidebar-initial-width: 12.5rem;

  display: flex;
}

.sidebar {
  position: fixed;
  height: 100%;
  width: var(--sidebar-initial-width);
}

.content {
  margin-left: var(--sidebar-initial-width);
  width: 100%;
}
</style>
