import { defineStore } from "pinia"
import axios from "axios"
const product = defineStore("product", {
    state() {
        return {
            productList: []
        }
    },
    actions: {
        async loadData() {
            let res = await axios(" http://localhost:9000/data")
            this.productList = res.data
        }
    }
})
export default product