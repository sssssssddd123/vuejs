<script setup>
import { ref, reactive } from "vue";

const url = ref("https://vuejs.org/");
const header = reactive({
  h1: "첫 웹페이지",
  p: "HTML과 CSS로 만든 기본 구조",
});
const body = reactive({
  h2: "반갑다",
  p: "이 페이지는 HTML과 CSS로 만들어졌으며, 어쩌구 저쩌구입니다.",
  ulH3: "내용 예시",
  li1: "간단한 텍스트",
  li2: "링크: ",
  li3: "리스트 항목",
});
</script>

<template>
  <header>
    <div>
      <h1>{{ header.h1 }}</h1>
      <p>{{ header.p }}</p>
    </div>
  </header>

  <body class="test">
    <div>
      <h2>{{ body.h2 }}</h2>
      <p>{{ body.p }}</p>
      <h3>{{ body.ulH3 }}</h3>
      <ul>
        <li>{{ body.li1 }}</li>
        <li>
          <p>{{ body.li2 }}<a v-bind:href="url">예시 사이트</a></p>
        </li>
        <li>{{ body.li3 }}</li>
      </ul>
    </div>
  </body>
</template>

<style scoped>
.test {
  padding: 0px;
  margin: 0px;
  background-color: antiquewhite;
}
</style>
