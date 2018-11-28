<template>
  <div :class="this.class"
       :style="this.style"
       v-show="this.vshowComputed"
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
      vshowComputed() {
        if (this.$props.slots) {
          if (this.evaluateSlot(this.$props.slots.vshowProp) === false) {
            // console.log('returning vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
            return false;
          } else {
            // console.log('returning true, vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
            return true;
          }
        } else {
          // console.log('returning true, no props');
          return true;
        }
      }
    },
    components: {},
    beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    }
  };
</script>

<style scoped>


</style>
