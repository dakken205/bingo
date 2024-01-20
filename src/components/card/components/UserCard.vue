<script setup lang="ts">
import { ref } from "vue";
import Random from "../services/Random";
import items from "../../../data/items.json";

function flatten(i: number, j: number) {
  return i * 5 + j;
}

const props = defineProps({
  year: {
    type: Number,
    required: true,
  },
  serial: {
    type: Number,
    required: true,
  },
});

const seed = props.year * 1000 + props.serial;
const rng = new Random(seed);

const cards = rng.sample(items, 25);
const isOpened = ref<boolean[]>(new Array(25).fill(false));
isOpened.value[flatten(2, 2)] = true;
</script>

<template>
  <div class="card-root">
    <section>
      <div>{{ `JB${props.year}S${props.serial}` }}用のカード</div>
    </section>

    <hr />

    <table>
      <tr v-for="i in 5" v-bind:key="i">
        <td v-for="j in 5" v-bind:key="j">
          <button v-if="i == 3 && j == 3" class="bingo-item">
            <img
              src="../../../assets/img/sisbingo.png"
              alt="bingo-center closed"
              height="50px"
              width="50px"
            />
          </button>
          <button
            v-else
            class="bingo-item"
            :class="isOpened[flatten(i - 1, j - 1)] ? 'opened' : 'closed'"
            @click="
              isOpened[flatten(i - 1, j - 1)] = !isOpened[flatten(i - 1, j - 1)]
            "
          >
            {{ cards[flatten(i - 1, j - 1)] }}
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.card-root {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bingo-item {
  width: 60px;
  height: 60px;
  font-size: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 3px;
  padding: 3px;
  cursor: pointer;
}

.opened {
  background-color: #ddd;
}

.closed {
  background-color: #fff;
}
</style>
