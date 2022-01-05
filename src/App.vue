<template>
  <div id="app">
    <!-- <iframe src="http://localhost:9000/" style="width: 1000px; height: 400px;"></iframe> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!-- <VModelForm /> -->

    <!-- <TestEvent @click="fn" @my-event="fn" /> -->

    <TestDrag />

    <!-- <TestChildRender /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import VModelForm from './VModelForm.vue'
// console.log(VModelForm)

import TestEvent from './TestEvent.vue'

import TestDrag from './TestDrag.vue'

import TestChildRender from './TestChildRender.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    VModelForm,
    // eslint-disable-next-line vue/no-unused-components
    TestEvent,
    // eslint-disable-next-line vue/no-unused-components
    TestDrag,
    // eslint-disable-next-line vue/no-unused-components
    TestChildRender,
  },
  methods: {
    fn() {
      console.log('app click')
    },
  },
  mounted() {
    // console.log(this)
  },
}
</script>

<style>
</style>
