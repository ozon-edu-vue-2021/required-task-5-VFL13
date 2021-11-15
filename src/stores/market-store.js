import imageFinder from "@/helpers/images";
const namespaced = true;

const state = {
  products: []
};

const getters = {};

const actions = {
  fetchProducts: async ({ commit }) => {
    try {
      const response = await fetch('https://random-data-api.com/api/food/random_food?size=30')
      if (response.ok) {
        const fetchedProducts = await response.json();
        const products = Promise.all(fetchedProducts.map(async (product) => {
          const images = await imageFinder.search(`${product.dish} webp`);
          console.log(images)
          const imgUrl = images.length ? images[0].url : null;
          product.imageUrl = imgUrl
          console.log(product)
          return product
        }))
        commit('SET_PRODUCTS', products)
      }
    } catch (error) {
      console.log('Fetch error: ', error)
    }
  }
};

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
