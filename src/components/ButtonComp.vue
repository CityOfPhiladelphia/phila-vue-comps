<template>
  <a href="#"
     :class="'button ' + this.class + ' clicked-' + this.$data.clicked"
     :style="this.style"
     @click.prevent="clickAction"
  >
    {{ message }}
  </a>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';

  export default {
    mixins: [TopicComponent],
    data: function () {
      return {
        clicked: false
      }
    },
    computed: {
      message() {
        if (this.$props.slots) {
          return this.evaluateSlot(this.$props.slots.text);
        }
      },
      class() {
        if (this.$props.options) {
          return this.evaluateSlot(this.$props.options.class) || '';
        }
      },
      style() {
        if (this.$props.options) {
          return this.evaluateSlot(this.$props.options.style) || '';
        }
      }
    },
    methods: {
      clickAction(){
        this.evaluateSlot(this.slots.buttonAction)
        this.$data.clicked = true
      }
    }
  };
</script>

<style scoped>

  .clicked-true {
    display: none;
  }

</style>
