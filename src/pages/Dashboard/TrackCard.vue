<template>
  <div class="track-card-root">
    <LazyImage
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

import LazyImage from 'App/ui/LazyImage'

export default {
  components: {
    LazyImage,
  },

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
  --track-card-height: 5rem;

  display: flex;
  gap: 0.5rem;
  overflow: hidden;
  width: 20rem;
  height: var(--track-card-height);
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  color: var(--fake-black);

  [data-theme=dark] & {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    background-color: var(--dark-grey);
    color: var(--light-grey);
  }
}

.track-image {
  height: 100%;
  width: var(--track-card-height);
  max-width: var(--track-card-height);
  user-select: none;
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
  color: var(--fake-black);

  [data-theme=dark] & {
    color: var(--white);
  }
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

  [data-theme=dark] & {
    color: var(--light-grey);
  }
}
</style>
