<template>
  <div class="face">
    <div class="face__inner">
      <div class="face__inner2">
        <div class="face__skin">
          <div class="face__skin-stiches">
            <span class="face__skin-stich"></span>
            <span class="face__skin-stich"></span>
            <span class="face__skin-stich"></span>
            <span class="face__skin-stich"></span>
            <span class="face__skin-stich"></span>
            <span class="face__skin-stich"></span>
            <span class="face__skin-stich"></span>
          </div>
        </div>
        <div class="mouth"></div>
        <div class="nose"></div>
      </div>
    </div>
    <div class="eyebrows"></div>
    <Eyes />
    <div class="blush blush--left"></div>
    <div class="blush blush--right"></div>
  </div>
  <!-- /.face -->
</template>

<script>
import Eyes from '../eyes/eyes.vue';

export default {
  name: 'Face',

  components: {
    Eyes,
  },
};
</script>
