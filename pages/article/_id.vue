<template>
  <div class="mavonEditor">
    <no-ssr>
      <mavon-editor :toolbars="markdownOption" v-model="handbook" />
    </no-ssr>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      markdownOption: {},
      handbook: '#### how to use mavonEditor in nuxt.js',
    }
  },
}
</script>

<style lang="scss" scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
  display: flex;
  background: salmon;
  ::v-deep .v-note-edit {
    display: none;
  }
  ::v-deep .v-note-wrapper {
    flex: 1;
  }
  ::v-deep .v-note-panel .v-note-show {
    flex: 1;
    -webkit-box-flex: 1;
  }
}
</style>
