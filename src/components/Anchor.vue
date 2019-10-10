<template>
  <a 
    :style="this.$props.options.customStyle"
    :target="'_' + this.$props.options.target"
    :href="this.$props.options.href"
    v-html="this.$props.options.text"
  />
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  mixins: [ TopicComponent ],
  computed: {
    test() {
      return 'test';
    },
  },
};
</script>
