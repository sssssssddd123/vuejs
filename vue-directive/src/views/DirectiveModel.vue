<template>
  <textarea v-bind:rows="rCorunt" v-model="textAreaInput"></textarea>
  <p v-html="textAreaInput.replace(/\n/g, `<br>`)"></p>
  <br />
  <hr />
  <select v-model="memberType">
    <option value="1">일반회원</option>
    <option value="2">우수회원</option>
    <option value="3">특별회원</option>
  </select>
  <p>{{ memberType }}</p>
  <br />
  <hr />
  <section>
    <label><input type="checkbox" name="os" v-model="selectOS" value="1" />macOS</label>
    <label><input type="checkbox" name="os" v-model="selectOS" value="2" />Windows</label>
    <label><input type="checkbox" name="os" v-model="selectOS" value="3" />Linux</label>
  </section>
  <p>{{ selectOS }}</p>
  <br />
  <hr />
  <section>
    <label><input type="radio" name="selectedOS" v-model="selectedOS" value="1" />macOS</label>
    <label><input type="radio" name="selectedOS" v-model="selectedOS" value="2" />Windows</label>
    <label><input type="radio" name="selectedOS" v-model="selectedOS" value="3" />Linux</label>
  </section>
  <p>{{ selectedOS }}</p>
  <br />
  <hr />
</template>

<script setup>
import { ref } from "vue";

// new RegExp(), /Test/
// new Array(), []
const rCorunt = ref(10); // textArea의 크기
const textAreaInput = ref("투명드래곤이 울부짖었다");
const memberType = ref(1); // select 속 option의 value 값
const selectOS = ref(["1", "2", "3"]); // section 속 input의 value 값
const selectedOS = ref(1); // section 속 input의 value 값
</script>
