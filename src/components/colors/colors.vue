<template>
  <div class="colors" :class="{ 'is-active': active }">
    <button class="colors__toggle" @click="handleToggle"></button>
    <div class="colors__inner">
      <h4 class="change-picker-title">Swap color picker style</h4>
      <ul class="change-picker">
        <li>
          <button
            @click="colorPickerToggle('slider')"
            :class="{ 'is-active': colorPicker === 'slider' }"
          >
            Slider
          </button>
        </li>
        <li>
          <button
            @click="colorPickerToggle('photoshop')"
            :class="{ 'is-active': colorPicker === 'photoshop' }"
          >
            Photoshop
          </button>
        </li>
      </ul>
      <!-- /.change-picker -->
      <div class="colors__item" v-for="(item, index) in colors" :key="index">
        <h4>{{ item.title }}</h4>
        <Color
          v-for="(color, ind) in item.arr"
          :key="ind"
          :rgb="color.rgb"
          v-model="colors[index].arr[ind].color"
          :name="color.name"
          :colorPicker="colorPicker"
        />
      </div>
    </div>
    <v-style v-for="(style, index) in styleColors" :key="index">
      :root { --{{ style.slug }}:
      {{ style.rgb ? convertHextToRGB(style.color) : style.color }}; }
    </v-style>
    <!-- /.styles -->
  </div>
</template>

<script>
import Color from './color.vue';

