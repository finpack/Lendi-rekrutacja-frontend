import {useUserState} from '~/composables/useUserState';

export default defineEventHandler((event) => {
  return useUserState();
});
