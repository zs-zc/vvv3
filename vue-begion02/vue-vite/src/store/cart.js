import { defineStore } from "pinia"
const cart = defineStore("cart", {
    state() {
        return {
            productList: []
        }
    }
})
export default cart