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
              />
            </li>
          </ul>
          <div
            v-else
          >
            No tracks found
          </div>
        </fragment>
        <div class="loading-item">
          Loading...
        </div>

        <div>
          <button
            type="button"
            @click="onClickPrev"
          >
            Prev
          </button>
          <button
            type="button"
            @click="onClickNext"
          >
            Next
          </button>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import { uniqBy } from 'lodash'

import api from 'App/api'
import errorHandler from 'App/errorHandler'

import Layout from 'App/ui/Layout'
import ThemeSelector from 'App/ui/ThemeSelector'

import ArtistsList from './ArtistsList'
import MenuFooter from './MenuFooter'
import TrackCard from './TrackCard'

export default {
  components: {
    Layout,
    ThemeSelector,
    ArtistsList,
    MenuFooter,
    TrackCard,
  },

  data() {
    return {
      timer: null,
      recentlyPlayedTracks: null,
    }
  },

  computed: {
    selectedArtistId() {
      return this.$route.query.artist
    },

    recentArtists() {
      const { recentlyPlayedTracks } = this
      if (!recentlyPlayedTracks) {
        return null
      }
      const artists = recentlyPlayedTracks?.flatMap(item => item.track.artists)
      return uniqBy(artists, 'id')
    },

    displayedTracks() {
      const { recentlyPlayedTracks } = this
      if (!recentlyPlayedTracks) {
        return null
      }

      const { selectedArtistId } = this
      return selectedArtistId
        // eslint-disable-next-line max-len
        ? recentlyPlayedTracks.filter(item => item.track.artists.some(artist => artist.id === selectedArtistId))
        : recentlyPlayedTracks
    },
  },

  created() {
    this.repeatLoadData()
  },

  beforeDestroy() {
    clearTimeout(this.timer)
  },

  methods: {
    async repeatLoadData() {
      await this.loadRecentlyPlayedTracks()
      this.timer = setTimeout(this.repeatLoadData, 30000)
    },

    async loadRecentlyPlayedTracks() {
      try {
        const data = await api.getRecentlyPlayedTracks({
          limit: 20,
        })
        this.recentlyPlayedTracks = data.items
      } catch (err) {
        errorHandler.handle(err)
      }
    },

    onClickPrev() {
      console.log('prev')
    },

    onClickNext() {
      console.log('next')
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
}

.menu-top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-container {
  padding: 1rem;
}

.unselect-link {
  display: flex;
  margin-bottom: 1rem;
  color: var(--blue);

  .dark-mode & {
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

  .dark-mode & {
    color: var(--light-grey);
  }
}
</style>
