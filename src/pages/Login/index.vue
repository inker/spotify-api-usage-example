<template>
  <main class="login-root">
    <form
      @submit.prevent="signIn"
    >
      <BaseButton
        type="submit"
        class="login-button"
      >
        Sign in via Spotify
      </BaseButton>
    </form>
  </main>
</template>

<script>
import {
  mapActions,
} from 'vuex'

import BaseButton from 'App/ui/BaseButton'

export default {
  components: {
    BaseButton,
  },

  methods: {
    ...mapActions('auth', {
      signIn: 'signIn',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.login-root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

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

  &:disabled {
    cursor: not-allowed;
    background-color: var(--light-grey);

    &:hover {
      filter: initial;
    }
  }
}
</style>
