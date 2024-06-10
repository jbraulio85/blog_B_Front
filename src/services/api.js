import axios from "axios";


const apiClient = axios.create({
    baseURL: 'https://code-fix-blog.vercel.app/blog/v2',
    timeout:5000,
})


export const getPosts = async () => {
    try{
        return await apiClient.get('/posts')
    }catch(e){
        return{
            error: true,
            e: e
        }
    }
}

export const getPostByName = async (name) => {
    try {
      return await apiClient.get(`/posts/${name}`);
    } catch (e) {
      return {
        error: true,
        e: e
      }
    }
  }

export const getCommentByPostName = async (name) => {
  try{
    return await apiClient.get(`/posts/${name}/comments`)
  }catch(e){
    return{
      error:true,
      e: e
    }
  }
}
  

export const addComment = async (name, text) => {
  try{
    return await apiClient.post(`/posts/${name}/add-comments`, text)
  }catch(e){
    return{
      error:true,
      e: e
    }
  }
}
  