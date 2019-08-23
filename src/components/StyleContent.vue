<template>
  <div>
    <style-content-general path="general" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-colors path="colors" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div> 

    <style-content-app-bar path="q-app-bar" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-sidebar path="q-sidebar" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-card path="q-card" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-sheet path="q-sheet" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>


    <style-content-tabs path="q-tabs" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div> 


    <style-content-form path="q-form" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-text-field path="q-text-field" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-textarea path="q-textarea" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-autocomplete path="q-autocomplete" v-model="settings"/>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>
    
    <style-content-button path="q-btn" v-model="settings">
      <template slot="title">Buttons</template>
    </style-content-button>

    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-button path="q-btn-table" v-model="settings">
      <template slot="title">Buttons on Table</template>
    </style-content-button>
    <div class="text-right">
      <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
    </div>

    <style-content-button path="q-btn-input" v-model="settings">
      <template slot="title">Buttons on Input</template>
    </style-content-button>
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
import StyleContentTabs from './StyleContentTabs'
import StyleContentCard from './StyleContentCard'
import StyleContentForm from './StyleContentForm'
import StyleContentTextField from './StyleContentTextField'
import StyleContentTextarea from './StyleContentTextarea'
import StyleContentAutocomplete from './StyleContentAutocomplete'
import StyleContentAppBar from './StyleContentAppBar'
import StyleContentButton from './StyleContentButton'
import { StyleService } from '../app/StyleService'
import { container } from '@quartz/core'

export default {
  components: {
    StyleContentGeneral,
    StyleContentColors,
    StyleContentSidebar,
    StyleContentSheet,
    StyleContentTabs,
    StyleContentCard,
    StyleContentForm,
    StyleContentTextField,
    StyleContentAppBar,
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