<template>
  <div id="app" class="center grid">
    <NavBar />
    <vs-row align="center" justify="center">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="11">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "./pages/components/NavBar";

export default {
  name: "App",
  data() {
    return {
      img: null,
    };
  },
  components: { NavBar },
  created() {
    const loading = this.$vs.loading();
    this.fetchProducts();
    loading.close();
  },
  methods: {
    ...mapActions({
      fetchProducts: "market/fetchProducts",
    }),
  },
};
</script>
