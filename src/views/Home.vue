<template>
  <ion-page>
    <ion-content padding>
      <div class="home__btn">
        <router-link to="/page1" tag="ion-button">Page1</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
  .home
    &__btn
      text-align center
</style>
