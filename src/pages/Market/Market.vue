<template>
  <div>Market {{ items }}</div>
</template>

<script>
export default {
  name: "Market",
  computed: {
    items() {
      return this.$store.state.market.items
    }
  }
};
</script>

<style scoped></style>
