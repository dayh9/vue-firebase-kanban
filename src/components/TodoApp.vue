<template>
  <div>
    <div class="item">
      <p>Nowe todo: {{newItem}}</p>
    </div>
    <input type="text" placeholder="todo" v-model="newItem" />
    <button @click="addItem">Dodaj</button>
    <TodoItem
      v-for="item in items"
      v-bind:key="item.id"
      v-bind:item="item"
      @removeClicked="removeItem"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newItem: "",
      items: [
        { id: 0, title: "Zrobić zakupy", completed: false },
        { id: 1, title: "Podlać oskara", completed: true }
      ]
    };
  },
  methods: {
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
.item {
  border: 1px solid #cdcdcd;
  margin: 8px;
  padding: 10px;
}
</style>
