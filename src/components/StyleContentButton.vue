<template>
  <v-container fluid>

    <h1>Buttons</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>

    <v-row>
      <v-col cols="6">
        <v-container>
          <v-slider
            v-model="settings.minWidth"
            label="Min width"
            min="10"
            max="300"
          ></v-slider>
          <v-slider
            v-model="settings.minHeight"
            label="Min height"
            min="10"
            max="300"
          ></v-slider>
          <v-slider
            v-model="settings.elevation"
            label="Elevation"
            min="0"
            max="24"
            clearable
          ></v-slider>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="size"
                :items="sizes"
                label="Size"
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="type"
                :items="types"
                label="Type"
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          elevation="1"
          class="pa-12 text-center"
        >
          <v-btn
            v-bind="options"
          >
            <v-icon
              v-if="hasIcon"
              :left="type.includes('icon-left')"
              :right="type.includes('icon-right')"
            >
              mdi-plus
            </v-icon>
            <span v-else>
              {{ text }}
            </span>
          </v-btn>
        </v-sheet>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import StyleContentCommon from './StyleContentCommon'

export default {
  mixins: [
    StyleContentCommon
  ],
  data: () => ({
    path: 'button.basic',
    color: 'primary',
    sizes: ['x-small', 'small', 'medium', 'large', 'x-large'],
    types: ['block', 'fab', 'outlined', 'rounded', 'text', 'tile'],
    text: 'Customize me',
    type: [],
    size: 'medium',
    settings: {
      minWidth: undefined,
      minHeight: undefined,
      elevation: 1,
      block: false,
      fab: false,
      outlined: false,
      rounded: false,
      text: false,
      tile: true,
      "x-small": false,
      small: false,
      medium: true,
      large: false,
      "x-large": false
    }
  }),
  computed: {
    hasIcon () {
      return Boolean(
        this.type.includes('fab') ||
          this.type.includes('icon-left') ||
          this.type.includes('icon-right')
      )
    },
    options () {
      const options = _.merge(_.clone(this.settings), {
        color: this.color,
        elevation: this.settings.elevation,
      })

      return options
    },
    colors () {
      return Object.keys(this.$vuetify.theme.themes.dark)
    },
  },
  watch: {
    value: {
      handler: function (val) {
        this.type = [];
        this.types.map(i => {
          if (_.get(val, this.path + '.' + i) === true) {
            this.type.push(i)
          }
        })
        this.size = null;
        this.sizes.map(i => {
          if (_.get(val, this.path + '.' + i) === true) {
            this.size = i
          }
        })
      },
      deep: true
    },
    size (val) {

      let settings = _.clone(this.settings);

      console.log('Yolo')
      console.log(val)
      this.sizes.map(i => {
        if (val == i) {
          settings[i] = true;
        } else {
          settings[i] = false;
        }
      })

      if (JSON.stringify(this.settings) === JSON.stringify(settings)) {
        return;
      }

      this.settings = settings;
    },
    type (val) {

      let settings = _.clone(this.settings);

      this.types.map(i => {
        if (!val.includes(i)) {
          settings[i] = false;
        } else {
          settings[i] = true
        }
      })

      if (JSON.stringify(this.settings) === JSON.stringify(settings)) {
        return;
      }

      this.settings = settings;
    },
  },
}
</script>