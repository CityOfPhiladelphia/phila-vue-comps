<template>
  <!-- <tr v-bind:class="this.customClass + ' ' + [ typeof this.isActive != 'undefined' ? this.isActive : '' ]" -->
  <tr v-bind:class="this.customClass + ' ' + [ this.isActive == true ? 'active' : '' ]"
      @mouseenter="handleRowMouseover"
      @click="handleRowClick"
      @mouseleave="handleRowMouseout"
      v-colspan
  >
    <td v-for="field in fields"
        v-bind:class="typeof field.customClass != 'undefined'? field.customClass : ''"
        :item='item'
        :sorttable_customkey="[field.customkey ? evaluateSlot(field.customkey)  : evaluateSlot(field.value)]"
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
        <div>
        <div v-if="!field.popoverLink"
             v-bind:style="field.customStyle"
             v-html="evaluateFieldLabel(field.label) + evaluateSlot(field.value, field.transforms, field.nullValue)"
        />
          <font-awesome-icon
              v-if="mobileIcon(field.mobileIcon)"
              v-show="evaluateSlot(field.hideMobileIcon)"
              v-bind:icon="field.mobileIcon"
              aria-hidden="true"
              style="margin-left: 5px"
          />
        </div>
      </div>

    </td>
  </tr>
</template>

<script>
  // import debounce from 'lodash-es/debounce';
  import throttle from 'lodash-es/throttle';

  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue';
  import PopoverLink from './PopoverLink.vue';

  export default {
    mixins: [TopicComponent],
    components: {
      PopoverLink,
      TopicComponentGroup,
    },
    props: ['fields', 'hasOverlay', 'tableId', 'shouldBeBold', 'totalRowField'],
    data() {
      const data = {
        showFieldLabel: false,
        mouseover: false
      };
      return data;
    },
    created() {
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    },
    directives: {
      colspan: {
        // directive definition
        inserted: function (el) {
          let allRows = el.querySelectorAll('td')
          // console.log('allRows:', allRows);
          allRows.forEach(
            a => a.querySelector('.condo-button') ? (a.setAttribute('colspan', '3'), a.setAttribute('style', 'padding: unset')):
                 a.querySelectorAll('div').forEach( b => b.innerHTML === "Not Applicable"? a.remove():"")

          )
        },
      }
    },
    computed: {
      activeFeature() {
        return this.$store.state.activeFeature;
      },
      isActive() {
        if (this.$data.mouseover) {
          return true;
        } else if (this.activeFeature) {
          if (this.$props.item._featureId) {
            if (this.activeFeature.featureId === this.$props.item._featureId || this.activeFeature.featureId === parseInt(this.$props.item._featureId.toString().slice(0,6))) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
          // return this.activeFeature.featureId === parseInt(this.$props.item._featureId.toString().slice(0,6)); //&& this.$props.tableId === this.activeFeature.tableId;
        } else {
          return false;
        }
      },
      customClass(){
        // console.log("customClass: ", this)
        return typeof this.options.customClass != 'undefined'
               && typeof this.options.customClass.tr != 'undefined' ?
                this.options.customClass.tr : ''
      },
      customStyle(){
        // console.log("customStyle: ", this)
        return typeof this.customStyle != 'undefined'
               && typeof this.customStyle != 'undefined' ?
                this.customStyle : ''
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

          if (!visible && !this.$store.state.horizontalTables.mouseover) {
            el.scrollIntoView({block: 'center'});
          }
        }
      }
    },
    methods: {
      handleRowMouseover: throttle(function (e) {
          // console.log('handleRowMouseover is starting');
          if(!this.isMobileOrTablet && !this.$props.options.mouseOverDisabled) {
            // console.log('handleRowMouseover actions are running');
            if (!this.hasOverlay) return;

            const featureId = this.item._featureId;
            const tableId = this.tableId;
            this.$store.commit('setActiveFeature', { featureId, tableId });
            this.$store.commit('setHorizontalTableMouseover', true);
            this.$data.mouseover = true;
          }
        }, 200
      ),
      handleRowMouseout(e) {
        if(!this.isMobileOrTablet) {
          // console.log('handleRowMouseout actions are running');
          if(!this.$props.options.mouseOverDisabled && this.$store.state.activeModal.featureId === null) {
            if (!this.hasOverlay) return;
            this.$store.commit('setActiveFeature', null);
            this.$store.commit('setHorizontalTableMouseover', false);
            this.$data.mouseover = false;
          }
        }
      },
      handleRowClick(e) {
        // console.log('handleRowClick is running, e:', e);
        if(this.$store.state.activeModal && this.$props.options.clickEnabled ) {
          if (!this.hasOverlay) return;
          const featureId = this.item._featureId;
          if(this.item.condo != true){
            this.$store.commit('setActiveFeature', { featureId });
            this.$store.commit('setActiveModal', { featureId });
          }
          if( typeof this.$props.options.rowAction != 'undefined' ) {
            this.$props.options.rowAction(this.$store.state, this.item)
          }
          this.$data.mouseover = false;
        }
      },
      mobileIcon(value) {
        // console.log("There is an icon field: ", window.innerWidth)
        if (window.innerWidth < 750) {
          return typeof value != 'undefined' ? ' ' + value : ''
        } else {
          return ''
        }
      },
      // REVIEW there's very similar code in the controller. if these can be
      // the same thing, make it into a util.
      isElementInViewport(el) {
        const rect = el.getBoundingClientRect();

        // console.log('isElementInViewport is running, bounding box:', rect);

        const visibility = {
          // TODO the 108 below is account for the combined height of the
          // app header and address header. this is not a good long-term
          // solution - instead, use the `bottom` value of the address header's
          // bounding rect. however, this should only fire on small devices,
          // which would require again hard-coding screen breakpoints from
          // standards or some other magic, which might not a huge
          // improvement in terms of decoupling logic and presentation. hmm.
          top: rect.top >= 508,
          left: rect.left >= 0,
          bottom: rect.bottom <= (window.innerHeight || document.documentElement.clientHeight),
          right: rect.right <= (window.innerWidth || document.documentElement.clientWidth),
        };

        // console.log('isElementInViewport is running, rect:', rect, 'visibility', visibility);

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
      },
      // evaluateCustomkey() {
      //   field.customkey
      // }

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
</style>
