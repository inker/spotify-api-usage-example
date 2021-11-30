import { get } from 'lodash'

const render = h => h()

const defaultTargetValue = () => ['document', 'body']

export default {
  props: {
    value: String,
    target: {
      type: [String, Array],
      default: defaultTargetValue,
    },
  },

  computed: {
    targetClassList() {
      return get(window, this.target).classList
    },
  },

  watch: {
    value(newValue, oldValue) {
      if (oldValue) {
        this.targetClassList.remove(oldValue)
      }
      if (newValue) {
        this.targetClassList.add(newValue)
      }
    },

    target(newTarget, oldTarget) {
      window[oldTarget].classList.remove(this.value)
      window[newTarget].classList.add(this.value)
    },
  },

  mounted() {
    if (this.value) {
      this.targetClassList.add(this.value)
    }
  },

  beforeDestroy() {
    if (this.value) {
      this.targetClassList.remove(this.value)
    }
  },

  render,
}
