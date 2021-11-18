<template>
  <vs-card>
    <template #title>
      <h2>{{ product.dish }}</h2>
      <h2>$ {{ product.price }}</h2>
    </template>
    <template #img>
      <img :src="product.img" :alt="product.dish" />
    </template>
    <template #text>
      <p class="text">
        {{ product.description }}
      </p>
    </template>
    <template #interactions>
      <vs-button
        :shadow="!product.favourite"
        :dark="!product.favourite"
        :danger="product.favourite"
        icon
        @click.stop="
          toggleFavorite({ id: product.id, favourite: product.favourite })
        "
      >
        <i class="bx bx-heart"></i>
      </vs-button>

      <vs-button
        :shadow="!product.inCart"
        :dark="!product.inCart"
        :primary="!!product.inCart"
        class="btn-chat"
        icon
        @click.stop="addToCart({ id: product.id, inCart: product.inCart })"
      >
        <i class="bx bx-cart"></i>
      </vs-button>

      <span v-if="product.inCart" class="span">
        <vs-button-group>
          <vs-button
            shadow
            icon
            @click.stop="
              removeFromCart({ id: product.id, inCart: product.inCart })
            "
          >
            <i class="bx bx-minus"></i>
          </vs-button>

          <vs-button>
            {{ product.inCart }}
          </vs-button>

          <vs-button
            shadow
            icon
            @click.stop="addToCart({ id: product.id, inCart: product.inCart })"
          >
            <i class="bx bx-plus"></i>
          </vs-button>
        </vs-button-group>
      </span>
    </template>
  </vs-card>
</template>

<script>
import MinixCard from "@/mixins/MinixCard";

export default {
  name: "ProductCard",
  mixins: [MinixCard],
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
