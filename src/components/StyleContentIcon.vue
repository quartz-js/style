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
          <q-color-picker v-model="settings.color" label="Color" class="ma-0" />
          <q-color-picker v-model="settings.backgroundColor" label="Background Color" class="ma-0" />
        </v-col>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <q-sheet
          elevation="1"
          class="pa-12"
        >
          <q-icon
            :color="settings.color"
            :background-color="settings.backgroundColor"
          >create</q-icon>
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
      color: '#000000',
      backgroundColor: '#ffffff00',
    }
  })
}
</script>