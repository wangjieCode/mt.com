import axios from '@/axios.js'

const api = {
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  search () {
    return axios.get('/api/meituan/header/search.json')
  },
  nav () {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/list/recommend.json')
  }
}
export default api
