<template>
  <v-container fluid>
    <h1>Colors</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>
    <div>
      <q-color-picker v-model="settings.background" label="Background" class="ma-0" />
      <q-color-picker v-model="settings.header" label="Header" class="ma-0" />
      <q-color-picker v-model="settings.primary" label="Primary" class="ma-0" />
      <q-color-picker v-model="settings.secondary" label="Secondary" class="ma-0" />
      <q-color-picker v-model="settings.accent" label="Accent" class="ma-0" />
      <q-color-picker v-model="settings.error" label="Error" class="ma-0" />
      <q-color-picker v-model="settings.info" label="Info" class="ma-0" />
      <q-color-picker v-model="settings.success" label="Success" class="ma-0" />
      <q-color-picker v-model="settings.warning" label="Warning" class="ma-0" />
    </div>
  </v-container>
</template>
<script>

import StyleContentCommon from './StyleContentCommon'

export default {
  mixins: [
    StyleContentCommon
  ],
  data: () => ({
    path: 'colors',
    settings: {
      background: '#fafbff00',
      header: '#FFFFFF00',
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107',
    }
  })
}
</script>