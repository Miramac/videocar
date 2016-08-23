<template>
  <div id="speed-ctrl">
    <div class="content-grid mdl-grid">
      <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
        <mdl-textfield floating-label="Speed" :value.sync="speed"></mdl-textfield>
      </div>
      <div class="mdl-cell mdl-cell--8-col mdl-cell--3-col-phone">
        <mdl-slider :value.sync="speed" min="0" max="100" step="5"></mdl-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['speed']
}
</script>
