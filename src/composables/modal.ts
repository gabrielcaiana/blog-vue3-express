import { ref, shallowRef } from 'vue';

import SignupForm from '~/components/SignupForm.vue';
import Timeline from '~/components/Timeline.vue';

const show = ref(false);
const component = shallowRef();

export const useModal = () => {
  return {
    show,
    component,
    showModal: (type: 'signIn' | 'signUp') => {
      show.value = true;

      switch (type) {
        case 'signUp':
          return (component.value = SignupForm);
        case 'signIn':
          return (component.value = Timeline);
      }
    },
    hideModal: () => (show.value = false),
  };
};
