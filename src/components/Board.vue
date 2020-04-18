<template>
  <div class="board">
    <div class="nav">
      <div v-if="isShowForm" class="card-form">
        <div class="form-block">
          <label>Title</label>
          <input type="text" v-model="newTodo.title" />
        </div>
        <div class="form-block">
          <label>Description</label>
          <textarea v-model="newTodo.text"></textarea>
        </div>
        <div class="form-block">
          <label>Status</label>
          <select v-model="newTodo.status">
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
        <div class="form-block">
          <label>Style</label>
          <select v-model="newTodo.style">
            <option>purple</option>
            <option>pink</option>
            <option>green</option>
          </select>
        </div>
        <div class="form-block">
          <button @click="submitNewTodo">Add</button>
        </div>
        <div class="form-block">
          <button @click="showForm">Close</button>
        </div>
      </div>
      <section>
        <div v-if="!isShowForm" class="form-block">
          <button @click="showForm">Add card</button>
        </div>
      </section>
    </div>
    <div class="columns-container">
      <BoardColumn v-for="column in columns" :key="column.id" :column="column" :todos="todos" />
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
      isShowForm: false,
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
    submitNewTodo() {
      if (this.newTodo.title && this.newTodo.status) {
        db.ref("todos").push(this.newTodo);
        this.newTodo = {
          title: "",
          text: "",
          status: "",
          style: ""
        };
        this.showForm();
      } else {
        alert("title and status required");
      }
    },
    showForm() {
      this.isShowForm = !this.isShowForm;
    }
  },
  firebase: {
    fbTodos: db.ref("todos")
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
.board {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  background-color: #ffff99;
  min-height: 100%;
  min-width: 100%;
}
.columns-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
}
.nav {
  display: flex;
  justify-content: center;
  align-content: center;
}
.nav button {
  background-color: #969696;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
.card-form {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
}
.form-block {
  display: flex;
  flex-direction: column;
  margin: 2px;
  padding: 2px;
  flex: 1;
  max-height: 100px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: white;
  background-color: #969696;
  border: 1px solid #6b6b61;
}
</style>