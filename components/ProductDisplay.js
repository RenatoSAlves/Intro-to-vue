app.component('product-display', {
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image>">
          <img :class="{'out-of-stock-img' : !inStock}" :src="image">
        </div>
        <div class="product-info">
          <h1> {{ title }}</h1>
          <p>Shipping: {{ shipping }}</p>
          <p v-if="onSale">{{ saleMessenge }}</p>
          <p v-if="inStock">In Stock!</p>
          <p v-else>Out Out Stock, sorry...</p>
          <p v-show="onSale">A limited time promotion, get yours now!</p>
          <ul>
            <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
          </ul>
          <ul>
            <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
          </ul>

          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
          class="color-circle" :style="{backgroundColor: variant.color}">
          </div>

          <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to
          cart</button>        
        </div>
      </div>
    </div>`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      url: `https://gitlab.com/RenatoSakasaki/`,
      selectedVariant: 0,
      onSale: true,
      msgpromocao: "it`s in promotion!",      
      sizes: [`pequeno`, 'medio, grande'],
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    slide() {
      this.slide = true
    }
  },
  props: {
    premium: {
      type: Boolean,
      required:true
    }
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
    },
    shipping() {
      if(this.premium){
        return 'Free'
      }
        return 2.99
      }
  }
})
