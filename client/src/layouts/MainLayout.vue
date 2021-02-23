<template>
  <div class="header">
    <router-link :to="{name:'Home'}">
      <img class="header__image"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png"
           height="70">
    </router-link>

    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>

    export default {
        name: "MainLayout",
        data() {
            return {
            }
        }
    }
</script>
<style lang="scss">
    .header {
    width: 100%;
    background: #D8E3AB;
    height: 70px;

    &__image {
      float: left;
    }

    &__search {
      padding: 20px;
      float: right;
    }
    &__button{
      text-align: center;
    }
  }
</style>
