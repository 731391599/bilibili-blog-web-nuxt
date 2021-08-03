const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST'
const SET_AUTHOR_LIST = 'SET_AUTHOR_LIST'
const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST'
export default {
  // nuxt中 state必须是一个函数 和vue中的data一样
  state: () => {
    return {
      category_list: [],
      author_list: [],
      article_list: [],
    }
  },
  getters: {
    category_list: (state) => state.category_list,
    author_list: (state) => state.author_list,
    article_list: (state) => state.article_list,
  },
  mutations: {
    [SET_CATEGORY_LIST](state, list) {
      state.category_list = list
    },
    [SET_AUTHOR_LIST](state, list) {
      state.author_list = list
    },
    [SET_ARTICLE_LIST](state, list) {
      state.article_list = list
    },
  },
  actions: {
    //   不需要在页面中调用  是通过服务端调用的
    // 页面启动会执行这个方法
    async nuxtServerInit({ commit }, { $axios }) {
      const category = await $axios.get(`/api/home/category`)
      const author = await $axios.get(`/api/home/user`)
      const article = await $axios.get(`/api/home/article`)
      commit(SET_CATEGORY_LIST, category.data.data)
      commit(SET_AUTHOR_LIST, author.data.data)
      commit(SET_ARTICLE_LIST, article.data.data)
    },
  },
}
