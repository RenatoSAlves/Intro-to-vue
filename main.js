const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            url: "https://gitlab.com/RenatoSakasaki/",
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        clearCart(id) {
            const index = this.cart.indexOf(id)
                if(index > -1){
                    this.cart.splice(index, 1)
                }
        }   
    }
})

