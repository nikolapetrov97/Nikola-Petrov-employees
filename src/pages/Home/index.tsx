// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployeePairWork } from '../../actions'
import EmployeeGrid from '../../containers/EmployeeGrid'
import { ApplicationState } from '../../reducers'
import './style.scss'

const Home = () => {
  const dispatch = useDispatch()
  const employeeData = useSelector(
    (state: ApplicationState) => state.employeeData
  )

  const showFile = async (e: any) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e: any) => {
      const text = e.target.result?.toString().split('\r')
      const splittedValues = text.map((row: any) => {
        const splitted = row?.split(', ')
        splitted[0] = splitted[0].replace('\n', '')
        splitted[3] === 'NULL' || splitted[3] === 'null'
          ? (splitted[3] = null)
          : null
        return splitted
      })
      dispatch(getEmployeePairWork(splittedValues))
    }
    reader.readAsText(e.target.files[0])
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="home-page-container"
    >
      <input type="file" onChange={(e) => showFile(e)} />
      <EmployeeGrid employeeData={employeeData?.fileData} />
    </Grid>
  )
}

export default Home
