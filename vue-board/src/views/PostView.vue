<template>
  <div>
    <p>상세화면(PostView)</p>
    <div>
      <h3>제목: {{ post.title }}</h3>
      <p>내용</p>
      <p>{{ post.content }}</p>
      <p>
        <em>작성자: {{ post.writer }}</em>
      </p>
      <p>작성일: {{ writeData }}</p>
      <button v-on:click="deletePostHandler">삭제</button><br />
      <RouterLink to="/"><button>목록</button></RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
// import { ref, computed, onBeforeMount } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { usePostStore } from "../stores/post";
const postStore = usePostStore(); //pinia 스토어 사용

const route = useRoute();
const router = useRouter();

// 교수님 방식
const post = computed(() => postStore.getPostById(route.params.id));

onBeforeMount(async () => {
  await postStore.fetchPosts();
});

const writeData = computed(() => {
  if (post.value.write_date) {
    return new Date(post.value.write_date).toLocaleString();
  }
  return "";
});

// 내 방식
// const { fetchPost } = postStore; // addPost 함수 추출
// const postDB = ref({});

// const postId = computed(() => route.params.id);
// const fetchPostTest = async () => (postDB.value = await fetchPost(route.params.id));
// fetchPostTest();

// const writeData = computed(() => {
//   if (postDB.value.write_date) {
//     return new Date(postDB.value.write_date).toLocaleString();
//   }
//   return "";
// });

// 삭제
const deletePostHandler = async () => {
  const postId = route.params.id;
  await postStore.deletePost(postId);
  // router.push("/");
  router.push({ name: "HomeView" });
};
</script>
