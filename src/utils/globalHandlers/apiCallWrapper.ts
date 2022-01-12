import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { dispatchErrorHandler } from './errorHandlerHelper'
import { endSpinner, startSpinner } from './spinnerhelper'

class ApiRequest {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  setRequestHeaders(originalConfig: AxiosRequestConfig): AxiosRequestConfig {
    const config = originalConfig

    config.headers = {
      ...originalConfig.headers,
    }

    return config
  }

  async call(originalConfig: AxiosRequestConfig) {
    let response: AxiosResponse
    const config = this.setRequestHeaders(originalConfig)

    try {
      startSpinner()
      response = await axios(config)
      endSpinner()
      // const errorCode = _.get(response, pathToErrorCode);

      // if (errorCode && response.status !== 200) {
      //     dispatchErrorHandler({ ...response });
      // }

      return response
    } catch (e: any) {
      endSpinner()
      const error = e || {}
      console.log('\x1b[31m%s\x1b[31m', error)

      dispatchErrorHandler(error)

      return error
    }
  }
}

const request = new ApiRequest()

export default request
