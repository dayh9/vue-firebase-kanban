<template>
  <div class="todoapp-item" v-bind:class="{
      completed: item.completed
    }">
    <h2>{{item.title}}</h2>
    <button v-if="!item.completed" @click="removeItem">Zrobione</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    removeItem() {
      this.$emit("removeClicked", this.item.id);
    }
  }
};
</script>
<style>
.completed {
  opacity: 0.5;
}
.completed h2 {
  text-decoration: line-through;
}
</style>