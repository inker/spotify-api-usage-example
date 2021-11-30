<template>
  <div class="theme-selector-root">
    <Radio
      :name="name"
      :list="list"
      :selected="colorTheme"
      @input="setColorTheme"
    />
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
} from 'vuex'

import randomId from 'App/utils/randomId'

import Radio from './Radio'

export default {
  components: {
    Radio,
  },

  data() {
    return {
      name: randomId(),
      list: [
        {
          value: 'light',
          label: 'Light theme',
        },
        {
          value: 'dark',
          label: 'Dark theme',
        },
        {
          value: 'auto',
          label: 'System theme',
        },
      ],
    }
  },

  computed: {
    ...mapState('appearance', {
      colorTheme: 'colorTheme',
    }),
  },

  methods: {
    ...mapMutations('appearance', {
      setColorTheme: 'setColorTheme',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.theme-selector-root {
  display: flex;
  width: 100%;
}
</style>
