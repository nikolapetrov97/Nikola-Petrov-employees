import './AppWrapper.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import ClipLoader from 'react-spinners/ClipLoader'
import { ApplicationState } from './reducers'
import { Redirect } from 'react-router'

interface Props {
  children: any
}

const AppWrapper = (props: Props) => {
  const { children } = props
  const globalEvents = useSelector(
    (state: ApplicationState) => state.globalEvents
  )
  const loading = globalEvents.pendingTasks > 0
  const errors = globalEvents.error

  return (
    <>
      {errors ? <Redirect to="/errorpage" /> : null}
      {!!loading && (
        <div className="globalSpinner">
          <div className="serverspinner">
            <ClipLoader
              color={'rgb(0, 172, 172)'}
              loading={loading}
              size={150}
              speedMultiplier={2}
            />
          </div>
        </div>
      )}
      {children}
    </>
  )
}

export default AppWrapper
