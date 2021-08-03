<template>
  <div class="box">
    <v-card
      class="mx-auto card"
      v-for="article in article_list"
      :key="article.id"
      max-width="30%"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="`http://localhost:7001${article.cover}`"
      >
        <v-card-title>{{ article.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ article.category.name }}
      </v-card-subtitle>

      <v-card-text class="text--primary author">
        {{ article.user_info.name }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'home',
  computed: {
    ...mapGetters(['article_list']),
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .card {
    margin: 10px 0;
    .author{
        text-align: right;
    }
  }
}
</style>
