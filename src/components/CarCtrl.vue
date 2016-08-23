<template>
  <div id="car-ctrl">
    <div class="content-grid mdl-grid">
      <div class="mdl-cell mdl-cell--4-col">
        <direction-ctrl></direction-ctrl>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <speed-ctrl :speed="speed"></speed-ctrl>
      </div>
    </div>
  </div>
</template>

<script>
import DirectionCtrl from './DirectionCtrl.vue'
import SpeedCtrl from './SpeedCtrl.vue'
export default {
  components: {
    DirectionCtrl,
    SpeedCtrl
  },
  data () {
    return {
      speed: 50
    }
  }
}
</script>