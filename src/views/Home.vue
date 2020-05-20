<template>
  <div class="home">
    <card />
    <card />
    <card />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import card from "@/components/card.vue";
export default {
  name: "Home",
  components: {
    card
  }
};
</script>
<style scoped>
.home {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
