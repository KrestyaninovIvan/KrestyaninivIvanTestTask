<template>
  <div class="btn__list">
    <button
            class="text"
            @click="prevPage"
    >
      Previous
    </button>
    <button
            class="number"
            @click="lunchClick(pageState)"
    >
      {{pageState}}
    </button>
    <button
            class="number"
            @click="lunchClick(pageVisible)"
    >
      {{pageVisible}}
    </button>
    <button
            class="number"
            @click="lunchClick(pageVisible+1)"
    >
      {{pageVisible+1}}
    </button>
    <button
            class="number"
            @click="lunchClick(pageVisible+2)"
    >
      {{pageVisible+2}}
    </button>
    <button
            class="number"
            @click="lunchClick(maxPage)"
    >
      {{maxPage}}
    </button>
    <button
            class="text"
            @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script>

    export default {
        name: "Pagination",
        data() {
            return {
                pageNumber: 2,
                pageVisible: 2,
                pageState: 1,
                page: 1
            }
        },
        props: {
            pageProps: Number,
            maxPage: Number
        },
        methods: {
            nextPage() {
                if (this.pageNumber !== this.maxPage) {
                    if (this.pageNumber !== this.maxPage + 1) this.pageNumber++
                    if (this.pageVisible <= this.maxPage - 4) this.pageVisible++
                    this.$emit('changepage', this.pageNumber)
                }
            },
            prevPage() {
                if (this.pageNumber !== 1) {
                    if (this.pageNumber !== 1) this.pageNumber--
                    if (this.pageVisible >= 3) this.pageVisible--
                    this.$emit('changepage', this.pageNumber)
                }
            },
            pageUpgrade(page) {
                if (isNaN(page) || page === 1) {
                    this.pageNumber = 2
                    this.pageVisible = this.pageNumber
                } else {
                    if (page !== this.maxPage + 1) {
                        if (page <= this.maxPage - 3) this.pageVisible = page
                        else {
                            this.pageVisible = this.maxPage - 3
                        }
                        this.pageNumber = page
                    }
                }
            },
            lunchClick(page) {
                if (isNaN(page) || page === 1) {
                    this.pageNumber = 1
                    this.pageVisible = 2
                } else {
                    if (page !== this.maxPage + 1) {
                        if (page <= this.maxPage - 3) this.pageVisible = page
                        else {
                            this.pageVisible = this.maxPage - 3
                        }
                        this.pageNumber = page
                    }
                }
                this.$emit('changepage', this.pageNumber)
            },
            updatePagination() {
                this.$forceUpdate()
            }
        },
        mounted() {
            this.pageUpgrade(this.pageProps)
        },
        computed: {}
    }
</script>

<style lang="scss">
  .btn {
    border-radius: 5px;

    &__list {
      display: block;
      margin-left: auto;
      margin-right: auto;

    }
  }

  .number {
    text-align: center;
    border-radius: 12px;
    width: 50px;
    height: 50px;
    margin: 1px;
  }

  .text {
    text-align: center;
    border-radius: 12px;
    width: 100px;
    height: 50px;
    margin: 1px;
  }

</style>
