<template>
  <div class="center grid">
    <vs-row align="center" justify="center">
      <vs-col w="10">
        <vs-row align="center" justify="space-between">
          <h1>Products</h1>
          <vs-switch v-model="isFavorites" :disabled="!haveFavourites"
            >Show Favourites
          </vs-switch>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row align="center" justify="center">
      <vs-col
        v-for="product in displayedProducts"
        :key="product.id"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="4"
        lg="3"
        sm="6"
        class="product-card"
      >
        <ProductCard
          :product="product"
          :favourite="product.favourite"
          :cart="product.inCart"
        />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard";
import { mapGetters } from "vuex";

export default {
  name: "Market",
  components: { ProductCard },
  data() {
    return {
      isFavorites: false,
    };
  },
  computed: {
    ...mapGetters({
      products: "market/allProducts",
      favorites: "market/favouritesProducts",
    }),
    haveFavourites() {
      return !!this.favorites.length;
    },
    displayedProducts() {
      return this.isFavorites && this.haveFavourites
        ? this.favorites
        : this.products;
    },
  },
  watch: {
    haveFavourites(val) {
      if (!val) {
        this.isFavorites = false;
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  padding: 20px;
}
</style>
