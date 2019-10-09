const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', {
    user: registerData
  })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const showSong = async () => {
  const resp = await api.get(`/songs`)
  return resp.data;
}

export const showSongItem = async (id) => {
  const resp = await api(`/songs/${id}`)
  return resp.data;
}

export const postSong = async (item) => {
  const resp = await api.post(`/songs`, item)
  return resp.data
}

export const putSong = async (id) => {
  const resp = await api.put(`/songs/${id}`)
  return resp.data
}
export const destroySong = async (id) => {
  const resp = await api.delete(`/songs/${id}`);
  return resp.data;
}

export const putSongUser = async (Song_id, id) => {
  const resp = await api.put(`/songs/${Song_id}/users/${id}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  return resp.data
}

