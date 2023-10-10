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

export const changePassword = async credentials => {
  try {
    const res = await axios.post('/auth/changepassword', credentials);
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
  updateData.userName && formData.append('userName', updateData.userName);
  updateData.surname && formData.append('surname', updateData.surname);
  updateData.email && formData.append('email', updateData.email);
  updateData.birthday && formData.append('birthday', updateData.birthday);
  updateData.location && formData.append('location', updateData.location);
  updateData.phone && formData.append('phone', updateData.phone);
  updateData.password && formData.append('password', updateData.password);
  updateData.delivery && formData.append('delivery', updateData.delivery);
  // updateData.address && formData.append('address', updateData.address);
  // updateData.address.forEach(value => {
  //   formData.append('address[]', value);
  // });
  const { data } = await axios.patch(`/auth/user/${updateData.id}`, formData);
  return data;
};

export const refreshUserToken = async () => {
  const { data } = await axios.post('/auth');
  return data;
};

export const addToFavorite = async id => {
  try {
    await axios.post(`/auth/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};

export const removeFromFavorite = async id => {
  try {
    await axios.delete(`/auth/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};
