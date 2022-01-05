<template>
  <!-- A 组件 -->
  <div>
    <button @click="num++">add</button>
    <div>
      <p>{{num}}</p>
    </div>
    <B :num="num" />
    <span>123</span>
  </div>
</template>

<script>
import B from './TestChildRender1.vue'

export default {
  components: {
    B,
  },
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    f() {
// var vnode = {
//   tag: 'div',
//   children: [
//     { tag: 'button', children: [{ text: 'add' }] },
//     { tag: 'div', children: [{ tag: 'p', children: [{ text: '0' }] }] },
//     { tag: 'B' },
//     { tag: 'span', children: [{ text: '123' }] },
//   ],
// }
    },
  },
}
</script>

<style>
</style>