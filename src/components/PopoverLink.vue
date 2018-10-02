<template>
  <div>
    <a class="popover-link"
      @click="didClickPopoverLink"
    >
      {{value}}
    </a>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  export default {
    mixins: [TopicComponent],
    props: [
      'field',
    ],
    computed: {
      fieldOrSlots() {
        let fieldOrSlots;
        if (this.$props.field) {
          fieldOrSlots = 'field';
        } else if (this.$props.slots) {
          fieldOrSlots = 'slots';
        }
        return fieldOrSlots;
      },
      value() {
        const fieldOrSlots = this.fieldOrSlots;
        const value = this.$props[fieldOrSlots].value;
        const transforms = this.$props[fieldOrSlots].transforms || [];
        const nullValue = this.$props[fieldOrSlots].nullValue || '';
        return this.evaluateSlot(value, transforms, nullValue);
      },
      popoverValue() {
        const fieldOrSlots = this.fieldOrSlots;
        const value = this.value;
        const popoverTransforms = this.$props[fieldOrSlots].popoverTransforms || [];
        const popoverNullValue = this.$props[fieldOrSlots].popoverNullValue || '';
        return this.evaluateSlot(value, popoverTransforms, popoverNullValue);
      },
      popoverPreText() {
        const fieldOrSlots = this.fieldOrSlots;
        let popoverPreText = this.$props[fieldOrSlots].popoverPreText || '';
        return this.evaluateSlot(popoverPreText);
      },
      popoverPostText() {
        const fieldOrSlots = this.fieldOrSlots;
        let popoverPostText = this.$props[fieldOrSlots].popoverPostText || '';
        return this.evaluateSlot(popoverPostText);
      },
      popoverText() {
        return this.popoverPreText + ' ' + this.popoverValue + ' ' + this.popoverPostText;
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
    color: #444;
  }
</style>
