<template>
  <div >
    <div class="header__search">
      <input type="text" v-model="text" size="20">
      <router-link class="header__button"
                   :to="{name: 'Search', params: {text: text}}">
        <button>Поиск</button>
      </router-link>
    </div>


    <h1 class="carduser__text">User</h1>
    <div class="carduser">
      <img class="carduser__image" v-bind:src="USER.image" height="300">
      <div class="carduser__texr2">
        <p>Id: {{USER.ObjectID.$oid}}</p>
        <p>First name: {{USER.first_name}}</p>
        <p>Last name: {{USER.last_name}}</p>
        <p>Email: {{USER.email}}</p>
        <p>Gender: {{USER.gender}}</p>
        <router-link
                v-if="visible"
                :to="{name:'Home',params: {page: this.page}}"
        >
          <button class="carduser__btn">Назад</button>
        </router-link>
        <router-link
                v-if="!visible"
                :to="{name:'Search',params: {text: this.search}}"
        >
          <button class="carduser__btn">Назад</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "UserCard",
        props: {
            id: String,
            page: Number,
            search: String,
            default() {
                return {}

            }
        },
        data() {
            return {visible: Boolean,
            text: ''}
        },
        computed: {
            ...mapGetters([
                'USER'
            ])
        },
        methods: {
            ...mapActions(['GET_USER_FROM_API'])
        },
        mounted() {
            this.$store.dispatch('GET_USER_FROM_API', this.id)
            if (isNaN(this.page)) this.visible = false
            else {
                this.visible = true
            }
            console.log(this.page + ' UC ' + this.visible)
            console.log(this.search + ' UC ' + this.visible)
        }
    }
</script>

<style lang="scss">
  .carduser {
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 30px;
    height: 300px;
    display: block;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    &__image {
      border-radius: 30px;
      display: block;
      float: left;
    }

    &__btn {
      text-align: center;
      border-radius: 5px;
      width: 70px;
      height: 20px;
    }

    &__text {
      display: block;
      text-align: center;
      padding: 30px;
    }

    &__text2 {
      padding: 10px;
    }
  }
</style>
