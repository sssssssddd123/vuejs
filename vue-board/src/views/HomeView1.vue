<script setup>
import { ref, onMounted, provide } from "vue";
import axios from "axios";
import PostForm from "@/components/PostFrom.vue";
import PostList from "@/components/PostList.vue";

const posts = ref([]);
onMounted(async () => {
  const result = await axios.get("http://localhost:3000/");
  posts.value = result.data;
});

// 함수
const addPost = async (newPost) => {
  const result = await axios.post(`http://localhost:3000/`, newPost);
  posts.value.push({ ...newPost, id: result.data.id });
  // const result2 = await axios.get("http://localhost:3000/");
  // posts.value = result2.data;
};

// provide
provide("addPost", addPost);
</script>

<template>
  <div>
    <h3>게시판</h3>
    <PostForm />
    <PostList v-bind:posts="posts" />
  </div>
</template>
