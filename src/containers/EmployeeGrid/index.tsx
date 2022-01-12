import { Grid, Typography } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  employeeData: any
}

const EmployeeGrid = (props: Props) => {
  const { employeeData } = props
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="employee-container"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="column-titles-container"
      >
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Typography className="column-title">Employee ID #1</Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Typography className="column-title">Employee ID #2</Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Typography className="column-title">Project ID</Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <Typography className="column-title">Days Worked</Typography>
        </Grid>
      </Grid>
      {employeeData?.length > 0
        ? employeeData?.map((row: any) => {
            return (
              <Grid key={uuidv4()} container className="employee-details">
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Typography className="column-title">
                    {row?.employee1}
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Typography className="column-title">
                    {row?.employee2}
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  {row?.details?.map(
                    (
                      details: { project: string; days: string },
                      index: any
                    ) => {
                      return (
                        details?.project +
                        (index === row?.details?.length - 1 ? '' : ', ')
                      )
                    }
                  )}
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <Typography className="column-title">{row?.sum}</Typography>
                </Grid>
              </Grid>
            )
          })
        : null}
    </Grid>
  )
}

export default EmployeeGrid
