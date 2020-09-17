<template>
  <div class="grid-y info-box">
    <p
      v-if="message"
      v-html="message"
    />
    <topic-component-group
      v-if="components"
      :topic-components="components"
    />
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  name: 'infoBox',
  components: {
    TopicComponentGroup: () => import(/* webpackChunkName: "pvc_TopicComponentGroup" */'./TopicComponentGroup.vue'),
  },
  mixins: [ TopicComponent ],
  computed: {
    message() {
      if (this.$props.slots) {
        return this.evaluateSlot(this.$props.slots.text) || '';
      }
      return '';
    },
    components() {
      if (this.$props.options) {
        return this.$props.options.components || null;
      }
      return null;
    },
  },
};
</script>

<style scoped>

.info-box {
  margin-bottom: 2rem;
  position: inherit;
  height: auto;
  background-color: #DAEDFE;
  padding: 12px;
  font-style: italic;
}

</style>
