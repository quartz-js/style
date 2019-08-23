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
      <component :is="`style-content-${item.name}`" :path="item.path" v-model="settings" />

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
        "name": "colors",
        "path": "colors",
      },
      items: [
        {
          "name": "general",
          "path": "general",
        }, {
          "name": "colors",
          "path": "colors",
        }, {
          "name": "app-bar",
          "path": "q-app-bar",
        }, {
          "name": "sidebar",
          "path": "q-sidebar",
        }, {
          "name": "card",
          "path": "q-card",
        }, {
          "name": "sheet",
          "path": "q-sheet",
        }, {
          "name": "tabs",
          "path": "q-tabs",
        }, {
          "name": "form",
          "path": "q-form",
        }, {
          "name": "text-field",
          "path": "q-text-field",
        }, {
          "name": "textarea",
          "path": "q-textarea",
        }, {
          "name": "autocomplete",
          "path": "q-autocomplete",
        }, {
          "name": "button",
          "path": "q-btn",
        }, {
          "name": "button",
          "path": "q-btn-table",
        }, {
          "name": "button",
          "path": "q-btn-input"
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