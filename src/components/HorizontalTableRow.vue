<template>
  <tr
    v-colspan
    :class="customClass + ' ' + [ isActive == true ? 'active' : '' ]"
    @mouseover="handleRowMouseover"
    @click="handleRowClick"
    @mouseout="handleRowMouseout"
  >
    <td
      v-for="(field, index) in fields"
      :key="index"
      :item="item"
      :class="{
        'in-popover': options.inPopover,
        'half-screen-table-cell': !fullScreenTopics
      }"
    >
      <topic-component-group
        :topic-components="field.components"
        :item="item"
      />
      <b v-show="shouldBeBold">
        <popover-link
          v-if="field.popoverLink"
          :slots="field"
          :item="item"
          :field-label="field.label"
        />
        <div
          v-if="!field.popoverLink"
          v-html="evaluateFieldLabel(field.label) + evaluateSlot(field.value, field.transforms, field.nullValue)"
        />
      </b>

      <!-- Total Row -->
      <div v-show="!shouldBeBold">
        <popover-link
          v-if="field.popoverLink"
          :slots="field"
          :item="item"
          :field-label="field.label"
        />
        <div
          v-if="!field.popoverLink"
          v-html="evaluateFieldLabel(field.label) + evaluateSlot(field.value, field.transforms, field.nullValue)"
        />
      </div>
    </td>
  </tr>
</template>

<script>
import throttle from 'lodash-es/throttle';

import TopicComponent from './TopicComponent.vue';
import TopicComponentGroup from './TopicComponentGroup.vue';
import PopoverLink from './PopoverLink.vue';

