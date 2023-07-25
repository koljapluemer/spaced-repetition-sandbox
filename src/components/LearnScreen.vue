<template>
  Welcome!
  <span class="due-cards">{{ getDueCards().length }} cards due.</span>

  <Flashcard :card="card" @cardGraded="gradeCard" />

  <ul>
  <li v-for="card in cards" :key="card">{{ card }}</li>
  </ul>
</template>

<script setup lang="js">
import Flashcard from '@/components/Flashcard.vue'
import { ref } from 'vue'

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


const card = ref({})
// function to grade a card
// 1. update the card's dueAt, interval and repetition
function gradeCard(grade) {
  console.log('gradeCard', grade)
  const now = new Date()

  card.value.dueAt = new Date(now.setDate(now.getDate() + card.value.interval))
  card.value.interval *= 2
  card.value.repetitions.push(grade)

  setCardToRandomDue()
  
}

function setCardToRandomDue() {
  // get due objects from cards and pick a random one
  const dueCards = getDueCards()
  card.value = dueCards[Math.floor(Math.random() * dueCards.length)]
}


function getDueCards() {
  return cards.filter(card => card.dueAt <= new Date() || card.dueAt === null)
}


setCardToRandomDue()



</script>
