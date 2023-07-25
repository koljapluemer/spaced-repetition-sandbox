<template>
  <div class="paper m4">
    <div class="front">{{ props.card.front }}</div>
  </div>
  <button id="reveal" v-if="!isRevealed" @click="reveal()">
    Reveal
  </button>
  <button id="wrong" v-if="isRevealed" @click="emits('cardGraded', 0)">
    Wrong
  </button>
  <button id="right" v-if="isRevealed" @click="emits('cardGraded', 1)">
    Right
  </button>
</template>

<script setup lang="js">

import { defineProps, ref, defineEmits } from 'vue'

const props = defineProps({
  card: Object,
})

const isRevealed = ref(false)

function reveal() {
  isRevealed.value = true
}

// define emit
const emits = defineEmits(["cardGraded"])

</script>
