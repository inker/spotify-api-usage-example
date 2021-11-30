<template>
  <form
    @submit.prevent="signIn"
  >
    <button
      type="submit"
    >
      Sign in via Spotify
    </button>
  </form>
</template>

<script>
import {
  mapActions,
} from 'vuex'

export default {
  methods: {
    ...mapActions('auth', {
      signIn: 'signIn',
    }),
  },
}
</script>
