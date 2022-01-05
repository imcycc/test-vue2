<template>
  <div>
    <div v-for="(v, i) in routes" :key="i" @click="goto(v.path)">{{v.name}}</div>
  </div>
</template>

<script>
import routes from '../router/routes'

export default {
  data() {
    return {
      routes
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>