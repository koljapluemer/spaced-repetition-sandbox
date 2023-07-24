import { shallowMount } from '@vue/test-utils'
import Flashcard from '@/components/Flashcard.vue'
import LearnScreen from '@/components/LearnScreen.vue'

const exampleCards = [
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

// test whether Flashcard displays the passed in prob card.front correctly within .front
describe('Flashcard.vue', () => {
  it('displays the passed in prob card.front correctly within .front', () => {
    const wrapper = shallowMount(Flashcard, {
      props: {
        card: {
          front: 'front'
        }
      }
    })
    expect(wrapper.find('.front').text()).toBe('front')
  })
})

// check for a text saying "3 cards due." in LearnScreen
describe('LearnScreen.vue', () => {
  it('displays the text "3 cards due"', () => {
    const wrapper = shallowMount(LearnScreen, {
      props: {
        cards: exampleCards
      }
    })
    expect(wrapper.find('.due-cards').text()).toBe('3 cards due.')
  })
})

// check for "2 cards due." when we edit the exampleCards array so that one cards dueAt is in the future
describe('LearnScreen.vue', () => {
  it('displays the text "2 cards due" when one card is set in the future', () => {
    // first, clone array so we don't mutate the original
    const cards = JSON.parse(JSON.stringify(exampleCards))

    // set the dueAt of the first card to a future date
    cards[0].dueAt = new Date(Date.now() + 1000 * 60 * 60 * 24)

    const wrapper = shallowMount(LearnScreen, {
      props: {
        cards: cards
      }

    })
    expect(wrapper.find('.due-cards').text()).toBe('2 cards due.')
  })
})

// check for Flashcard emitting a 0 score event when "Wrong" is clicked
describe('Flashcard.vue', () => {
  it('emits a 0 score event when "Wrong" is clicked', () => {
    const wrapper = shallowMount(Flashcard, {
      props: {
        card: {
          front: 'front'
        }
      }
    })
    wrapper.find('#wrong').trigger('click')
    expect(wrapper.emitted('cardGraded')).toBeTruthy()
    expect(wrapper.emitted('cardGraded')[0][0]).toBe(0)
  })
})

// check for Flashcard emitting a 1 score event when "Right" is clicked
describe('Flashcard.vue', () => {
  it('emits a 1 score event when "Right" is clicked', () => {
    const wrapper = shallowMount(Flashcard, {
      props: {
        card: {
          front: 'front'
        }
      }
    })
    wrapper.find('#right').trigger('click')
    expect(wrapper.emitted('cardGraded')).toBeTruthy()
    expect(wrapper.emitted('cardGraded')[0][0]).toBe(1)
  })
})