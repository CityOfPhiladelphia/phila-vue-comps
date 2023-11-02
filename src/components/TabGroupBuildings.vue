<template>
  <div>
    <ul
      class="tabs"
    >
      <!-- data-tabs -->
      <li
        v-for="item in items"
        :key="keyForItem(item)"
        :class="{'is-active': itemIsActive(item)}"
        class="tabs-title"
      >
        <a
          :href="'#parcel-' + keyForItem(item)"
          @click.prevent="clickedItem(item)"
        >
          {{ titleForItem(item) }}
        </a>
      </li>
    </ul>

    <div class="tabs-content">
      <div
        v-for="item in items"
        :id="'parcel-' + keyForItem(item)"
        :key="keyForItem(item)"
        :class="{'is-active': itemIsActive(item)}"
        class="tabs-panel"
      >
        <topic-component-group
          :topic-components="comps"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
import TopicComponentGroup from './TopicComponentGroup.vue';

export default {
  name: 'TabGroupBuildings',
  mixins: [ TopicComponent ],
  // some internal state for things local enough that they shouldn't be in
  // vuex if we can avoid it.
  data() {
    // computed props aren't accessible here, so evaluate slot separately
    const items = this.evaluateSlot(this.slots.items);
    return {
      activeItem: this.activeItemFromState,// || this.keyForItem(items[0]),
    };
  },
  computed: {
    items() {
      const newItems = this.evaluateSlot(this.slots.items);
      const sortOpts = this.options.sort;
      return this.sortItems(newItems, sortOpts);
    },
    comps() {
      return this.options.components;
    },
    activeItemFromState() {
      return this.getActiveItem();
    },
  },
  watch: {
    // when items change, update the activeItem
    items(items) {
      // console.log('TabGroupBuildings.vue, this.items:', this.items);
      const nextFirstItem = items[0];
      const nextActiveKey = this.keyForItem(nextFirstItem);
      this.activeItem = nextActiveKey;
      // console.log('TabGroupBuildings.vue, watch items, nextActiveKey:', nextActiveKey);
    },
    activeItemFromState(nextActiveItem) {
      // console.log('watch activeItemFromState, nextActiveItem:', nextActiveItem);
      this.activeItem = nextActiveItem;
    },
  },
  beforeCreate() {
    this.$options.components.TopicComponentGroup = TopicComponentGroup;
  },
  mounted() {
    // console.log('TabGroupBuildings mounted, this.items[0]:', this.items[0], 'this.items[0].attributes.BIN:', this.items[0].attributes.BIN);
    this.clickedItem(this.items[0]);
  },
  methods: {
    concatDataSource(data) {
      let value = [];
      let dataPoints;
      if (data[0].features) {
        dataPoints = 'features';
      } else if (data[0].rows) {
        dataPoints = 'rows';
      }
      // console.log('data:', data, 'Array.isArray(data):', Array.isArray(data));
      if (data && Array.isArray(data)) {
        value = data[0][dataPoints];
        for (let i=1;i<data.length;i++) {
          // console.log('TabGroupBuildings.vue concatDataSource value:', value, 'data.length:', data.length, 'data[i]', data[i]);
          value = value.concat(data[i][dataPoints]);
        }
      } else if (data && data[dataPoints]) {
        value = data[dataPoints];
      }
      // console.log('li.js TabGroupBuildings.vue concatDataSource, value:', value);
      return value;
    },
    clickedItem(item) {
      this.$data.activeItem = this.keyForItem(item);
      // console.log('TabGroupBuildings.vue clickedItem is running, item:', item, 'this.$data.activeItem:', this.$data.activeItem);
      this.$store.commit('setActiveGeojsonForTopic', this.$data.activeItem);
      let activeLiBuilding = this.$store.state.sources.liBuildingCertSummary.data.filter(structure => structure.structure_id == this.$data.activeItem)[0];
      let activeLiBuildingCert = this.$store.state.sources.liBuildingCerts.data.filter(item => item.bin === this.$data.activeItem);
      let activeLiBuildingFootprint = this.$store.state.sources.liBuildingFootprints.data.filter(item => item.attributes.BIN === this.$data.activeItem)[0];
      this.$store.commit('setActiveLiBuilding', activeLiBuilding);
      this.$store.commit('setActiveLiBuildingCert', activeLiBuildingCert);
      this.$store.commit('setActiveLiBuildingFootprint', activeLiBuildingFootprint);
    },
    getActiveItem() {
      return this.options.activeItem(this.$store.state);
    },
    keyForItem(item) {
      // console.log('keyForItem is running, item:', item)
      try {
        return this.options.getKey(item);
      } catch (e) {
        return null;
      }
    },
    titleForItem(item) {
      // console.log('titleForItem is running, item:', item)
      try {
        return this.options.getTitle(item);
      } catch (e) {
        return null;
      }
    },
    itemIsActive(item) {
      let isActive;
      if (this.activeItem) {
        isActive = (this.activeItem === this.keyForItem(item));
      }
      // console.log('itemIsActive, isActive:', isActive, 'item:', item, 'this.activeItem:', this.activeItem, 'this.keyForItem(item):', this.keyForItem(item));
      return isActive;
    },
    sortItems(items, sortOpts) {
      // if there's no no sort config, just return the items.
      if (!sortOpts) {
        return items;
      }
      // get sort fn or use this basic one
      const sortFn = sortOpts.compare || this.defaultSortFn;
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
  },
};
</script>

<style scoped>

  .tabs {
    list-style: none !important;
    padding-left: 0px !important;
  }

  .tabs-panel {
    padding: 20px;
    padding-bottom: 0px;
  }

  .tabs-title {
    margin-left: 0px !important;
    padding: 0px !important;
  }

  /*recreate phila patterns tab styles*/
  .tabs-title a {
    border-left: 5px solid #fff;
  }

  .tabs-title.is-active a {
    border-left: 5px solid #f99300;
    /*when you first load the page, the active tab doesn't turn gray for some
    reason. forcing it here.*/
    background: #f0f0f0;
  }

  .tabs-title a:hover {
    border-left: 5px solid #f99300;
    background: #f0f0f0;
  }
</style>
