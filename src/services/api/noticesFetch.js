import axios from 'axios';

export async function fetchByCategory(category, controller) {
  const baseURL = `https://fullstackforce.onrender.com/api/notices?category=${category}`;
  const data = await axios.get(baseURL, { signal: controller.signal });
  return data;
}

export async function fetchByCategoryOwn(category, controller) {
  const baseURL = `https://fullstackforce.onrender.com/api/notices/users?category=${category}`;
  const data = await axios.get(baseURL, { signal: controller.signal });
  return data;
}

export async function fetchByCategoryFavorite(category, controller) {
  const baseURL = `https://fullstackforce.onrender.com/api/notices/favorites?category=${category}`;
  const data = await axios.get(baseURL, { signal: controller.signal });
  return data;
}
