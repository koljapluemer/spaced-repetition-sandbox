<template>

<div class="front">{{ props.card.front }}</div>

</template>

<script setup lang="js">

import { defineProps } from 'vue'

const props = defineProps({
  card: Object,
})

</script>