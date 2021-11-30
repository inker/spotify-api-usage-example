<template>
  <div class="dashboard-root">
    <Resize
      v-model="isResizing"
    />
    <div
      class="sidebar"
      :style="{
        width: sideBarLeft,
      }"
    >
      <div class="menu-container">
        <ArtistsList
          :list="recentArtists"
          :selectedId="selectedArtistId"
        />
        <MenuFooter />
      </div>
    </div>
    <div
      class="content"
      :style="{
        'margin-left': sideBarLeft,
      }"
    >
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
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex'

import { uniqBy } from 'lodash'

import api from 'App/api'
import errorHandler from 'App/errorHandler'

import Resize from './Resize'
import ArtistsList from './ArtistsList'
import MenuFooter from './MenuFooter'
import TrackCard from './TrackCard'

export default {
  components: {
    Resize,
    ArtistsList,
    MenuFooter,
    TrackCard,
  },

  data() {
    return {
      timer: null,
      isResizing: false,
      recentlyPlayedTracks: null,
    }
  },

  computed: {
    ...mapState('sidebar', {
      sideBarLeft: 'x',
    }),

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
.dashboard-root {
  --sidebar-width: 12.5rem;

  display: flex;
}

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--sidebar-width);
  overflow-y: auto;
  background-color: #33383d;
}

.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.content {
  margin-left: var(--sidebar-width);
  width: 100%;
  padding: 1rem;
}

.unselect-link {
  display: flex;
  margin-bottom: 1rem;
  color: #069;
}

.track-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
