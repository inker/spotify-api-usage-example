import { shallowMount } from '@vue/test-utils'

import LandingButton from '..'

describe('LandingButton.vue', () => {
  test('default type', () => {
    const noPropsButton = shallowMount(LandingButton)
    const buttonWithExplicitType = shallowMount(LandingButton, {
      propsData: {
        type: 'button',
      },
    })
    expect(noPropsButton.html()).toMatchSnapshot(buttonWithExplicitType.html())
  })

  test('submit button', () => {
    const wrapper = shallowMount(LandingButton, {
      propsData: {
        type: 'submit',
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
