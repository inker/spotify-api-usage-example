<template>
  <main class="not-found-root">
    <div class="not-found-text">
      Page not found
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.not-found-root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.not-found-text {
  font-size: 2rem;
  color: var(--grey);

  [data-theme=dark] & {
    color: var(--light-grey);
  }
}
</style>
