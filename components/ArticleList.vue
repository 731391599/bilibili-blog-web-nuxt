<template>
  <div class="article-list">
    <!-- 这里可以通过路由props传值/插槽来传递 -->
    <h1>{{ $route.params.name || '全部文章' }}</h1>

    <div class="box" v-if="list.length">
      <v-card
        class="card"
        v-for="article in list"
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
        
        <v-card-text class="text--primary">
          {{ article.category.name }}
        </v-card-text>

        <v-card-text class="text--primary author">
          {{ article.user_info.name }}
        </v-card-text>
      </v-card>
    </div>

    <div class="empty" v-else>暂无数据</div>

    <div class="pagination" v-if="pageTotal > 1">
      <v-pagination v-model="page" :length="pageTotal"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'total', 'name'],
  computed: {
    pageTotal() {
      return Math.ceil(this.total / 6)
    },
  },
  data() {
    return {
      page: 1,
    }
  },
  watch: {
    page(n, o) {
      if (n !== o) {
        this.$emit('changeValue', n)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.article-list {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  .box {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-bottom: 20px;
    .card {
      margin: 20px 0;
      margin-left: 2.5%;
      height: 40%;
      .author {
        text-align: right;
      }
    }
  }
  .empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #999999;
  }

  .pagination {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
