import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Flashcard from '@/components/Flashcard.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

// test whether Flashcard has a .front class
describe('Flashcard.vue', () => {
  it('has a .front class', () => {
    const wrapper = shallowMount(Flashcard)
    expect(wrapper.classes()).toContain('front')
  })
})

