<template>
  <div class="writeboard"></div>
</template>

<style lang="scss" scoped>
.writeboard {
  width: 900px;
  min-height: 100vh;
  margin-top: 10px;
  margin: auto;
  padding: 1em 3em;
  position: relative;
  // background: violet;
  overflow: hidden;
  article {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(15px);
    margin: -25px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(131, 197, 184, 0.3);
  }
}
</style>
