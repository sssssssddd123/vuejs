<template>
  <div class="post-list">
    <h3>게시글 목록(PostList)</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p>ID: {{ post.id }}</p>
        <h4>
          <RouterLink v-if="isLogin" v-bind:to="{ name: 'PostView', params: { id: post.id } }">
            {{ post.title }}
          </RouterLink>
          <span v-else>{{ post.title }}</span>
        </h4>
        <p>{{ post.content }}</p>
        <p>
          <em>작성자: {{ post.writer }}</em>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isLogin = ref(localStorage.getItem("userID") != "");

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.post-list {
  background-color: #f7fff0;
  border-radius: 12px;
  border: 1px solid #d5efc2;
  padding: 20px;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
}

.post-list h3 {
  text-align: center;
  color: #4f7b29;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: #ffffff;
  border: 1px solid #d5efc2;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 10px;
}

h4 {
  font-size: 1.05rem;
  color: #3d6620;
  margin-bottom: 6px;
}

p {
  margin: 4px 0;
  line-height: 1.5;
  font-size: 0.95rem;
}

em {
  color: #666;
  font-style: normal;
}
</style>
