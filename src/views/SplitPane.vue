<template>
  <ion-split-pane>
    <ion-menu contentId="menu-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item button href="/">Home</ion-item>
          <ion-item button href="/about">About</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <tabs main id="menu-content"/>
  </ion-split-pane>
</template>

<script>
import Tabs from '../views/Tabs'

export default {
  components: { Tabs }
}
</script>

<style scoped>

</style>
