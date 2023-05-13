export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 1000,
  headers:
  {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,DELETE',
    'Access-Control-Allow-Headers': '*'
  }
})