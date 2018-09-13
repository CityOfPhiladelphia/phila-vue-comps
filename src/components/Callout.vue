<template>
  <div class='wrapper grid-y'>
    <!-- <div class="callout columns small-24"> -->
    <div :class="'callout ' + this.calloutClass">
      <p v-if="this.message"
         v-html="this.message"
      />
      <topic-component-group :topic-components="this.components"
                             v-if="this.components"
      />
    </div>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue'

  export default {
    mixins: [TopicComponent],
    computed: {
      calloutClass() {
        if (this.$props.options) {
          if (this.$props.options.class) {
            return this.$props.options.class;
          } else {
            return 'columns small-24';
          }
        }
      },
      message() {
        if (this.$props.slots) {
          return this.evaluateSlot(this.$props.slots.text) || '';
        } else {
          return '';
        }
      },
      components() {
        if (this.$props.options) {
          return this.$props.options.components || null;
        } else {
          return null;
        }
      },
    },
    components: {},
    beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    }
  };
</script>

<style scoped>

.wrapper {

}

.callout {
  margin-top: 1rem;
  position: inherit;
  height: auto;
}

</style>
