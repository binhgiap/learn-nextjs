import { CategoryData } from '@/types';
import axios from 'axios'
export const getCategories = async (limit:number = 5) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const getCategoryIds = async () => {
  const categories: CategoryData[] = await getCategories();
  return categories.map(category => ({ params: { id: `${category.id}` } }))
}

export const getCategoryById = async (id: string) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}