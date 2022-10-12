import { defineStore } from "pinia"

const useCounterStore = defineStore("counterStore", {
    state() {
        return {
            count: 0
        }
    },
    actions: {
        add() {
            console.log('009');
            this.count++
        }
    }
})
export default useCounterStore