<template>
  <h1>컴포먼트 기초</h1>
  <p>이름: {{ starName }}</p>
  <p>별점: {{ starPoint }}</p>
  <button v-on:click="createStarPoint">버튼</button>
  <section>
    <h2>컴포먼트 한 개</h2>
    <OneSection title="승1" content="반갑습니다" v-on:callStarPoint="createStarPoint" />
  </section>
  <br />
  <hr />
  <section>
    <h2>컴포먼트 반복문</h2>
    <OneSection
      v-for="[no, item] in mapData"
      v-bind:key="no"
      v-bind:title="item.title"
      v-bind:content="item.content"
      v-on:callStarPoint="createStarPoint(item.title)"
    />
  </section>
  <br />
  <hr />
  <section>
    <h2>컴포먼트 여러 개</h2>
    <OneSection v-bind:title="fName" v-bind:content="fContent" />
    <OneSection title="승3" content="Good Morning" />
    <OneSection title="승4" />
  </section>
</template>

<script setup>
import { ref } from "vue";

const starName = ref("");
const starPoint = ref(Math.ceil(Math.random() * 5));
const createStarPoint = (name) => {
  starName.value = name;
  starPoint.value = Math.ceil(Math.random() * 5);
};

// 컴포먼트 선언
import OneSection from "../components/OneSection.vue";

// defineProps 활용
const fName = ref("승2");
const fContent = ref("투명드래곤이 울부짖었다");

// 컴포먼트 반복문 활용
const mapData = new Map();
mapData.set(1, { title: "홍길동", content: "안녕하세요" });
mapData.set(2, { title: "김민교", content: "Hello" });
mapData.set(3, { title: "김상우", content: "Good Morning" });
</script>

<style>
section {
  border: green 1px dashed;
  padding: 5px;
  margin: 10px;
}
</style>
