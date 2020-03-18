<template>
  <button
    :class="'button-light ' + this.class + ' clicked-' + this.$data.clicked"
    :style="style"
    @click.prevent="clickAction"
  >
    <slot />
  </button>
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
      this.$props.options.stopClickedChange ? "" : this.$data.clicked = true;
    },
  },
};
</script>

<style scoped>

  .clicked-true {
    display: none;
  }

  .button-light {
    background-color: white;
    color:  #0f4d90;
    border: 1.49px solid #0f4d90;
    text-transform: uppercase;
  }

</style>
