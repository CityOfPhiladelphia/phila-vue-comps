<template>
  <div>
    <h1
      v-if="!i18nEnabled && headerType === 'h1'"
      :style="style"
      v-html="message"
    />
    <h1
      v-if="i18nEnabled && headerType === 'h1'"
      :style="style"
      v-html="$t(message)"
    />
    <h2
      v-if="!i18nEnabled && headerType === 'h2'"
      :style="style"
      v-html="message"
    />
    <h2
      v-if="i18nEnabled && headerType === 'h2'"
      :style="style"
      v-html="$t(message)"
    />
    <h3
      v-if="!i18nEnabled && headerType === 'h3'"
      :style="style"
      v-html="message"
    />
    <h3
      v-if="i18nEnabled && headerType === 'h3'"
      :style="style"
      v-html="$t(message)"
    />
    <h4
      v-if="!i18nEnabled && headerType === 'h4'"
      :style="style"
      v-html="message"
    />
    <h4
      v-if="i18nEnabled && headerType === 'h4'"
      :style="style"
      v-html="$t(message)"
    />
    <h5
      v-if="!i18nEnabled && headerType === 'h5'"
      :style="style"
      v-html="message"
    />
    <h5
      v-if="i18nEnabled && headerType === 'h5'"
      :style="style"
      v-html="$t(message)"
    />
    <h6
      v-if="!i18nEnabled && headerType === 'h6'"
      :style="style"
      v-html="message"
    />
    <h6
      v-if="i18nEnabled && headerType === 'h6'"
      :style="style"
      v-html="$t(message)"
    />
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  name: 'AnyHeader',
  mixins: [ TopicComponent ],
  computed: {
    i18nEnabled() {
      let value = this.$config.i18n && this.$config.i18n.enabled;
      return value;
    },
    headerType() {
      return this.$props.options.headerType;
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
  },
};
</script>

<style scoped>

</style>
