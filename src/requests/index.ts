import request from '../utils/globalHandlers/apiCallWrapper'

export const getBusinessesApi = () => {
  return request.call({
    baseURL: 'https://api.jsonbin.io/b',
    method: 'get',
    url: `/6177e9399548541c29c8c0f5`,
  })
}
