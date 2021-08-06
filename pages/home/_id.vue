<template>
  <ArticleList
    style="width: 100%; height: 100%"
    :list="list"
    :total="total"
    :pageNum="pageNum"
    @changeValue="changePage"
  />
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
export default {
  components: { ArticleList },
  async asyncData({ params, $axios }) {
    let url = ''
    if (params.type) {
      url = `/api/userArticle/${params.id}`
    } else {
      url = `/api/article/${params.id}`
    }
    const res = await $axios.$post(url, {
      pageNum: 1,
    })
    const list = res.data.rows
    const total = res.data.count
    return {
      list,
      total,
    }
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
      let url = ''
      if (this.$route.params.type) {
        url = `/api/userArticle/${this.$route.params.id}`
      } else {
        url = `/api/article/${this.$route.params.id}`
      }
      const res = await this.$axios.$post(url, {
        pageNum: this.pageNum,
      })
      this.list = res.data.rows
      this.total = res.data.count
    },
  },
}
</script>
