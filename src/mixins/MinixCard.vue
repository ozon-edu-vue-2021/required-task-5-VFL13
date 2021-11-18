<script>
import { mapActions } from "vuex";

export default {
  name: "MinixCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      addToCart: "market/addToCart",
      toggleFavorite: "market/toggleFavorite",
      removeFromCart: "market/removeFromCart",
      removeAllFromCart: "market/removeAllFromCart",
    }),
  },
};
</script>
