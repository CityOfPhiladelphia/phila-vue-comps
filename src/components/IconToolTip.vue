<template>
  <div class="inline">
    <!-- :for="item" -->
    <!-- v-show="Object.keys(infoCirclesData).includes(item)" -->
    <font-awesome-icon
      :id="item + '-icon'"
      icon="info-circle"
      class="fa-infoCircle"
      @click="infoClick"
    />
    <!-- @mouseover="infoOn"
    @mouseout="infoOff" -->
    <div
      :id="item + '-tooltip'"
      :class="tipClass"
      :style="tooltipStyle"
      v-if="active"
      v-html="circleData.html"
    >
    <!-- :style="{'top': '0px'}" -->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: {

    },
    circleData: {

    },
  },
  data() {
    return {
      active: false,
      tipClass: 'popup-tip',
      tooltipStyle: {
        // 'right': '10px',
      },
    }
  },
  // mounted() {
  //   const thisId = this.$props.item + '-icon';
  //   const thisIcon = document.getElementById(thisId);
  //   const iconStyle = thisIcon.getBoundingClientRect();
  //   const rootElement = document.getElementById('app');
  //   const rootStyle = window.getComputedStyle(rootElement);
  //   const rootWidth = rootStyle.getPropertyValue('width');
  //   const rootWidthNum = parseInt(rootWidth.replace('px', ''));
  //   const gap = rootWidthNum - iconStyle.right;
  //   console.log('iconToolTip mounted, iconStyle:', iconStyle, 'rootWidthNum:', rootWidthNum, 'gap:', gap);
  //   if (gap < 250) {
  //     this.tooltipStyle = {
  //       'top': iconStyle.top + 30 + 'px',
  //       'right': '10px',
  //     }
  //   } else {
  //     this.tooltipStyle = {
  //       'top': iconStyle.top + 20 + 'px',
  //     }
  //   }
  // },
  methods: {
    infoClick(e) {
      this.active = !this.active;
      const thisId = this.$props.item + '-icon';
      const thisIcon = document.getElementById(thisId);
      const iconStyle = thisIcon.getBoundingClientRect();
      const rootElement = document.getElementById('app');
      const rootStyle = window.getComputedStyle(rootElement);
      const rootWidth = rootStyle.getPropertyValue('width');
      const rootWidthNum = parseInt(rootWidth.replace('px', ''));
      const gap = rootWidthNum - iconStyle.right;
      console.log('iconToolTip mounted, iconStyle:', iconStyle, 'rootWidthNum:', rootWidthNum, 'gap:', gap);
      if (gap < 250) {
        this.tooltipStyle = {
          'top': iconStyle.top + 20 + 'px',
          'right': '10px',
        }
      } else {
        this.tooltipStyle = {
          'top': iconStyle.top + 20 + 'px',
        }
      }
      // const thisId = this.$props.item + '-tooltip';
      // const thisToolTip = document.getElementById(thisId);
      // const rootElement = document.getElementById('app');
      // const rootStyle = window.getComputedStyle(rootElement);
      // const rootWidth = rootStyle.getPropertyValue('width');
      // // const rootHeight = rootStyle.getPropertyValue('height');
      // const rootWidthNum = parseInt(rootWidth.replace('px', ''));
      // // const rootHeightNum = parseInt(rootHeight.replace('px', ''));
      // console.log('infoClick is running, e:', e, 'e.x', e.x, 'thisToolTip:', thisToolTip, 'rootWidthNum:', rootWidthNum);
      // this.tipClass = 'popup-tip right-side'
    },
    infoOn() {
      this.active = true;
      const thisId = this.$props.item + '-icon';
      const thisIcon = document.getElementById(thisId);
      const iconStyle = thisIcon.getBoundingClientRect();
      const rootElement = document.getElementById('app');
      const rootStyle = window.getComputedStyle(rootElement);
      const rootWidth = rootStyle.getPropertyValue('width');
      const rootWidthNum = parseInt(rootWidth.replace('px', ''));
      const gap = rootWidthNum - iconStyle.right;
      console.log('iconToolTip mounted, iconStyle:', iconStyle, 'rootWidthNum:', rootWidthNum, 'gap:', gap);
      if (gap < 250) {
        this.tooltipStyle = {
          'top': iconStyle.top + 20 + 'px',
          'right': '10px',
        }
      } else {
        this.tooltipStyle = {
          'top': iconStyle.top + 20 + 'px',
        }
      }
    },
    infoOff() {
      this.active = false;
    },
  }
}

</script>

<style lang="scss">

.inline {
  display: inline-block;
}

.popup-tip {
  position: absolute;
  display: inline-block;
  margin-left: 5px;
  width: 220px;
  background-color: rgb(15, 77, 144);
  color: white;
  z-index: 10002;
}

.right-side {
  right: 10px;
}

.full-div {
  padding: 5px;
}

.half-div {
  position: relative;
  display: inline-block;
  padding: 5px;
  width: 110px;
  background-color: rgb(15, 77, 144);
  color: white;
  /* z-index: 10002; */
}

@media screen and (max-width: 749px) {
  .popup-tip {
    position: absolute;
    top: 10px !important;
    display: inline-block;
    margin-left: 5px;
    width: 220px;
    background-color: rgb(15, 77, 144);
    color: white;
    z-index: 10002;
  }
}


</style>
