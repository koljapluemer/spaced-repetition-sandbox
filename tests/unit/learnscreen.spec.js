import { shallowMount, mount } from '@vue/test-utils'
import LearnScreen from '@/components/LearnScreen.vue'

// check for a text saying "3 cards due." in LearnScreen
describe('LearnScreen.vue', () => {
  it('displays the text "3 cards due"', () => {
    const wrapper = shallowMount(LearnScreen, {
    })
    expect(wrapper.find('.due-cards').text()).toBe('3 cards due.')
  })
})


// validate that after clicking 'Reveal' and 'Right', text is saying "2 cards due."
describe('LearnScreen.vue', () => {
  it('displays the text "2 cards due"', async () => {
    const wrapper = mount(LearnScreen, {
    })
    await wrapper.find('#reveal').trigger('click')
    await wrapper.find('#right').trigger('click')
    expect(wrapper.find('.due-cards').text()).toBe('2 cards due.')
  })
})
