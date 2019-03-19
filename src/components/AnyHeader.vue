<template>
  <div>
    <h1 :style="this.style"
         v-html="this.message"
         v-if="this.headerType === 'h1'"
    />
    <h2 :style="this.style"
         v-html="this.message"
         v-if="this.headerType === 'h2'"
    />
    <h3 :style="this.style"
         v-html="this.message"
         v-if="this.headerType === 'h3'"
    />
    <h4 :style="this.style"
         v-html="this.message"
         v-if="this.headerType === 'h4'"
    />
    <h5 :style="this.style"
         v-html="this.message"
         v-if="this.headerType === 'h5'"
    />
    <h6 :style="this.style"
         v-html="this.message"
         v-if="this.headerType === 'h6'"
    />
  </div>

</template>

<script>
  import TopicComponent from './TopicComponent.vue';

  export default {
    name: 'AnyHeader',
    mixins: [TopicComponent],
    computed: {
      headerType() {
        return this.$props.options.headerType;
      },
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
