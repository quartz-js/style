<template>
  <v-container fluid>
    <p>
      <slot name='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
      </slot>
    </p>

    <v-row>
      <v-col cols="6">
        <v-container>
          <v-switch
            v-model="settings.hasIcon"
            label="Has Icon"
          ></v-switch>
          <v-switch
            v-model="settings.hasText"
            label="Has Text"
          ></v-switch>
          <q-text-field
            v-model="settings.minWidth"
            label="Min width"
            min="10"
            max="300"
            suffix="px"
          ></q-text-field>
          <q-text-field
            v-model="settings.maxWidth"
            label="Max width"
            min="10"
            max="300"
            suffix="px"
          ></q-text-field>
          <q-text-field
            v-model="settings.minHeight"
            label="Min height"
            min="10"
            max="300"
            suffix="px"
          ></q-text-field>
          <q-text-field
            v-model="settings.maxHeight"
            label="Max height"
            min="10"
            max="300"
            suffix="px"
          ></q-text-field>
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
          <q-btn
            v-bind="options"
            :content-text='text'
            content-icon='mdi-plus'
          />
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
    color: 'primary',
    sizes: ['x-small', 'small', 'medium', 'large', 'x-large'],
    types: ['block', 'fab', 'outlined', 'rounded', 'text', 'tile'],
    text: 'Customize me',
    type: ['tile'],
    size: 'x-small',
    settings: {
      hasIcon: true,
      hasText: true,
      minWidth: 20,
      minHeight: 20,
      maxWidth: 300,
      maxHeight: 300,
      elevation: 0,
      block: false,
      fab: false,
      outlined: false,
      rounded: false,
      text: false,
      tile: true,
      "x-small": false,
      small: true,
      medium: true,
      large: false,
      "x-large": false
    }
  }),
  computed: {
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