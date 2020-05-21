<template>
  <div class="writeboard">
    <editor
      :autofocus="true"
      :init-data="initData"
      :config="config"
      :minHeight="700"
      :bgColor="'transparents'"
      ref="editor"
      placeholder="寫下你此刻的想法吧!"
      @save="onSave"
      @ready="onReady"
      @change="onChange"
    />
    <button @click="save">保存</button>
    <button>保存并發佈</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import ArticleData from "@/model/ArticleData";
@Component
export default class Writeboard extends Vue {
  cateflag = false;
  initData: any = {};
  savedData: any = {};
  article: ArticleData = new ArticleData(-1, 0);
  constructor() {
    super();
  }

  config: any = {
    image: {
      endpoints: {
        byFile: "http://39.105.168.171:8090/image",
        byUrl: "http://39.105.168.171:8090/image-by-url"
      },
      field: "image",
      types: "image/*"
    },
    personality: {
      endpoint: "http://39.105.168.171:8090/image"
    }
  };
  selectCate(id: number): void {
    this.cateflag = false;
    this.article.categoryId = id;
  }

  save(): void {
    this.$refs.editor.save();
  }
  onSave(response: Record<string, any>) {
    this.savedData = response;
    this.article.author = this.$store.state.user;
    this.article.content = response;
    this.$store.state.actionHelper.addData(this.article);
  }
  onReady() {
    console.log("ready");
  }
  onChange() {
    console.log("changed");
  }
}
</script>

<style lang="scss">
.writeboard {
  width: 900px;
  min-height: 100vh;
  margin-top: 10px;
  margin: auto;
  padding: 1em 3em;
  position: relative;
  // background: violet;
  overflow: hidden;
  button {
    position: relative;
    z-index: 1;
    letter-spacing: 2px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(15px);
    margin: -25px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(131, 197, 184, 0.3);
  }
}
</style>
