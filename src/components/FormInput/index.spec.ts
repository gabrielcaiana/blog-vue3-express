import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import FormInput from './index.vue';

describe('FormInput', () => {
  it('renders some errors', () => {
    const wrapper = mount(FormInput, {
      props: {
        name: 'foo',
        modelValue: 'bar',
        type: 'input',
        status: {
          valid: false,
          message: 'error',
        },
      },
    });

    expect(wrapper.find('.is-danger').exists()).toBe(true);
  });

  it('renders no errors', () => {
    const wrapper = mount(FormInput, {
      props: {
        name: 'foo',
        modelValue: 'bar',
        type: 'input',
        status: {
          valid: true,
          message: 'error',
        },
      },
    });

    expect(wrapper.find('.is-danger').exists()).toBe(false);
  });
});
