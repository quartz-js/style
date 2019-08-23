<template>
  <v-container fluid>
    <h1>Sidebar</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>
    <div>
      <q-color-picker v-model="settings.color" label="Background" class="ma-0" />
      <q-color-picker v-model="settings.itemColorActive" label="Color Active" class="ma-0" />
      <v-switch v-model="settings.dark" class="ma-1" label="Dark Mode"></v-switch>
      <v-switch v-model="settings.right" class="ma-1" label="Right side"></v-switch>
      <v-switch v-model="settings.fixed" class="ma-1" label="Fixed"></v-switch>
      <v-switch v-model="settings.miniVariant" class="ma-1" label="Mini Variant"></v-switch>
      <v-switch v-model="settings.expandOnHover" class="ma-1" label="Expand On Hover"></v-switch>
      <v-switch v-model="settings.temporary" class="ma-1" label="Temporary"></v-switch>
      <v-switch v-model="settings.floating" class="ma-1" label="Floating (no border-right)"></v-switch>
      <v-switch v-model="settings.permanent" class="ma-1" label="Permanent"></v-switch>
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
    settings: {
      color: '#ffffff00',
      itemColorActive: '#1976D200',
      dark: false,
      right: false,
      fixed: true,
      miniVariant: false,
      expandOnHover: false,
      temporary: false,
      floating: false,
      permanent: false
    }
  })
}
</script>