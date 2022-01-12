import { ErrorNames } from '../../reducers/globalEvents.reducers'
import { store } from '../../store'

export const dispatchErrorHandler = (error: any) => {
  if (store) {
    store.dispatch({
      type: ErrorNames.ERROR_HANDLER,
      payload: { error },
    })
  }
}
