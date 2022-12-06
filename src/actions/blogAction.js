import axios from "axios";

import {redirect} from 'react-router-dom';

 const savePost=async(post)=> {
  console.log("form data=====>",post)
 
  
    if (post.title.trim().length < 5 || post.body.trim().length < 10) {
      throw { isError: true, message: 'Invalid input data provided.', status:422 };
    }
  
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts',post, {   
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("data=======>",data)
    
  
    if (!data) {
      console.log("Data insert fail")
    }
    
  }



  export const newPostAction=async({ request })=> {  
    const formData = await request.formData();   
    const post = {
      title: formData.get('title'),
      body: formData.get('post-text'),
    };

    try {
      await savePost(post)
    } catch (err) {   
      if(err.status===422){
        return err;
      }  
      throw err
    }
   return redirect("/blog");  
 
  }

 