export default {
  name: 'Colors',

  components: {
    Color,
  },

  data: () => ({
    active: false,
    colorPicker: 'slider',
    colors: [
      {
        title: 'General',
        arr: [
          {
            color: '#000',
            name: 'Black',
            slug: 'c-black',
          },
        ],
      },
      {
        title: 'Head',
        arr: [
          {
            slug: 'c-head-darker-pink-f6',
            name: 'Head Darker',
            color: '#f6b3c2',
          },
          {
            slug: 'c-head-darker-pink-f6-rgb',
            name: 'Head Darker RGB',
            color: '#f6b3c2',
            rgb: true,
            rgb_color: '',
          },
          {
            slug: 'c-head-light-pink-fa',
            name: 'Head Light',
            color: '#fadee4',
          },
          {
            slug: 'c-head-light-pink-fa-rgb',
            name: 'Head Light RGB',
            color: '#fadee4',
            rgb: true,
            rgb_color: '',
          },
          {
            slug: 'c-head-bow-tie-dark-20',
            name: 'Head Bow Tie',
            color: '#202632',
          },
        ],
      },
      {
        title: 'Hair',
        arr: [
          {
            name: 'Hair-red-cd',
            slug: 'c-hair-red-cd',
            color: '#cd374c',
          },
          {
            name: 'Hair-red-e1',
            slug: 'c-hair-red-e1',
            color: '#e11e2c',
          },
          {
            name: 'Hair-red-fc',
            slug: 'c-hair-red-fc',
            color: '#fc1b48',
          },
          {
            name: 'Hair-red-shadow-ba',
            slug: 'c-hair-red-shadow-ba',
            color: '#ba210f',
          },
          {
            name: 'Hair-red-shadow-ba RGB',
            slug: 'c-hair-red-shadow-ba-rgb',
            color: '#ba210f',
            rgb: true,
          },
          {
            name: 'Hair-red-shadow-ab',
            slug: 'c-hair-red-shadow-ab',
            color: '#ab4855',
          },
          {
            name: 'Hari-red-shadow-80',
            slug: 'c-hari-red-shadow-80',
            color: '#80323f',
          },
          {
            name: 'Hair-pink-ee',
            slug: 'c-hair-pink-ee',
            color: '#eec0c9',
          },
          {
            name: 'Hair-pink-ee RGB',
            slug: 'c-hair-pink-ee-rgb',
            color: '#eec0c9',
            rgb: true,
          },
          {
            name: 'Hair-base-color-fd',
            slug: 'c-hair-base-color-fd',
            color: '#fd2f55',
          },
          {
            name: 'Hair-silver-be',
            slug: 'c-hair-silver-be',
            color: '#beb9ba',
          },
          {
            name: 'Hair-silver-e7',
            slug: 'c-hair-silver-e7',
            color: '#e7e1e3',
          },
          {
            name: 'Hair-silver-d2',
            slug: 'c-hair-silver-d2',
            color: '#d2c7c9',
          },
          {
            name: 'Hair-light-ff',
            slug: 'c-hair-light-ff',
            color: '#ff7e99',
          },
          {
            name: 'Hair-bun-d3',
            slug: 'c-hair-bun-d3',
            color: '#d3cbcc',
          },
          {
            name: 'Hair Bun Background',
            slug: 'c-hair-bun-background',
            color: '#a69ba7',
          },
        ],
      },
      {
        title: 'Eyes',
        arr: [
          {
            name: 'Eye-inner-color',
            slug: 'c-eye-inner-color',
            color: '#dad9de',
          },
          {
            name: 'Eye-red-af',
            slug: 'c-eye-red-af',
            color: '#af2d3a',
          },
          {
            name: 'Eye-red-54',
            slug: 'c-eye-red-54',
            color: '#541e1d',
          },
          {
            name: 'Eye-grey-9f',
            slug: 'c-eye-grey-9f',
            color: '#9fa69f',
          },
          {
            name: 'Eye-green-48',
            slug: 'c-eye-green-48',
            color: '#48977d',
          },
          {
            name: 'Eye-yellow-b4',
            slug: 'c-eye-yellow-b4',
            color: '#b49384',
          },
          {
            name: 'Eye-yellow-shadow-9e',
            slug: 'c-eye-yellow-shadow-9e',
            color: '#9e885b',
            rgb: true,
            rgb_color: '',
          },
          {
            name: 'Eye-yellow-df',
            slug: 'c-eye-yellow-df',
            color: '#dfd9d0',
          },
          {
            name: 'Eye-brown-spot-59',
            slug: 'c-eye-brown-spot-59',
            color: '#591216',
          },
          {
            name: 'Eye-border-c0',
            slug: 'c-eye-border-c0',
            color: '#c0b9ba',
          },
          {
            name: 'Eye-black-17',
            slug: 'c-eye-black-17',
            color: '#170f0d',
          },
          {
            name: 'Eyebrows-95',
            slug: 'c-eyebrows-95',
            color: '#95475d',
          },
        ],
      },
      {
        title: 'Skin',
        arr: [
          {
            color: '#e5d7d8',
            name: 'Skin-base-color-e5',
            slug: 'c-skin-base-color-e5',
          },
          {
            color: '#a6aab7',
            name: 'Skin-grey-a6',
            slug: 'c-skin-grey-a6',
          },
          {
            color: '#83848c',
            name: 'Skin-stich-color-83',
            slug: 'c-skin-stich-color-83',
          },
          {
            color: '#d0b5cf',
            name: 'Skin-purple-d0',
            slug: 'c-skin-purple-d0',
          },
          {
            color: '#a29bae',
            name: 'Skin-darker-a2',
            slug: 'c-skin-darker-a2',
          },
          {
            color: '#c0bdca',
            name: 'Skin-silver',
            slug: 'c-skin-silver',
          },
          {
            color: '#ccc7d1',
            name: 'Skin-silver2',
            slug: 'c-skin-silver2',
          },
          {
            color: '#d6b6be',
            name: 'Skin-pink',
            slug: 'c-skin-pink',
          },
        ],
      },
      {
        title: 'Mouth',
        arr: [
          {
            color: '#a490bb',
            slug: 'c-mouth-base-a4',
            name: 'Mouth Base',
          },
        ],
      },
      {
        title: 'Dress',
        arr: [
          {
            color: '#313445',
            slug: 'c-dress-shadow-color',
            name: 'Dress-shadow-color',
          },
          {
            color: '#342226',
            slug: 'c-dress-middle-color',
            name: 'Dress-middle-color',
          },
          {
            color: '#465664',
            slug: 'c-dress-base',
            name: 'Dress-base',
          },
          {
            color: '#2f3444',
            slug: 'c-dress-shadow',
            name: 'Dress-shadow',
          },
          {
            color: '#f0c1cc',
            slug: 'c-dress-inner',
            name: 'Dress-inner',
          },
        ],
      },
      {
        title: 'Arms',
        arr: [
          {
            color: '#3d4d5c',
            slug: 'c-arm-band',
            name: 'Arm-band',
          },
          {
            color: '#211624',
            slug: 'c-arm-band2',
            name: 'Arm-band2',
          },
          {
            color: '#7f707c',
            slug: 'c-arm-stiches',
            name: 'Arm-stiches',
          },
          {
            color: '#7a7683',
            slug: 'c-arm-stiches2',
            name: 'Arm-stiches2',
          },
          {
            color: '#827d86',
            slug: 'c-arm-stiches3',
            name: 'Arm-stiches3',
          },
          {
            color: ' #e7d3d6',
            slug: 'c-arm-bandage-stain',
            name: 'Arm-bandage-stain',
          },
        ],
      },
      {
        title: 'Legs',
        arr: [
          {
            color: '#ac9faa',
            slug: 'c-leg-grey',
            name: 'Leg-grey',
          },
          {
            color: '#906a73',
            slug: 'c-leg-border',
            name: 'Leg-border',
          },
          {
            color: '#d597a7',
            slug: 'c-leg-pink-flesh',
            name: 'Leg-pink-flesh',
          },
          {
            color: '#e7e2df',
            slug: 'c-leg-bandage',
            name: 'Leg-bandage',
          },
          {
            color: '#cfb1b8',
            slug: 'c-leg-bandage-pink',
            name: 'Leg-bandage-pink',
          },
        ],
      },
      {
        title: 'Shoes',
        arr: [
          {
            color: '#b32334',
            name: 'Shoe-bottom',
            slug: 'c-shoe-bottom',
          },
          {
            color: '#0f0a07',
            name: 'Shoe-bottom2',
            slug: 'c-shoe-bottom2',
          },
          {
            color: '#040401',
            name: 'Shoe-left-color',
            slug: 'c-shoe-left-color',
          },
          {
            color: '#816b79',
            name: 'Shoe-sock-shadow',
            slug: 'c-shoe-sock-shadow',
          },
          {
            color: '#9d1825',
            name: 'Shoe-ribbon',
            slug: 'c-shoe-ribbon',
          },
          {
            color: '#a61f29',
            name: 'Shoe-red',
            slug: 'c-shoe-red',
          },
        ],
      },
      {
        title: 'Ribbon',
        arr: [
          {
            name: 'Ribbon-red',
            color: '#d4333f',
            slug: 'c-ribbon-red',
          },
        ],
      },
    ],
  }),

  computed: {
    styleColors() {
      return this.colors.reduce((acc, { arr }) => {
        const items = arr.map(({ slug, color, rgb }) => ({
          slug,
          color,
          rgb,
        }));
        acc = [...acc, ...items];
        return acc;
      }, []);
    },
  },

  methods: {
    colorPickerToggle(type) {
      this.colorPicker = type;
    },

    handleToggle() {
      this.active = !this.active;
    },

    convertHextToRGB(color) {
      color = color.replace('#', '');
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    },
  },
};
</script>
