<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ $route.params.news.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      {{ $route.params.news.name }}
    </ion-content>
  </ion-page>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
