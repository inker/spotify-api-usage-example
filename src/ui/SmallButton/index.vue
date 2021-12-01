<template>
  <button
    :type="type"
    class="small-button"
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

<style lang="postcss" scoped>
.small-button {
  margin: 0;
  width: 8rem;
  height: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 999px;
  background-color: var(--blue);
  color: var(--white);

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--light-grey);

    &:hover {
      filter: initial;
    }
  }
}
</style>
