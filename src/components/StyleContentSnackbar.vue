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
          v-model="settings.left"
          class="ma-1"
          label="Left"
          value="left"
        ></v-switch>

        <v-switch
          v-model="settings.right"
          class="ma-1"
          label="Right"
          value="right"
        ></v-switch>

        <v-switch
          v-model="settings.top"
          class="ma-1"
          label="Top"
          value="top"
        ></v-switch>

        <v-switch
          v-model="settings.bottom"
          class="ma-1"
          label="Bottom"
        ></v-switch>

        <v-switch
          v-model="settings.mode"
          class="ma-1"
          label="Multi-line (mobile)"
          value="multi-line"
        ></v-switch>

        <v-switch
          v-model="settings.mode"
          class="ma-1"
          label="Vertical (mobile)"
          value="vertical"
        ></v-switch>

        <v-text-field
          v-model.number="settings.timeout"
          class="ma-1 px-4"
          label="Timeout"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          elevation="1"
          class="pa-12"
        >
          <q-btn
            color="primary"
            block
            @click="snackbar = true"
          >
            Show Snackbar
          </q-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :bottom="settings.bottom"
      :top="settings.top"
      :left="settings.left"
      :right="settings.right"
      :multi-line="settings['multi-line']"
      :vertical="settings['vertical']"
      :timeout="settings.timeout"
    >
      {{ text }}
      <q-btn
        @click="snackbar = false"
      >
        Close
      </q-btn>
    </v-snackbar>
  </v-container>
</template>
<script>

import StyleContentCommon from './StyleContentCommon'

export default {
  mixins: [
    StyleContentCommon
  ],
  data: () => ({
    text: 'Hello, I\'m a snackbar',
    snackbar: false,
    settings: {
      timeout: 6000,
      left: false,
      top: false,
      bottom: false,
      top: false,
      'multi-line': false,
      vertical: false
    }
  })
}
</script>