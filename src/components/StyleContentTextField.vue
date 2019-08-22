<template>
  <v-container fluid>
    <h1>Text Field</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-switch
          v-model="settings.shaped"
          class="ma-1"
          label="Shaped (requires Filled, Outlined or Solo)"
          :disabled="!settings.outlined && !settings.filled && !settings.solo"
        ></v-switch>
        <v-switch
          v-model="settings.outlined"
          class="ma-1"
          label="Outlined"
        ></v-switch>
        <v-switch
          v-model="settings.rounded"
          class="ma-1"
          label="Rounded (requires Filled, Outlined or Solo)"
          :disabled="!settings.filled && !settings.outlined && !settings.solo"
        ></v-switch>
        <v-switch
          v-model="settings.solo"
          class="ma-1"
          label="Solo"
          :disabled="settings.filled"
        ></v-switch>
        <v-switch
          v-model="settings.singleLine"
          class="ma-1"
          label="Single-line"
        ></v-switch>
        <v-switch
          v-model="settings.filled"
          class="ma-1"
          label="Filled (disabled with Outlined or Solo)"
          :disabled="settings.outlined || settings.solo"
        ></v-switch>
        <v-switch
          v-model="settings.persistentHint"
          class="ma-1"
          label="Persistent Hint"
        ></v-switch>
        <v-switch
          v-model="settings.flat"
          class="ma-1"
          label="Flat (requires Solo)"
          :disabled="!settings.solo"
        ></v-switch>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet
          elevation="1"
          class="pa-12"
        >
          <v-text-field
            v-model="model"
            :label="label"
            :hint="hint"
            :placeholder="placeholder"
            :shaped="settings.shaped"
            :outlined="settings.outlined"
            :rounded="settings.rounded"
            :solo="settings.solo"
            :single-line="settings.singleLine"
            :filled="settings.filled"
            :persistent-hint="settings.persistentHint"
            :flat="settings.flat"
          ></v-text-field>
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
    path: 'textField',
    model: 'I\'m a text field',
    label: 'I\'m a label',
    hint: 'I\'m here to help you out!',
    placeholder: '',
    settings: {
      shaped: false,
      outlined: false,
      rounded: false,
      solo: false,
      singleLine: false,
      filled: false,
      persistentHint: false,
      flat: false,
    }
  })
}
</script>