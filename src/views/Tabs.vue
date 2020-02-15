<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-tabs>
        <ion-tab tab="/home">
          <home/>
        </ion-tab>
        <ion-tab tab="/news">
          <news/>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="/home">
            <ion-label>Home</ion-label>
            <ion-icon name="home"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="/news">
            <ion-label>News</ion-label>
            <ion-icon name="notifications"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import Home from '../views/Home'
import News from '../views/News'

import { home, menu, notifications, camera } from 'ionicons/icons'
import { addIcons } from 'ionicons'
addIcons({
  'ios-home': home.ios,
  'md-home': home.md,
  'ios-menu': menu.ios,
  'md-menu': menu.md,
  'ios-notifications': notifications.ios,
  'md-notifications': notifications.md,
  'ios-camera': camera.ios,
  'md-camera': camera.md
})
export default {
  components: { Home, News }
}
</script>

<style scoped>

</style>
