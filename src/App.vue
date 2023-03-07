<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as * ;

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
