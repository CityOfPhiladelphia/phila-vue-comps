<template>
  <a href="#"
     :class="'button ' + this.class"
     :style="this.style"
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
        return this.evaluateSlot(this.$props.slots.text);
      },
      class() {
        return this.$props.options.class || '';
      },
      style() {
        return this.$props.options.style || '';
      }
    }
  };
</script>

<style scoped>

</style>
