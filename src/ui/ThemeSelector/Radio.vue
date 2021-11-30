<template>
  <div class="radio-root">
    <label
      v-for="item of list"
      :key="item.value"
      class="theme-item"
      :class="{
        selected: item.value === selected,
      }"
    >
      <input
        type="radio"
        :name="name"
        :value="item.value"
        :checked="item.value === selected"
        @input="$emit('input', item.value)"
      />
      {{item.label}}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    list: Array,
    selected: String,
  },
}
</script>

<style lang="postcss" scoped>
.radio-root {
  display: flex;
  width: 100%;
}

input[type=radio] {
  display: none;
  cursor: pointer;
}

.theme-item {
  display: flex;
  align-items: center;
  flex: 1 1 0px;
  height: 3rem;
  max-width: 4rem;
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  font-size: 0.875rem;
  color: white;

  &.selected {
    background-color: #069 !important;
  }

  &:hover {
    background-color: rgba(128, 192, 255, 0.1);
  }
}
</style>
