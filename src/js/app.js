import Axios from "axios"
import Vue from "vue"
import collect from "collect.js"

const app = new Vue({
  el: '#app',
  data: {
    products: [],
    sort: 'Lamp'
  },
  methods: {
    getProducts () {
      Axios.get('products.json').then(res => this.products = collect(res.data.products))
    },
  },
  computed : {
    lampsAndWallet () {
      return collect(this.products.filter(product => product.product_type == `${this.sort}`)
              .map(products => products.variants)).flatten(2);
    },
    totalCostPantsjAndWallets () {
      return this.lampsAndWallet.map(products => parseFloat(products.price)).sum()
    }
  },
  mounted() {
    this.getProducts()
  },
})
