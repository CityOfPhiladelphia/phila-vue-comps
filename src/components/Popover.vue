<template>
  <div class="pl-alert"
       :style="plAlertStyle"
  >
    <span class="pl-alert-close-button" @click="close">
      <font-awesome-icon icon="times-circle" class="fa-2x" />
    </span>
    <div class="pl-alert-body">
      <span v-html="this.value"></span>
      <topic-component-group :topic-components="options.components" :item="item" />
    </div>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import TopicComponentGroup from './TopicComponentGroup.vue';
  export default {
    mixins: [TopicComponent],
    data() {
      const data = {
        plAlertStyle: {
          'height': '300px'
        }
      };
      return data;
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
    computed: {
      value() {
        if (this.$props.slots.text) {
          return this.$props.slots.text;
        } else {
          return '';
        }
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

<style>

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

  .pl-alert-body {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0 auto;
    margin-top: 50px;
  }

  .pl-alert-close-button {
    position: fixed;
    right: 40px;
    /* float: right; */
    cursor: pointer;
  }

  .pl-alert a {
    color: #a5c0e4 !important;
  }

</style>
