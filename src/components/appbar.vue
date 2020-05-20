<template>
  <div class="appbar">
    <div class="menu">
      <router-link tag="h2" to="/">golove</router-link>|
      <router-link tag="h2" to="/write">Write</router-link>
      <router-link tag="h2" to="/about">About</router-link>
    </div>
    <div class="searchf">
      <div class="search">
        <svg>
          <use xlink:href="#magnify" />
        </svg>
        <input type="text" placeholder="search" />
      </div>
    </div>
    <div class="login">
      <router-link tag="span" to="/login">login</router-link>|
      <router-link tag="span" to="/signin">signin</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Appbar extends Vue {}
</script>

<style lang="scss" scoped>
.appbar {
  width: 100vw;
  height: 60px;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  line-height: 60px;
  display: inline-flex;
  justify-content: center;

  .logo {
    z-index: 1;
    font-size: 25px;
    font-weight: bold;
  }
  .menu {
    z-index: 1;
    display: inline-flex;

    h2 {
      margin: 0 15px;
    }
  }
  .searchf {
    position: relative;
    width: 280px;
    .search {
      z-index: 1;
      width: auto;
      height: 30px;
      right: 10px;
      margin-top: 15px;
      border: 0.5px solid white;
      border-radius: 15px;
      position: absolute;
      transition: width 0.6s ease-in-out;
      display: inline-flex;
      input[type="text"] {
        width: 70px;
        transition: width 0.6s ease-in-out;
        &:focus {
          width: 220px;
        }
      }
      svg {
        width: 30px;
        height: 30px;
        fill: white;
      }
    }
  }
  .login {
    z-index: 1;
    span {
      cursor: pointer;
      margin: 0 10px;
      font-weight: bold;
      font-size: 22px;
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
