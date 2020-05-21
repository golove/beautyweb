<template>
  <div class="loginbox">
    <div class="loginput">
      <h2>login</h2>
      <div class="inputstyle">
        <svg>
          <use xlink:href="#user" />
        </svg>
        <input type="text" placeholder="username" />
      </div>
      <div class="inputstyle">
        <svg>
          <use xlink:href="#eyeoff" />
        </svg>
        <input type="password" placeholder="password" />
      </div>
      <div class="inputstyle">
        <svg>
          <use xlink:href="#check" />
        </svg>
        <div class="code">JWREQ</div>
        <input type="text" placeholder="vertifycode" />
      </div>
      <div class="btn">
        <router-link tag="button" to="/signin">沒有賬號?注冊</router-link>
        <button>登錄</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Login extends Vue {}
</script>

<style lang="scss"></style>
