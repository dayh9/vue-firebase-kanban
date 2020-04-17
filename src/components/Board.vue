<template>
  <div class="board">
    <!-- <ul>
      <li v-for="t in fbTodos" :key="t['.key']">{{t.title}}</li>
    </ul>-->
    <div class="nav">
      <label>Title</label>
      <input type="text" v-model="newTodo.title" />
      <label>Description</label>
      <input type="text" v-model="newTodo.text" />
      <label>Status</label>
      <select v-model="newTodo.status">
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <label>Style</label>
      <select v-model="newTodo.style">
        <option>pink</option>
        <option>green</option>
      </select>
      <button @click="submitN">Add</button>
    </div>
    <div class="columns-container">
      <BoardColumn v-for="column in columns" :key="column.id" :column="column" :todos="todos" />
      <!-- <BoardColumn columnTitle="column 2" />
      <BoardColumn columnTitle="column 3" />-->
    </div>
  </div>
</template>

<script>
import BoardColumn from "./BoardColumn";
import { db } from "../firebase";

export default {
  components: {
    BoardColumn
  },
  data() {
    return {
      fbTodos: null,
      columns: [
        { id: 0, title: "To Do" },
        { id: 1, title: "In Progress" },
        { id: 2, title: "Done" }
      ],
      todos: [
        {
          id: Math.random(),
          title: "Podlać pietruszkę",
          text: "Nalać centymetr letniej wody na dno doniczki",
          status: 0,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Nakarmić psa",
          text: "Podać gotowanego kurczaka",
          status: 1,
          style: "pink"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        },
        {
          id: Math.random(),
          title: "Zrobić obiad",
          text: "centymetr na ss",
          status: 1,
          style: "green"
        }
      ],
      newTodo: {
        title: "",
        text: "",
        status: "",
        style: ""
      }
    };
  },
  methods: {
    submitN() {
      db.ref("todos").push(this.newTodo);
    }
  },
  firebase: {
    fbTodos: db.ref("todos")
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