const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            url: `https://gitlab.com/RenatoSakasaki/`,            
            cart: 0,
            selectedVariant: 0,

            onSale: true,
            msgpromocao: "it`s in promotion!",
                     
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [`pequeno`, 'medio, grande'],

            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:  0}
            ]
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        remToCart() {
            if (this.cart >= 1) {   
                this.cart -= 1
            }
        },       
        updateVariant(index) {
            this.selectedVariant = index
        },    
    },

    computed: {
        title() {
                return this.brand + ' ' + this.product
        },
        
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        saleMessenge() {
            return this.brand + ' ' + this.product + '\n' + this.msgpromocao
        }

    }
})

