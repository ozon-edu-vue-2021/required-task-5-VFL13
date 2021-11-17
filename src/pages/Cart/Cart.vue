<template>
  <div class="center grid">
    <vs-row align="center" justify="center">
      <vs-col w="10">
        <vs-row align="center" justify="space-between">
          <h1>Cart</h1>
          <h1>Total price: ${{ totalPrice }}</h1>
          <vs-button :disabled="!productCount" size="large" @click.stop="buy">
            BUY
          </vs-button>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row align="center" justify="center">
      <vs-col
        v-for="product in products"
        :key="product.id"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="10"
      >
        <ProductInCartCard :product="product" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ProductInCartCard from "./components/ProductInCartCard";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: { ProductInCartCard },
  computed: {
    ...mapGetters({
      products: "market/productsInCart",
      totalPrice: "market/totalPrice",
      productCount: "market/productCount",
    }),
  },
  methods: {
    buy() {
      const text = this.products
        .map((product) => {
          return `<h2>${product.dish} - ${product.inCart} pics: ${
            product.inCart * product.price
          }</h2>`;
        })
        .push(`<h2>Total: ${this.totalPrice}</h2>`)
        .join("");
      this.$vs.notification({
        position: "top-center",
        color: "rgb(59,222,200)",
        width: "70%",
        title: `<h1>The order has been successfully placed</h1>`,
        text: text,
      });
    },
  },
  watch: {
    productCount(val) {
      if (val === 0) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped></style>
