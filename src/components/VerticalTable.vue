<template>
  <div
    v-if="shouldShowTable"
    class="table-container"
  >

    <h4
      v-if="slots.title && !i18nEnabled"
      class="table-title"
    >
      {{ evaluateSlot(slots.title) }}
    </h4>
    <h4
      v-if="slots.title && i18nEnabled"
      class="table-title"
      v-html="$t(evaluateSlot(slots.title))"
    >
    </h4>

    <div
      v-if="this.$props.options.subtitle"
    >
      {{ this.$props.options.subtitle }}
    </div>

    <table :id="this.$props.options.id">
      <tbody>
        <tr
          v-for="(field, index) in slots.fields"
          :key="index"
        >
          <th
            :style="styles.th || ''"
            v-html="$t(evaluateSlot(field.label))"
          />

          <td
            v-if="hasData && !i18nEnabled"
            v-html="evaluateSlot(field.value, field.transforms, nullValue)"
          />
          <td
            v-if="hasData && i18nEnabled && !field.link"
            v-html="$t(evaluateSlot(field.value, field.transforms, nullValue))"
          />
          <td
            v-if="hasData && i18nEnabled && field.link"
            v-html="'<a target=`_blank` href=' + field.link + '>'+$t(evaluateSlot(field.value, field.transforms, nullValue))+'</a>'"
          />
          <!-- <td
            v-if="hasData && i18nEnabled && field.translation == 'partial'"
            v-html="calculatePartialTranslation(evaluateSlot(field.value, field.transforms, nullValue))"
          /> -->

          <td
            v-if="!hasData"
            v-html="''"
          />
        </tr>
      </tbody>
    </table>
    <external-link
      v-if="options && options.externalLink"
      :options="options.externalLink"
      :type="'vertical-table'"
    />
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
import ExternalLink from './ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
  mixins: [ TopicComponent ],
  computed: {
    i18nEnabled() {
      let value = this.$config.i18n && this.$config.i18n.enabled;
      return value;
    },
    styles() {
      if (this.$props.options.styles) {
        return this.$props.options.styles;
      }
      return '';

    },
    shouldShowTable() {
      let conditionVal;
      if (this.options.condition) {
        let conditionVal = this.options.condition(this.$store.state);
        console.log('this.options.condition:', this.options.condition, 'conditionVal:', conditionVal);
        if (!conditionVal) {
          return false;
        }
      }
      const hasData = this.hasData;
      if (this.item) {
        if (this.item.activeTable) {
          const filterValue = this.item.activeTable;
          const id = this.options.id;
          if (filterValue === id) {
            return true;
          }
          return false;
        }
        return true;
      }
      return true;
    },
    hasData() {
      // console.log(this.topicKey, '-', 'hasData?', this.dataSources);
      // console.log('vertTable hasData is running, this.$props.options:', this.$props.options, 'this.$config.dataSources:', this.$config.dataSources);

      // make sure the following is true for all data sources
      if (!this.$props.options.dataSources) {
        return true;
      }
      const hasData = this.$props.options.dataSources.every(dataSource => {
        const targetsFn = this.$config.dataSources[dataSource].targets;

        // if the data source is configured for targets
        if (targetsFn) {
          const targetsMap = this.$store.state.sources[dataSource].targets;
          const targets = Object.values(targetsMap);

          // but there are no targets for this address, return false
          if (targets.length === 0) {
            return false;
          }

          // if there are targets for this address, make sure none of them
          // are "waiting"
          return targets.every(target => target.status !== 'waiting');

          // if the data source is not configured for targets, just check that
          // it has data
        }
        return !!this.$store.state.sources[dataSource].data;

      });

      return hasData;

    },
  },
  // methods: {
  //   calculatePartialTranslation(str) {
  //     console.log('calculatePartialTranslation is running, value:', str, 'this.$i18n:', this.$i18n.locale, 'this.$config.i18n.data.messages:', this.$config.i18n.data.messages);
  //     let messages = this.$config.i18n.data.messages[this.$i18n.locale];
  //     let stringSplit = str.split('$t');
  //     let newString = '';
  //     for (let section of stringSplit) {
  //       if (!section.includes('messages')) {
  //         let test = 1;
  //         // newString += section;
  //       } else {
  //         let sectionSplit = section.split('.');
  //         console.log('sectionSplit:', sectionSplit);
  //         let i;
  //         // for (i=1; i<sectionSplit.length-1;i++) {
  //         // }
  //         // newString += messages[]
  //       }
  //     }
  //     console.log('i18nSubstitute is running, str:', str, 'stringSplit:', stringSplit, 'messages:', messages, 'messages.voting:', messages.voting);
  //     return messages['voting']['introPage'].p4;
  //   },
  // },
};
</script>

<style scoped>
  table {
    margin: 0;
  }

  th, td {
    font-size: 15px;
    text-align: left;
  }

  th {
    width: 30%;
  }

  .external-link {
    padding-top: 5px;
  }

  .table-title {
    /*too much*/
    /*margin-top: 1rem;*/
  }

  .table-container {
    /*this was too much padding for the parcel table, taking out for now*/
    /*padding-top: 1rem;*/
    margin-bottom: 10px !important;
  }
</style>
