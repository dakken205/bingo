<!-- Install TypeScript Vue Plugin (Volar), if you use VSCode -->

<script setup lang="ts">
import { ref } from "vue";

function handleSubmit() {
  if (year.value && serial.value) {
    const studentId = `JB${year.value}S${serial.value.toString().padStart(3, "0")}`;
    window.location.href = `/card/${studentId}`;
  }
}

const year = ref<number | null>(null);
const serial = ref<number | null>(null);
</script>

<template>
  <div class="input-container">
    <p>以下の項目を入力してください</p>
    <input
      type="number"
      placeholder="学籍番号の上２桁（半角）"
      v-model="year"
    />
    <input
      type="number"
      placeholder="学籍番号の下３桁（半角）"
      v-model="serial"
    />
    <button class=".button" @click="handleSubmit">ビンゴカードの取得</button>
  </div>
</template>

<style>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

input,
button {
  font-size: 16px;
  border-radius: 5px;
}

input {
  width: 250px;
  height: 50px;
  border: none;
  background-color: #ddd;
  padding: 0 10px;
}

button {
  width: 200px;
  height: 40px;
  border: none;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
  transition: 0.5s;
}

button:hover {
  background-color: #488cd0;
}
</style>
