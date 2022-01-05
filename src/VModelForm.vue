<template>
  <div>
    <div>{{value1}}</div>
    <z-form ref="form" :model="form">
      <z-form-item label="活动名称">
        <z-input v-model="form.name"></z-input>
      </z-form-item>
      <z-form-item label="活动名称1">
        <z-input v-model="form.name1"></z-input>
      </z-form-item>
      <z-form-item label="活动名称2">
        <z-input v-model="form.name2"></z-input>
      </z-form-item>
      <input v-model="form.name3" />
      <TestInput v-model="form.name4" />

      <z-button @click="onSubmit">提交</z-button>
    </z-form>
  </div>
</template>

<script>
import TestInput from './TestInput.vue'

export default {
  components: {
    TestInput,
  },
  props: {
    value1: {
      default: '1',
      type: String,
    },
  },
  data() {
    return {
      form: {
        name4: '',
      },
    }
  },
  mounted() {
    this.form.name = '1'
    this.form.name3 = '1'
    this.form.name4 = '1'
    // this.form.name3 = '1'
    // this.form.name4 = '1'
    // this.form = {
    //   name: '11',
    //   name1: '22',
    //   name2: '33',
    // }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    },
  },
}
</script>

<style>
</style>