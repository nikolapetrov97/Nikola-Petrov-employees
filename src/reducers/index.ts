import { combineReducers, Reducer } from 'redux'
import employeeReducers, { EmployeeState } from './employee.reducers'
import { globalEvents, GlobalEventsState } from './globalEvents.reducers'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApplicationState {
  globalEvents: GlobalEventsState
  employeeData: EmployeeState
}

export const rootReducer: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    globalEvents: globalEvents,
    employeeData: employeeReducers,
  })

export default rootReducer
