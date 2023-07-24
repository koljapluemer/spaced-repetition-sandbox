<template>
  Welcome!
  <span class="due-cards">{{ dueCards.length }} cards due.</span>

  <Flashcard :card="dueCards[0]" @cardGraded="gradeCard" />
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

// function to grade a card
// 1. update the card's dueAt, interval and repetition
function gradeCard(grade) {
  const card = dueCards.value[0]
  const now = new Date()

  card.dueAt = new Date(now.setDate(now.getDate() + card.interval))
  card.interval *= 2
  card.repetitions.push(grade)
}



</script>
