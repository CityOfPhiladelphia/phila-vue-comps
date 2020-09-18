<template>
  <div
    :style="plAlertStyle"
    :class="backgroundClass"
  >
    <span
      v-if="shouldShowCloseButton"
      class="pl-alert-close-button"
      @click="close"
    >
      <font-awesome-icon
        icon="times-circle"
        class="fa-2x"
      />
    </span>
    <div class="pl-alert-body">
      <span v-html="value" />
      <topic-component-group
        :topic-components="options.components"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
import TopicComponentGroup from './TopicComponentGroup.vue';
export default {
  mixins: [ TopicComponent ],
  data() {
    const data = {
      plAlertStyle: {
        'height': '300px',
      },
    };
    return data;
  },
  computed: {
    value() {
      if (this.$props.slots.text) {
        return this.$props.slots.text;
      }
      return '';

    },
    shouldShowCloseButton() {
      let value = true;
      if (Object.keys(this.$props.options).includes('closeButton') && this.$props.options.closeButton === false) {
        value = false;
      }
      return value;
    },
    backgroundClass() {
      let value = 'pl-alert';
      if (this.$props.options.background && this.$props.options.background === 'light') {
        value = 'pl-alert-light';
      }
      return value;
    }
  },
  beforeCreate() {
    this.$options.components.TopicComponentGroup = TopicComponentGroup;
  },
  created() {
    // console.log('this.$props.options.height:', this.$props.options.height);
    if (this.$props.options.height) {
      this.plAlertStyle.height = this.$props.options.height;
    }
  },
  methods: {
    close() {
      this.$store.commit('setPopoverOpen', false);
      this.$store.commit('setPopoverOptions', {});
      this.$store.commit('setPopoverText', '');
    },
  },
};
</script>

<style scoped>

  .pl-alert {
    position: fixed;
    right: 0;
    bottom: 0;
    /* height: 100%; */
    /* height: 300px; */
    width: 100%;
    background: rgba(68, 68, 68, 0.95);
    color: #fff;
    z-index: 10000;
    font-size: 1.25em;
    margin: 0 auto;
    padding: 1em;
    overflow-y: auto;
  }

  .pl-alert-light {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    background: rgb(255,255,255, 0.5);
    color: #fff;
    z-index: 10000;
    font-size: 1.25em;
    margin: 0 auto;
    padding: 1em;
    overflow-y: auto;
  }

  .pl-alert-body {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0 auto;
    margin-top: 50px;
  }

  .pl-alert-close-button {
    position: fixed;
    /* right: 20px; */
    /* float: right; */
    cursor: pointer;
  }

  .pl-alert a {
    color: #a5c0e4 !important;
  }

</style>
