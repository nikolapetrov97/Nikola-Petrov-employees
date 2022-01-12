import { employeeConstants } from '../actions/constants'

export interface EmployeeState {
  fileData: any
  error: any
}

export const initState: EmployeeState = {
  fileData: [],
  error: '',
}

export default (state = initState, action: any) => {
  switch (action.type) {
    case employeeConstants.GET_EMPLOYEE_WORK_REQUEST:
      state = {
        ...state,
      }
      break
    case employeeConstants.GET_EMPLOYEE_WORK_SUCCESS:
      state = {
        ...state,
        fileData: action.payload,
      }
      break
    case employeeConstants.GET_EMPLOYEE_WORK_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      }
      break
  }

  return state
}
