<template>
  <div id="direction-ctrl">
    <div class="content-grid mdl-grid">
      <div class="mdl-cell mdl-cell--2-col-phone mdl-cell--4-col">
    
      <mdl-button primary fab>
            <i class="material-icons">keyboard_arrow_left</i>
          </mdl-button> 
          <mdl-button primary fab>
            <i class="material-icons">keyboard_arrow_right</i>
          </mdl-button>
    </div>
      <div class="mdl-cell mdl-cell--1-col-phone mdl-cell--2-col">
        <div>
          <mdl-button primary fab>
            <i class="material-icons">keyboard_arrow_up</i>
          </mdl-button>
        </div>
        <div>
          <mdl-button primary fab>
            <i class="material-icons">keyboard_arrow_down</i>
          </mdl-button>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  props: ['speed']
}
</script>

