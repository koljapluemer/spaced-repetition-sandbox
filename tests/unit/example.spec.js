import { shallowMount } from '@vue/test-utils'
import Flashcard from '@/components/Flashcard.vue'
import LearnScreen from '@/components/LearnScreen.vue'

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
        cards: [{}, {}, {}]
      }
    })
    expect(wrapper.find('.due-cards').text()).toBe('3 cards due.')
  })
})