<template>
  <button
    :type="type"
    v-bind="$attrs"
    :disabled="disabled || isLoading"
    v-on="$listeners"
    @click="onClick"
  >
    <slot
      :isLoading="isLoading"
    />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: 'button',
    },

    disabled: Boolean,

    action: Function,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  methods: {
    async onClick(e) {
      this.$emit('click', e)
      this.isLoading = true
      await this.action?.(e)
      this.isLoading = false
    },
  },
}
</script>
