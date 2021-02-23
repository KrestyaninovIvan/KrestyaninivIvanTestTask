<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout.vue'

  export default {
      computed: {
          layout() {
              return this.$route.meta.layout +"-layout"
          }
      },
      components:{
           MainLayout
      }
  }

</script>

<style lang="scss">

</style>

