import { shallowMount } from '@vue/test-utils'
import Flashcard from '@/components/Flashcard.vue'

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