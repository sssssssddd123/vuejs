<script setup>
import { ref, reactive } from "vue";

const friends = reactive([
  { name: "홍길동", age: 20 },
  { name: "김민식", age: 21 },
]);

let fName = ref("");
let fAge = ref();

const addFriend = () => {
  const friendInfo = reactive({
    name: fName.value,
    age: fAge.value,
  });
  friends.push(friendInfo);
  fName = ref("");
  fAge = ref();
};
</script>

<template>
  <p>이름: <input type="text" v-model="fName" /></p>
  <p>나이: <input type="number" v-model="fAge" /></p>
  <button v-on:click="addFriend">버튼임</button>
  <br />
  <hr />
  <thead>
    <tr>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="friend in friends" v-bind:key="friend.name">
      <td>{{ friend.name }}</td>
      <td>{{ friend.age }}</td>
    </tr>
  </tbody>
</template>
