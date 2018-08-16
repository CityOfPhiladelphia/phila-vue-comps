<template>

  <span :style="this.style"
        v-html="this.message"
  />
    <!-- test
  </span> -->

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
      }
    }
  };
</script>

<style scoped>

</style>
