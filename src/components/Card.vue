<template>
  <div class="card" v-bind:class="todo.style">
    <div class="card-title">
      <h3>{{todo.title}}</h3>
    </div>
    <hr />
    <p>{{todo.text}}</p>
  </div>
</template>
<script>
export default {
  props: {
    todo: Object
  },
  computed: {
    classObject: function() {
      return {};
    }
  }
};
</script>
<style>
.card {
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  outline: 10px dashed #969696;
  margin: 35px 10px;
  width: 250px;
  /* overflow-wrap: break-word; */
  /* height: 100%; */
  /* top: 10px; */
  /* left: 10px; */
  /* nie wiem czy potrzebne */
  /* min-width: 300px; */
  /* white-space: pre-line; */
  background-color: #969696;
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
</style>