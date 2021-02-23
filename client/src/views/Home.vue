<template>
 <div>
   <div class="header__search">
     <input type="text" v-model="text" size="20">
     <router-link class="header__button"
                  :to="{name: 'Search', params: {text: text}}">
       <button>Поиск</button>
     </router-link>
   </div>

  <div class="Home">



    <h1 class="Home__text">Users</h1>
    <div class="Home__list">
      <CardUsers
              v-for="user in USERS"
              :key="user.ObjectID.$oid"
              :user_data="user"
              :pageCard="currentPage"
      />
      <Pagination
              @changepage="currentPage=$event"
              :key="currentPage"
              :pageProps=currentPage
              :maxPage=CARDMAXPAGE
      />
    </div>
  </div>
 </div>
</template>

<script>
    import CardUsers from "@/components/CardUsers";
    import {mapActions, mapGetters} from 'vuex'
    import Pagination from "@/components/Pagination";

    export default {
        name: 'Home',
        components: {
            CardUsers, Pagination
        },
        data() {
            return {
                currentPage: 1,
                text: ''
            }
        },
        props: {
            page: Number,
            default() {
                return {}
            }
        },
        computed: {
            ...mapGetters(['USERS']),
            ...mapGetters(['CARDMAXPAGE'])
        },
        methods: {
            ...mapActions(['GET_USERS_FROM_API']),
            ...mapActions(['GET_CARDMAXPAGE_FROM_API']),
        },
        mounted() {
            if (!isNaN(this.page)) {
                this.currentPage = this.page
            } else {
                this.$store.dispatch('GET_USERS_FROM_API', this.currentPage)
            }
            this.$store.dispatch('GET_CARDMAXPAGE_FROM_API')
        },
        watch: {
            currentPage() {
                this.$store.dispatch('GET_USERS_FROM_API', this.currentPage)
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
      max-width: 900px;
      margin: 0 auto;

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
