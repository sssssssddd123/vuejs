import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usePostStore = defineStore("post", () => {
  // state
  const posts = ref([]);
  const comments = ref([]);

  // getter
  // id에 맞는 값을 가져옴
  const getPostById = (id) => {
    id = parseInt(id); // 라우트 파라미터에서 id를 가져옴
    return posts.value.find((post) => post.id === id);
  };

  // action
  const addPost = async (newPost) => {
    const result = await axios.post(`http://192.168.0.45:3000/`, newPost);
    posts.value.push({ ...newPost, id: result.data.insertId });
  };

  const addComment = async (newComment) => {
    // const result =
    await axios.post(`http://192.168.0.45:3000/addComment/`, newComment);
  };

  // const fetchComments = async () => {
  //   const response = await axios.get(`http://localhost:3000/comments/list`);
  //   console.log(response);
  //   comments.value = response.data;
  // };

  const deletePost = async (id) => {
    await axios.delete(`http://192.168.0.45:3000/${id}`);
    posts.value = posts.value.filter((post) => post.id !== id);
  };

  const fetchPosts = async () => {
    const response = await axios.get(`http://192.168.0.45:3000/`);
    posts.value = response.data;
  };

  const fetchPost = async (id) => {
    const response = await axios.get(`http://192.168.0.45:3000/${id}`);
    posts.value = [response.data.post];
    comments.value = response.data.comments;
    return { posts: posts.value, comments: comments.value };
  };

  return {
    posts,
    getPostById,
    addPost,
    addComment,
    deletePost,
    fetchPosts,
    fetchPost,
  };
});
