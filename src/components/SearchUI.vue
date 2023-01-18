<template>
  <div class="d-center">
    <div class="search-block">
      <h1>
        Search UI
      </h1>
      <input placeholder="Search" @change="sendSearchLink()" type="text" v-model="searchLink">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSearchStore } from '@/stores'
import { ref } from 'vue'
import type { Ref } from 'vue'

const searchStore = useSearchStore()
const searchLink: Ref<string> = ref('')

function sendSearchLink () {
  searchStore.SearchAPI(searchLink.value)
}
</script>

<style scoped lang="scss">
h1 {
  margin: 35px 0;
}

.d-center {
  display: flex;
  justify-content: center;
}

.search-block {
  border-radius: 0 0 15px 15px;
  padding: 15px;
  background: #0A1929;
  text-align: center;
  max-width: 550px;
  width: 100%;
}

input {
  margin-bottom: 35px;
}
</style>