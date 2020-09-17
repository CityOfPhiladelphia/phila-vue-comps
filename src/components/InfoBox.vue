<template>
  <div :class="'grid-x info-box ' + italic">
    <div
      v-if="this.$props.slots.icon"
      class="cell small-6 medium-4"
    >
      <font-awesome-icon
        :icon="['far', 'info-circle']"
        size="3x"
        class="icon-class"
      />
    </div>
    <div
      :class="textClass"
    >
      <p
        v-if="message"
        v-html="message"
      />
      <topic-component-group
        v-if="components"
        :topic-components="components"
      />
    </div>
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  name: 'InfoBox',
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
    italic() {
      let value;
      if (this.$props.options && this.$props.options.italic) {
        value = 'italic';
      }
      return value;
    },
    textClass() {
      let value;
      if (this.$props.slots.icon) {
        value = "cell small-18 medium-20";
      } else {
        value = "cell small-24";
      }
      return value;
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
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

.italic {
  font-style: italic;
}

.icon-class {
  display: block;
  margin: 0 auto;
}

</style>
