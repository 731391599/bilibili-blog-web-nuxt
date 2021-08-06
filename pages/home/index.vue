<template>
  <ArticleList
    style="width: 100%; height: 100%"
    :list="article_list.rows"
    :total="article_list.count"
    :pageNum="pageNum"
    @changeValue="changePage"
  />
</template>

<script>
// 接口需要调整
import ArticleList from '@/components/ArticleList.vue'
import { mapGetters } from 'vuex'
export default {
  layout: 'home',
  components: { ArticleList },
  computed: {
    ...mapGetters(['article_list']),
  },
  data() {
    return {
      pageNum: 1,
    }
  },
  methods: {
    changePage(e) {
      this.pageNum = e
      this.getList()
    },
    async getList() {
      const res = await this.$axios.$post(`/api/home/article`, {
        pageNum: this.pageNum,
      })
      this.$store.commit('SET_ARTICLE_LIST', res.data)
      //   this.list = res.data.rows
      //   this.total = res.data.count
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .card {
    margin: 10px 0;
    .author {
      text-align: right;
    }
  }
}
</style>
