<template>
  <ion-page>
    <ion-content padding>
      <div class="home__btn">
        <router-link to="/page1" tag="ion-button">Page1</router-link>
      </div>
      <div>
        <div v-for="(photo, index) in photos" :key="index" class="home__image">
          <ion-img :src="photo.base64 ? photo.base64 : photo.webviewPath"></ion-img>
        </div>
      </div>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="addNewToGallery">
          <ion-icon name="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import photoService from '../services/photo-service'

export default {
  data () {
    return {
      photos: null
    }
  },
  async created () {
    await photoService.loadSaved()
    this.photos = photoService.photos
  },
  methods: {
    async addNewToGallery () {
      await photoService.addNewToGallery()
      this.photos = photoService.photos
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    &__btn
      text-align center
    &__image
      margin-top 8px
</style>
