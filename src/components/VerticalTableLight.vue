<template>
  <div
    v-if="shouldShowTable"
    class="table-container table-light"
  >
    <h4
      v-if="slots.title"
      class="table-title"
    >
      {{ evaluateSlot(slots.title) }}
    </h4>
    <p
      v-if="slots.subtitle"
      class="subtitle"
      v-html="slots.subtitle"
    />
    <table :id="this.$props.options.id">
      <tbody>
        <tr
          v-for="(field, index) in slots.fields"
          :key="index"
        >
          <!-- headers -->
          <th
            v-if="field.labelType !== 'i18n'"
            :style="styles.th || ''"
            v-html="evaluateSlot(field.label)"
          />

          <th
            v-if="field.labelType === 'i18n'"
            :style="styles.th || ''"
            v-html="$t(field.label)"
          />

          <!-- data -->
          <td
            v-if="hasData && field.valueType !== 'i18n' && field.valueType !== 'component' && field.valueType !== 'component1' && field.valueType !== 'component2'"
            :style="styles.td || ''"
            v-html="evaluateSlot(field.value, field.transforms, nullValue)"
          />

          <td
            v-if="hasData && field.value1Type && field.value1Type !== 'i18n' && field.value1Type !== 'component' && field.value1Type !== 'component1' && field.value1Type !== 'component2'"
            :style="styles.td || ''"
            v-html="evaluateSlot(field.value1, field.transforms, nullValue)"
          />

          <td
            v-if="hasData && field.valueType === 'i18n'"
            :style="styles.td || ''"
            v-html="$t(field.value)"
          />

          <td
            v-if="!hasData"
            :style="styles.td || ''"
            v-html="''"
          />

          <slot
            v-if="field.valueType === 'component'"
          />

          <td
            v-if="field.valueType === 'component1'"
          >
            <slot
              name="component1"
            />
          </td>

          <td
            v-if="field.valueType === 'component2'"
          >
            <slot
              name="component2"
            />
          </td>
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
    styles() {
      if (this.$props.options.styles) {
        return this.$props.options.styles;
      }
      return '';

    },
    shouldShowTable() {
      const hasData = this.hasData;
      if (this.item) {
        if (this.item.activeTable) {
          const filterValue = this.item.activeTable;
          const id = this.options.id;
          if (filterValue === id) {
            return true;
            // return hasData;
          }
          return false;

        }
        return true;
        // return hasData;

      }
      return true;
      // return hasData;

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
  .table-light p {
    width: 98%;
    margin-left:1%;
  }
  .table-light tr{
    padding: 0 30px 0 30px;
  }
  .table-light table {
    width: 90%;
    margin-left:5%;
  }
  .table-light td {
    width: 40%;
    text-align: left;
  }

  .table-light th, .table-light tr, .table-light td  {
    background: white;
    color: #444;
    font-weight: unset;
    padding: 5px 0 5px 0;
  }
  .table-light th, .table-light tr td  {
    border: unset;
    border-bottom: thin solid #444;
    padding-left:10px;
  }
  .table-light td {
    border: none;
  }

  .table-container {
    /*this was too much padding for the parcel table, taking out for now*/
    /*padding-top: 1rem;*/
    margin-bottom: 10px !important;
  }
</style>
