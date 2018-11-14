<template>
  <div class="pl-alert">
    <span class="pl-alert-close-button" @click="close">
      <font-awesome-icon icon="times-circle" class="fa-2x" />
    </span>
    <div class="pl-alert-body">
      <span v-html="html"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['html'],
  methods: {
    close() {
      this.$store.commit('setPopover', '');
    },
  },
};
</script>

<style>

  .pl-alert {
    position: fixed;
    bottom: 0;
    height: 300px;
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
    width: 50%;
    margin: 0 auto;
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
