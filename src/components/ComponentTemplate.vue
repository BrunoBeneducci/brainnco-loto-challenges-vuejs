<template>
  <ul class="result-game">
    <li v-for="(number, index) in numbers" :key="index"> {{ number }} </li>
  </ul>
</template>

<script>
export default {
  name: 'ComponentTemplate',
  props: {
    numbers: Array
  }
}
</script>

<style scoped>

</style>
