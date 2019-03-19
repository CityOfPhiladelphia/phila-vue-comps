<template>
  <!-- REVIEW this uses patterns -->
  <div class="center">
    <div class="mb-badge panel">
      <div class="mb-badge-header" :style="style">
        {{ evaluateSlot(slots.title) }}
      </div>
      <topic-component-group :topic-components="options.components" :item="item" />
    </div>
    <external-link v-if="options && options.externalLink"
                   :options="options.externalLink"
                   :type="'badge-custom'"
    />
    <!-- <div class="external-link">
      <a v-if="options && options.externalLink"
      :href="externalLinkHref"
      class="external external-link"
      target="_blank"
      >
      {{ externalLinkText }}
    </a>
  </div> -->
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue';
  import ExternalLink from './ExternalLink.vue';

  export default {
    name: 'BadgeCustom',
    mixins: [TopicComponent],
    components: {
      ExternalLink,
    },
    beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    },
    computed: {
      style() {
        const titleBackgroundValOrFn = (this.options || {}).titleBackground;
        let titleBackground;

        if (titleBackgroundValOrFn) {
          if (typeof titleBackgroundValOrFn === 'function') {
            titleBackground = titleBackgroundValOrFn(this.$store.state);
          } else {
            titleBackground = titleBackgroundValOrFn;
          }
        } else {
          titleBackground = '#444';
        }

        return { background: titleBackground };
      },
      // externalLinkAction() {
      //   return this.evaluateSlot(this.options.externalLink.action) || 'See more at ';
      // },
      // externalLinkText() {
      //   const externalLinkConf = this.options.externalLink;
      //   const actionFn = externalLinkConf.action;
      //   const name = this.externalLinkAction || '';
      //   return `${name}`;
      // },
      // externalLinkHref() {
      //   return this.evaluateSlot(this.options.externalLink.href);
      // },
    },
  };
</script>

<style scoped>
  .mb-badge {
    /*width: 300px;*/
    padding: 0;
    margin: 0 auto;
    /* margin-bottom: inherit; */
    margin-bottom: 10px !important;
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

  .external-link {
    padding-top: 5px;
  }

</style>
