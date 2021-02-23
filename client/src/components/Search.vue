<template>
  <div>
    <div class="header__search">
      <input type="text" v-model="newSearch" size="20">
        <button
                @click="updateText(newSearch)"
                class="header__button">Поиск</button>
    </div>

  <div class="Home">
    <h1 class="Home__text">Search: {{this.search}}</h1>
    <div class="Home__list" >
      <CardUsers
              v-for="user in USERS"
              :key="user.ObjectID.$oid"
              :user_data="user"
              :search="search || text"
      />
    </div>
  </div>
  </div>
</template>

<script>
    import CardUsers from "@/components/CardUsers";
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'Search',
        components: {
            CardUsers
        },
        data() {
            return {
                search: '',
                newSearch: ''
            }
        },
        props: {
            text: String,
            default() {
                return {}
            }
        },
        computed: {
            ...mapGetters(['USERS']),
        },
        methods: {
            ...mapActions(['GET_SEARCH_FROM_API']),
            updateText(text) {
                this.search = text
            }
        },
        mounted() {
            console.log(this.text + ' Search')
            if (isNaN(this.text)) this.search = this.text
            this.$store.dispatch('GET_SEARCH_FROM_API', this.search)
        },
        watch: {
            search() {
                this.$store.dispatch('GET_SEARCH_FROM_API', this.search)
            }
        }

    }
</script>

<style lang="scss">
  .Home {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      text-align: center;
    }
  }

  .header {
    width: 100%;
    background: #D8E3AB;
    height: 70px;


    &__search {
      padding: 20px;
      float: right;
    }

    &__button{
      text-align: center;
    }
  }

</style>
