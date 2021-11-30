import {
  mapGetters,
  mapMutations,
} from 'vuex'

const matchResult = window.matchMedia('(prefers-color-scheme: dark)')

export default {
  computed: {
    ...mapGetters('appearance', {
      isDarkMode: 'isDarkMode',
    }),
  },

  watch: {
    isDarkMode: {
      immediate: true,
      handler(newVal) {
        document.body.dataset.theme = newVal ? 'dark' : 'light'
      },
    },
  },

  mounted() {
    this.setSystemTheme(matchResult.matches)
    matchResult.addEventListener('change', this.handleMatchMediaChange)
  },

  beforeDestroy() {
    document.body.removeAttribute('data-theme')
    matchResult.removeEventListener('change', this.handleMatchMediaChange)
  },

  methods: {
    ...mapMutations('appearance', [
      'setSystemTheme',
    ]),

    handleMatchMediaChange(e) {
      this.setSystemTheme(e.matches ? 'dark' : 'light')
    },
  },

  render(h) {
    return h()
  },
}
