<template>
  <div class="card">
    <img class="card__image" v-bind:src="user_data.image" height="150">
    <p class="card__first_name">First name: {{user_data.first_name}}</p>
    <p class="card__last_name">Last name: {{user_data.last_name}}</p>
    <router-link :to="{name:'UserCard', params: {id: user_data.ObjectID.$oid,page: this.pageCard, search: this.search }}">
      <button class="btncard">Профиль</button>
    </router-link>
  </div>
</template>

<script>

    export default {
        name: "CardUsers",
        components: {},
        props: {
            user_data: {
                type: Object,
                default() {
                    return {}
                }
            },
            pageCard: Number,
            search: String,
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
  .card {
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;

    &__first_name {
      margin-bottom: -1em;
    }
  }

  .btncard {
    border: solid 1px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .card__image {
    border-radius: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>
