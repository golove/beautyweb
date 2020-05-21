<template>
  <div class="card">
    <div class="menu">
      <div @click="menuflag = !menuflag" class="icon">
        <svg>
          <use xlink:href="#menu1" />
        </svg>
      </div>
      <div :class="menuflag ? 'showmenu' : 'hiddenmenu'" class="btnitems">
        <span class="btnitem">
          <svg>
            <use xlink:href="#delete" />
          </svg>
          <span>delete</span>
        </span>
      </div>
    </div>
    <article>
      <h2>{{ headerBlocks[0].data.text }}</h2>
      <p class="time">{{ item.createTime }}</p>
      <p>{{ paragraphBlocks[0].data.text }}</p>
    </article>
    <div class="userinfo">
      <div class="avatar">
        <img :src="item.author.avatar" alt />
      </div>
      <h3>{{ item.author.name }}</h3>
    </div>
    <actiontools />
  </div>
</template>

<script lang="ts">
// 2020/10/23 10:33AM
import { Component, Vue, Prop } from "vue-property-decorator";
import actiontools from "./actiontools.vue";
import ArticleData from "../model/ArticleData";
@Component({ components: { actiontools } })
export default class Card extends Vue {
  @Prop() item!: ArticleData;
  menuflag = false;
  headerBlocks: Array<any> = [];
  imageBlocks: Array<any> = [];
  paragraphBlocks: Array<any> = [];
  filterData() {
    for (const e of this.item.content.blocks) {
      if (e.type === "header") {
        this.headerBlocks.push(e);
      } else if (e.type === "image") {
        this.imageBlocks.push(e);
      } else if (e.type === "paragraph") {
        this.paragraphBlocks.push(e);
      }
    }
  }
  mounted() {
    this.filterData();
  }
}
</script>

<style lang="scss">
.card {
  margin: 20px;
  width: 550px;
  height: 280px;
  padding: 1em;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  article {
    position: relative;
    color: white;
    z-index: 1;
    h2 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 0;
    }
    p {
      font-size: 16px;
    }
    .time {
      margin-top: 0;
      font-size: 11px;
    }
  }
  .menu {
    position: absolute;
    top: 1em;
    right: 1em;
    .showmenu {
      width: 80px;
    }
    .hiddenmenu {
      width: 0px;
    }
    .btnitems {
      position: absolute;
      top: 0;
      overflow: hidden;
      right: 1.2em;
      height: auto;
      transition: width 0.6s ease-in-out;
      .btnitem {
        position: relative;
        z-index: 1;
        cursor: pointer;
        background: #02bdca;
        display: inline-flex;
        // justify-content: center;
        height: 25px;
        border-radius: 12.5px;
        width: 100%;
        margin-bottom: 2px;
        &:hover {
          background: #cf3c68;
        }
        span {
          // text-align: center;
          line-height: 25px;
        }
        svg {
          fill: #fff;
          margin-left: 6px;
          margin-top: 2.5px;
          height: 20px;
          width: 20px;
        }
      }
    }
    .icon {
      cursor: pointer;
      position: relative;
      z-index: 1;
      svg {
        width: 30px;
        height: 30px;
        fill: white;
      }
    }
  }
  .userinfo {
    z-index: 1;
    position: absolute;
    bottom: 1em;
    display: inline-flex;
    height: 45px;
    line-height: 45px;
    .avatar {
      margin-right: 10px;
      width: 45px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 45px;
        height: auto;
      }
    }
    h3 {
      color: white;
      margin: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(15px);
    margin: -30px;
    z-index: 0;
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
