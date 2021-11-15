<script>
import { mapActions } from "vuex";

export default {
  name: "MinixCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
    favourite: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Number || null,
      default: null,
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
