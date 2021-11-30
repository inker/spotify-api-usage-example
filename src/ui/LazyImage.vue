<template>
  <img
    v-if="imageUrl"
    :src="imageUrl"
  />
  <div
    v-else
    class="dummy-div"
  />
</template>

<script>
import makeImage from 'App/utils/makeImage'

export default {
  props: {
    src: String,
  },

  data() {
    return {
      imageUrl: undefined,
    }
  },

  created() {
    this.preloadImage()
  },

  methods: {
    async preloadImage() {
      const img = await makeImage(this.src)
      this.imageUrl = img.src
    },
  },
}
</script>

<style scoped>
.dummy-div {
  display: flex;
  flex-shrink: 0;
  background-color: var(--light-grey);
}
</style>
