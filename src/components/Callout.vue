<template>
  <div class="wrapper grid-y">
    <!-- <div class="callout columns small-24"> -->
    <div :class="'callout ' + calloutClass">
      <p
        v-if="message"
        v-html="message"
      />
      <topic-component-group
        v-if="components"
        :topic-components="components"
      />
    </div>
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
// import TopicComponentGroup from './TopicComponentGroup.vue'

export default {
  components: {
    TopicComponentGroup: () => import(/* webpackChunkName: "pvc_TopicComponentGroup" */'./TopicComponentGroup.vue'),
  },
  mixins: [ TopicComponent ],
  computed: {
    calloutClass() {
      let value;
      if (this.$props.options) {
        if (this.$props.options.class) {
          value = this.$props.options.class;
        }
        value = 'columns small-24';
      }
      return value;
    },
    message() {
      if (this.$props.slots) {
        return this.evaluateSlot(this.$props.slots.text) || '';
      }
      return '';

    },
    components() {
      if (this.$props.options) {
        return this.$props.options.components || null;
      }
      return null;

    },
  },
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
