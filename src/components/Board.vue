<template>
  <div class="board">
    <div class="nav"></div>
    <div class="columns-container">
      <BoardColumn v-for="column in columns" :key="column.id" :column="column" />
      <!-- <BoardColumn columnTitle="column 2" />
      <BoardColumn columnTitle="column 3" />-->
    </div>
  </div>
</template>

<script>
import BoardColumn from "./BoardColumn";
// import { db } from "../firebase.js";

export default {
  components: {
    BoardColumn
  },
  data() {
    return {
      columns: [
        { id: 0, title: "To Do" },
        { id: 1, title: "In Progress" },
        { id: 2, title: "Done" }
      ]
    };
  }
};
</script>

<style>
.board {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  background-color: #ffff99;
  /* main axis zalezy czy jest row czy column */
  /* na main axis */
  /* justify-content: space-evenly; */
  /* na cross axis */
  /* align-items: center; */
  /* ile miejsca między elementami */
  /* align-content: flex-end; */
  min-height: 100%;
  min-width: 100%;
}
.columns-container {
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  display: flex;
  flex-wrap: wrap;
  /* background-color: #ffff99; */
  /* main axis zalezy czy jest row czy column */
  /* na main axis */
  justify-content: space-evenly;
  /* na cross axis */
  align-items: stretch;
  /* ile miejsca między elementami */
  /* align-content: flex-end; */
  /* min-height: 100%;
  min-width: 100%; */
}
.nav {
  /* position: absolute; */
  height: 50px;
}
</style>