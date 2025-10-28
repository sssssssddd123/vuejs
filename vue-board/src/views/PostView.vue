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
    <hr />
    <form v-on:submit="addCommentTest">
      <div>
        <label for="comment">댓글 작성</label><br />
        <textarea id="comment" v-model="comment"></textarea>
      </div>
      <button type="submit">등록</button>
    </form>
    <br />
    <hr />
    <div>
      <h3>댓글 목록</h3>
      <span v-for="comment in comments" v-bind:key="comment.comment_id">
        <p>글 번호: {{ comment.board_id }}</p>
        <p>댓글 번호: {{ comment.comment_id }}</p>
        <p>내용: {{ comment.content }}</p>
        <p>작성자: {{ comment.writer }}</p>
        <p>작성일: {{ formatDate(comment.write_date) }}</p>
        <hr />
      </span>
      <hr />
    </div>
  </div>
</template>

<script setup>
// import { computed, onBeforeMount } from "vue";
import { ref, computed } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { usePostStore } from "../stores/post";
const postStore = usePostStore(); //pinia 스토어 사용
const { addComment } = postStore; // addPost 함수 추출

const route = useRoute();
const router = useRouter();

const comment = ref("comment test");

// 교수님 방식
// const post = computed(() => postStore.getPostById(route.params.id));

// onBeforeMount(async () => {
//   await postStore.fetchPosts();
// });

// const writeData = computed(() => {
//   if (post.value.write_date) {
//     return new Date(post.value.write_date).toLocaleString();
//   }
//   return "";
// });

// 내 방식
const { fetchPost } = postStore; // addPost 함수 추출
const post = ref({});
const comments = ref([]);

const fetchPostTest = async () => {
  const result = await fetchPost(route.params.id);
  post.value = result.posts[0];
  comments.value = result.comments;
};
fetchPostTest();

const writeData = computed(() => {
  if (post.value.write_date) {
    return new Date(post.value.write_date).toLocaleString();
  }
  return "";
});

// 삭제
const deletePostHandler = async () => {
  if (localStorage.getItem("userID") != post.value.writer) {
    alert("권한이 없습니다.");
    return;
  }
  const postId = route.params.id;
  await postStore.deletePost(postId);
  // router.push("/");
  router.push({ name: "HomeView" });
};

// form 제출
const addCommentTest = async (e) => {
  e.preventDefault();
  if (!comment.value) {
    alert("값 없음");
    return;
  }
  const newComment = {
    postId: post.value.id,
    comment: comment.value,
    writer: localStorage.getItem("userID"),
  };
  await addComment(newComment);

  const result = await fetchPost(route.params.id);
  comments.value = result.comments;

  comment.value = "comment test";
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
</script>

<style scoped>
div {
  background-color: #f7fff0;
  border-radius: 12px;
  border: 1px solid #d5efc2;
  padding: 20px;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
  max-width: 700px;
  margin: 30px auto;
}

h3 {
  color: #4f7b29;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

p {
  margin: 4px 0;
  line-height: 1.5;
  font-size: 0.95rem;
}

textarea {
  width: 100%;
  border: 1px solid #d5efc2;
  border-radius: 8px;
  padding: 8px;
  resize: vertical;
  font-family: inherit;
}

button {
  background-color: #b6e388;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.95rem;
  color: #333;
  margin-top: 6px;
  cursor: default;
}

hr {
  border: none;
  border-top: 1px solid #d5efc2;
  margin: 16px 0;
}

em {
  color: #666;
}
</style>
