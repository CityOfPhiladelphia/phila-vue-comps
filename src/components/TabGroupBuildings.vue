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
          <!-- @click.prevent="activeItem = keyForItem(item)" -->
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
      activeMapreg: this.activeMapregFromState,// || this.titleForItem(items[0]),
      activeAddress: this.activeAddressFromState,// || this.addressForItem(items[0])
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
    activeMapregFromState() {
      return this.$store.state.parcels.dor.activeMapreg;
    },
    activeAddressFromState() {
      return this.$store.state.parcels.dor.activeAddress;
    },
    overlays() {
      return this.$config.map.tiledOverlays;
    },
    currentSelectedOverlay() {
      return this.$store.state.map.selectedOverlay;
    },
  },
  watch: {
    // when items change, update the activeItem
    items(items) {
      console.log('TabGroupBuildings.vue, this.items:', this.items);
      const nextFirstItem = items[0];
      const nextActiveKey = this.keyForItem(nextFirstItem);
      this.activeItem = nextActiveKey;
      const nextMapreg = this.titleForItem(nextFirstItem);
      this.activeMapreg = nextMapreg;
      const nextAddress = this.addressForItem(nextFirstItem);
      this.activeAddress = nextAddress;
      console.log('TabGroupBuildings.vue, watch items, nextActiveKey:', nextActiveKey);
    },
    activeItemFromState(nextActiveItem) {
      this.activeItem = nextActiveItem;
    },
    // currentSelectedOverlay(nextCurrentOverlay) {
    //   const nextOverlay = nextCurrentOverlay.replace(/\D/g,'');
    //   const el = document.getElementById('overlay-select');
    //   el.value = nextOverlay;
    // }
  },
  beforeCreate() {
    this.$options.components.TopicComponentGroup = TopicComponentGroup;
  },
  mounted() {
    console.log('TabGroupBuildings mounted, this.items[0]:', this.items[0], 'this.items[0].attributes.BIN:', this.items[0].attributes.BIN);
    // this.getActiveItem();
    // // REVIEW globals. also is this still needed?
    // this.$data.activeItem = this.items[0].attributes.BIN;
    this.clickedItem(this.items[0]);
    // this.$data.activeMapreg = this.activeMapregFromState;
    // this.$data.activeAddress = this.activeAddressFromState;
  },
  methods: {
    clickedItem(item) {
      this.$data.activeItem = this.keyForItem(item);
      console.log('TabGroupBuildings.vue clickedItem is running, item:', item, 'this.$data.activeItem:', this.$data.activeItem);
      // this.$data.activeMapreg = this.titleForItem(item);
      // this.$data.activeAddress = this.addressForItem(item);

      // const payload = {
      //   parcelLayer: 'dor',
      //   activeParcel: this.$data.activeItem,
      //   activeMapreg: this.$data.activeMapreg,
      //   activeAddress: this.$data.activeAddress,
      // };
      // this.$store.commit('setActiveParcel', payload);
      this.$store.commit('setActiveGeojsonForTopic', this.$data.activeItem);
      let activeLiBuilding = this.$store.state.sources.liBuildingCertSummary.data.rows.filter(structure => structure.structure_id == this.$data.activeItem)[0];
      let activeLiBuildingCert = this.$store.state.sources.liBuildingCerts.data.rows.filter(item => item.bin === this.$data.activeItem);
      this.$store.commit('setActiveLiBuilding', activeLiBuilding);
      this.$store.commit('setActiveLiBuildingCert', activeLiBuildingCert);
      // if (this.options.map.tiledOverlayControl) {
      //   this.$store.commit('setSelectedOverlay', this.activeItem);
      // }
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
    addressForItem(item) {
      try {
        return this.options.getAddress(item);
      } catch (e) {
        return null;
      }
    },
    itemIsActive(item) {
      // console.log('itemIsActive, item:', item, 'this.activeItem:', this.activeItem, 'this.keyForItem(item):', this.keyForItem(item));
      let isActive;
      if (this.activeItem) {
        isActive = (this.activeItem.structure_id === this.keyForItem(item));
      }
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
