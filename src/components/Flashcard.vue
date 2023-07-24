<template>
  <div class="paper m4">
    <div class="front">{{ props.card.front }}</div>
  </div>
  <button id="wrong" @click="$emit('cardGraded', 0)">Wrong</button>
  <button id="right" @click="$emit('cardGraded', 0)">Right</button>
</template>

<script setup lang="js">

import { defineProps } from 'vue'

const props = defineProps({
  card: Object,
})
</script>
