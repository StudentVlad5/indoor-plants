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
  const formData = new FormData();
  updateData.avatar && formData.set('avatar', updateData.avatar);
  updateData.email && formData.append('email', updateData.email);
  updateData.birthday && formData.append('birthday', updateData.birthday);
  updateData.location && formData.append('location', updateData.location);
  updateData.phone && formData.append('phone', updateData.phone);

  console.log(formData);

  const { data } = await axios.patch(`/auth/user/${updateData.id}`, formData);
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
