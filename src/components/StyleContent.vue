<template>
  <div>
    <style-content-general v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-colors v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-sidebar v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-card v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-sheet v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-form v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-text-field v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-textarea v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-autocomplete v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>
    
    <style-content-button v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>
    <!--# Define primary colors
    # Table - Buttons
    # General buttons
    # Header color
    # Drawers + Drawer color
    # Customizable tabs for page show
  -->
    <!--<h3>Saved</h3>-->
    <!---->
  </div>
</template>

<script>

import StyleContentGeneral from './StyleContentGeneral'
import StyleContentColors from './StyleContentColors'
import StyleContentSidebar from './StyleContentSidebar'
import StyleContentSheet from './StyleContentSheet'
import StyleContentCard from './StyleContentCard'
import StyleContentForm from './StyleContentForm'
import StyleContentTextField from './StyleContentTextField'
import StyleContentTextarea from './StyleContentTextarea'
import StyleContentAutocomplete from './StyleContentAutocomplete'
import StyleContentButton from './StyleContentButton'
import { StyleService } from '../app/StyleService'
import { container } from '@quartz/core'

export default {
  components: {
    StyleContentGeneral,
    StyleContentColors,
    StyleContentSidebar,
    StyleContentSheet,
    StyleContentCard,
    StyleContentForm,
    StyleContentTextField,
    StyleContentTextarea,
    StyleContentAutocomplete,
    StyleContentButton
  },
  data() {
    return {
      settings: {},
      loading: false
    }
  },
  watch: {
    settings: function (){
    },
  },
  mounted () {
    this.settings = JSON.parse(container.get('settings').get('style', '{}'))
  },
  methods: {
    update() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      container.get('settings').store('style', JSON.stringify(this.settings)).then(() => {

        StyleService.reload();

        this.loading = false;
      })
    }
  }
}
</script>