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
          v-model="settings.icons"
          class="ma-1"
          label="Text + icons"
        ></v-switch>
        <v-switch
          v-model="settings.dark"
          class="ma-1"
          label="Dark"
        ></v-switch>
        <v-switch
          v-model="settings.centered"
          class="ma-1"
          label="Centered"
          :disabled="settings.vertical"
        ></v-switch>
        <v-switch
          v-model="settings.grow"
          class="ma-1"
          label="Grow"
        ></v-switch>
        <v-switch
          v-model="settings.vertical"
          class="ma-1"
          label="Vertical"
        ></v-switch>
        <v-switch
          v-model="settings.right"
          class="ma-1"
          label="Right"
        ></v-switch>


        <q-color-picker v-model="settings.color" label="Color" class="ma-1" />
        <q-color-picker v-model="settings.backgroundColor" label="Background" class="ma-1" />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <q-tabs
          v-model="tab"
          :color="settings.color"
          :background-color="settings.backgroundColor"
          :dark="settings.dark"
          :centered="settings.centered"
          :grow="settings.grow"
          :vertical="settings.vertical"
          :right="settings.right"
          :icons-and-text="settings.icons"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="i in 4"
            :key="i"
            :href="`#tab-${i}`"
          >
            Tab {{ i }}
            <v-icon v-if="settings.icons">phone</v-icon>
          </v-tab>

          <v-tab-item
            v-for="i in 4"
            :key="i"
            :value="'tab-' + i"
          >
            <v-card
              flat
              tile
            >
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </q-tabs>
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
    tab: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    settings: {
        icons: false,
        elevation: 0,
        color: "#1976d2f",
        backgroundColor: "#FFFFFF00",
        dark: false,
        centered: false,
        grow: false,
        vertical: true,
        right: false,
    }
  })
}
</script>