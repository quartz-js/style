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
        <q-color-picker v-model="settings.color" label="Background" class="ma-0"/>
        <v-switch v-model="settings.tile" label="Tile"></v-switch>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <q-sheet
          :color="settings.color"
          :tile="settings.tile"
          class="pa-5"
        >
          <span>I'm a sheet</span>
        </q-sheet>
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
      tile: true,
      color: "#ffffffff",
    }
  })
}
</script>