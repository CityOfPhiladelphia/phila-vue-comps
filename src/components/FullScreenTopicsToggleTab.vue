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
    props: {
      elementContainer: {
        type: String,
        default: 'topic-panel-container'
      }
    },
    data() {
      return {
        'divHeight': 0,
        'buttonPosition': 0,
      }
    },
    mounted() {
      window.addEventListener('resize', this.setDivHeight);
      this.setDivHeight();
    },
    computed: {
      fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsEnabled() {
        console.log('this.$store.state.fullScreenTopicsEnabled:', this.$store.state.fullScreenTopicsEnabled);
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
    watch: {
      picOrCycloActive() {
        this.$nextTick(() => {
          this.setDivHeight();
        })
      }
    },
    methods: {
      setDivHeight() {
        let el;
        if (this.fullScreenTopicsEnabled) {
          el = document.getElementById(this.$props.elementContainer);
        } else {
          el = document.getElementById('map-tag');
        }
        const mapDivStyle = window.getComputedStyle(el);
        const mapDivHeight = parseFloat(mapDivStyle.getPropertyValue('height').replace('px', ''));
        // console.log('FullScreenTopicsToggleTab setDivHeight is running, el:', el, 'mapDivHeight:', mapDivHeight);

        this.buttonPosition = (mapDivHeight-48)/2 + 'px';
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

  /* .toggle-tab {
    position: absolute;
    left: 0px;
    border-width: 1.3px;
    border-color: #CAC9C9;
    height: 48px;
    line-height: 58px;
    width:24px;
    background-color: white;
    display: inline-block;
    z-index: 500; */
    /* border-left-style: solid; */
    /* box-shadow: 2px 2px 7px grey; */
  /* } */

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
      /* border-left-style: solid; */
      /* box-shadow: 2px 2px 7px grey; */
    }
  }

</style>
