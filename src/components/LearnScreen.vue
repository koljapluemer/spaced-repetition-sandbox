<template>
  Welcome!
  <span class="due-cards">{{ getDueCards().length }} cards due.</span>

  <Flashcard :card="card" @cardGraded="gradeCard" v-if="card" />

  <ul class="mt4">
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

  // if grade is 1, double interval
  //  if grade is 0, half interval (minimum: 1)

  if (grade === 1) {
  card.value.interval = card.value.interval * 2
  } else {
  card.value.interval = Math.max(card.value.interval / 2, 1)
  }
  // set dueAt to now + interval in seconds
  card.value.dueAt = new Date(now.getTime() + card.value.interval * 1000)
  card.value.repetitions.push({
    grade: grade,
    date: now,
  })

  setCardToRandomDue()

}

function setCardToRandomDue() {
  // get due objects from cards and pick a random one
  const dueCards = getDueCards()
  if (dueCards.length === 0) {
  card.value = null
  return
  } else {
  card.value = dueCards[Math.floor(Math.random() * dueCards.length)]
}
}


function getDueCards() {
  return cards.filter(card => card.dueAt <= new Date() || card.dueAt === null)
}

setCardToRandomDue()

// if currently no due card, regularly recheck if there is now a due card
setInterval(() => {
  if (!card.value) {
  setCardToRandomDue()
  }
}, 1000)

</script>
