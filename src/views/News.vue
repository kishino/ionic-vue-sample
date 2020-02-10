<template>
  <ion-page>
    <ion-content padding>
      <ion-list>
        <ion-item v-for="(news, index) in newsList" :key="index" button @click="onNewsClick(news)">
          <ion-label>{{ news.name }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data () {
    return {
      newsList: [
        { name: 'hoge' },
        { name: 'fuga' }
      ]
    }
  },
  methods: {
    onNewsClick (news) {
      this.$router.push({
        name: 'news-detail',
        params: { news }
      })
    }
  }
}
</script>

<style scoped>

</style>
