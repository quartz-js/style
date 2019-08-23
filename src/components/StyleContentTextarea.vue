<template>
  <v-container fluid>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>
      <v-row>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="settings.rows"
          class="mx-4"
          label="Rows"
          max="50"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
        ></v-text-field>
        <v-switch
          v-model="settings.autoGrow"
          class="ma-1"
          label="Auto-grow"
        ></v-switch>
        <v-text-field
          v-model="settings.rowHeight"
          :disabled="!settings.autoGrow"
          class="mx-4"
          label="Row height - px"
          max="500"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
        ></v-text-field>

        <v-switch
          v-model="settings.filled"
          class="ma-1"
          label="Filled"
        ></v-switch>
        <v-switch
          v-model="settings.flat"
          class="ma-1"
          label="Flat (requires Solo)"
          :disabled="!settings.solo"
        ></v-switch>
        <v-switch
          v-model="settings.outlined"
          class="ma-1"
          label="Outlined"
        ></v-switch>
        <v-switch
          v-model="settings.persistentHint"
          class="ma-1"
          label="Persistent Hint"
        ></v-switch>
        <v-switch
          v-model="settings.rounded"
          class="ma-1"
          label="Rounded (requires Filled or Outlined)"
        ></v-switch>
        <v-switch
          v-model="settings.shaped"
          class="ma-1"
          label="Shaped (requires Filled or Outlined)"
        ></v-switch>
        <v-switch
          v-model="settings.singleLine"
          class="ma-1"
          label="Single-line"
        ></v-switch>
        <v-switch
          v-model="settings.solo"
          class="ma-1"
          label="Solo"
        ></v-switch>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <q-sheet
          elevation="1"
          class="pa-12"
        >
          <v-textarea
            v-model="model"
            :auto-grow="settings.autoGrow"
            :counter="settings.counter ? settings.counter : false"
            :filled="settings.filled"
            :flat="settings.flat"
            :label="label"
            :hint="hint"
            :no-resize="settings.noResize"
            :outlined="settings.outlined"
            :persistent-hint="settings.persistentHint"
            :placeholder="placeholder"
            :rounded="settings.rounded"
            :row-height="settings.rowHeight"
            :rows="settings.rows"
            :shaped="settings.shaped"
            :single-line="settings.singleLine"
            :solo="settings.solo"
          ></v-textarea>
          <div class="mt-12 text-center">
            Value: {{ model }}
          </div>
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
    model: 'I\'m a text area',
    label: 'I\'m a label',
    hint: 'I\'m here to help you out!',
    placeholder: '',
    settings: {
      autoGrow: true,
      autofocus: true,
      clearable: false,
      counter: 0,
      filled: false,
      flat: false,
      noResize: false,
      outlined: false,
      persistentHint: false,
      placeholder: '',
      rounded: false,
      rowHeight: 24,
      rows: 1,
      shaped: false,
      singleLine: false,
      solo: false,
    }
  })
}
</script>