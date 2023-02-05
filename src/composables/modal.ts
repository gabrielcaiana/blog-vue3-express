import { ref, shallowRef } from 'vue';

import SigninForm from '~/components/SigninForm/index.vue';
import SignupForm from '~/components/SignupForm/index.vue';

const show = ref(false);
const component = shallowRef();

export const useModal = () => {
  return {
    show,
    component,
    showModal: (type: 'signIn' | 'signUp') => {
      show.value = true;

      switch (type) {
        case 'signIn':
          return (component.value = SigninForm);
        case 'signUp':
          return (component.value = SignupForm);
      }
    },
    hideModal: () => (show.value = false),
  };
};
