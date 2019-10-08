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
  const resp = await api.get(`/Songs`)
  return resp.data;
}

export const showFlavors = async () => {
  const resp = await api.get(`/flavors`)
  return resp.data;
}

export const showSongItem = async (id) => {
  const resp = await api(`/Songs/${id}`)
  return resp.data;
}

export const postSong = async (item) => {
  const resp = await api.post(`/Songs`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  return resp.data
}

export const putSong = async (item, id) => {
  const resp = await api.put(`/Songs/${id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  }, item)
  return resp.data
}
export const destroySong = async (id) => {
  const resp = await api.delete(`/Songs/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  });
  return resp.data;
}

export const putSongFlavor = async (Song_id, id) => {
  const resp = await api.put(`/Songs/${Song_id}/flavors/${id}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  return resp.data
}

