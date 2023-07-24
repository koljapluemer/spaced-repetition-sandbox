<template>
  Welcome!

  <Flashcard :card="props.cards[0]" />
</template>

<script setup lang="js">
import Flashcard from '@/components/Flashcard.vue'
import { defineProps } from 'vue'

const props = defineProps({
  cards: Array,
})


</script>
