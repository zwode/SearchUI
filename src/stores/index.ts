import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSearchStore = defineStore('searchAPI', () => {
    const resultSearch = ref(null)

    const returnResult = computed(() => { return resultSearch.value })

    async function SearchAPI (queryText: string) {
        const response = await axios.get('https://nominatim.openstreetmap.org/?format=json&q=' + queryText)
        resultSearch.value = response.data
    }

    return { resultSearch, returnResult, SearchAPI }
})
