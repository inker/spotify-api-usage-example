<template>
  <button
    :type="type"
    class="login-button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
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
  },
}
</script>

<style lang="postcss" scoped>
.login-button {
  margin: 0;
  width: 12rem;
  height: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 999px;
  background-color: var(--blue);
  color: var(--white);

  &:hover {
    filter: brightness(1.1);
  }
}
</style>
