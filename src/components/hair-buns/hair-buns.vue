<template>
  <div class="hair-buns-holder">
    <div
      class="hair-buns"
      @mouseenter="handleMouseEnter"
      :class="{ 'is-active': active }"
    >
      <HairBun>
        <div class="hair-bun__light">
          <span></span>
          <span></span>
        </div>
      </HairBun>
      <HairBun>
        <div class="hair-bun__arcs">
          <div class="hair-bun__arc"></div>
          <div class="hair-bun__arc"></div>
          <div class="hair-bun__arc"></div>
        </div>
        <div class="hair-bun__light">
          <span></span>
          <span></span>
        </div>
      </HairBun>
      <div class="hair-loops">
        <div class="hair-loop">
          <div class="hair-loop-outer">
            <div class="hair-loop-inner">
              <span class="hair-loop__corner-fix"></span>
            </div>
          </div>
        </div>
        <div class="hair-loop">
          <div class="hair-loop__outer">
            <div class="hair-loop__inner"></div>
          </div>
        </div>
      </div>
      <div class="hair-stray hair-stray--red">
        <div class="hair-stray-outer">
          <div class="hair-stray-inner"></div>
        </div>
      </div>
      <div class="hair-stray hair-stray--red hair-stray--mirror">
        <div class="hair-stray-outer">
          <div class="hair-stray-inner"></div>
        </div>
      </div>
      <div class="hair-stray hair-stray--pink">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import HairBun from '../hair-bun/hair-bun';
export default {
  name: 'HairBuns',

  components: {
    HairBun,
  },

  data: () => ({
    active: false,
    timeout: null,
  }),

  methods: {
    handleMouseEnter() {
      this.active = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.active = false;
      }, 500);
    },
  },
};
</script>
