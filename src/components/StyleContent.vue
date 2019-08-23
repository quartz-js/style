<template>
  <div>
    <div class='ma-3'>
      <v-select
        :items="items"
        v-model="item"
        filled
        label="Components"
        placeholder="Pick one component"
        outlined
        item-text="name"
        return-object
        :hide-details="true"
      ></v-select>
    </div>

    <div v-if="item">
      <component :is="`style-content-${item.component}`" :path="item.value" v-model="settings" />

      <div class="text-right">
        <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
      </div>
    </div>
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
      loading: false,
      item: {
        "name": "Colors",
        "component": "colors",
        "value": "colors",
      },
      items: [
        {
          "name": "General",
          "component": "general",
          "value": "general",
        }, {
          "name": "Colors",
          "component": "colors",
          "value": "colors",
        }, {
          "name": "App Bar",
          "component": "app-bar",
          "value": "q-app-bar",
        }, {
          "name": "Sidebar",
          "component": "sidebar",
          "value": "q-sidebar",
        }, {
          "name": "Card",
          "component": "card",
          "value": "q-card",
        }, {
          "name": "Sheet",
          "component": "sheet",
          "value": "q-sheet",
        }, {
          "name": "Tabs",
          "component": "tabs",
          "value": "q-tabs",
        }, {
          "name": "Form",
          "component": "form",
          "value": "q-form",
        }, {
          "name": "Text Field",
          "component": "text-field",
          "value": "q-text-field",
        }, {
          "name": "Textarea",
          "component": "textarea",
          "value": "q-textarea",
        }, {
          "name": "Autocomplete",
          "component": "autocomplete",
          "value": "q-autocomplete",
        }, {
          "name": "Button",
          "component": "button",
          "value": "q-btn",
        }, {
          "name": "Button on Table",
          "component": "button",
          "value": "q-btn-table",
        }, {
          "name": "Button on Input",
          "component": "button",
          "value": "q-btn-input"
        }
      ]
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