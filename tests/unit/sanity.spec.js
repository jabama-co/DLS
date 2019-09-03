import { mount } from '@vue/test-utils';
import Sanity from './sanity.vue';

describe('Sanity Test', () => {
  it('This test should pass no matter what. If it doesn\'t, there is something wrong with test config.', () => {
    const wrapper = mount(Sanity);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
