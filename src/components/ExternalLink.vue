<template>
  <div class="external-link">
    <a target="_blank"
       :href="externalLinkHref"
    >
      {{ externalLinkText }}
      <font-awesome-icon icon="external-link-alt" aria-hidden="true" />
    </a>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';

  export default {
    mixins: [TopicComponent],
    props: ['count', 'limit', 'type'],
    computed: {
      // for horizontal tables only
      externalLinkCount() {
        return this.count - this.limit;
      },
      // for horizontal or vertical tables
      externalLinkAction() {
        const actionFn = this.options.action;
        if (actionFn) {
          return actionFn(this.externalLinkCount) || 'See more at ';
        }
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
            } else {
              return `${this.externalLinkAction}`;
            }
          } else if (this.type === 'horizontal-table' || this.type === 'badge-custom') {
            // if (name) {
            //   return `${this.externalLinkAction} at ${name}`;
            // } else {
              return `${this.externalLinkAction}`;
            // }
          } else {
            return `${this.externalLinkDataFromState}`
          }
        } else {
          return null;
        }
      },
      externalLinkHref() {
        if (this.options) {
          return this.evaluateSlot(this.options.href);
        } else {
          return null;
        }
      },
      // the number of items that aren't being shown (e.g. See 54 more...)
    }
  };

</script>

<style scoped>

.external-link {
  padding-top: 5px;
}

</style>
