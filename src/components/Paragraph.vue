<template>

  <p v-html="this.message"
     :style="this.style"
     v-show="this.vshowComputed"
  />

</template>

<script>
  import TopicComponent from './TopicComponent.vue';

  export default {
    mixins: [TopicComponent],
    computed: {
      additionalTags() {
        return this.$props.slots.additionalTags || [];
      },
      message() {
        // if there is a transform, it needs this textWithTags section
        let textWithTags = ''
        for (let tag of this.additionalTags) {
          textWithTags = textWithTags + '<' + tag + '>';
        }
        textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
        for (let tag of this.additionalTags) {
          textWithTags = textWithTags + '</' + tag + '>';
        }
        return textWithTags;
      },
      style() {
        if (this.$props.options) {
          return this.$props.options.style || '';
        }
      },
      vshowComputed() {
        // console.log('vshowProp:', this.$props.slots.vshowProp);
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
    }
  };
</script>

<style scoped>

</style>
