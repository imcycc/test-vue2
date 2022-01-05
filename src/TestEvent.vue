<template>
  <div>
    <div id="xxx" @click="fn" @click1="fn1" v-on:click2="fn2">div</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return { a: 1 }
  },
  mounted() {
    // console.log(this)
  },
  methods: {
    fn() {
      console.log('fn')
      this.$emit('my-event')
    },
    fn1() {
      console.log('fn1')
    },
    fn2() {
      console.log('fn2')
    },
    fn3() {},
  },
}
</script>

<style>
</style>