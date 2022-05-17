import {useUserState} from '~/composables/useUserState';

export default defineEventHandler((event) => {
  const userState = useUserState()
  userState.push({
    firstName: 'Andrzej',
  })
  console.log('event.context', event)
  return userState;
});