export default {
  components: {
    PopoverLink,
    TopicComponentGroup,
  },
  directives: {
    colspan: {
      // directive definition
      inserted: function (el) {
        let allRows = el.querySelectorAll('td');
        // console.log('allRows:', allRows);
        allRows.forEach(
          a => a.querySelector('.condo-button') ? (a.setAttribute('colspan', '3'), a.setAttribute('style', 'padding: unset')):
            a.querySelectorAll('div').forEach( b => b.innerHTML === "Not Applicable"? a.remove():""),
        );
      },
    },
  },
  mixins: [ TopicComponent ],
  props: [ 'fields', 'hasOverlay', 'tableId', 'shouldBeBold', 'totalRowField' ],
  data() {
    const data = {
      showFieldLabel: false,
      mouseover: false,
    };
    return data;
  },
  computed: {
    fullScreenTopics() {
      if (this.$store.state.fullScreenTopicsEnabled || this.$store.state.fullScreen.topicsOnly) {
        return true;
      }
      return false;

    },
    activeFeature() {
      return this.$store.state.activeFeature;
    },
    isActive() {
      let value;
      if (this.$data.mouseover) {
        value = true;
      } else if (this.activeFeature) {
        if (this.$props.item._featureId) {
          value = this.activeFeature.featureId === this.$props.item._featureId || this.activeFeature.featureId === parseInt(this.$props.item._featureId.toString().slice(0,6));
          // value = this.activeFeature.featureId === this.$props.item._featureId && this.$props.tableId === this.activeFeature.tableId;
        } else {
          value = false;
        }
      }
      return value;
    },
    customClass() {
      // console.log("customClass: ", this)
      return typeof this.options.customClass != 'undefined'
        && typeof this.options.customClass.tr != 'undefined' ?
        this.options.customClass.tr : '';
    },
    // customStyle() {
    //   // console.log("customStyle: ", this)
    //   return typeof this.customStyle != 'undefined'
    //     && typeof this.customStyle != 'undefined' ?
    //     this.customStyle : '';
    // },
    isMobileOrTablet() {
      return this.$store.state.isMobileOrTablet;
    },
  },
  watch: {
    isActive(value) {
      if (value === true) {
        const el = this.$el;
        const visible = this.isElementInViewport(el);
        // console.log('horizontaltablerow WATCH isActive is firing, el:', el, 'visible:', visible);

        // console.log('visible?', visible ? 'YES' : 'NO');

        if (!visible && !this.$store.state.horizontalTables.mouseover) {
          el.scrollIntoView({ block: 'center' });
        }
      }
    },
  },
  created() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  },
  methods: {
    // handleRowMouseover(e) {
    //   // console.log('handleRowMouseover is starting');
    //   if(!this.isMobileOrTablet && !this.$props.options.mouseOverDisabled) {
    //     // console.log('handleRowMouseover actions are running');
    //     if (!this.hasOverlay) {
    //       return;
    //     }
    //
    //     const featureId = this.item._featureId;
    //     const tableId = this.tableId;
    //     this.$store.commit('setActiveFeature', { featureId, tableId });
    //   }
    // },
    handleRowMouseover: throttle(function (e) {
      // console.log('handleRowMouseover is starting');
      if(!this.isMobileOrTablet && !this.$props.options.mouseOverDisabled) {
        // console.log('handleRowMouseover actions are running');
        if (!this.hasOverlay) {
          return;
        }

        const featureId = this.item._featureId;
        const tableId = this.tableId;
        this.$store.commit('setActiveFeature', { featureId, tableId });
        this.$store.commit('setHorizontalTableMouseover', true);
        this.$data.mouseover = true;
      }
    }, 100,
    ),
    // handleRowClick(e) {
    //   // console.log('handleRowClick is starting');
    //   if(this.isMobileOrTablet || this.$props.options.mouseOverDisabled) {
    //     // console.log('handleRowClick actions are running');
    //     if (!this.hasOverlay) {
    //       return;
    //     }
    //
    //     const featureId = this.item._featureId;
    //     const tableId = this.tableId;
    //     this.$store.commit('setActiveFeature', { featureId, tableId });
    //   }
    // },
    handleRowClick(e) {
      // console.log('handleRowClick is running, e:', e);
      if(this.$store.state.activeModal && this.$props.options.clickEnabled ) {
        // console.log('handleRowClick is running');
        if (!this.hasOverlay) {
          return;
        }
        const featureId = this.item._featureId;
        if(this.item.condo != true){
          this.$store.commit('setActiveFeature', { featureId });
          this.$store.commit('setActiveModal', { featureId });
        }
        if( typeof this.$props.options.rowAction != 'undefined' ) {
          this.$props.options.rowAction(this.$store.state, this.item);
        }
        this.$data.mouseover = false;
      } else if (this.isMobileOrTablet || this.$props.options.mouseOverDisabled) {
        // console.log('handleRowClick actions are running');
        if (!this.hasOverlay) {
          return;
        }
        const featureId = this.item._featureId;
        const tableId = this.tableId;
        this.$store.commit('setActiveFeature', { featureId, tableId });
      }
    },
    // handleRowMouseout(e) {
    //   if(!this.$props.options.mouseOverDisabled) {
    //     if (!this.hasOverlay) {
    //       return;
    //     }
    //     this.$store.commit('setActiveFeature', null);
    //   }
    // },
    handleRowMouseout(e) {
      if(!this.isMobileOrTablet) {
        // console.log('handleRowMouseout actions are running');
        if (this.$store.state.activeModal) {
          if(!this.$props.options.mouseOverDisabled && this.$store.state.activeModal.featureId === null) {
            if (!this.hasOverlay) {
              return;
            }
            this.$store.commit('setActiveFeature', null);
            this.$store.commit('setHorizontalTableMouseover', false);
            this.$data.mouseover = false;
          }
        } else if (!this.$props.options.mouseOverDisabled) {
          // console.log('handleRowMouseout !this.$props.options.mouseOverDisabled:', !this.$props.options.mouseOverDisabled);
          if (!this.hasOverlay) {
            return;
          }
          this.$store.commit('setActiveFeature', null);
          this.$store.commit('setHorizontalTableMouseover', false);
          this.$data.mouseover = false;
        }
      }
    },
    mobileIcon(value) {
      // console.log("There is an icon field: ", window.innerWidth)
      if (window.innerWidth < 750) {
        return typeof value != 'undefined' ? ' ' + value : '';
      }
      return '';
    },

    // REVIEW there's very similar code in pvd. if these can be
    // the same thing, make it into a util.
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      // console.log('bounding box', rect);
      const visibility = {
        // TODO the 108 below is account for the combined height of the
        // app header and address header. this is not a good long-term
        // solution - instead, use the `bottom` value of the address header's
        // bounding rect. however, this should only fire on small devices,
        // which would require again hard-coding screen breakpoints from
        // standards or some other magic, which might not a huge
        // improvement in terms of decoupling logic and presentation. hmm.
        top: rect.top >= 108,
        left: rect.left >= 0,
        bottom: rect.bottom <= (window.innerHeight || document.documentElement.clientHeight),
        right: rect.right <= (window.innerWidth || document.documentElement.clientWidth),
      };
      // return if all sides are visible
      return Object.values(visibility).every(val => val);
    },
    featuresMatch(a, b) {
      return a.featureId === b.featureId && a.tableId === b.tableId;
    },
    handleWindowResize() {
      if (window.innerWidth >= 750) {
        this.showFieldLabel = false;
      } else {
        this.showFieldLabel = true;
      }
    },
    evaluateFieldLabel(label) {
      // console.log('evaluateFieldLabel, label:', label);
      if (this.showFieldLabel && this.$props.totalRowField !== label.toLowerCase()) {
        return label + ': ';
      }
      return '';
    },
  },
};
</script>

<style scoped>
  .active {
    background: #F3D661;
  }

  td {
    font-size: 15px;
    text-align: left;
    word-wrap: break-word;
  }

  .in-popover {
    color: #000;
  }

  .half-screen-table-cell {
    max-width: 300px;
  }

</style>
