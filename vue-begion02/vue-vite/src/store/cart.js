import { defineStore } from "pinia"
const cart = defineStore("cart", {
    state() {
        return {
            cartList: []
        }
    },
    actions: {
        addTotal(product) {
            console.log(product, '加入购物车');
            const p = this.cartList.find((value) => {
                return value.id === product.id
            })
            if (p) {
                p.quantity++
            } else {
                this.cartList.push({
                    ...product,
                    quantity: 1
                })
            }
            product.inventory--
        },

    },
    getters: {
        totalPrice() {
            return this.cartList.reduce((sum, cl) => {
                sum += cl.price * cl.quantity
                return sum
            }, 0)
        }
    }
})
export default cart