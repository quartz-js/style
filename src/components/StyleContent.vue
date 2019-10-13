<template>
  <div v-if="template">
    <div class='ma-3'>
      <q-select
        :items="templates"
        v-model="template"
        label="Template"
        placeholder="Change template"
        item-text="name"
        return-object
        :hide-details="true"
      ></q-select>
    </div>
    <div v-if="template.custom">
      <div class='ma-3'>
        <q-select
          :items="items"
          v-model="item"
          label="Components"
          placeholder="Pick one component"
          item-text="name"
          return-object
          :hide-details="true"
        ></q-select>
      </div>
      <div v-if="item">
        <component :is="`style-content-${item.component}`" :path="item.value" v-model="settings" />
        <div class="text-right">
          <q-btn color="primary" @click="update" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-right">
        <q-btn color="primary" @click="updateTemplate" :loading="loading">{{ $t('$quartz.core.save') }}</q-btn>
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
import StyleContentSelect from './StyleContentSelect'
import StyleContentNavigationDrawer from './StyleContentNavigationDrawer'
import StyleContentDialog from './StyleContentDialog'
import StyleContentSnackbar from './StyleContentSnackbar'
import StyleContentIcon from './StyleContentIcon'
import { StyleService } from '../app/StyleService'
import { container } from '@quartz/core'
import TemplateDefault from '../templates/default'
import _ from 'lodash'

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
    StyleContentNavigationDrawer,
    StyleContentDialog,
    StyleContentButton,
    StyleContentSelect,
    StyleContentSnackbar,
    StyleContentIcon
  },
  data() {
    return {
      settings: {},
      loading: false,
      template: null,
      templates: [
        {
          "name": "default",
          "value": "default"
        },
        {
          "name": "dark-orange",
          "value": "dark-orange"
        },
        {
          "name": "old-bootstrap",
          "value": "old-bootstrap"
        },
        {
          "name": "custom",
          "value": "custom",
          "custom": true
        }
      ],
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
          "name": "Snackbar",
          "component": "snackbar",
          "value": "q-snackbar",
        }, {
          "name": "App Bar",
          "component": "app-bar",
          "value": "q-app-bar",
        }, {
          "name": "Icon",
          "component": "icon",
          "value": "q-icon",
        }, {
          "name": "Sidebar",
          "component": "sidebar",
          "value": "q-sidebar",
        }, {
          "name": "Navigation Drawer",
          "component": "navigation-drawer",
          "value": "q-navigation-drawer",
        }, {
          "name": "Dialog",
          "component": "dialog",
          "value": "q-dialog",
        }, {
          "name": "Form",
          "component": "form",
          "value": "q-form",
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
          "name": "Text Field",
          "component": "text-field",
          "value": "q-text-field",
        }, {
          "name": "Textarea",
          "component": "textarea",
          "value": "q-textarea",
        }, {
          "name": "Select",
          "component": "select",
          "value": "q-select",
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
    template: function () {
      StyleService.load(this.template.value)
    },
    settings: function ()
    {
      container.get('settings').set('style', this.settings);
    }
  },
  mounted () {
    this.settings = container.get('settings').get('style', _.clone(TemplateDefault))
    let val = container.get('settings').get('style.template', 'default')
    this.template = this.templates.find(i => { console.log(i); return i.name == val })
  },
  methods: {
    updateTemplate() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      container.get('settings').store('style.template', this.template.value).then(() => {

        StyleService.reload();

        this.loading = false;
      })
    },
    update() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      container.get('settings').store('style', this.settings).then(() => {

        return container.get('settings').store('style.template', this.template.value)
      }).then(() => {
        StyleService.reload();

        this.loading = false;
      })
    }
  }
}
</script>