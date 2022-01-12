export enum SpinnerNames {
  SPINNER_START = 'SPINNER_START',
  SPINNER_END = 'SPINNER_END',
}
export enum ErrorNames {
  ERROR_HANDLER = 'ERROR_HANDLER',
}
export enum CurrencyType {
  EURO = 'EURO',
  LEV = 'LEV',
}
export interface GlobalEventsState {
  pendingTasks: number
  currency: string
  error?: any
}

const initialState: GlobalEventsState = {
  pendingTasks: 0,
  currency: '€',
}

export const globalEvents = (state = initialState, action: any) => {
  const newState = { ...state }

  switch (action.type) {
    case SpinnerNames.SPINNER_START:
      newState.pendingTasks += 1
      return newState

    case SpinnerNames.SPINNER_END:
      newState.pendingTasks -= 1
      return newState

    case ErrorNames.ERROR_HANDLER:
      newState.error = action.payload.error

      return newState
    case CurrencyType.EURO:
      newState.currency = '€'

      return newState
    case CurrencyType.LEV:
      newState.currency = 'лв.'

      return newState
    default:
      return state
  }
}
