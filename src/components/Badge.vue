<template>
  <!-- REVIEW this uses patterns -->
  <div
    v-if="shouldShowBadge"
    class="center"
  >
    <div class="mb-badge panel">

      <div
        v-if="!i18nEnabled"
        :style="style"
        class="mb-badge-header"
      >
        {{ evaluateSlot(slots.title) }}
      </div>
      <div
        v-if="i18nEnabled"
        :style="style"
        class="mb-badge-header"
        v-html="$t(evaluateSlot(slots.title))"
      >
      </div>

      <div class="mb-badge-body">
        <h1>{{ evaluateSlot(slots.value) }}</h1>
        <strong>{{ evaluateSlot(slots.description) }}</strong>
      </div>
    </div>

    <external-link
      v-if="options && options.externalLink"
      :options="options.externalLink"
      :type="'badge'"
    />

  </div>
</template>

<script>
// console.log('in Badge.vue script');
import TopicComponent from './TopicComponent.vue';
import ExternalLink from './ExternalLink.vue';

export default {
  name: 'Badge',
  components: {
    ExternalLink,
  },
  mixins: [ TopicComponent ],
  computed: {
    i18nEnabled() {
      let value = this.$config.i18n && this.$config.i18n.enabled;
      return value;
    },
    style() {
      let titleBackground = this.evaluateSlot(this.slots.titleBackground);
      return { background: titleBackground };
    },
    shouldShowBadge() {
      let result = true;
      // if there is no data, and the badge should not show at all if it is empty
      // console.log('shouldShowBadge is computing, this.evaluatedItem.length:', this.evaluatedItem.length);
      if (this.$props.options.showOnlyIfData && this.evaluatedItem.length === 0) {
        result = false;
      }
      return result;
    },
    evaluatedItem() {
      let items = [];
      let value = this.evaluateSlot(this.slots.dataItem);
      if (value) {
        items.push(value);
      }
      return items;
    },
  },
};
</script>

<style scoped>
  .mb-badge {
    /*width: 300px;*/
    padding: 0;
    margin: 0 auto;
    /* margin-bottom: inherit; */
    margin-bottom: 10px;
  }

  @media (max-width: 640px) {
    .mb-badge {
      width: 100%;
    }
  }

  /*REVIEW this should use foundation classes*/
  @media (min-width: 640px) {
    .mb-badge {
      width: 325px;
    }
  }

  .mb-badge-header {
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .mb-badge-body {
    padding: 12px;
  }

  .mb-badge-body > h1 {
    margin: 0;
    margin-bottom: 5px;
  }
</style>
