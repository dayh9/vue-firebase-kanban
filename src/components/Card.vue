<template>
  <div class="card-container">
    <div class="card">
      <div class="card-title">
        <h3>{{todo.title}}</h3>
      </div>
      <p>{{todo.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todo: Object
  }
};
</script>
<style>
.card-container {
  border: 10px dashed #ff80ff;
  margin: 10px 0;
  width: 250px;
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-grow: 1; */

  /* border: 10px dashed #b3ff80; */
  /* border-radius: 10px; */
  /* min-height: 200px; */
  /* nie wiem czy potrzebne */
  /* max-width: ; */
  /* background-color: #ff80ff; */
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 10px;
  /* height: 100%; */
  /* top: 10px; */
  /* left: 10px; */
  /* nie wiem czy potrzebne */
  /* min-width: 300px; */
  background-color: #ff80ff;
}
.card-title {
  align-self: flex-start;
  margin: 0 10%;
}
</style>