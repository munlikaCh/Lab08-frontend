import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getOrganizers(perPage, page) {
    return apiClient.get('/organizers?_limit=' + perPage + '&_page=' + page)
  },
  //Added new call
  getOrganizer(id) {
    return apiClient.get('/organizers/' + id)
  },
  saveOrganizer(organizer) {
    return apiClient.post('/organizers', organizer)
  }
}