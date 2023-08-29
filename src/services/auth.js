import axios from 'axios';

export const signUp = async credentials => {
  try {
    const res = await axios.post('/auth/signup', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const signIn = async credentials => {
  try {
    const res = await axios.post('/auth/signin', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const singOut = async () => {
  const res = await axios.post('/auth/logout');
  return res;
};

export const updateUserData = async updateData => {
  const perem = {};
  for (let key in updateData) {
    if (key != 'id') {
      perem[key] = updateData[key];
    }
  }
  const { data } = await axios.patch(`/auth/user/${updateData.id}`, perem);
  return data;
};

export const refreshUserToken = async () => {
  const { data } = await axios.post('/auth');
  return data;
};

export const addToFavorite = async id => {
  try {
    await axios.post(`/notices/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};

export const removeFromFavorite = async id => {
  try {
    await axios.delete(`/notices/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};
