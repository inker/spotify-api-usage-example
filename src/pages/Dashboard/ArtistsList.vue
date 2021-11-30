<template>
  <div>
    <div class="artists-title">
      Recently artists:
    </div>
    <ul
      v-if="list"
      class="artist-list"
    >
      <li
        v-for="item of list"
        :key="item.id"
      >
        <router-link
          class="artist-link"
          :to="{
            query: {
              artist: item.id,
            },
          }"
        >
          <MenuItem
            :text="item.name"
            :isSelected="item.id === selectedId"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  components: {
    MenuItem,
  },

  props: {
    list: Array,
    selectedId: String,
  },
}
</script>

<style lang="postcss" scoped>
.artists-title {
  padding: 0.5rem;
  font-weight: bold;
  color: var(--white);
}

.artist-list {
  width: 100%;
}

.artist-link {
  color: inherit;
  text-decoration: inherit;
}
</style>
