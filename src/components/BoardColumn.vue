<template>
  <div class="column">
    <div class="column-title">
      <h3>{{column.title}}</h3>
    </div>
    <div class="cards-container">
      <Card
        v-for="todo in filteredFbTodos"
        :key="todo['.key']"
        :todo="todo"
        v-on:removeCard="removeCard(todo['.key'])"
        v-on:changeStatus="changeStatus($event, todo['.key'], todo)"
      />
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import { db } from "../firebase";

export default {
  components: {
    Card
  },
  props: {
    column: Object,
    todos: Array
  },
  data() {
    return {
      name: "stary tytul",
      fbTodos: []
      // todos: [
      //   {
      //     id: Math.random(),
      //     title: "Podlać pietruszkę",
      //     text: "Nalać centymetr letniej wody na dno doniczki",
      //     status: 0,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Nakarmić psa",
      //     text: "Podać gotowanego kurczaka",
      //     status: 1,
      //     style: "pink"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   },
      //   {
      //     id: Math.random(),
      //     title: "Zrobić obiad",
      //     text: "centymetr na ss",
      //     status: 1,
      //     style: "green"
      //   }
      // ]
    };
  },
  computed: {
    filteredFbTodos() {
      return this.fbTodos.filter(todo => todo.status === this.column.title);
    }
  },
  methods: {
    removeCard(key) {
      this.$firebaseRefs.fbTodos.child(key).remove();
    },
    changeStatus(newStatus, key, oldTodo) {
      const newTodo = { ...oldTodo };
      newTodo.status = newStatus;
      this.$firebaseRefs.fbTodos.child(key).set(newTodo);
    }
  },
  firebase: {
    fbTodos: db.ref("todos")
  }
};
</script>
<style>
.column {
  outline: 10px dashed #6b6b61;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 80vh;
  width: 300px;
  margin: 20px;
}
.cards-container {
  max-height: 100%;
  max-width: 100%;
  overflow: auto;
  overflow-x: hidden;
}
.column-title {
  align-self: flex-start;
  margin: 0 10%;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>