<template>
  <div class="color-holder">
    <div class="color" @click="toggleColor">
      <span class="color-hex" :style="{ background: value }"></span>
      <span>{{ name }}</span>
    </div>
    <div class="color-picker">
      <component
        :is="activePicker"
        :value="value"
        @input="handleChange"
        @ok="toggleColor"
        @cancel="toggleColor"
        v-if="active"
      />
    </div>
  </div>
</template>

<script>
import { Slider, Photoshop } from 'vue-color';

export default {
  name: 'Color',

  props: {
    value: {
      type: String,
      required: true,
    },
    rgb: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    colorPicker: {
      type: String,
      default: 'slider',
    },
  },

  data: () => ({
    active: false,
  }),

  components: {
    Slider,
    Photoshop,
  },

  computed: {
    activePicker() {
      return this.colorPicker === 'slider' ? Slider : Photoshop;
    },
  },

  methods: {
    handleChange(event) {
      this.$emit('input', event.hex);
    },
    toggleColor() {
      this.active = !this.active;
    },
  },
};
</script>
