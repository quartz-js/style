<script>

import _ from 'lodash'

export default {
  props: ['value', 'path'],
  data: () => ({
    settings: {}
  }),
  watch: {
    value: function (){
      this.reload();
    },
    settings: {
      handler: function (){
        let settings = _.clone(this.value);
        _.set(settings, this.path, this.settings);

        this.$emit('input', settings)
      },
      deep: true
    },
    path: {
      handler: function (){
        this.reload()
      },
      deep: true
    }
  },
  methods: {
    reload() {
      let val = _.get(this.value, this.path);

      if (val) {
        this.settings = val;
      }
    }
  },
  mounted() {
    this.reload()
  }
}
</script>