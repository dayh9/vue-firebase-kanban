<template>
  <div class="todoapp-container">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
      <button @click="submitName">Add</button>
    </div>

    <div>
      <ul>
        <!-- <li v-for="personName of names" v-bind:key="personName['.key']">
					{{ personName }}
        </li>-->
      </ul>
    </div>

    <div class="todoapp-items-container">
      <div class="todoapp-item">
        <h2>Dodaj nowe todo</h2>
        <div>
          <input type="text" placeholder="todo" v-model="newItem" />
          <button @click="addItem">Dodaj</button>
        </div>
      </div>
      <TodoItem
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:item="item"
        @removeClicked="removeItem"
      />
    </div>

    <!-- <div id="parent">
      <h1>Parent</h1>
      <div class="ch" id="ch1">
        <h1>Child 1</h1>
      </div>
      <div class="ch" id="ch2">
        <h1>Child 2</h1>
      </div>
      <div class="ch" id="ch3">
        <h1>Child 2</h1>
      </div>
    </div>-->
    <!-- <div class="flexbox-container">
      <div class="flexbox-item flexbox-item-1"></div>
      <div class="flexbox-item flexbox-item-2"></div>
      <div class="flexbox-item flexbox-item-3"></div>
    </div>-->
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { db } from "../firebase.js";
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      names: [],
      name: "Paul",
      newItem: "",
      items: [
        { id: 0, title: "Zrobić zakupy", completed: false },
        { id: 1, title: "Podlać oskara", completed: true }
      ]
    };
  },
  firebase: {
    names: db.ref("names")
  },
  methods: {
    submitName() {
      db.ref("names").push({ name: this.name, edit: false });
    },
    addItem() {
      if (this.newItem === "") {
        alert("no todo to add!");
      } else {
        this.items.push({
          id: Math.random(),
          title: this.newItem,
          completed: false
        });
        this.newItem = "";
      }
    },
    removeItem(id) {
      const index = this.items.findIndex(el => el.id === id);
      this.items[index].completed = true;
    }
  }
};
</script>

<style>
/* flexbox */
.todoapp-container {
  position: relative;
  background-color: #dfdfdf;
  /* main axis zalezy czy jest row czy column */
  display: flex;
  /* na main axis */
  justify-content: space-around;
  flex-direction: column;
  /* na cross axis */
  align-items: center;
  /* ile miejsca między elementami */
  /* align-content: flex-end; */
  min-height: 100vh;
}
.todoapp-items-container {
  /* display: flex; */
  /* width: 300px; */
  margin: 10px;
  padding: 0px 100px;
  border: 3px solid #333;
  border-radius: 5px;
  background-color: yellow;
  /* min-width: 200px; */
  min-height: fit-content;
  /* justify-content: space-between; */
}
.todoapp-item {
  min-height: 50px;
  flex-shrink: 0;
  padding: 10px;
  margin: 10px;
  background-color: #dfdfdf;
  border: 3px solid #333;
  border-radius: 5px;
}
</style>
