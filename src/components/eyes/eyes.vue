<template>
  <div class="eyes">
    <div class="eye eye--left">
      <div class="eye__bg">
        <div class="eye__shadow"></div>
        <!-- /.eye_spot -->
        <!-- /.eye__shadow -->
        <div
          class="IRyS IRyS--left"
          :style="{
            transform: `rotate(-13deg) translateX(${translateLeftX}px)`,
          }"
        >
          <div class="eye_spot eye_spot--left"></div>
          <!-- /.eye_spot -->
          <div class="eye_spot eye_spot--right"></div>
          <div class="IRyS__inner">
            <div class="IRyS__circle"></div>
            <!-- /.IRyS__circle -->
          </div>
          <!-- /.IRyS__inner -->
        </div>
        <!-- /.IRyS -->
      </div>
      <!-- /.eye__bg -->
      <div class="eye__inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- /.eye__inner -->
      <div class="eyelids">
        <div class="eyelid"></div>
        <!-- /.eyelid -->
        <div class="eyelid"></div>
        <!-- /.eyelid -->
        <div class="eyelid"></div>
        <!-- /.eyelid -->
        <div class="eyelid"></div>
        <!-- /.eyelid -->
      </div>
      <!-- /.eyelids -->
    </div>
    <!-- /.eye -->
    <div class="eye eye--right">
      <div class="eye__bg">
        <div class="eye__shadow"></div>
        <!-- /.eye_spot -->
        <!-- /.eye__shadow -->
        <div
          class="IRyS IRyS--right"
          :style="{
            transform: `rotate(15deg) translate(-${translateRightX}%, -40%)`,
          }"
        >
          <div class="eye_spot eye_spot--left"></div>
          <!-- /.eye_spot -->
          <div class="eye_spot eye_spot--right"></div>
        </div>
        <!-- /.IRyS -->
      </div>
      <!-- /.eye__bg -->
      <div class="eye__inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- /.eye__inner -->
      <div class="eyelids">
        <div class="eyelid"></div>
        <!-- /.eyelid -->
        <div class="eyelid"></div>
        <!-- /.eyelid -->
        <div class="eyelid"></div>
        <!-- /.eyelid -->
        <div class="eyelid"></div>
        <!-- /.eyelid -->
      </div>
      <!-- /.eyelids -->
    </div>
    <!-- /.eye -->
  </div>
  <!-- /.eyes -->
</template>

<script>
export default {
  name: 'Eyes',

  data: () => ({
    constant: 10,
    translateLeftX: 0,
    translateRightX: 70,
  }),

  methods: {
    handleMove(event) {
      const { pageX } = event;
      const winW = window.innerWidth;
      const percent = pageX / winW;
      this.translateLeftX = this.constant * (percent - 0.5);
      this.translateRightX = 70 - (percent - 0.5) * 100;
    },
  },

  created() {
    window.addEventListener('mousemove', this.handleMove);
  },

  destroyed() {
    window.removeEventListener('mousemove', this.handleMove);
  },
};
</script>
