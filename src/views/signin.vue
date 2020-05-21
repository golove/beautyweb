<template>
  <div class="loginbox">
    <div class="loginput">
      <h2>signin</h2>
      <div class="inputstyle">
        <svg>
          <use xlink:href="#user" />
        </svg>
        <input type="text" placeholder="username" />
      </div>
      <div class="inputstyle">
        <svg>
          <use xlink:href="#email" />
        </svg>
        <input type="email" placeholder="email" />
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
      <span class="checkboxf">
        <input id="checkbox" type="checkbox" checked />
        <label for="checkbox"></label>
        <span>
          閲讀並接受
          <a href>用戶協議</a>
        </span>
      </span>
      <div class="btn">
        <router-link tag="button" to="/login">已有賬號?登錄</router-link>
        <button>注冊</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Login extends Vue {}
</script>

<style></style>
