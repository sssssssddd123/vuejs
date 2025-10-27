import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usePostStore = defineStore("post", () => {
  // state
  const posts = ref([]);

  // getter
  // id에 맞는 값을 가져옴
  const getPostById = (id) => {
    id = parseInt(id); // 라우트 파라미터에서 id를 가져옴
    return posts.value.find((post) => post.id === id);
  };

  // action
  const addPost = async (newPost) => {
    console.log(newPost);
    const result = await axios.post(`http://localhost:3000/`, newPost);
    console.log("test");
    posts.value.push({ ...newPost, id: result.data.insertId });
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`);
    posts.value = posts.value.filter((post) => post.id !== id);
  };

  const fetchPosts = async () => {
    const response = await axios.get(`http://localhost:3000/`);
    posts.value = response.data;
  };

  const fetchPost = async (id) => {
    const response = await axios.get(`http://localhost:3000/${id}`);
    posts.value = response.data;
    return posts.value[0];
  };

  return { posts, getPostById, addPost, deletePost, fetchPosts, fetchPost };
});
