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
        <q-color-picker v-model="settings.color" label="Background" class="ma-0" />
        <v-switch v-model="settings.dark" label="Dark"></v-switch>
        <v-switch v-model="settings.outlined" label="Outlined"></v-switch>
        <v-switch v-model="settings.tile" label="Tile"></v-switch>
        <v-slider v-model="settings.elevation" label="Elevation" min="0" max="24"></v-slider>
        <v-slider v-model="settings.borderSize" label="BorderSize (requires Outlined)" min="0" max="24" :disabled="!settings.outlined"></v-slider>
        <q-color-picker v-model="settings.borderColor" label="BorderSize (requires Outlined)" class="ma-0" :disabled="!settings.outlined" />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          :elevation="settings.elevation"
          :outlined="settings.outlined"
          :tile="settings.tile"
          :dark="settings.dark"
          v-bind:style="{border: settings.outlined ? settings.borderSize + 'px solid ' + settings.borderColor : 'inherit'}"
        >
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn text>Click</v-btn>
            <v-btn outlined>Click</v-btn>
          </v-card-actions>
        </v-card>
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
      color: "#ffffff",
      outlined: false,
      elevation: 1,
      tile: false,
      dark: false,
      borderSize: "2",
      borderColor: "#f1f1f100",
    }
  })
}
</script>