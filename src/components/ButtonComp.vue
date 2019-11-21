<template>
  <a
    :class="'button ' + this.class + ' clicked-' + this.$data.clicked"
    :style="style"
    href="#"
    @click.prevent="clickAction"
  >
  <!-- @click.prevent="evaluateSlot(slots.buttonAction)" -->
    {{ message }}
  </a>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  mixins: [ TopicComponent ],
  data: function () {
    return {
      clicked: false,
    };
  },
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
        value = this.evaluateSlot(this.$props.options.class) || '';
      }
      return value;
    },
    style() {
      let value;
      if (this.$props.options) {
        value = this.evaluateSlot(this.$props.options.style) || '';
      }
      return value;
    },
  },
  methods: {
    clickAction(){
      this.evaluateSlot(this.slots.buttonAction);
      this.$data.clicked = true;
    },
  },
};
</script>

<style scoped>

  .clicked-true {
    display: none;
  }

</style>
