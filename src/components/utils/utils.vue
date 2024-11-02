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
          <button @click="handleAudio($refs.audioWangy, 'wangy')">Wangy-Wangy</button>
          <audio
            :src="wangySrc"
            preload="true"
            ref="audioWangy"
          ></audio>
        </li>
        <li>
          <button @click="handleAudio($refs.audioCockroach, 'cockroach')">Biggest Fan!</button>
          <audio
            :src="cockroachSrc"
            preload="true"
            ref="audioCockroach"
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
    states: ['cockroach', 'wangy'],
    cockroach: false,
    wangy: false,
    active: false,
    wangySrc: require('../../assets/audio/wangy.mp3'),
    cockroachSrc: require('../../assets/audio/cockroach.mp3'),
  }),

  methods: {
    handleAudio(target, key) {
      this[key] = !this[key];
      if (this[key]) {
          target.play();
        } else {
          target.pause();
          target.currentTime = 0;
        }
    },

    toggle() {
      this.active = !this.active;
    },
  },

  mounted() {
    const items = [
      [this.$refs.audioWangy, 'wangy'],
      [this.$refs.audioCockroach, 'cockroach']
    ];
    items.forEach(([item, emit]) => {
      item.addEventListener('play', () => {
        const others = items.filter(item => item[1] != emit);
        others.map(([item, key]) => {
          if(this[key]) {
            this[key] = false;
            item.pause();
            item.currentTime = 0;
          }
        });
        this.$emit(emit, true);
      })
      item.addEventListener('pause', () => {
        this.$emit(emit, false);
        this[emit] = false;
      })
    })
  }
};
</script>
