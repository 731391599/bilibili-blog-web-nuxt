<template>
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-subheader class="all mt-4 grey--text text--darken-1" @click="to()"
          >全部类目</v-subheader
        >
        <v-list dense>
          <v-list-item
            v-for="item in category_list"
            :key="item.name"
            link
            @click="to(item.id, item.name)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-subheader class="mt-4 grey--text text--darken-1">作者</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in author_list"
            :key="item.userId"
            link
            @click="toUser(item.userId, item.user_info.name)"
          >
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
    to(id, name) {
      if (id) {
        //   通过params传递
        this.$router.push({
          name: 'home-id',
          params: {
            id,
            name,
          },
        })
      } else {
        this.$router.push(`/home`)
      }
    },
    toUser(id, name) {
      this.$router.push({
        name: 'home-id',
        params: {
          type: 'user',
          id,
          name,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.all {
  cursor: pointer;
}
</style>
