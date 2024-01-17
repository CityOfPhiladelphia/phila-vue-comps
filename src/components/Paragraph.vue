<template>
  <div>
    <p
      v-if="!i18nEnabled && vshowComputed"
      :style="style"
      v-html="message"
    />
    <p
      v-if="i18nEnabled && vshowComputed"
      :style="style"
      v-html="$t(message)"
    />
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  mixins: [ TopicComponent ],
  computed: {
    i18nEnabled() {
      let value = this.$config.i18n && this.$config.i18n.enabled;
      return value;
    },
    additionalTags() {
      return this.$props.slots.additionalTags || [];
    },
    message() {
      // if there is a transform, it needs this textWithTags section
      let textWithTags = '';
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
      let value;
      if (this.$props.options) {
        value = this.$props.options.style || '';
      }
      return value;
    },
    vshowComputed() {
      // console.log('vshowProp:', this.$props.slots.vshowProp);
      if (this.$props.slots) {
        if (this.evaluateSlot(this.$props.slots.vshowProp) === false) {
          // console.log('returning vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
          return false;
        }
        // console.log('returning true, vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
        return true;

      }
      // console.log('returning true, no props');
      return true;

    },
  },
};
</script>

<style scoped>

</style>
