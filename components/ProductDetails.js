app.component('product-details', {
  props: {
    details: {
      type: Array        
    },  
  },
    template:
    /*html*/
    `<div class="product-details">
        <ul>
            <li v-for="detail in details" :key="index">{{ detail }}</li>
        </ul>        
    </div>`     
})  

