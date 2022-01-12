// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */
import { employeeConstants } from './constants'

const setDate = (YMD: any) => {
  // eslint-disable-next-line prefer-const
  let [Y, M, D] = YMD.split('-').map(Number)
  return new Date(Y, --M, D)
}

export const getEmployeePairWork = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: employeeConstants.GET_EMPLOYEE_WORK_REQUEST })
    const oneDay = 24 * 60 * 60 * 1000

    const groupProjects = data?.reduce((r: any, [employeeId, projectId, StartDate, endDate]: any) => {
        const start = setDate(StartDate)
        const end = endDate ? setDate(endDate) : new Date()
        r[projectId] = r[projectId] ?? []
        r[projectId].push({ employeeId, start, end })
        return r
      },
      {}
    )

    const employeePair: any = {}
    for (const project in groupProjects)
      for (let i = 0; i < groupProjects[project].length - 1; i++)
        for (let j = i + 1; j < groupProjects[project].length; j++) {
          const employee1 = groupProjects[project][i]
          const employee2 = groupProjects[project][j]

          if (
            (employee1.end <= employee2.end && employee1.end > employee2.start) ||
            (employee2.end <= employee1.end && employee2.end > employee1.start)
          ) {
            const day1 =
                employee1.start > employee2.start
                  ? employee1.start
                  : employee2.start
            const day2 = employee1.end < employee2.end ? employee1.end : employee2.end
            const days = Math.ceil((day2 - day1) / oneDay)
            const key = `${employee1.employeeId}-${employee2.employeeId}`
            employeePair[key] = employeePair[key] ?? {
              employee1: employee1.employeeId,
              employee2: employee2.employeeId,
              sum: 0,
              details: [],
            }
            employeePair[key].details.push({ project: Number(project), days })
            employeePair[key].sum += days
          }
        }

    const result = Object.entries(employeePair)
      .sort((a: any, b: any) => b[1].sum - a[1].sum)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(([k, v]) => v)

    result.forEach((el) => console.log(JSON.stringify(el).replaceAll('"', '')))
    console.log(result)
    dispatch({
      type: employeeConstants.GET_EMPLOYEE_WORK_SUCCESS,
      payload: result,
    })
  }
}
