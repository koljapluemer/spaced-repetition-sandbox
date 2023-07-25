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

// check for reveal button existing
describe('Flashcard.vue', () => {
  it('has a "Reveal" button', () => {
    const wrapper = shallowMount(Flashcard, {
      props: {
        card: {
          front: 'front'
        }
      }
    })
    expect(wrapper.find('#reveal').exists()).toBe(true)
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
    expect(wrapper.find('#reveal').exists()).toBe(true)
    wrapper.find('#reveal').trigger('click')
    // wait for the transition to finish
    wrapper.vm.$nextTick()
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
    expect(wrapper.find('#reveal').exists()).toBe(true)
    wrapper.find('#reveal').trigger('click')
    wrapper.vm.$nextTick()
    wrapper.find('#right').trigger('click')
    expect(wrapper.emitted('cardGraded')).toBeTruthy()
    expect(wrapper.emitted('cardGraded')[0][0]).toBe(1)
  })
})

// check for flashcard first having a 'Reveal' button, then a 'Wrong' and 'Right' button after clicking 'Reveal'
describe('Flashcard.vue', () => {
  it('has a "Reveal" button, then a "Wrong" and "Right" button after clicking "Reveal"', () => {
    const wrapper = shallowMount(Flashcard, {
      props: {
        card: {
          front: 'front'
        }
      }
    })
    expect(wrapper.find('#reveal').exists()).toBe(true)
    wrapper.find('#reveal').trigger('click')
    expect(wrapper.find('#wrong').exists()).toBe(true)
    expect(wrapper.find('#right').exists()).toBe(true)
  })
})