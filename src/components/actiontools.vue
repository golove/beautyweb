<template>
  <div class="actiontool">
    <div class="icon">
      <svg>
        <use xlink:href="#heart" />
      </svg>
      <div>12</div>
    </div>
    <div class="icon">
      <svg>
        <use xlink:href="#comment" />
      </svg>
      <div>12</div>
    </div>
    <div class="icon">
      <svg>
        <use xlink:href="#eyeopen" />
      </svg>
      <div>12</div>
    </div>
    <div class="icon">
      <svg>
        <use xlink:href="#share" />
      </svg>
      <div>12</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Actiontool extends Vue {}
</script>

<style lang="scss">
.actiontool {
  width: 220px;
  position: absolute;
  bottom: 1em;
  right: 3em;
  display: inline-flex;
  justify-content: space-between;
  height: 35px;
  opacity: 0.7;
  .icon {
    position: relative;
    svg {
      width: 25px;
      height: 25px;
      fill: white;
    }
    div {
      position: absolute;
      top: -8px;
      left: 25px;
      padding: 1px 0px;
      width: 25px;
      height: 15px;
      line-height: 15px;
      border-radius: 7.5px;
      font-size: 8px;
      color: white;
      text-align: center;

      background-color: #00cbff;
    }
  }
}
</style>
