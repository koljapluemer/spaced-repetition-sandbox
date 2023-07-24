<template>
  <Flashcard :card="card" />
</template>

<script setup lang="js">
import Flashcard from './components/Flashcard.vue'

const card = {
  front: 'What is the capital of Canada?',
  back: 'Ottawa',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
