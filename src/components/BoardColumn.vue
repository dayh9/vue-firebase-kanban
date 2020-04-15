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
          title: "Podlać karl",
          text: "centymetr na ss",
          status: 0
        },
        {
          id: Math.random(),
          title: "Podlać Ade",
          text: "centymetr na ss",
          status: 1
        },
        {
          id: Math.random(),
          title: "Podlać lol",
          text: "centymetr na ss",
          status: 1
        },
        {
          id: Math.random(),
          title: "Podlać ss",
          text: "centymetr na ss",
          status: 2
        },
        {
          id: Math.random(),
          title: "Podlać kyky",
          text: "centymetr na ss",
          status: 2
        },
        {
          id: Math.random(),
          title: "Podlać Admumue",
          text: "centymetr na ss",
          status: 2
        },
        {
          id: Math.random(),
          title: "Podlać Admumue",
          text: "centymetr na ss",
          status: 2
        },
        {
          id: Math.random(),
          title: "Podlać Admumue",
          text: "centymetr na ss",
          status: 2
        },
        {
          id: Math.random(),
          title: "Podlać Admumue",
          text: "centymetr na ss",
          status: 2
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
  overflow: auto;
}
.column-title {
  align-self: flex-start;
  margin: 0 10%;
}
</style>