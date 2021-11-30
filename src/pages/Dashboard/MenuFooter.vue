<template>
  <div>
    <router-link
      class="logout-link"
      :to="{
        name: 'logout',
      }"
    >
      <MenuItem
        text="Sign out"
      />
    </router-link>
  </div>
</template>

<script>
import {
  mapActions,
} from 'vuex'

import MenuItem from './MenuItem'

export default {
  components: {
    MenuItem,
  },

  methods: {
    ...mapActions('auth', {
      signOut: 'signOut',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.logout-link {
  text-decoration: inherit;
  display: flex;
  line-height: 3rem;
  background-color: #222;
  color: white;

  &:hover {
    background-color: #c33;
  }
}
</style>
