<template>
  <div>
    <ul>
      <li
        v-for="listItem of evaluateSlot(slots.listItems)"
        :style="style"
        v-html="$t(listItem)"
      >
      </li>
    </ul>
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
    listItems() {
      return this.$props.slots.listItems;
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

.list {
  position: inherit;
  margin-bottom: 0px !important;
}

/* ul {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
} */

.message-p {
  margin-bottom: 0px;
}

/*.topic-body {
  margin-bottom: 0px;
}*/

</style>
