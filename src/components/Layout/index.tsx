import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import './style.scss'
import { useHistory } from 'react-router-dom'

const Layout = (props: any) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/`)
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="layout-main-wrapper"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        onClick={() => handleClick()}
        className="logo-container"
      >
        <Typography className="logo-text">LOGO</Typography>
      </Grid>
      {props.children}
    </Grid>
  )
}

export default Layout
