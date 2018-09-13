<template>
  <div :class="this.class"
       :style="this.style"
  >
    <topic-component-group :topic-components="this.$props.options.components" />
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue'

  export default {
    mixins: [TopicComponent],
    computed: {
      message() {
        return this.evaluateSlot(this.$props.slots.text)
      },
      class() {
        return this.$props.options.class || '';
      },
      style() {
        return this.$props.options.style || '';
      },
    },
    components: {},
    beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    }
  };
</script>

<style scoped>


</style>
