<template>
  <div class="pvc-horizontal-table">
    <!-- <button v-if="shouldShowButton"
    >
      Text
    </button> -->
    <div v-if="shouldShowTable">
      <!-- controls -->
      <div
        v-if="shouldShowFilters !== false"
        class="pvc-horizontal-table-controls"
      >
        <div
          v-if="!!options.filters"
          class="vertically-centered"
        >
          <!-- TODO the ids for filter spans should incorporate some sort of topic comp
          to make them globally unique -->
          <div
            v-for="(filter, index) in filters"
            :id="'filter-' + index"
            :key="index"
            class="inline-block"
          >
            <div class="vertically-centered pvc-select-text">
              {{ filter.label }}
            </div>
            <select
              :id="'time-select-'+options.tableId"
              class="pvc-select"
              @change="handleFilterValueChange"
            >
              <optgroup>
                <option
                  v-for="(filterValue, filterIndex) in filter.values"
                  :key="filterIndex"
                  :value="slugifyFilterValue(filterValue)"
                  class="pvc-select-option"
                >
                  {{ filterValue.label }}
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <!-- <div v-if="!!$props.options.sort && !!$props.options.sort.select" -->
        <div
          v-if="!!options.sort && !!options.sort.select"
          class="vertically-centered"
        >
          <div class="vertically-centered pvc-select-text">
            Sort by
          </div>
          <select
            :id="'time-sort-'+options.tableId"
            class="pvc-select"
            @change="handleSortValueChange"
          >
            <optgroup>
              <option
                v-for="sortField in sortFields"
                :key="sortField"
                :value="sortField"
                class="pvc-select-option"
              >
                {{ sortField }}
              </option>
            </optgroup>
          </select>
        </div>

        <div
          v-if="filterByTextFields"
          class="vertically-centered"
        >
          <div class="pvc-select-text inline-block">
            {{ options.filterByText.label }}
          </div>
          <form
            class="inline-block filter-by-text-form"
            @submit.prevent="handleFilterFormX"
          >
            <input
              id="theInput"
              :class="inputClass"
              @keyup="handleFilterFormKeyup"
            >
            <button
              v-if="searchText != ''"
              class="pvc-search-control-button"
            >
              <font-awesome-icon
                icon="times"
                class="fa-lg"
              />
            </button>
          </form>
        </div>
      </div> <!-- end of pvc-horizontal-table-controls block -->

      <div :class="{ 'pvc-horizontal-table-body': true, 'no-padding': !shouldShowFilters }">
        <!-- this is the start of an added zone -->
        <!-- <a
          v-if="this.$store.state.fullScreenTopicsEnabled !== true
            && this.$store.state.fullScreenMapEnabled !== true
            && options.downloadButton === true"
          class="button pvc-download-data-button"
          @click="exportTableToCSV"
        >
          Download Data
        </a>

        <a
          v-if="shouldShowExportPDF"
          :class="'pdf ' + buttonPositionClass"
          @click="exportTableToPDF"
        >
          {{ options.export.formatButtons.pdf }}
        </a> -->

        <button-comp-light
          v-if="shouldShowExportCSV"
          :class="'csv ' + buttonPositionClass"
          :slots="{buttonAction: exportTableToCSV}"
        >
          <font-awesome-icon
            v-if="options.export.formatButtons.csv.icon"
            :icon="options.export.formatButtons.csv.icon"
            class="button-icon"
          />
          {{ options.export.formatButtons.csv.text }}
        </button-comp-light>

        <button-comp-light
          v-if="shouldShowExportPDF"
          :class="'pdf ' + buttonPositionClass"
          :slots="{buttonAction: exportTableToPDF}"
        >
          <font-awesome-icon
            v-if="options.export.formatButtons.pdf.icon"
            :icon="options.export.formatButtons.pdf.icon"
            class="button-icon"
          />
          {{ options.export.formatButtons.pdf.text }}
        </button-comp-light>

        <button-comp-light
          v-if="shouldShowExportPDFLight"
          :class="'pdf ' + buttonPositionClass"
          :slots="{buttonAction: exportTableToPDF}"
        >
          <font-awesome-icon
            v-if="options.export.formatButtons['pdf-light'].icon"
            :icon="options.export.formatButtons['pdf-light'].icon"
            class="button-icon"
          />
          {{ options.export.formatButtons['pdf-light'].text }}
        </button-comp-light>

        <button-comp-light
          v-if="shouldShowExportMailing"
          :class="'mailing ' + buttonPositionClass"
          :slots="{buttonAction: exportTableToMailing}"
        >
          <font-awesome-icon
            v-if="options.export.formatButtons.mailing.icon"
            :icon="options.export.formatButtons.mailing.icon"
            class="button-icon"
          />
          {{ options.export.formatButtons.mailing.text }}
        </button-comp-light>
        <!-- this is the end of an added zone -->

        <div v-if="slots.title">
          <h4
            v-if="i18nEnabled"
            style="display:inline-block"
            v-html="$t(evaluateSlot(slots.title))"
          />
          <h5
            v-if="i18nEnabled"
            style="display:inline-block; color: gray"
            v-html="$t(evaluateSlot(slots.subtitle))"
          />
          <h4
            v-if="!i18nEnabled"
            style="display:inline-block"
          >
            {{ evaluateSlot(slots.title) }} {{ countText }}
          </h4>
          <h5
            v-if="!i18nEnabled"
            style="display:inline-block; color: gray"
          >
            {{ evaluateSlot(slots.subtitle) }}
          </h5>
          <!-- <a
            v-if="shouldShowExportCSV"
            class="button pvc-export-data-button"
            @click="exportTableToCSV"
          >
            {{ options.export.formatButtons.csv }}
          </a>
          <a
            v-if="shouldShowExportPDF"
            class="button pvc-export-data-button"
            @click="exportTableToPDF"
          >
            {{ options.export.formatButtons.pdf }}
          </a> -->
        </div>

        <table
          :id="options.id"
          role="grid"
          class="stack"
          :class="typeof options.customClass != 'undefined'
            && typeof options.customClass.table != 'undefined' ?
              options.customClass.table : ''"
        >
          <thead v-if="shouldShowHeaders !== false">
            <tr>
              <th
                v-if="i18nEnabled"
                v-for="field in fields"
                :key="field.label"
                :class="typeof options.customClass != 'undefined'
                  && typeof options.customClass.th != 'undefined' ?
                    specifySortType(field.label) : ''"
                :title="typeof options.customClass != 'undefined'
                  && typeof options.customClass.title != 'undefined' ?
                    options.customClass.title : ''"
                v-html="$t(evaluateSlot(field.label))"
              >
              </th>
              <th
                v-if="!i18nEnabled"
                v-for="field in fields"
                :key="field.label"
                :class="typeof options.customClass != 'undefined'
                  && typeof options.customClass.th != 'undefined' ?
                    specifySortType(field.label) : ''"
                :title="typeof options.customClass != 'undefined'
                  && typeof options.customClass.title != 'undefined' ?
                    options.customClass.title : ''"
              >
                {{ evaluateSlot(field.label) }}
              </th>
            </tr>
          </thead>
          <tbody>
            <horizontal-table-row
              v-for="item in itemsLimited"
              :key="getFeatureId(item)"
              :item="item"
              :fields="fields"
              :has-overlay="hasOverlay"
              :table-id="options.tableId"
              :options="options"
            />
            <horizontal-table-row
              v-if="totalRowEnabled"
              :should-be-bold="true"
              :item="itemsLimitedSummed"
              :fields="fields"
              :table-id="options.tableId"
              :total-row-field="totalRowField"
            />
          </tbody>
        </table>

        <!-- external link (aka "see more")-->
        <external-link
          v-if="options.externalLink && shouldShowExternalLink"
          :options="options.externalLink"
          :count="count"
          :limit="limit"
          :type="'horizontal-table'"
        />
        <!-- <div class="external-link"
             v-if="options.externalLink && shouldShowExternalLink"
        >
          <a :href="externalLinkHref"
             target="_blank"
          >
            {{ externalLinkText }}
            <font-awesome-icon icon="external-link-alt" aria-hidden="true" />
          </a>
        </div> -->
      </div>

      <a
        v-if="shouldShowRetrieveButton"
        class="button center-button"
        @click="showMoreRecords"
      >
        Retrieve {{ nextIncrement }} More {{ nextIncrement === 1? 'Record' : 'Records' }}
        <span
          v-show="secondaryStatus === 'waiting'"
          class="loading"
        >
          <font-awesome-icon
            icon="spinner"
            class="fa-lg"
          />
        </span>
      </a>
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

