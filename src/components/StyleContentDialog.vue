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
          v-model="settings.hideOverlay"
          class="ma-1"
          label="Hide Overlay"
          value="hideOverlay"
        ></v-switch>

        <v-switch
          v-model="settings.scrollable"
          class="ma-1"
          label="Scrollable"
          value="scrollable"
        ></v-switch>

        <v-switch
          v-model="settings.fullscreen"
          class="ma-1"
          label="Fullscreen"
          value="fullscreen"
        ></v-switch>

        <v-select
          v-model="settings.transition"
          :items="transitions"
          label="Transition"
        ></v-select>

        <v-text-field
          v-model="settings.maxWidth"
          class="ma-1"
          label="Max Width"
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
            @click="dialog = true"
          >
            Show Dialog
          </q-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <q-dialog
      v-model="dialog"
      :transition="settings.transition"
      :max-width="settings.maxWidth"
      :hideOverlay="settings.hideOverlay"
      :scrollable="settings.scrollable"
      :fullscreen="settings.fullscreen"
    >
      <div class='pa-10'>I'm a dialog</div>
      <div class='pa-10 text-right'>
        <q-btn

          @click="dialog = false"
        >
          Close
        </q-btn>
      </div>
    </q-dialog>
  </v-container>
</template>
<script>

import StyleContentCommon from './StyleContentCommon'

export default {
  mixins: [
    StyleContentCommon
  ],
  data: () => ({
    dialog: false,
    transitions: ['dialog-bottom-transition'],
    settings: {
      hideOverlay: false,
      maxWidth: 1200,
      scrollable: false,
      fullscreen: false,
      transition: 'dialog-bottom-transition'
    }
  })
}
</script>