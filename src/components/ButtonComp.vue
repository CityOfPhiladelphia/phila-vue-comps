<template>
  <a href="#"
     :class="'button ' + this.class"
     :style="this.style"
     @click.prevent="evaluateSlot(slots.buttonAction)"
  >
    {{ message }}
  </a>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';

  export default {
    mixins: [TopicComponent],
    computed: {
      message() {
        if (this.$props.slots) {
          return this.evaluateSlot(this.$props.slots.text);
        }
      },
      class() {
        if (this.$props.options) {
          return this.$props.options.class || '';
        }
      },
      style() {
        if (this.$props.options) {
          return this.$props.options.style || '';
        }
      }
    }
  };
</script>

<style scoped>

</style>
