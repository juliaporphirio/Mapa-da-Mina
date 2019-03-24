<template>
  <img :src="aut" alt="Graph" class="rounded" :class="{ 'responsive-image': responsive }">
</template>

<script>
export default {
  name: "autenticao",
  props: {
    aut: {
      type: String,
      default: require("@/assets/img/autentication2.jpg")
    }
  }
};
</script>
