<template>
  <fragment>
    <GlobalEvents
      @mousemove.stop="onMouseMove"
      @mouseup.stop="onMouseUp"
    />
    <GlobalClassList
      :value="globalClass"
    />
    <div
      class="resize-bar"
      :style="{
        left: x,
      }"
      @mousedown="onMouseDown"
    />
  </fragment>
</template>

<script>
import {
  mapState,
  mapMutations,
} from 'vuex'
import GlobalEvents from 'vue-global-events'
import { clamp } from 'lodash'

import GlobalClassList from 'App/ui/GlobalClassList'

export default {
  name: 'Resize',

  components: {
    GlobalEvents,
    GlobalClassList,
  },

  props: {
    value: Boolean,
  },

  computed: {
    ...mapState('sidebar', [
      'x',
    ]),

    globalClass() {
      return this.value ? 'global-resizing' : undefined
    },
  },

  methods: {
    ...mapMutations('sidebar', [
      'setX',
      'resetState',
    ]),

    onMouseDown() {
      this.$emit('input', true)
    },

    onMouseMove(e) {
      if (!this.value) {
        return
      }

      const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth

      const minOffset = Math.max(width * 0.1, 225)
      const maxOffset = width * 0.4
      const offset = Math.round(clamp(e.clientX, minOffset, maxOffset))
      this.setX(`${offset}px`)
    },

    onMouseUp() {
      this.$emit('input', false)
    },
  },
}
</script>

<style lang="postcss" scoped>
.resize-bar {
  position: fixed;
  display: none;
  width: 10px;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  cursor: ew-resize;
  display: unset;
  left: 12.5rem;

  &:hover, .global-resizing & {
    border-left: 2px solid blue;
  }
}
</style>

<!-- eslint-disable-next-line vue-scoped-css/enforce-style-type -->
<style lang="postcss">
.global-resizing {
  user-select: none;
  cursor: ew-resize !important;

  * {
    pointer-events: none !important;
    cursor: ew-resize !important;
  }

  .resize-bar {
    pointer-events: initial !important;
  }
}
</style>
