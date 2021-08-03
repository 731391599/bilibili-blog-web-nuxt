<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-subheader class="mt-4 grey--text text--darken-1">类目</v-subheader>
        <v-list dense>
          <v-list-item v-for="item in category_list" :key="item.name" link>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-subheader class="mt-4 grey--text text--darken-1">作者</v-subheader>
        <v-list>
          <v-list-item v-for="item in author_list" :key="item.userId" link>
            <v-list-item-avatar>
              <img
                :src="
                  item.user_info.avatar
                    ? `http://localhost:7001${item.user_info.avatar}`
                    : avatar
                "
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.user_info.name"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="blue" dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-icon class="mx-4" large> mdi-alpha-a-box </v-icon>
        <v-toolbar-title class="mr-12 align-center">
          <span class="title">NinJa</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row align="center" style="max-width: 650px"> xxx </v-row>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height">
          <nuxt />
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: null,
      //   文章类目
      items: [
        { icon: 'mdi-trending-up', text: 'JavaScript' },
        { icon: 'mdi-youtube-subscription', text: 'Vue' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-playlist-play', text: 'Playlists' },
        { icon: 'mdi-clock', text: 'Watch Later' },
      ],
      //   最近发布文章的用户
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
      list: [],
      avatar: require('../assets/imgs/avatar.png'),
    }
  },
  computed: {
    ...mapGetters(['category_list', 'author_list']),
  },
  created() {
    this.$vuetify.theme.dark = true
  },
  methods: {
    // 将请求放到vuex中
    // 这是是页面调用的
  },
}
</script>
