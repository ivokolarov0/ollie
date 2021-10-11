<template>
  <div class="utils-holder">
    <div class="utils" :class="{ 'is-active': active }">
      <button class="utils__toggle" @click="toggle"></button>
      <div class="utils__inner"></div>
      <!-- /.utils__inner -->
      <ul>
        <li>
          <button @click="$emit('bob')">Thank you</button>
        </li>
        <li>
          <button @click="handleWangyClick">Wangy-Wangy</button>
          <audio :src="wangySrc" loop preload="true" ref="audioWangy"></audio>
        </li>
        <li>
          <button @click="handleCockroachClick">Biggest Fan!</button>
          <audio
            :src="cockroachSrc"
            preload="true"
            ref="audioCockroach"
            @ended="cockroach = false"
          ></audio>
        </li>
      </ul>
    </div>
    <Colors />
  </div>
</template>

<script>
import Colors from '../colors/colors.vue';

export default {
  name: 'Utils',

  components: {
    Colors,
  },

  data: () => ({
    active: false,
    wangy: false,
    cockroach: false,
    wangySrc: require('../../assets/audio/wangy.mp3'),
    cockroachSrc: require('../../assets/audio/cockroach.mp3'),
  }),

  methods: {
    handleWangyClick() {
      this.wangy = !this.wangy;
      this.$emit('wangy');
      if (this.wangy) {
        this.$refs.audioWangy.play();
      } else {
        this.$refs.audioWangy.pause();
        this.$refs.audioWangy.currentTime = 0;
      }
    },

    handleCockroachClick() {
      this.cockroach = !this.cockroach;
      this.$emit('cockroach');
      if (this.cockroach) {
        this.$refs.audioCockroach.play();
      } else {
        this.$refs.audioCockroach.pause();
        this.$refs.audioCockroach.currentTime = 0;
      }
    },

    toggle() {
      this.active = !this.active;
    },
  },
};
</script>
