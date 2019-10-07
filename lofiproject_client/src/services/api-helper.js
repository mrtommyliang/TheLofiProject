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

export const showFood = async () => {
  const resp = await api.get(`/foods`)
  return resp.data;
}

export const showFlavors = async () => {
  const resp = await api.get(`/flavors`)
  return resp.data;
}

export const showFoodItem = async (id) => {
  const resp = await api(`/foods/${id}`)
  return resp.data;
}

export const postFood = async (item) => {
  const resp = await api.post(`/foods`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  return resp.data
}

export const putFood = async (item, id) => {
  const resp = await api.put(`/foods/${id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  }, item)
  return resp.data
}
export const destroyFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  });
  return resp.data;
}

export const putFoodFlavor = async (food_id, id) => {
  const resp = await api.put(`/foods/${food_id}/flavors/${id}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  return resp.data
}

