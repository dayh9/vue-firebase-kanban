<template>
  <div class="column">
    <div class="column-title">
      <h3>{{column.title}}</h3>
    </div>
    <div class="cards-container">
      <!-- <Card :todo="todos[1]" /> -->
      <!-- <Card v-for="todo in todos" :key="todo.id" :todo="todo" />aa -->
      <Card v-for="todo in filteredTodos(column.id)" :key="todo.id" :todo="todo" />
    </div>
    <!-- <p>{{todo.text}}</p> -->
  </div>
</template>
<script>
import Card from "./Card";
export default {
  components: {
    Card
  },
  props: {
    column: Object
  },
  data() {
    return {
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
      ]
    };
  },
  methods: {
    filteredTodos(s) {
      return this.todos.filter(t => t.status === s);
    }
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
  /* top: 30px;
  bottom: 10px;
  left: 10px; */
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