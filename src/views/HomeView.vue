<template>
  <div class="home">
    <SearchUI />
    <div :key='link' v-for='link in searchStore.returnResult'>
      <ResultSearch :model='link' />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchUI from '@/components/SearchUI.vue'
import ResultSearch from '@/components/ResultSearch.vue'
import { useSearchStore } from '@/stores'

const searchStore = useSearchStore()
</script>

<style lang="scss" scoped>

</style>