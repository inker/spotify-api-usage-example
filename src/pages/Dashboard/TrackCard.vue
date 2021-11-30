<template>
  <div class="track-card-root">
    <img
      class="track-image"
      :src="imageUrl"
    />
    <div class="content">
      <div>
        <div class="title">
          {{item.track.name}}
        </div>
        <div>
          <ul>
            <li
              v-for="artist of item.track.artists"
              :key="artist.id"
              class="artist"
            >
              {{artist.name}}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="played-at">
          Played at: {{formattedPlayedAtTimestamp}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    item: Object,
  },

  computed: {
    imageUrl() {
      return this.item.track.album.images[1].url
    },

    formattedPlayedAtTimestamp() {
      return format(new Date(this.item.played_at), 'dd MMM yyyy, HH:mm')
    },
  },
}
</script>

<style lang="postcss" scoped>
.track-card-root {
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
  width: 20rem;
  height: 5rem;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.track-image {
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.25rem;
  overflow: hidden;
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.played-at {
  font-size: 0.75rem;
  font-style: italic;
  color: var(--grey);
}
</style>
