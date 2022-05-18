import {useUserState} from '~/server/userState';

export default defineEventHandler((event) => {
  const {get} = useUserState()
  return get()
});
