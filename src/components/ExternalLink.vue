<template>
  <div class="external-link">
    <a
      v-if="!i18nEnabled"
      :href="externalLinkHref"
      target="_blank"
    >
      {{ externalLinkText }}
      <font-awesome-icon
        icon="external-link-alt"
        aria-hidden="true"
      />
    </a>

    <a
      v-if="i18nEnabled"
      :href="externalLinkHref"
      target="_blank"
      v-html="$t(externalLinkText)"
    >
    </a>
    <a
      v-if="i18nEnabled"
      :href="externalLinkHref"
      target="_blank"
    >
      <font-awesome-icon
        icon="external-link-alt"
        aria-hidden="true"
      />
    </a>

  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';

export default {
  mixins: [ TopicComponent ],
  props: [ 'count', 'limit', 'type' ],
  computed: {
    i18nEnabled() {
      let value = this.$config.i18n && this.$config.i18n.enabled;
      return value;
    },
    // for horizontal tables only
    externalLinkCount() {
      return this.count - this.limit;
    },
    // for horizontal or vertical tables
    externalLinkAction() {
      let value;
      const actionFn = this.options.action;
      if (actionFn) {
        value = actionFn(this.externalLinkCount, this.externalLinkDataFromState) || 'See more at ';
      }
      return value;
    },
    // for anything else, for getting data from the state
    externalLinkDataFromState() {
      // return this.options.externalLink.action || 'See more at ';
      const stateData = this.options.data;
      return this.evaluateSlot(stateData);
    },
    externalLinkText() {
      if (this.options) {
        const name = this.options.name  || '';
        // const preText = this.options.preText;
        // const postText = this.options.postText;

        if (this.type === 'vertical-table') {
          // if (this.externalLinkAction) {
          if (name) {
            return `${this.externalLinkAction} at ${name}`;
          }
          return `${this.externalLinkAction}`;

        } else if (this.type === 'horizontal-table') {
          // if (name) {
          //   return `${this.externalLinkAction} at ${name}`;
          // } else {
          return `${this.externalLinkAction}`;
          // }
        }
        return `${this.externalLinkDataFromState}`;

      }
      return null;

    },
    externalLinkHref() {
      if (this.options) {
        return this.evaluateSlot(this.options.href);
      }
      return null;

    },
    // the number of items that aren't being shown (e.g. See 54 more...)
  },
};

</script>

<style scoped>

.external-link {
  padding-top: 5px;
}

</style>
