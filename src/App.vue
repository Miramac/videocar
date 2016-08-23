<template>
  <div id="app">

    <div class="content-grid mdl-grid">
      <div class="mdl-cell mdl-cell--2-col">
        <mdl-button v-mdl-ripple-effect>{{ msg }}</mdl-button>
      </div>
      <div class="mdl-cell mdl-cell--1-col">
        <mdl-textfield floating-label="Amount" :value.sync="amount"></mdl-textfield>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <mdl-slider :value.sync="amount" min="0" max="100" step="5" mdl-vertical></mdl-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "HELLO",
      amount: 55
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