import TopicComponent from './TopicComponent.vue';
import ButtonCompLight from './ButtonCompLight.vue';
// import HorizontalTableRow from './HorizontalTableRow.vue';
// import ExternalLink from './ExternalLink.vue';
import { format, subHours, addHours, subDays, addDays, subWeeks, addWeeks, subMonths, addMonths, subYears, addYears, isWithinInterval, parseISO } from 'date-fns';


import jsPDF from 'jspdf';
import autotable from 'jspdf-autotable';
import chunk from 'lodash-es/chunk';

const DEFAULT_SORT_FIELDS = [
  'distance',
  'date',
];

export default {
  components: {
    ButtonCompLight: () => import(/* webpackChunkName: "pvc_pvc_ButtonCompLight" */'./ButtonCompLight.vue'),
    HorizontalTableRow: defineAsyncComponent(() => import(/* webpackChunkName: "ht_pvc_HorizontalTableRow" */'./HorizontalTableRow.vue')),
    ExternalLink: defineAsyncComponent(() => import(/* webpackChunkName: "pvc_ExternalLink" */'./ExternalLink.vue')),
    // HorizontalTableRow,
    // ExternalLink,
  },
  mixins: [ TopicComponent, ButtonCompLight ],
  data() {
    const filters = this.options.filters || [];
    const filtersKeys = Object.keys(filters);
    // console.log('in horiz table data, filters:', filters, 'filtersKeys:', filtersKeys);
    // const defaultFilterSelections = Object.keys(filters).reduce((acc, i) =>
    //                                 {
    //                                   const key = `filter-${i}`;
    //                                   console.log('in reduce, i:', i, 'acc:', acc, 'key:', key, 'acc[key]:', acc[key]);
    //                                   acc[key] = {};
    //                                   return acc;
    //                                 }, {});
    let defaultFilterSelections = {};

    let tableGroupId = this.item.tableGroupId;
    // console.log('Object.keys(this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues).length:', Object.keys(this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues).length);
    if (tableGroupId && tableGroupId != 'undefined' && this.$store.state.horizontalTableGroups && Object.keys(this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues).length > 0) {
      // console.log('setting filter to:', this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues);
      defaultFilterSelections['filter-0'] = this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues;
    } else {
      for (let index=0; index < filters.length; index++) {
        defaultFilterSelections['filter-' + index] = filters[index].values[0];
      }
    }

    // console.log('in horiz table data, filters:', filters, 'filtersKeys:', filtersKeys, 'defaultFilterSelections:', defaultFilterSelections);
    let sortFields;
    if (this.options.sort){
      sortFields = this.options.sort.sortFields || [];
    }
    let sortField;
    if (sortFields) {
      sortField = sortFields[0];
    } else {
      sortField = DEFAULT_SORT_FIELDS[0];
    }
    const highestRowRetrieved = this.options.defaultIncrement;

    const initialData = {
      filterSelections: defaultFilterSelections,
      searchText: '',
      sortField,
      highestRowRetrieved,
    };

    return initialData;
  },
  computed: {
    i18nEnabled() {
      let value = this.$config.i18n && this.$config.i18n.enabled;
      return value;
    },
    buttonPositionClass() {
      let value;
      if (this.$props.options.export.buttonPosition) {
        if (this.$props.options.export.buttonPosition === 'right') {
          value = 'pvc-export-data-button-right';
        } else {
          value = 'pvc-export-data-button';
        }
      } else {
        value = 'pvc-export-data-button';
      }
      return value;
    },
    totalRowEnabled() {
      let value;
      if (this.$props.options.totalRow) {
        value = this.$props.options.totalRow.enabled || false;
      }
      return value;
    },
    totalRowField() {
      let value;
      if (this.$props.options.totalRow) {
        value = this.$props.options.totalRow.totalField || '';
      }
      return value;
    },
    hasData() {
      // console.log('horizTable hasData is running, this.$config:', this.$config, 'this.$store.state:', this.$store.state);
      if (!this.$props.options.dataSources) {
        return true;
      }
      const hasData = this.$props.options.dataSources.every(dataSource => {
        // const targetsFn = this.$config.dataSources[dataSource].targets;
        const targetsFn = this.$store.state.sources[dataSource].targets;
        const maybeEmpty = this.isEmpty(targetsFn);
        // if the data source is configured for targets
        if (!this.isEmpty(targetsFn)) {
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
    // this is the start of an added zone
    customElementClass() {
      let customCSS;
      if (this.options.customCSS) {
        customCSS = this.options.customCSS;
      }
      return customCSS;
    },
    // this is the end of an added zone
    shouldShowFilters() {
      if (typeof this.options.shouldShowFilters === 'undefined') {
        return true;
      }
      return this.options.shouldShowFilters;

    },
    shouldShowHeaders() {
      if (typeof this.options.shouldShowHeaders === 'undefined') {
        return true;
      }
      return this.options.shouldShowHeaders;

    },
    // this is the start of an added zone
    shouldShowExportMailing() {
      let shouldExport = false;
      if (this.options.export) {
        if (this.options.export.formatButtons) {
          const keys = Object.keys(this.options.export.formatButtons);
          shouldExport = keys.includes('mailing');
        }
      }
      return shouldExport;
    },
    // this is the end of an added zone
    shouldShowExportPDF() {
      let shouldExport = false;
      if (this.options.export) {
        if (this.options.export.formatButtons) {
          const keys = Object.keys(this.options.export.formatButtons);
          shouldExport = keys.includes('pdf');
        }
      }
      return shouldExport;
    },
    shouldShowExportPDFLight() {
      let shouldExport = false;
      if (this.options.export) {
        if (this.options.export.formatButtons) {
          const keys = Object.keys(this.options.export.formatButtons);
          shouldExport = keys.includes('pdf-light');
        }
      }
      return shouldExport;
    },
    shouldShowExportCSV() {
      let shouldExport = false;
      if (this.options.export) {
        if (this.options.export.formatButtons) {
          const keys = Object.keys(this.options.export.formatButtons);
          shouldExport = keys.includes('csv');
        }
      }
      return shouldExport;
    },
    secondaryStatus() {
      return this.$store.state.sources[this.options.id].secondaryStatus;
    },
    shouldShowTable() {
      let result = true;

      // if the table is in a tab group or table group, it will have an "item" in props
      // if (this.item) {
      //   // if it is in a table group, the item will contain an "activeTable" for the group
      //   if (this.item.activeTable) {
      //     const id = this.options.id;
      //     if (this.item.activeTable != id) {
      //       result = false
      //     }
      //   }
      // }
      // if there is no data, and the table should not show at all if it is empty
      if (this.$props.options.showOnlyIfData && this.items.length === 0) {
        result = false;
      }

      return result;
    },
    shouldShowRetrieveButton() {
      return this.highestRowRetrieved < this.count;
    },
    leftToRetrieve() {
      return this.count - this.highestRowRetrieved;
    },
    nextIncrement() {
      if (!this.options.showAllRowsOnFirstClick) {
        if (this.leftToRetrieve < this.options.defaultIncrement) {
          return this.leftToRetrieve;
        }
        return this.options.defaultIncrement;

      }
      return this.leftToRetrieve;

    },
    highestPageRetrieved() {
      return this.evaluateSlot(this.slots.highestPageRetrieved);
    },
    pageCount() {
      return this.evaluateSlot(this.slots.pageCount);
    },
    totalSize() {
      return this.evaluateSlot(this.slots.totalSize);
    },
    limit() {
      return this.options.limit;
    },
    // REVIEW what does this do? can this be simplified?
    inputClass() {
      if (this.searchText === '') {
        return 'pvc-search-control-input';
      }
      return 'pvc-search-control-input-full';

    },
    filters() {
      return this.options.filters;
    },
    activeFilters() {
      //TODO make this work with not-always-on filters
      return this.filters;
    },
    fields() {
      return this.options.fields;
    },
    hasOverlay() {
      return !!this.options.mapOverlay;
    },
    items() {
      if (this.hasData) {
        const itemsSlot = this.slots.items;
        const items = this.evaluateSlot(itemsSlot) || [];
        // console.log('horiz table items', items);
        return items;
      }
      return [];

    },
    filterByTextFields() {
      if (this.options.filterByText) {
        return this.options.filterByText.fields;
      }
      return null;

    },
    itemsAfterSearch() {
      // console.log('itemsAfterSearch is running');
      const items = this.items;
      const searchText = this.searchText;

      if (!searchText) {
        return items;
      }

      const searchTextLower = searchText.toLowerCase();

      // get full set of items

      // if text search is not enabled, return all items
      const searchFields = this.filterByTextFields || [];
      if (searchFields.length === 0) {
        return items;
      }

      // get items that contain the search text in one of their filter fields
      const matchingItems = items.filter(item => {
        const searchVals = searchFields.map(filterField => {
          const props = item.properties;
          const searchVal = props ? props[filterField] : item[filterField];
          // console.log('props', props, 'searchVal', searchVal);
          return searchVal.toLowerCase();
        });

        let boolean = false;
        for (let searchVal of searchVals) {
          // console.log('searchVal', searchVal, 'searchTextLower', searchTextLower);
          if (searchVal.includes(searchTextLower)) {
            boolean = true;
          }
        }
        return boolean;
      });

      return matchingItems;
    },
    // this takes itemsAfterSearch and applies selected filters
    itemsAfterFilters() {
      // console.log('itemsAfterFilters is running, this.filters:', this.filters, 'this.filterSelections:', this.filterSelections);
      if (!this.itemsAfterSearch) {
        return [];
      }
      const itemsAfterSearch = this.itemsAfterSearch;
      const items = this.filterItems(itemsAfterSearch,
        this.filters,
        this.filterSelections);
      // console.log('horiz table itemsAfterFilters', items);
      return items;

    },
    itemsAfterSort() {
      const itemsAfterFilters = this.itemsAfterFilters;
      const sortOpts = this.options.sort;
      return this.sortItems(itemsAfterFilters, sortOpts);
    },
    sortFields() {
      if (this.options.sort.sortFields) {
        return this.options.sort.sortFields;
      }
      return DEFAULT_SORT_FIELDS;

    },
    // this takes filtered items and applies the max number of rows
    itemsLimited() {
      // console.log('items limited', this.itemsAfterSort.slice(0, this.limit));
      if (this.options.limit) {
        return this.itemsAfterSort.slice(0, this.options.limit);
      } else if (this.options.defaultIncrement) {
        return this.itemsAfterSort.slice(0, this.highestRowRetrieved);
      }
      return this.itemsAfterSort;

    },
    itemsLimitedSummed() {
      let summed = {};
      for (let key of Object.keys(this.itemsLimited[0])) {
        if (typeof this.itemsLimited[0][key] === 'number') {
          summed[key] = 0;
        }
        if (this.totalRowField) {
          summed[this.totalRowField] = 'Total';
        }
        for (let item of this.itemsLimited) {
          if (typeof summed[key] === 'number') {
            summed[key] = summed[key] + item[key];
          }
        }
      }
      return summed;
    },
    count() {
      if (this.$props.options.useApiCount) {
        return this.totalSize;
      }
      return this.itemsAfterFilters.length;

    },
    countText() {
      if (this.$props.options.noCount) {
        return '';
      } else if (this.highestRowRetrieved < this.count) {
        return `(1 - ${ this.count < this.highestRowRetrieved ? this.count : this.highestRowRetrieved } of ${this.count})`;
      }
      return `(${this.count})`;

    },
    shouldShowExternalLink() {
      if (this.options.externalLink.forceShow) {
        return this.options.externalLink.forceShow;
      }
      return this.itemsAfterSearch.length > this.limit;

    },
    // externalLinkAction() {
    //   return this.options.externalLink.action || 'See more';
    // },
    // externalLinkText() {
    //   const externalLinkConf = this.options.externalLink;
    //   const actionFn = externalLinkConf.action;
    //   const actionText = actionFn(this.externalLinkCount);
    //   const name = externalLinkConf.name;
    //
    //   return `${actionText}`;
    //   // return `${actionText} at ${name}`;
    // },
    // externalLinkHref() {
    //   return this.evaluateSlot(this.options.externalLink.href);
    // },
    // // the number of items that aren't being shown (e.g. See 54 more...)
    // externalLinkCount() {
    //   return this.count - this.limit;
    // },
  },
  watch: {
    itemsAfterFilters(nextItems) {
      console.log('WATCH items after filters, this.options.id:', this.options.id, 'nextItems:', nextItems);
      // this.$nextTick(() => {

      let tableGroupId = this.item.tableGroupId;
      let activeTableId, activeFilterValues;
      // let theSelect = document.getElementById('time-select');
      console.log('tableGroupId:', tableGroupId);
      if (this.$store.state.horizontalTableGroups && tableGroupId && tableGroupId != 'undefined') {
        activeTableId = this.$store.state.horizontalTableGroups[tableGroupId].activeTableId;
        activeFilterValues = this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues;
      }
      
      if (this.$store.state.horizontalTables) {
        this.updateTableFilteredData();
        if (this.$store.state.horizontalTableGroups && this.options.tableId == activeTableId) {
          this.$store.commit('setHorizontalTableGroupActiveFilters', {
            tableGroupId: this.item.tableGroupId,
            activeFilterValues: this.filterSelections['filter-0'],
          });
        }
      }
      // })
    },
  },
  // beforeCreate() {
  //   console.log('horizTable before create, this.$config:', this.$config, 'this.$store.state:', this.$store.state);
  // },
  created() {
    // console.log('horiz table created props slots items', this.$props.slots.items);
    
    // if (this.filters) {
    //   for (let [ index, filter ] of this.filters.entries()) {
    //     const key = `filter-${index}`;
    //     let defaultValue;
    //     let tableGroupId = this.item.tableGroupId;
    //     let activeTableId, activeFilterValues;
    //     let theSelect = document.getElementById('time-select');
    //     if (this.$store.state.horizontalTableGroups && tableGroupId != 'undefined') {
    //       activeTableId = this.$store.state.horizontalTableGroups[tableGroupId].activeTableId;
    //       activeFilterValues = this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues;
    //     }
    //     if (this.$store.state.horizontalTableGroups && this.options.tableId == activeTableId && Object.keys(this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues).length > 0) {
    //       console.log('created setting filter to:', this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues);
    //       defaultValue = activeFilterValues;
    //       // let theSelect = document.getElementById('time-select');
    //       console.log('theSelect:', theSelect, defaultValue.direction + '-' + defaultValue.value + '-' + defaultValue.unit);
    //       // theSelect.value = defaultValue.direction + '-' + defaultValue.value + '-' + defaultValue.unit;
    //       theSelect.selectedIndex = "1";
    //     } else {
    //       defaultValue = filter.values[0] || {};
    //       // console.log('created theSelect:', theSelect, 'defaultValue:', defaultValue, 'defaultValue.direction:', defaultValue.direction, 'defaultValue.value:', defaultValue.value, 'defaultValue.unit:', defaultValue.unit);
    //       // theSelect.value = defaultValue.direction + '-' + defaultValue.value + '-' + defaultValue.unit;
    //       // let theSelect = document.getElementById('time-select');
    //       theSelect.selectedIndex = "0";
    //     }
    //     this.filterSelections[key] = defaultValue;
    //   }
    // }


    // put row data in state once on load
    // const data = this.itemsAfterSearch;
    // const tableId = this.options.tableId;

    // this.$store.commit('setHorizontalTableFilteredData', {
    //   tableId,
    //   data
    // });
  },
  mounted() {
    // console.log('horiz table mounted props slots items', this.$props.slots.items);
    
    
    if (this.filters) {
      for (let [ index, filter ] of this.filters.entries()) {
        const key = `filter-${index}`;
        let defaultValue;
        let tableGroupId = this.item.tableGroupId;
        let activeTableId, activeFilterValues, activeSortValues;
        // let theSelect = document.getElementById('time-select');
        if (this.$store.state.horizontalTableGroups && tableGroupId != 'undefined') {
          activeTableId = this.$store.state.horizontalTableGroups[tableGroupId].activeTableId;
          activeFilterValues = this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues;
          activeSortValues = this.$store.state.horizontalTableGroups[tableGroupId].activeSortValues;
        }
        if (this.$store.state.horizontalTableGroups && this.options.tableId == activeTableId && Object.keys(this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues).length > 0) {
          console.log('created setting filter to:', this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues);
          defaultValue = activeFilterValues;
          let theSelect = document.getElementById('time-select-'+activeTableId);
          // theSelect.value = 'wawa';
          theSelect.value = defaultValue.direction + '-' + defaultValue.value + '-' + defaultValue.unit;
          // theSelect.selectedIndex = "2";
          console.log('created this.options.id:', this.options.id, 'theSelect:', theSelect, defaultValue.direction + '-' + defaultValue.value + '-' + defaultValue.unit);
        } else {
          defaultValue = filter.values[0] || {};
          // console.log('created theSelect:', theSelect, 'defaultValue:', defaultValue, 'defaultValue.direction:', defaultValue.direction, 'defaultValue.value:', defaultValue.value, 'defaultValue.unit:', defaultValue.unit);
          // theSelect.value = defaultValue.direction + '-' + defaultValue.value + '-' + defaultValue.unit;
          // let theSelect = document.getElementById('time-select-'+activeTableId);
          // theSelect.selectedIndex = "0";
        }
        console.log('horizontal table mounted, activeSortValues:', activeSortValues);
        this.filterSelections[key] = defaultValue;
        if (activeSortValues) {
          this.sortField = activeSortValues;
          let theSort = document.getElementById('time-sort-'+activeTableId);
          theSort.value = activeSortValues;
        }

        // theSelect.selectedIndex = "1";
      }
    }

    
    
    if (this.$store.state.horizontalTables) {
      this.updateTableFilteredData();
      // this.$store.commit('setHorizontalTableGroupActiveFilters', {
      //   tableGroupId: this.item.tableGroupId,
      //   activeFilterValues: this.filterSelections['filter-0'],
      // });
      // this is the start of an added zone
      if(typeof this.$props.options.customClass != 'undefined') {
        if( this.$props.options.customClass.table != 'undefined'
              && this.$props.options.customClass.table === 'sortable') {
          sorttable.makeSortable(this.$el.querySelector('.sortable'));
        }
      }
      // this is the end of an added zone
    }
  },
  methods: {
    getFeatureId(item) {
      let value;
      if (item._featureId){
        value = item._featureId;
      } else {
        value = item.cartodb_id;
      }
      return value;
    },
    // this is the start of an added zone
    specifySortType(field){
      return this.$props.options.customClass.th(field);
    },
    exportTableToMailing() {
      const tableData = [];
      let fields = [];
      let totals = {};
      let mailingFields = this.$props.options.mailingFields();
      let labelFields = mailingFields.fields.map(a => a.label);
      let labelValues = mailingFields.fields.map(a => a.value);

      for (let field of labelFields) {
        fields.push(field.label);
        totals[field.label] = 0;
      }

      // if (this.items.length > 0) { } else {
      //   return;
      // }

      if (!this.items.length > 0) {
        return;
      }


      for (let item of this.items) {
        let theArray = [];
        let i = 0;
        for (let field of labelFields) {
          // console.log("field: ", field, "labelValues: ", labelValues, "item: ",  item)
          if (labelValues[i](this.$store.state, item) === null) {
            theArray.push('');
          } else {
            theArray.push(labelValues[i](this.$store.state, item)) || '';
          }

          if (labelValues[i](this.$store.state, item) === null || isNaN(labelValues[i](this.$store.state, item))) {
            // if (isNaN(field['value'](this.$store.state, item))) {
            // console.log('isnull:', field['value'](this.$store.state, item));
            totals[field.label] = '';
          } else {
            // console.log('is not null:', field['value'](this.$store.state, item));
            totals[field.label] = totals[field.label] + parseFloat(labelValues[i](this.$store.state, item));
          }
          i++;
        }
        tableData.push(theArray);
      }

      // console.log('tableData:', tableData);
      var doc = new jsPDF('p', 'pt', 'letter');
      // console.log("tableData: ", tableData);
      let tableJoin = chunk(tableData.map(a => a.join('\n')),3);
      // console.log("table joined and chunked: ", tableJoin)

      doc.autoTable({
        body: tableJoin,
        content: 'Text',
        startY: 36,
        margin: { top: 36, right: 12, bottom: 36, left: 12 },
        willDrawCell: data => data.section === 'head' ? false : data.cell.height = 72,
        didDrawCell: data => data.row.height= 72,
        styles: { cellWidth: 196, halign: 'center', valign: 'middle', fontSize: 10 },
        alternateRowStyles: { fillColor: 'white' },
        tableWidth: 'wrap',
        rowPageBreak: 'avoid',
      });

      // console.log(doc);

      let filename;
      let fileStart = this.evaluateSlot(this.$props.options.export.file);
      if (fileStart) {
        filename = this.evaluateSlot(this.$props.options.export.file) + '.pdf';
      } else {
        filename = 'export.pdf';
      }
      doc.save(filename);
    },
    // this is the end of an added zone

    exportTableToPDF() {
      const tableData = [];
      let fields = [];
      let totals = {};
      for (let field of this.$props.options.fields) {
        fields.push(field.label);
        totals[field.label] = 0;
      }
      for (let item of this.items) {
        let theArray = [];
        for (let field of this.$props.options.fields) {
          if (field['value'](this.$store.state, item) === null) {
            theArray.push('');
          } else {
            theArray.push(field['value'](this.$store.state, item)) || '';
          }

          if (field['value'](this.$store.state, item) === null || isNaN(field['value'](this.$store.state, item))) {
            // if (isNaN(field['value'](this.$store.state, item))) {
            // console.log('isnull:', field['value'](this.$store.state, item));
            totals[field.label] = '';
          } else {
            // console.log('is not null:', field['value'](this.$store.state, item));
            totals[field.label] = totals[field.label] + parseFloat(field['value'](this.$store.state, item));
          }
        }
        tableData.push(theArray);
      }

      // if (this.$props.options.totalRow.enabled) {
      if (typeof this.$props.options.totalRow != 'undefined' && this.$props.options.totalRow.enabled) {
        let theArray = [];
        for (let field of this.$props.options.fields) {
          if (field.label.toLowerCase() === this.$props.options.totalRow.totalField) {
            theArray.push('Total');
          } else if (totals[field.label] === '') {
            theArray.push('');
          } else {
            theArray.push(parseFloat(totals[field.label]).toFixed(2));
          }
        }
        tableData.push(theArray);
      }
      // console.log('fields:', fields, 'tableData:', tableData);
      // var doc = new jsPDF();
      var doc = new jsPDF('p', 'pt');
      doc.setFontSize(12);
      let top = 20;
      if(this.$props.options.export.introLines) {
        for (let introLine of this.$props.options.export.introLines) {
          doc.text(10, top, this.evaluateSlot(introLine));
          top = top + 12;
        }
      }
      doc.autoTable(fields, tableData, {
        head: [ fields ],
        body: tableData,
        startY: 100,
        tableWidth: 'wrap',
      });

      let filename;
      let fileStart = this.evaluateSlot(this.$props.options.export.file);
      if (fileStart) {
        filename = this.evaluateSlot(this.$props.options.export.file) + '.pdf';
      } else {
        filename = 'export.pdf';
      }
      doc.save(filename);
    },

    exportTableToCSV() {
      // console.log('exportTableToCSV is running');
      const tableData = [];

      // let fields = [];
      let fields = this.fields;

      if (typeof this.$props.options.expandedData != 'undefined') {
        let expandedData = this.$props.options.expandedData();
        fields = fields.concat(expandedData);
        if (typeof this.$props.options.tableSort != 'undefined') {
          fields  = this.$props.options.tableSort(fields);
        }
      }

      // console.log('exportTableToCSV, fields:', fields);

      let totals = {};

      // for (let field of this.$props.options.fields) {
      //   fields.push(field.label);
      //   totals[field.label] = 0;
      // }

      if (!this.items.length > 0) {
        return;
      }

      // console.log('this.items:', this.items);

      for (let item of this.items) {
        let object = {};
        // for (let field of this.$props.options.fields) {
        for (let field of fields) {
          console.log("field['value'](this.$store.state, item)", field['value'](this.$store.state, item));
          object[field.label] = typeof field['value'](this.$store.state, item) === 'undefined' ? "" :
            field['value'](this.$store.state, item) === null ? "" :
              field['value'](this.$store.state, item).toString().replace('#', 'No.');
          if (isNaN(field['value'](this.$store.state, item))) {
            // console.log('its NaN!');
            totals[field.label] = null;
          } else {
            if (!totals[field.label]) {
              totals[field.label] = parseFloat(field['value'](this.$store.state, item));
            } else {
              // console.log('its not NaN:', field['value'](this.$store.state, item));
              totals[field.label] = totals[field.label] + parseFloat(field['value'](this.$store.state, item));
            }
          }
        }
        tableData.push(object);
      }

      // console.log('tableData:', tableData, 'this.$props.options.totalRow:', this.$props.options.totalRow, 'totals:', totals);

      if (typeof this.$props.options.totalRow != 'undefined' && this.$props.options.totalRow.enabled) {
        let object = {};
        for (let field of this.$props.options.fields) {
          if (field.label.toLowerCase() === this.$props.options.totalRow.totalField) {
            object[field.label] = 'Total';
          } else {
            object[field.label] = totals[field.label];
          }
        }
        tableData.push(object);
      }
      const opts = { fields };

      // console.log('in exportTableToCSV, tableData:', tableData);

      try {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = tableData || null;
        if (data == null || !data.length) {
          return null;
        }

        columnDelimiter = ',';
        lineDelimiter = '\n';
        // columnDelimiter = args.columnDelimiter || ',';
        // lineDelimiter = args.lineDelimiter || '\n';

        // keys = Object.keys(data[0]);
        keys = fields.map(a => a.value);
        let state = this.$store.state;

        result = '';

        if (this.$props.options.export.introLines) {
          for (let introLine of this.$props.options.export.introLines) {
            result += this.evaluateSlot(introLine);
            result += lineDelimiter;
          }
        }

        result += fields.map(field => field.label).join(columnDelimiter);
        result += lineDelimiter;

        data = data.map(item => Object.values(item).map(value => '"' + value + '"'));

        result += data.map(item => item).join(lineDelimiter);

        // console.log('in exportTableToCSV, fields:', fields, 'result:', result, 'data:', data);

        // result += lineDelimiter;
        // result += keys.join(columnDelimiter);
        // result += lineDelimiter;
        //
        // data.forEach(function(item) {
        //   ctr = 0;
        //   keys.forEach(function(key) {
        //     if (ctr > 0) {
        //       result += columnDelimiter;
        //     }
        //
        //     result += item[key] || '';
        //     ctr++;
        //   });
        //   result += lineDelimiter;
        // });

        let csv = result;

        data = null;
        let filename;
        let link;

        // filename = 'export.csv';
        let fileStart;
        if (this.$props.options.export) {
          fileStart = this.evaluateSlot(this.$props.options.export.file);
        }
        if (fileStart) {
          filename = this.evaluateSlot(this.$props.options.export.file) + '.csv';
        } else {
          filename = 'export.csv';
        }

        let csv_notIE;
        if (!csv.match(/^data:text\/csv/i)) {
          csv_notIE = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv_notIE);

        var isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
          return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || (typeof window['safari'] !== 'undefined' && window['safari'].pushNotification));
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        var isBlink = (isChrome || isOpera) && !!window.CSS;

        if (isIE) {
          var oWin = window.open();
          oWin.document.write('sep=,\r\n' + csv);
          oWin.document.close();
          oWin.document.execCommand('SaveAs', true, filename);
          oWin.close();
        } else {
          link = document.createElement('a');
          link.setAttribute('href', data);
          link.setAttribute('download', filename);
          link.click();
        }
      } catch (err) {
        console.error(err);
      }
    },
    showMoreRecords() {
      // if there is only 1 page to return (from AIS);
      if (!this.pageCount) {
        this.compareAndSetHighestRowRetrieved();
        // if there are multiple pages to return (from AIS) and there are not enough items in the table state (itemsFiltered) to cover the increment;
      } else if (this.itemsAfterFilters.length < this.highestRowRetrieved + this.options.defaultIncrement) {
        // if there is another page to return (from AIS)
        if (this.pageCount > this.highestPageRetrieved) {
          this.getMoreRecords();
          this.compareAndSetHighestRowRetrieved();
          // if there are no more pages to return (from AIS)
        } else {
          this.highestRowRetrieved = this.count;
        }
        // if there are multiple pages to return (from AIS) but there are already enough items in the table state (itemsFiltered) to cover the increment;
      } else {
        if (!this.options.showAllRowsOnFirstClick) {
          this.highestRowRetrieved = this.highestRowRetrieved + this.options.defaultIncrement;
        } else {
          this.highestRowRetrieved = this.count;
        }
      }
    },
    compareAndSetHighestRowRetrieved() {
      if (!this.options.showAllRowsOnFirstClick) {
        if (this.count < this.highestRowRetrieved + this.options.defaultIncrement) {
          this.highestRowRetrieved = this.count;
        } else {
          this.highestRowRetrieved = this.highestRowRetrieved + this.options.defaultIncrement;
        }
      } else {
        this.highestRowRetrieved = this.count;
      }
    },
    getMoreRecords() {
      console.log('HorizontalTable.vue getMoreRecords is running');
      const dataSource = this.options.id;
      const highestPageRetrieved = this.highestPageRetrieved;
      this.$emit('get-more-records', dataSource, highestPageRetrieved);
    },
    slugifyFilterValue(filterValue) {
      const { direction, value, unit } = filterValue;
      return [ direction, value, unit ].join('-');
    },
    deslugifyFilterValue(slug) {
      const parts = slug.split('-');
      const [ direction, value, unit ] = parts;
      return { value, unit, direction };
    },
    handleSortValueChange(e) {
      console.log('handleSortValueChange running e:', e, 'e.target.value:', e.target.value);
      const value = e.target.value;

      let tableGroupId = this.item.tableGroupId;
      let activeTableId;//, activeFilterValues;
      // let theSelect = document.getElementById('time-select');
      if (this.$store.state.horizontalTableGroups.length && tableGroupId != 'undefined') {
        activeTableId = this.$store.state.horizontalTableGroups[tableGroupId].activeTableId;
        // activeFilterValues = this.$store.state.horizontalTableGroups[tableGroupId].activeFilterValues;
      }

      if (this.$store.state.horizontalTableGroups.length) {
        this.$store.commit('setHorizontalTableGroupActiveSort', {
          tableGroupId: this.item.tableGroupId,
          activeSortValues: value,
        });
      } //else if (this.$store.state.horizontalTables) {
        // this.$store.commit('setHorizontalTableGroupActiveSort', {
        //   tableGroupId: this.item.tableGroupId,
        //   activeSortValues: value,
        // });
      // }

      this.sortField = value;
    },
    handleFilterValueChange(e) {
      // console.log('handle filter value change', e);

      const target = e.target;
      const slug = target.value;

      // deslugify filter value
      const valueObj = this.deslugifyFilterValue(slug);

      const parent = target.parentElement;
      const parentId = parent.id;

      // patch and replace filter selections
      const prevFilterSelections = this.filterSelections;
      const nextFilterSelections = Object.assign({}, prevFilterSelections);
      nextFilterSelections[parentId] = valueObj;
      this.filterSelections = nextFilterSelections;
    },
    values(item) {
      const fields = this.options.fields;
      const sourceFields = fields.map(field => field.sourceField);
      return sourceFields.map(sourceField => item[sourceField]);
    },
    handleFilterFormKeyup(e) {
      const input = e.target.value;
      this.searchText = input;
    },
    handleFilterFormX(e) {
      e.target[0].value = '';
      this.searchText = "";
    },
    filterItems(items, filters, filterSelections) {
      // console.log('typeof items:', typeof items);
      // console.log('FILTER ITEMS is running, items:', items, 'filters:', filters, 'filterSelections:', filterSelections);
      let itemsFiltered = items.slice();

      if (filters) {
        // console.log('in filterItems, filters:', filters, 'filters.length', filters.length, 'filters.entries():', filters.entries(), 'filters.keys():', filters.keys());
        // for (let [index, filter] of filters.entries()) {
        for (let index=0; index < filters.length; index++) {
          const key = 'filter-' + index;
          // const key = `filter-${index}`;
          const data = filterSelections[key];
          // console.log('index:', index, 'key:', key, 'data:', data, 'filters:', filters[index]);
          const { type, getValue } = filters[index];
          const { unit, value } = data;
          const direction = data.direction || 'subtract';

          // console.log('type:', type);

          // TODO put these in separate methods
          let min, max;
          let min2, max2;
          let subFn, addFn;

          switch(type) {
          case 'data':
            // console.log('DATA FILTER');
            // itemsFiltered = itemsFiltered.filter(item => {
            //   const itemValue = getValue(item);
            //   console.log('horiz table itemValue:', itemValue);
            //   return itemValue;
            // });
            break;
          case 'time':
            // console.log('TIME FILTER direction', direction, 'value:', value, 'unit:', unit);
            // let min, max;
            // let min2, max2;
            // let subFn, addFn;

            switch (unit) {
            case 'hours':
              subFn = subHours;
              addFn = addHours;
              break;
            case 'days':
              subFn = subDays;
              addFn = addDays;
              break;
            case 'weeks':
              subFn = subWeeks;
              addFn = addWeeks;
              break;
            case 'months':
              subFn = subMonths;
              addFn = addMonths;
              break;
            case 'years':
              subFn = subYears;
              addFn = addYears;
              break;
            }


            if (direction === 'subtract') {
              max = new Date();
              min = subFn(max, value);
              // console.log('max:', max, 'min', min);
            } else if (direction === 'add') {
              min = new Date();
              max = addFn(min, value);
            } else if (direction === 'both') {
              continue;
              // let date = new Date();
              // max = 
            } else {
              throw `Invalid time direction: ${direction}`;
            }


            if (direction === 'both') {
              return true;
            } else {
              // console.log('in case time, itemsFiltered:', itemsFiltered);
              itemsFiltered = itemsFiltered.filter(item => {
                const itemValue = getValue(item);
                let isBetween;
                if (typeof itemValue === 'string') {
                  isBetween = isWithinInterval(parseISO(itemValue), { start: min, end: max });
                } else {
                  isBetween = isWithinInterval(itemValue, { start: min, end: max });
                }
                // console.log('itemValue:', itemValue, 'min:', min, 'max:', max, 'isBetween:', isBetween);
                return isBetween;
              });
            }
            // console.log('ITEMS FILTERED BY TIME FILTER', itemsFiltered);
            break;

          default:
            throw `Unhandled filter type: ${type}`;
            // break;
          }
        }
      }
      return itemsFiltered;
    },
    // sortItems(items, sortOpts) {
    sortItems(items, sortOpts) {
      // console.log('sortItems, sortOpts:', sortOpts);
      // TODO finish this
      // if (Object.keys(this.filterData).length) {
      //   console.log('there is filterData', this.filterData);
      //   return this.itemsFiltered;
      // } else {
      //   console.log('there is no filterData');
      //   return this.items;
      // }

      // const items = this.itemsFiltered;
      // const sortOpts = this.options.sort;
      // console.log(sortOpts)

      // if there's no no sort config, just return the items.
      if (!sortOpts) {
        // console.log('noSortOpts');
        return items;
      }

      // const getValueFn = sortOpts.getValue;
      // const order = sortOpts.order;

      // get sort fn or use this basic one
      const sortFn = sortOpts.compare || this.defaultSortFn;
      // console.log('sortFn', sortFn);
      // console.log('sortFn', sortFn)
      return items.sort(sortFn);
    },
    defaultSortFn(a, b) {
      // console.log('defaultSortFn is running, a:', a, 'b:', b);
      const sortOpts = this.options.sort;
      const getValueFn = sortOpts.getValue;
      const sortField = this.sortField;
      let order;
      if (typeof sortOpts.order === 'function') {
        const orderFn = sortOpts.order;
        order = orderFn(sortField);
      } else {
        order = sortOpts.order;
      }
      // console.log('sortField', sortField, 'order', order);

      const valA = getValueFn(a, sortField);
      const valB = getValueFn(b, sortField);
      let result;

      if (valA === null) {
        if (order === 'desc') {
          result = -1;
        } else {
          result = 1;
        }
      } else if (valB === null) {
        if (order === 'desc') {
          result = 1;
        } else {
          result = -1;
        }
      } else if (valA < valB) {
        result = -1;
      } else if (valB < valA) {
        result = 1;
      } else {
        result = 0;
      }

      // reverse if we have an order and the target order is desc
      if (order) {
        if (order === 'desc') {
          result = result * -1;
        } else if (order !== 'asc') {
          throw `Unknown sort order: ${order}`;
        }
      }

      // console.log('compare', valA, 'to', valB, ', result:', result);

      return result;
    },
    // this updates the global state that stores filtered table rows
    updateTableFilteredData() {
      // console.log('update table filtered data is running, options:', this.options);

      // get table id
      const { tableId } = this.options;

      // update global state
      this.$store.commit('setHorizontalTableFilteredData', {
        tableId,
        data: this.itemsAfterFilters,
      });
    },
    isEmpty(obj) {
      for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped>

  .pvc-export-data-button {
    position: fixed;
    float: right;
  }

  .csv {
    right: 5px;
  }

  .mailing {
    right: 165px;
  }

  .inline-block {
    display: inline-block;
  }

  .vertically-centered {
    display: inline-block;
    vertical-align: middle;
  }

  .pvc-horizontal-table {
    margin-bottom: 10px !important;
  }

  .pvc-horizontal-table-controls {
    text-align: center;
    vertical-align: middle;
    margin-bottom: 10px;
  }

  /* dropdown filters */
  .pvc-select-text {
    font-size: 16px;
    padding-right: 5px;
    padding-left: 5px;
  }

  .pvc-select {
    width: auto;
    height: 40px;
    vertical-align: middle;
    /*padding-right: 20px;*/
  }

  .pvc-select-option {
    display: inline-block;
    padding-right: 100px;
    margin-right: 100px;
  }

  /* input filters using text */
  .pvc-search-control-input {
    height: 40px !important;
    line-height: 48px;
    padding: 8px;
    font-size: 16px;
    width: 300px;
    /*margin-left: 10px;*/
  }

  /*REVIEW this repeats a lot of .pvc-search-control-input. can it be refactored?*/
  .pvc-search-control-input-full {
    height: 40px !important;
    line-height: 48px;
    padding: 8px;
    font-size: 16px;
    width: 260px;
  }

  .pvc-search-control-button {
    width: 40px;
    background: #ccc;
    line-height: 40px;
    float: right;
  }

  .pvc-export-data-button {
    vertical-align: baseline;
    display: inline-block;
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 4px;
  }

  .pvc-export-data-button-right {
    float: right;
    vertical-align: baseline;
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 4px;
  }

  .pvc-download-data-button, .pvc-export-data-button {
    vertical-align: baseline;
    display: inline-block;
  }

  /* .pvc-export-data-button {
    vertical-align: baseline;
    display: inline-block;
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 4px;
  } */

  .group:after {
    content: "";
    display: table;
    clear: both;
  }

  .pvc-horizontal-table-body {
    padding-top: 1rem;
    padding-bottom: 0.35rem;
  }

  .no-padding {
    padding-top: 0;
    padding-bottom: 0;
  }

  .center-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading {
    float: right;
  }

  .filter-by-text-form {
    border: 2px solid #0f4d90;
  }

  .position-relative {
    position: relative !important;
  }

  table {
    /* table-layout: fixed; */
    margin: 0;
  }

  .external-link {
    padding-top: 5px;
  }
</style>
