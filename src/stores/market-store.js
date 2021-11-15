const namespaced = true;
import getRandomInt from "@/helpers/random";

const MIN_PRICE = 7;
const MAX_PRICE = 49;

const state = {
  products: [],
  favourites: [],
  cart: {},
};

const getters = {
  allProducts: (state) => {
    return state.products.map((product) => {
      product.favourite = state.favourites.includes(product.id);
      product.inCart = product.id in state.cart ? state.cart[product.id] : null;
      return product;
    });
  },
  favouritesProducts: (state, getters) => {
    return getters.allProducts.filter((product) =>
      state.favourites.includes(product.id)
    );
  },
  productsInCart: (state, getters) => {
    return getters.allProducts.filter((product) => product.id in state.cart);
  },
  productCount: (state) => {
    return Object.keys(state.cart).length;
  },
  totalPrice: (state, getters) => {
    return getters.productsInCart.reduce((acc, product) => {
      return acc + product.price * product.inCart;
    }, 0);
  },
};

const actions = {
  fetchProducts: async ({ commit }) => {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      if (response.ok) {
        const fetchedProducts = await response.json();
        const products = fetchedProducts.map((product) => {
          product.img = `https://loremflickr.com/320/240/food,${
            product.dish.split(" ")[0]
          }/`;
          product.price = getRandomInt(MIN_PRICE, MAX_PRICE);
          return product;
        });
        commit("SET_PRODUCTS", products);
      }
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  },
  addToCart: ({ commit }, product) => {
    if (product.inCart) {
      commit("SET_PRODUCT_COUNT_IN_CART", {
        id: product.id,
        productCount: product.inCart + 1,
      });
    } else {
      commit("SET_PRODUCT_COUNT_IN_CART", { id: product.id, productCount: 1 });
    }
  },
  removeFromCart: ({ commit }, product) => {
    if (product.inCart) {
      commit("SET_PRODUCT_COUNT_IN_CART", {
        id: product.id,
        productCount: product.inCart - 1,
      });
    }
  },
  removeAllFromCart: ({ commit }, product) => {
    if (product.inCart) {
      commit("SET_PRODUCT_COUNT_IN_CART", {
        id: product.id,
        productCount: 0,
      });
    }
  },
  toggleFavorite: ({ commit }, product) => {
    product.favourite
      ? commit("REMOVE_FROM_FAVORITES", product.id)
      : commit("ADD_TO_FAVORITES", product.id);
  },
};

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products;
  },
  SET_PRODUCT_COUNT_IN_CART: (state, data) => {
    if (data.productCount === 0) {
      delete state.cart[data.id];
      state.cart = { ...state.cart };
    } else {
      state.cart = {
        ...state.cart,
        [data.id]: data.productCount,
      };
    }
  },
  ADD_TO_FAVORITES: (state, product_id) => {
    state.favourites.push(product_id);
  },
  REMOVE_FROM_FAVORITES: (state, product_id) => {
    state.favourites = state.favourites.filter((p_id) => p_id !== product_id);
  },
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
