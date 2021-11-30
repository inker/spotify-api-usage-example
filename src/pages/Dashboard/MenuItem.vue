<template>
  <div
    class="artist-item-root"
    :class="{
      selected: isSelected,
    }"
  >
    <div class="name">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isSelected: Boolean,
  },
}
</script>

<style lang="postcss" scoped>
.artist-item-root {
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;

  &:hover {
    background-color: rgba(128, 192, 255, 0.1);
  }

  &.selected {
    color: #0df;
  }
}

.name {
  padding: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
