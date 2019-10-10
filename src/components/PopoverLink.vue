<template>
  <div>
    {{ evaluateFieldLabel() }}
    <a 
      :title="value + ' ' + popoverValue"
      :style="this.$props.options.customStyle"
      class="popover-link"
      @click="didClickPopoverLink"
    >
      {{ value }}
    </a>
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
export default {
  mixins: [ TopicComponent ],
  props: [
    'fieldLabel',
  ],
  data() {
    const data = {
      showFieldLabel: false,
    };
    return data;
  },
  computed: {
    popoverOptions() {
      return this.$props.options;
    },
    value() {
      const value = this.$props.slots.value;
      const transforms = this.$props.slots.transforms || [];
      const nullValue = this.$props.slots.nullValue || '';
      return this.evaluateSlot(value, transforms, nullValue);
    },
    popoverValue() {
      const value = this.value;
      const popoverTransforms = this.$props.slots.popoverTransforms || [];
      const popoverNullValue = this.$props.slots.popoverNullValue || '';
      return this.evaluateSlot(value, popoverTransforms, popoverNullValue);
    },
    popoverPreText() {
      let popoverPreText = this.$props.slots.popoverPreText || '';
      return this.evaluateSlot(popoverPreText);
    },
    popoverPostText() {
      let popoverPostText = this.$props.slots.popoverPostText || '';
      return this.evaluateSlot(popoverPostText);
    },
    shouldShowValue() {
      if (this.$props.slots.shouldShowValue === false) {
        return false;
      } 
      return true;
        
    },
    popoverText() {
      if (this.shouldShowValue === true) {
        return this.popoverPreText + ' ' + this.popoverValue + ' ' + this.popoverPostText;
      } 
      return this.popoverPreText + ' ' + this.popoverPostText;
        
    },
  },
  created() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  },
  methods: {
    didClickPopoverLink(e) {

      this.$store.commit('setPopoverOpen', true);
      this.$store.commit('setPopoverText', this.popoverText);
      this.$store.commit('setPopoverOptions', this.popoverOptions);
    },
    handleWindowResize() {
      if (window.innerWidth >= 750) {
        this.showFieldLabel = false;
      } else {
        this.showFieldLabel = true;
      }
    },
    evaluateFieldLabel() {
      if (!this.$props.fieldLabel) {
        return '';
      } else if (this.showFieldLabel) {
        return this.$props.fieldLabel + ': ';
      } 
      return '';
        
    },
  },
};
</script>

<style>

  .popover-link {
    border-bottom: 1px dotted;
    font-weight: bold;
    /* color: #444; */
    color: #2176d2;
  }

</style>
