<template>
  <vs-card>
    <template #title>
      <h2>{{ product.dish }}</h2>
      <h2>$ {{ product.price }}</h2>
    </template>
    <template #img>
      <img :src="product.img" alt="" />
    </template>
    <template #text>
      <p class="text">
        {{ product.description }}
      </p>
    </template>
    <template #interactions>
      <vs-button
        :shadow="!favourite"
        :dark="!favourite"
        :danger="favourite"
        @click.stop="toggleFavorite({ id: product.id, favourite: favourite })"
        icon
      >
        <i class="bx bx-heart"></i>
      </vs-button>

      <vs-button
        @click.stop="addToCart({ id: product.id, inCart: cart })"
        class="btn-chat"
        icon
        :shadow="!cart"
        :dark="!cart"
        :primary="!!cart"
      >
        <i class="bx bx-cart"></i>
      </vs-button>

      <span v-if="cart" class="span">
        <vs-button-group>
          <vs-button
            shadow
            icon
            @click.stop="removeFromCart({ id: product.id, inCart: cart })"
          >
            <i class="bx bx-minus"></i>
          </vs-button>

          <vs-button>
            {{ cart }}
          </vs-button>

          <vs-button
            shadow
            icon
            @click.stop="addToCart({ id: product.id, inCart: cart })"
          >
            <i class="bx bx-plus"></i>
          </vs-button>
        </vs-button-group>
      </span>
    </template>
  </vs-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductCard",
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
    }),
  },
};
</script>

<style scoped>
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
