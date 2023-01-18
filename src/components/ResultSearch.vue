<template>
  <div class="block-center">
    <div class="result-block">
      <div class="result-text"> <strong> Name: </strong> {{ model.display_name }}</div>
      <div class="result-text"> <strong> Class: </strong>  {{ model.class }} </div>
      <div class="result-text"> <strong> Type: </strong> {{ model.type }} <img v-if="model.icon" :src="model.icon" alt="icon"> </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  model: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.block-center {
  display: flex;
  justify-content: center;
}
.result-block {
  background: #0A1929;
  border-radius: 15px;
  margin: 20px;
  padding: 15px;
  max-width: 550px;
  width: 100%;
  .result-text {
    margin: 10px;
    align-self: center;
  }
  img {
    background: #fff;
    align-self: center;
  }
}
</style>