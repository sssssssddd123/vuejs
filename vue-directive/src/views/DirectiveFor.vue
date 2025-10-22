<script setup>
import { ref } from "vue";

// const ary = ["마우스", "키보드", "USB", "마우스패드"];
const ary = ["투명드래곤이", "울부짖었다", "투명드래곤은", "졸라짱쎄다"];
const itemList = ref(ary);
const friends = ref(["투", "명", "드"]);
let newFriend = ref("래");
const addNewFriend = () => {
  friends.value.push(newFriend);
  newFriend = ref("");
};
</script>

<template>
  <ul>
    <li v-for="item in itemList" v-bind:key="item">{{ item }}</li>
  </ul>
  <br />
  <hr />
  <p v-for="num in 9" v-bind:key="num">3 * {{ num }} = {{ num * 3 }}</p>
  <br />
  <hr />
  친구 이름: <input type="text" v-model="newFriend" v-on:change="addNewFriend" />
  <h3>친구 목록</h3>
  <ul>
    <li v-for="name in friends" v-bind:key="name">{{ name }}</li>
  </ul>
</template>
