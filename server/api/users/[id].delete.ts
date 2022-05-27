import {CompatibilityEvent} from 'h3';
import {useUserState} from '~/server/userState';



export default defineEventHandler(async(event: CompatibilityEvent) => {
  const {remove} = useUserState()
  const userIndex = +event.context.params.id
  let isRemoved = remove(userIndex);
  if(isRemoved) {
    event.res.end();
  } else {
    event.res.statusCode = 404;
    event.res.statusMessage = 'User not found';
    event.res.end();
  }
});
