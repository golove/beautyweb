<template>
  <div class="home">
    <card v-for="item in filterData()" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import card from "@/components/card.vue";
import { Vue, Component } from "vue-property-decorator";
import ArticleData from "../model/ArticleData";
@Component({
  components: { card }
})
export default class Card extends Vue {
  articles: Array<ArticleData> = this.$store.state.actionHelper.articles;

  filterData() {
    if (this.$store.state.filterId == -1) {
      return this.articles.filter((e: any) => {
        return e.archive === false;
      });
    } else if (this.$store.state.filterId == -2) {
      return this.$store.state.actionHelper.demoList.filter((e: any) => {
        return e.archive === true;
      });
    } else {
      return this.$store.state.actionHelper.demoList.filter(
        (e: any, index: number) => {
          return (
            e.archive === false && e.categoryId === this.$store.state.filterId
          );
        }
      );
    }
  }
}
</script>
<style scoped>
.home {
  width: 100vw;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
}
</style>
