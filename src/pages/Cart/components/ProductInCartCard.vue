<template>
  <vs-col class="shape shadow">
    <div class="grid">
      <vs-row justify="flex-start">
        <vs-col w="3" sm="3" lg="3">
          <img class="shape-img" :src="product.img" :alt="product.dish" />
        </vs-col>
        <vs-col w="9" sm="6" lg="9" class="card-text">
          <vs-row justify="space-between" align="center">
            <vs-col w="6">
              <h1 class="text">{{ product.dish }}</h1>
            </vs-col>
            <vs-col w="6">
              <vs-row justify="flex-end" align="center">
                <vs-button
                  icon
                  danger
                  @click.stop="
                    removeAllFromCart({ id: product.id, inCart: cart })
                  "
                >
                  <i class="bx bxs-trash"></i>
                </vs-button>
              </vs-row>
            </vs-col>
          </vs-row>
          <h1 class="text">$ {{ product.price }}</h1>
          <h3 class="text">
            {{ product.description }}
          </h3>
          <vs-row justify="space-between" align="center">
            <vs-col w="6">
              <vs-row justify="flex-start" align="center">
                <vs-button
                  :shadow="!favourite"
                  :dark="!favourite"
                  :danger="favourite"
                  icon
                  @click.stop="
                    toggleFavorite({ id: product.id, favourite: favourite })
                  "
                >
                  <i class="bx bx-heart"></i>
                </vs-button>
                <span v-if="cart" class="span">
                  <vs-button-group>
                    <vs-button
                      shadow
                      icon
                      @click.stop="
                        removeFromCart({ id: product.id, inCart: cart })
                      "
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
              </vs-row>
            </vs-col>
            <vs-col w="6">
              <vs-row justify="flex-end" align="center">
                <h1>Total ${{ product.price * cart }}</h1>
              </vs-row>
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </div>
  </vs-col>
</template>

<script>
import MinixCard from "@/mixins/MinixCard";

export default {
  name: "ProductInCartCard",
  mixins: [MinixCard],
};
</script>

<style scoped>
.shape-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
}
.shape {
  border-radius: 20px;
  margin-bottom: 20px;
}
.card-text {
  padding: 20px;
}
.text {
  margin: 0;
}
.shadow {
  padding: 20px;
  box-shadow: 4px 4px 8px #f2f2f2, -4px -4px 8px #ffffff;
}
.shadow:hover {
  padding: 20px;
  box-shadow: 8px 8px 16px #f2f2f2, -8px -8px 16px #ffffff;
}
</style>
