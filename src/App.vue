<template>
  <div id="app">
    <router-link to="/">Main</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "App",
  data() {
    return {
      img: null,
    };
  },
  components: {},
  // computed: {
  //   url() {
  //     return this.img?.url;
  //   },
  // },
  // async created() {
  //   this.img = await this.getImage("Cat", { size: "small", type: "WebP" });
  // },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      'fetchProducts': 'market/fetchProducts'
    })
    // async getImage(searchName) {
    //   const images = await imageFinder.search(`${searchName}`);
    //   return images.length ? images[0] : null;
    // },
  },
};
</script>
