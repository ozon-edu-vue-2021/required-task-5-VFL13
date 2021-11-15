<template>
  <vs-row align="center" justify="center">
    <vs-col w="10">
      <vs-row align="center" justify="end">
        <vs-button
          :active="$route.fullPath === '/'"
          transparent
          @click.stop="goToPath('/')"
        >
          Products
        </vs-button>
        <vs-button gradient icon color="primary" @click.stop="goToCart">
          <i class="bx bx-cart"></i>
          <span class="span" v-if="count">
            {{ count }}
          </span>
        </vs-button>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      count: "market/productCount",
    }),
  },
  methods: {
    goToPath(path) {
      if (this.$route.path !== path) this.$router.push(path);
    },
    goToCart() {
      if (this.count) {
        this.$router.push("/cart");
      } else {
        this.$vs.notification({
          title: "<h1>Your cart empty.</h1>",
          position: "top-center",
          color: "warn",
          icon: `<i class='bx bx-error' ></i>`,
        });
      }
    },
  },
};
</script>

<style scoped>
.span {
  margin-left: 5px;
}
</style>
