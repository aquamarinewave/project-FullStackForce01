import axios from 'axios';

export async function fetchByCategory(category, controller) {
  const baseURL = `https://fullstackforce.onrender.com/api/notices?page=1&category=${category}`;
  const data = await axios.get(baseURL, { signal: controller.signal });
  return data;
}

export async function fetchByCategoryOwn(category, controller) {
  const baseURL = `https://fullstackforce.onrender.com/api/notices/users`;
  const data = await axios.get(baseURL, { signal: controller.signal });
  return data;
}

export async function fetchByCategoryFavorite(category, controller) {
  const baseURL = `https://fullstackforce.onrender.com/api/notices/favorites`;
  const data = await axios.get(baseURL, { signal: controller.signal });
  return data;
}
