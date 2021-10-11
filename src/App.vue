<template>
  <div id="app">
    <Utils
      @bob="is_bobing = !is_bobing"
      @wangy="is_wangy = !is_wangy"
      @cockroach="handleCockroach"
    />
    <div
      class="ollie"
      :class="{
        'is-bobbing': is_bobing,
        'is-wangy': is_wangy,
        'is-cockroach': is_cockroach,
      }"
    >
      <div class="ollie__inner">
        <Head />
        <Neck />
        <Body />
      </div>
      <!-- /.ollie__inner -->
      <Cockroach />
    </div>
    <!-- /.ollie -->
  </div>
</template>

<script>
import Utils from './components/utils/utils';
import Head from './components/head/head.vue';
import Neck from './components/neck/neck.vue';
import Body from './components/body/body.vue';
import Cockroach from './components/cockroach/cockroach.vue';

export default {
  name: 'App',

  components: {
    Head,
    Neck,
    Body,
    Utils,
    Cockroach,
  },

  data: () => ({
    is_wangy: false,
    is_bobing: false,
    is_cockroach: false,
    cockroachTimeout: null,
  }),

  methods: {
    handleCockroach() {
      this.is_cockroach = !this.is_cockroach;
      clearTimeout(this.cockroachTimeout);
      this.cockroachTimeout = setTimeout(() => {
        this.is_cockroach = false;
      }, 14000);
    },
  },
};
</script>
