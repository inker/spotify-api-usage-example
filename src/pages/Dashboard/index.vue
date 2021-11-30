<template>
  <Layout>
    <template #sidebar>
      <div class="menu-container">
        <div class="menu-top">
          <ThemeSelector />
          <ArtistsList
            :list="recentArtists"
            :selectedId="selectedArtistId"
          />
        </div>
        <MenuFooter />
      </div>
    </template>

    <template #content>
      <div class="content-container">
        <router-link
          v-if="selectedArtistId"
          class="unselect-link"
          :to="{
            query: {
              artist: undefined,
            },
          }"
        >
          Display all artists
        </router-link>
        <fragment v-if="displayedTracks">
          <ul
            v-if="displayedTracks.length > 0"
            class="track-grid"
          >
            <li
              v-for="item of displayedTracks"
              :key="item.track.id"
            >
              <TrackCard
                :item="item"
                class="track-card"
                :class="{
                  'new-item': item.isNew,
                }"
              />
            </li>
          </ul>
          <div
            v-else
          >
            No tracks found
          </div>
        </fragment>
        <div
          v-else
          class="loading-item"
        >
          Loading...
        </div>

        <div class="content-footer">
          <SmallButton
            type="button"
            :disabled="!hasNext"
            @click="loadRecentTracks"
          >
            Load more
          </SmallButton>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import { uniqBy } from 'lodash'

import api from 'App/api'
import errorHandler from 'App/errorHandler'

import SmallButton from 'App/ui/SmallButton'
import Layout from 'App/ui/Layout'
import ThemeSelector from 'App/ui/ThemeSelector'

import ArtistsList from './ArtistsList'
import MenuFooter from './MenuFooter'
import TrackCard from './TrackCard'

const ITEMS_PER_PAGE = 20

export default {
  components: {
    SmallButton,
    Layout,
    ThemeSelector,
    ArtistsList,
    MenuFooter,
    TrackCard,
  },

  data() {
    return {
      timer: null,
      recentTracks: null,
      after: undefined,
      before: undefined,
      hasNext: true,
    }
  },

  computed: {
    selectedArtistId() {
      return this.$route.query.artist
    },

    recentArtists() {
      const { recentTracks } = this
      if (!recentTracks) {
        return null
      }
      const artists = recentTracks?.flatMap(item => item.track.artists)
      return uniqBy(artists, 'id')
    },

    displayedTracks() {
      const { recentTracks } = this
      if (!recentTracks) {
        return null
      }

      const { selectedArtistId } = this
      return selectedArtistId
        // eslint-disable-next-line max-len
        ? recentTracks.filter(item => item.track.artists.some(artist => artist.id === selectedArtistId))
        : recentTracks
    },
  },

  created() {
    this.init()
  },

  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  },

  methods: {
    async init() {
      await this.loadRecentTracks()
      await this.repeat()
    },

    repeat() {
      this.timer = setTimeout(async () => {
        await this.loadNewItems()
        this.repeat()
      }, 5000)
    },

    async loadRecentTracks() {
      try {
        const data = await api.getRecentlyPlayedTracks({
          limit: ITEMS_PER_PAGE,
          before: this.before,
        })
        this.recentTracks = [
          ...this.recentTracks ?? [],
          ...data.items,
        ]
        const { cursors } = data
        this.before = cursors?.before
        if (!this.after) {
          this.after = cursors?.after
        }
        if (!cursors) {
          this.hasNext = false
        }
      } catch (err) {
        errorHandler.handle(err)
      }
    },

    async loadNewItems() {
      if (!this.after) {
        return
      }

      const data = await api.getRecentlyPlayedTracks({
        limit: ITEMS_PER_PAGE,
        after: this.after,
      })
      this.recentTracks = [
        ...data.items.map(item => ({
          ...item,
          isNew: true,
        })),
        ...this.recentTracks ?? [],
      ]
      const { cursors } = data
      if (cursors) {
        this.after = cursors?.after
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  overflow-y: auto;
  background-color: var(--dark-bluish-grey);

  [data-theme=dark] & {
    background-color: var(--dark-grey);
  }
}

.menu-top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-container {
  padding: 1rem;
}

.content-footer {
  margin-top: 1rem;
}

.unselect-link {
  display: flex;
  margin-bottom: 1rem;
  color: var(--blue);

  [data-theme=dark] & {
    color: var(--light-blue);
  }
}

.track-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.loading-item {
  color: var(--dark-grey);

  [data-theme=dark] & {
    color: var(--light-grey);
  }
}

.new-item {
  animation: appear 3s ease;
}

@keyframes appear {
  from {
    background-color: var(--light-yellow);
  }

  to {}
}
</style>
