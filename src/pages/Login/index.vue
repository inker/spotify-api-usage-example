<template>
  <main class="login-root">
    <form
      @submit.prevent="signIn"
    >
      <LandingButton
        type="submit"
        class="login-button"
      >
        Sign in via Spotify
      </LandingButton>
    </form>
  </main>
</template>

<script>
import {
  mapActions,
} from 'vuex'

import LandingButton from 'App/ui/LandingButton'

export default {
  components: {
    LandingButton,
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
</style>
