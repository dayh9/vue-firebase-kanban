<template>
  <div class="card" v-bind:class="todo.style">
    <div class="buttons-container">
      <button v-if="showToDo" class="button-move" @click="changeStatus('To Do')">>To Do</button>
      <button
        v-if="showInProgress"
        class="button-move"
        @click="changeStatus('In Progress')"
      >>In Progress</button>
      <button v-if="showDone" class="button-move" @click="changeStatus('Done')">>Done</button>
      <button class="button-remove" @click="removeCard">X</button>
    </div>
    <div class="card-title">
      <h3>{{todo.title}}</h3>
    </div>
    <hr v-if="todo.text" />
    <p>{{todo.text}}</p>
  </div>
</template>
<script>
import { db } from "../firebase";
export default {
  props: {
    todo: Object
  },
  computed: {
    showToDo() {
      return !this.todo.status.match("To Do");
    },
    showInProgress() {
      return !this.todo.status.match("In Progress");
    },
    showDone() {
      return !this.todo.status.match("Done");
    }
  },
  methods: {
    removeCard() {
      this.$emit("removeCard", "Nowy tytul");
    },
    changeStatus(newStatus) {
      this.$emit("changeStatus", newStatus);
    }
  },
  firebase: {
    fbTodos: db.ref("todos")
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  outline: 10px dashed #e6ccff;
  margin: 35px 10px;
  width: 250px;
  background-color: #e6ccff;
  font-family: "Bowlby One SC", cursive;
}
.pink {
  outline: 10px dashed #ff80ff;
  background-color: #ff80ff;
}
.green {
  outline: 10px dashed #78ff8a;
  background-color: #78ff8a;
}
.card p {
  margin: 2% 10%;
  text-align: left;
  font-size: 5;
  word-wrap: break-word;
  display: flex;
  flex: 1;
}
.card-title {
  margin: 0 10%;
}
.card hr {
  border-top: 1px solid #6b6b61;
  width: 80%;
}
.buttons-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  width: 90%;
  margin: 2px 0;
}
.button-remove {
  background-color: #d42d2d;
  border: none;
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 0 2px;
}
.button-move {
  background-color: #6b6b61;
  border: none;
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  margin: 0 2px;
}
</style>