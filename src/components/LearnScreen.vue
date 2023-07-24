<template>
  Welcome!
  <span class="due-cards">{{ dueCards.length }} cards due.</span>

  <Flashcard :card="dueCards[0]" />
</template>

<script setup lang="js">
import Flashcard from '@/components/Flashcard.vue'
import { defineProps, computed } from 'vue'

const props = defineProps({
  cards: Array,
})

// computed property with only due cards
// filter by dueAt being either in the past or null
const dueCards = computed(() => {
  return props.cards.filter(card => {
    return !card.dueAt || card.dueAt <= new Date()
  })
})


</script>
