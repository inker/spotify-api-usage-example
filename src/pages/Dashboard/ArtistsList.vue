<template>
  <div>
    <div class="artists-title">
      Recent artists:
    </div>
    <fragment v-if="list">
      <ul
        v-if="list.length > 0"
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
      <MenuItem
        v-else
        text="No artists found"
      />
    </fragment>
    <MenuItem
      v-else
      class="loading-item"
      text="Loading..."
    />
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
  display: flex;
  color: inherit;
  text-decoration: inherit;

  &:hover {
    background-color: rgba(128, 192, 255, 0.1);
  }
}

.loading-item {
  color: var(--light-grey);
}
</style>
