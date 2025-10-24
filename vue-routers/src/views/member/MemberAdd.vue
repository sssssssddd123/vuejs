<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive, inject } from "vue";

// 라우터 객체 생성
const router = useRouter();

// 데이터
const member = reactive({
  id: 37894,
  name: "홍길동",
  email: "hong@email",
  points: 10,
  note: "신규 특가",
});

const memberList = inject("memberList");

// 함수
const onAdd = () => {
  // 멤버 추가
  memberList.set(member.id, member);

  // 목록으로 이동
  router.push({ name: "MemberList" });
};
</script>

<template>
  <h3>회원관리</h3>
  <nav id="breadcrums">
    <ul>
      <li><RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink></li>
      <li><RouterLink v-bind:to="{ name: 'MemberList' }">MemberList</RouterLink></li>
      <li>MemberAdd</li>
    </ul>
  </nav>
  <hr />
  <section>
    <h3>회원 추가</h3>
    <p>회원정보를 입력하고 버튼을 클릭하여 주세요</p>
    <form v-on:submit.prevent="onAdd">
      <dl>
        <dt><label for="">ID</label></dt>
        <dd><input type="number" v-model.number="member.id" /></dd>
        <dt><label for="">이름</label></dt>
        <dd><input type="text" v-model.number="member.name" /></dd>
        <dt><label for="">이메일</label></dt>
        <dd><input type="email" v-model.number="member.email" /></dd>
        <dt><label for="">포인트</label></dt>
        <dd><input type="number" v-model.number="member.points" /></dd>
        <dt><label for="">비고</label></dt>
        <dd><input type="text" v-model.number="member.note" /></dd>
      </dl>
      <button type="submit">버튼</button>
    </form>
  </section>
</template>
