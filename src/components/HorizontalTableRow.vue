<template>
  <tr :class="{ active: this.isActive }"
      @mouseover="handleRowMouseover"
      @click="handleRowClick"
      @mouseout="handleRowMouseout"
  >
    <td v-for="field in fields"
        :item='item'
        :class="{ 'in-popover': options.inPopover }"
    >
      <topic-component-group :topic-components="field.components" :item="item" />
      <b v-show="shouldBeBold">
        <popover-link v-if="field.popoverLink"
                      :slots='field'
                      :item='item'
                      :fieldLabel="field.label"
        />
        <div v-if="!field.popoverLink"
             v-html="evaluateFieldLabel(field.label) + evaluateSlot(field.value, field.transforms, field.nullValue)"
        />
      </b>

      <!-- Total Row -->
      <div v-show="!shouldBeBold">
        <popover-link v-if="field.popoverLink"
                      :slots='field'
                      :item='item'
                      :fieldLabel="field.label"
        />
        <div v-if="!field.popoverLink"
             v-html="evaluateFieldLabel(field.label) + evaluateSlot(field.value, field.transforms, field.nullValue)"
        />
      </div>

    </td>
  </tr>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue';
  import PopoverLink from './PopoverLink.vue';

  export default {
    mixins: [TopicComponent],
    components: {
      PopoverLink,
      TopicComponentGroup
    },
    props: ['fields', 'hasOverlay', 'tableId', 'shouldBeBold', 'totalRowField'],
    data() {
      const data = {
        showFieldLabel: false
      };
      return data;
    },
    created() {
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    },
    computed: {
      activeFeature() {
        return this.$store.state.activeFeature;
      },
      isActive() {
        if (this.activeFeature) {
          return this.activeFeature.featureId === this.$props.item._featureId && this.$props.tableId === this.activeFeature.tableId;
        } else {
          return;
        }
      },
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

          if (!visible) {
            el.scrollIntoView();
          }
        }
      }
    },
    methods: {
      handleRowMouseover(e) {
        // console.log('handleRowMouseover is starting');
        if(!this.isMobileOrTablet && !this.$props.options.mouseOverDisabled) {
          // console.log('handleRowMouseover actions are running');
          if (!this.hasOverlay) return;

          const featureId = this.item._featureId;
          const tableId = this.tableId;
          this.$store.commit('setActiveFeature', { featureId, tableId });
        }
      },
      handleRowClick(e) {
        // console.log('handleRowClick is starting');
        if(this.isMobileOrTablet || this.$props.options.mouseOverDisabled) {
          // console.log('handleRowClick actions are running');
          if (!this.hasOverlay) return;

          const featureId = this.item._featureId;
          const tableId = this.tableId;
          this.$store.commit('setActiveFeature', { featureId, tableId });
        }
      },
      handleRowMouseout(e) {
        // console.log('handleRowMouseout is starting');
        // if(!this.isMobileOrTablet) {
          // console.log('handleRowMouseout actions are running');
          if(!this.$props.options.mouseOverDisabled) {
            if (!this.hasOverlay) return;
            this.$store.commit('setActiveFeature', null);
          }
        // }
      },
      // REVIEW there's very similar code in the controller. if these can be
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

        // console.log('visibility', visibility);

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
        } else {
          return '';
        }
      }
    }
  };
</script>

<style scoped>
  .active {
    background: #F3D661;
  }

  td {
    font-size: 15px;
    text-align: left;
  }

  .in-popover {
    color: #000;
  }

</style>
