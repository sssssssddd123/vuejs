<template>
  키 <br />
  <input type="number" v-model="no" /><br />
  이름<br />
  <input type="text" v-model="name" /><br />
  연락처<br />
  <input type="text" v-model="phone" /><br />
  <button v-on:click="addNewElement">버튼</button>
  <div>
    <p v-for="[no, person] in mapRef" v-bind:key="person">
      키: {{ no }}, 값: {{ person.name }}, 연락처: {{ person.phone }}
    </p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// Map
// .set -> (키, 값), {키: 값} 등으로 저장 가능
const map = new Map();
map.set(1, { name: "홍길동", phone: "010-1111-1111" });
map.set(2, { name: "김명식", phone: "010-2222-2222" });
map.set(3, { name: "박영동", phone: "010-3333-3333" });

// .delete를 사용하면 삭제도 가능

const mapRef = reactive(map);

// 번수
let no = ref();
let name = ref("");
let phone = ref("");

// 함수
const addNewElement = () => {
  mapRef.set(no.value, { name: name.value, phone: phone.value });
  no = ref();
  name = ref("");
};
</script>
