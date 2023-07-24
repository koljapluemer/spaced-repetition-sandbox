<template>
  <LearnScreen :cards=cards />
</template>

<script setup lang="js">

import LearnScreen from './components/LearnScreen.vue'


const cards = [
  {
  front: "Eswatini",
  back: "Mbabane",
  dueAt: null,
  interval: 1,
  repetitions: []
  },
  {
  front: "Eritrea",
  back: "Asmara",
  dueAt: null,
  interval: 1,
  repetitions: []
  },
  {
  front: "Ethiopia",
  back: "Addis Ababa",
  dueAt: null,
  interval: 1,
  repetitions: []
  },
]
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
