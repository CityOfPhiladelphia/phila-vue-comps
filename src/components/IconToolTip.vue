<template>
  <div class="inline">
    <!-- :for="item" -->
    <!-- v-show="Object.keys(infoCirclesData).includes(item)" -->
    <font-awesome-icon
      :id="item + '-icon'"
      icon="info-circle"
      class="fa-infoCircle"
      @mouseover="infoOn"
      @mouseout="infoOff"
    />
    <!-- @click="infoClick" -->
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
      tooltipStyle: {},
    }
  },
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
  width: 260px;
  background-color: rgb(15, 77, 144);
  color: white;
  z-index: 10002;
}

.right-side {
  right: 10px;
}

.full-div {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.half-div {
  position: relative;
  display: inline-block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: 130px;
  background-color: rgb(15, 77, 144);
  color: white;
}

ul {
  margin-bottom: 0px;
}

@media screen and (max-width: 749px) {
  .popup-tip {
    position: absolute;
    top: 10px !important;
    right: 10px !important;
    display: inline-block;
    margin-left: 5px;
    width: 220px;
    background-color: rgb(15, 77, 144);
    color: white;
    z-index: 10002;
  }
}


</style>
