<template>
  <div>
    <a class="popover-link"
      @click="didClickPopoverLink"
      :title="value"
    >
      {{value}}
    </a>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  export default {
    mixins: [TopicComponent],
    computed: {
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
          return false
        } else {
          return true;
        }
      },
      popoverText() {
        if (this.shouldShowValue === true) {
          return this.popoverPreText + ' ' + this.popoverValue + ' ' + this.popoverPostText;
        } else {
          return this.popoverPreText + ' ' + this.popoverPostText;
        }
      },
    },
    methods: {
      didClickPopoverLink(e) {
        this.$store.commit('setPopover', this.popoverText);
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
