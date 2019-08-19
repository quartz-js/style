<template>
  <v-container fluid>

    <h1>General</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam dapibus nulla luctus eleifend. Pellentesque tincidunt sem volutpat, iaculis elit sed, malesuada elit. Nunc id mauris lorem. Sed ipsum est, viverra sed consequat pulvinar, volutpat ut leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </p>

    
    <v-switch v-model="settings.dark" label="Dark"></v-switch>
  </v-container>
</template>

<script>
import StyleContentCommon from './StyleContentCommon'

export default {
  mixins: [
    StyleContentCommon
  ],
  data: () => ({
    path: 'general',
    settings: {
      dark: false
    }
  })
}
</script>