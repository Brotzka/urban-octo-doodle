<template>
  <div>
    <h1>Foo-Component</h1>

    <h2>Message: {{ msg }}</h2>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  props: {
    msg: {
      type: String,
      required: false,
      default: "Foobar"
    }
  }
})

export default class Foo extends Vue {
  msg!: string
}
</script>

<style scoped>

</style>
