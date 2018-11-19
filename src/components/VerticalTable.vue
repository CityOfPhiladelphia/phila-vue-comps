<template>
  <div v-if="shouldShowTable" class="table-container">
    <h4 v-if="slots.title"
        class="table-title"
    >
      {{ evaluateSlot(slots.title) }}
    </h4>
    <table>
      <tbody>
        <tr v-for="field in slots.fields">
          <th v-html="evaluateSlot(field.label)"
              :style="styles.th || ''"
          />
          <td v-html="evaluateSlot(field.value, field.transforms, nullValue)"
              v-if="hasData"
          />
          <td v-html="''"
              v-if="!hasData"
          />
        </tr>
      </tbody>
    </table>
    <external-link v-if="options && options.externalLink"
                   :options="options.externalLink"
                   :type="'vertical-table'"
    />
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import ExternalLink from './ExternalLink.vue';

  export default {
    mixins: [TopicComponent],
    components: {
      ExternalLink,
    },
    computed: {
      styles() {
        if (this.$props.options.styles) {
          return this.$props.options.styles;
        } else {
          return '';
        }
      },
      shouldShowTable() {
        const hasData = this.hasData;
        if (this.item) {
          if (this.item.activeTable) {
            const filterValue = this.item.activeTable;
            const id = this.options.id;
            if (filterValue === id) {
              return true
              // return hasData;
            } else {
              return false;
            }
          } else {
            return true;
            // return hasData;
          }
        } else {
          return true;
          // return hasData;
        }
      },
      hasData() {
        // console.log(this.topicKey, '-', 'hasData?', this.dataSources);
        // console.log('vertTable hasData is running, this.$props.options:', this.$props.options, 'this.$config.dataSources:', this.$config.dataSources);

        // make sure the following is true for all data sources
        if (!this.$props.options.dataSources) {
          return true;
        } else {
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
            } else {
              return !!this.$store.state.sources[dataSource].data;
            }
          });

          return hasData;
        }
      },
    }
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
