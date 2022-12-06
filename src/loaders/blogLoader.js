import { sleep } from './sleep';
import axios from 'axios';
import { defer } from 'react-router-dom';

export const postsLoader=async()=> {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.json();
}



const slowPostsLoader=async()=> {
  await sleep(2000);
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  if (!data) {
    throw new Error('Failed to fetch posts.', { status: 500 });
  }
  return data
}
export const deferredBlogPostsLoader=async()=>{
  return defer({ posts: slowPostsLoader() });

}

export const postDetailLoader=async({params})=> {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
}

export const savePost=async(data)=> {
  const post = {
    title: data.get('title'),
    body: data.get('post-text'),
  };

  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    return { isError: true, message: 'Invalid input data provided.' };
  }

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {   
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }
  
}