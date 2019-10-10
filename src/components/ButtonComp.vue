<template>
  <a
    :class="'button ' + this.class"
    :style="style"
    href="#"
    @click.prevent="evaluateSlot(slots.buttonAction)"
  >
    {{ message }}
  </a>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  mixins: [ TopicComponent ],
  computed: {
    message() {
      let value;
      if (this.$props.slots) {
        value = this.evaluateSlot(this.$props.slots.text);
      }
      return value;
    },
    class() {
      let value;
      if (this.$props.options) {
        value = this.$props.options.class || '';
      }
      return value;
    },
    style() {
      let value;
      if (this.$props.options) {
        value = this.$props.options.style || '';
      }
      return value;
    },
  },
};
</script>

<style scoped>

</style>
