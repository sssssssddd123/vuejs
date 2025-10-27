<template>
  <div class="post-list">
    <h3>게시글 목록(PostList)</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p>ID: {{ post.id }}</p>
        <h4>
          <RouterLink v-bind:to="{ name: 'PostView', params: { id: post.id } }">
            {{ post.title }}
          </RouterLink>
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
import { RouterLink } from "vue-router";

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.post-list {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
}

.post-list h3 {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.post-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-list li {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
}

.post-list h4 {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.post-list p {
  margin: 4px 0;
  line-height: 1.5;
  font-size: 0.95rem;
}

.post-list em {
  color: #888;
  font-style: normal;
}
</style>
