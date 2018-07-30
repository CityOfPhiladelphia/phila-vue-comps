<template>
  <div class="callout">
    <p v-if="this.message"
       v-html="this.message"
    />
    <topic-component-group :topic-components="this.components"
                           v-if="this.components"
    />
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue'

  export default {
    mixins: [TopicComponent],
    computed: {
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

.callout {
  position: inherit;
}

</style>
