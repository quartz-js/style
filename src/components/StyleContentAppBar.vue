<template>
  <v-container fluid>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="settings.absolute"
          class="ma-1"
          label="Absolute"
        ></v-switch>
        <v-switch
          v-model="settings.fixed"
          class="ma-1"
          label="Fixed"
        ></v-switch>
        <v-switch
          v-model="settings.dark"
          class="ma-1"
          label="Dark"
        ></v-switch>
        <v-switch
          v-model="settings.extended"
          class="ma-1"
          label="Extended"
        ></v-switch>
        <v-switch
          v-model="settings.dense"
          class="ma-1"
          label="Dense"
        ></v-switch>
        <v-slider
          v-model="settings.elevation"
          class="ma-1"
          label="Elevation"
          min="0"
          max="24"
          clearable
        ></v-slider>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
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
    settings: {
      absolute: false,
      fixed: false,
      dark: false,
      extended:false,
      dense:false,
      elevation: 1
    }
  })
}
</script>