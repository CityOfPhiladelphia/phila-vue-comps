<template>
  <div id="toggle-tab"
       class="toggle-tab"
       :style="{ top: buttonPosition }"
       @click="handleFullScreenTopicsToggleButtonClick"
       v-if="!this.isMobileOrTablet"
  >
    <span class="align-span">
      <font-awesome-icon :icon="this.currentIcon" class="fa-2x" />
    </span>
  </div>
</template>

<script>
  export default {
    name: 'FullScreenTopicsToggleTab',
    data() {
      return {
        'buttonPosition': 0,
      }
    },
    mounted() {
      this.setDivHeight(this.windowDim);
    },
    watch: {
      picOrCycloActive() {
        this.setDivHeight(this.windowDim);
      },
      windowDim(nextDim) {
        this.setDivHeight(nextDim);
      }
    },
    computed: {
      windowDim() {
        return this.$store.state.windowDimensions;
      },
      fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsEnabled() {
        // console.log('this.$store.state.fullScreenTopicsEnabled:', this.$store.state.fullScreenTopicsEnabled);
        return this.$store.state.fullScreenTopicsEnabled;// || true;
      },
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      cyclomediaActive() {
        if (this.$store.state.cyclomedia) {
          return this.$store.state.cyclomedia.active;
        } else {
          return null;
        }
      },
      pictometryActive() {
        if (this.$store.state.pictometry) {
          return this.$store.state.pictometry.active;
        } else {
          return null;
        }
      },
      picOrCycloActive() {
        if (this.cyclomediaActive || this.pictometryActive) {
          return true;
        } else {
          return false;
        }
      },
      currentIcon() {
        if (this.fullScreenTopicsEnabled) {
          return 'caret-left';
        } else {
          return 'caret-right';
        }
      }
    },
    methods: {
      setDivHeight(dim) {
        if (this.$config.plugin) {
          if (this.$config.plugin.enabled === true) {
            this.buttonPosition = (this.$config.plugin.height-48)/2 + 'px';
            return;
          }
        }
        if (!this.picOrCycloActive) {
          this.buttonPosition = (dim.height-48)/2 + 'px';
        } else {
          this.buttonPosition = (dim.height-48)/4 + 'px';
        }
      },
      handleFullScreenTopicsToggleButtonClick(e) {
        const prevFullScreenTopicsEnabled = this.$store.state.fullScreenTopicsEnabled;
        const nextFullScreenTopicsEnabled = !prevFullScreenTopicsEnabled;
        this.$store.commit('setFullScreenTopicsEnabled', nextFullScreenTopicsEnabled);
      },
    }
  };
</script>

<style scoped>

  .toggle-tab {
    display: none;
  }

  .align-span {
    margin-left: 6px;
  }

  @media screen and (min-width: 46.875em) {
    .toggle-tab {
      position: absolute;
      right: 0px;
      border-width: 1.3px;
      border-style: solid;
      border-color: #CAC9C9;
      height: 48px;
      line-height: 56px;
      width:24px;
      background-color: white;
      display: inline-block;
      z-index: 500;
      opacity: 0.7;
    }
  }

</style>
