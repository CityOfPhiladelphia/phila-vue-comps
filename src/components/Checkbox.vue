<template>
  <div :class="checkboxClass">
    <div
      v-if="computedShouldShowCheckbox"
      class="div-row"
    >
      <a
        v-if="shouldShowDataLink"
        :href="'http://metadata.phila.gov/#home/representationdetails/' + bennyId"
        target="_blank"
      >
        <span><font-awesome-icon
          icon="info-circle"
          class="fa-2x"
        /></span>
      </a>
      <div
        v-if="shouldShowDataLinks && !shouldShowDataLink"
        class="missing-data-link"
      />

      <input
        :id="'checkbox-'+layerName"
        :class="{ disabled: shouldBeDisabled }"
        :layerid="layerId"
        :checked="webMapActiveLayers.includes(layerName)"
        :disabled="shouldBeDisabled"
        type="checkbox"
        @click="checkboxToggle"
      >

      <label
        :for="'checkbox-'+layerName"
        :class="{ disabled: shouldBeDisabled, 'label-text': shouldShowDataLink, 'label-text-no-datalinks': !shouldShowDataLink }"
      >
        <div class="layer-name">{{ computedLayerName }}</div>
      </label>
    </div>

    <div
      v-if="!computedShouldShowCheckbox && !shouldBeDisabled"
      class="layer-name-no-checkbox"
    >
      <b>{{ computedLayerName }}</b>
    </div>

    <legend-box
      v-if="this.$store.state.map.webMapActiveLayers.includes(layerName) && computedShouldShowLegendBox"
      :layer="layer"
      :layer-name="layerName"
      :layer-id="layerId"
      :layer-definition="layerDefinition"
      :legend="legend"
      :scales="this.$config.map.scales"
    />

    <slider
      v-if="this.$store.state.map.webMapActiveLayers.includes(layerName) && computedShouldShowSlider"
      :layer="layer"
      :layer-name="layerName"
      :layer-id="layerId"
      :opacity="opacity"
    />

    <topic-component-group
      v-if="this.$store.state.map.webMapActiveLayers.includes(layerName)"
      :topic-components="options.components"
    />
  </div>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
import TopicComponentGroup from './TopicComponentGroup.vue';
import LegendBox from './LegendBox.vue';
import Slider from './Slider.vue';

export default {
  components: {
    TopicComponentGroup,
    LegendBox,
    Slider,
  },
  mixins: [ TopicComponent ],
  props: [ 'layer',
    'layerName',
    'layerId',
    // minScale, maxScale, and drawingInfo are stored in layerDefinition
    'layerDefinition',
    'opacity',
    'legend',
    'tags',
    'shouldShowDataLinks',
    'hideDisabled',
  ],
  data() {
    return {
      opa: this.$props.opacity * 100,
    };
  },
  computed: {
    computedLayerName() {
      let value;
      if (this.$props.options.layerNameChange) {
        value = this.$props.options.layerNameChange;
      } else {
        value = this.$props.layerName;
      }
      return value;
    },
    computedShouldShowCheckbox() {
      if (this.$props.options) {
        if (Object.keys(this.$props.options).includes('shouldShowCheckbox')) {
          return this.$props.options.shouldShowCheckbox;
        } else if (Object.keys(this.$props).includes('hideDisabled')) {
          if (this.$props.hideDisabled && this.shouldBeDisabled) {
            return false;
          }
        }
        return true;
      }
      return true;
    },
    computedShouldShowLegendBox() {
      if (this.shouldBeDisabled) {
        return false;
      }
      if (this.$props.options) {
        if (Object.keys(this.$props.options).includes('shouldShowLegendBox')) {
          return this.$props.options.shouldShowLegendBox;
        }
        return true;
      }
      return true;
    },
    computedShouldShowSlider() {
      if (this.$props.options) {
        if (Object.keys(this.$props.options).includes('shouldShowSlider')) {
          return this.$props.options.shouldShowSlider;
        }
        return true;
      }
      return true;
    },
    checkboxClass() {
      // return this.webMapActiveLayers.includes(this.$props.layerName) ? 'main-div-selected' : 'main-div';
      let value;
      if (!this.computedShouldShowCheckbox && this.shouldBeDisabled) {
        value = 'hide-div';
      } else if (this.webMapActiveLayers.includes(this.$props.layerName)) {
        'main-div-selected';
      } else {
        value = 'main-div';
      }
      return value;
    },
    matchingTags() {
      let matches = [];
      if (this.$props.tags !== null && this.inputTagsFilter !== '') {
        for (let tag of this.$props.tags) {
          if (tag.toLowerCase().includes(this.inputTagsFilter.toLowerCase())) {
            matches.push(tag);
          }
        }
      }
      return matches;
    },
    inputTagsFilter() {
      return this.$store.state.layers.inputTagsFilter;
    },
    scale() {
      return this.$store.state.map.scale;
    },
    shouldBeDisabled() {
      let value;
      const def = this.$props.layerDefinition;
      if (def) {
        if (def.minScale) {
          // console.log('shouldBeDisabled is running, if def.minScale, this.$props.layerName:', this.$props.layerName, 'def:', def);
          if (this.scale < def.minScale && this.scale > def.maxScale) {
            // console.log('shouldBeDisabled is running, first if, this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
            value = false;
            // return true;
          } else {
            // console.log('shouldBeDisabled is running, first else, this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
            value = true;
          }
        } else if (def.maxScale) {
          // console.log('shouldBeDisabled is running, if def.maxScale, this.$props.layerName:', this.$props.layerName, 'def:', def);
          if (this.scale > def.maxScale) {
            // console.log('shouldBeDisabled is running, first if, this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
            value = false;
            // return true;
          } else {
            // console.log('shouldBeDisabled is running, first else, this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
            value = true;
          }
        }
        // console.log('shouldBeDisabled is running, lost zone, this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
      } else {
        // console.log('shouldBeDisabled is running, 2nd else, this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
        value = false;
        // return false;
      }
      // console.log('shouldBeDisabled is running, value:', value, 'this.$props.layerName:', this.$props.layerName, 'def.minScale:', def.minScale, 'def.maxScale:', def.maxScale, 'this.scale:', this.scale);
      return value;
    },
    layerUrls() {
      return this.$store.state.layers.layerUrls;
    },
    bennyEndpoints() {
      return this.$store.state.bennyEndpoints;
    },
    url() {
      return this.layerUrls[this.$props.layerName];
    },
    shouldShowDataLink() {
      if (this.bennyId && this.$props.shouldShowDataLinks) {
        return true;
      }
      return false;

    },
    bennyId() {
      if (Object.keys(this.bennyEndpoints).length > 0) {
        const id = this.bennyEndpoints[this.url];
        // const id = this.bennyEndpoints[this.url]['Metadata'];
        return id;
      }
      return ' ';

    },
    webMapUrlLayer() {
      return this.$store.state.map.webMapUrlLayer;
    },
    webMapActiveLayers() {
      return this.$store.state.map.webMapActiveLayers;
    },
    webMapDisplayedLayers() {
      return this.$store.state.map.webMapDisplayedLayers;
    },
    webMapGeoJson() {
      return this.$store.state.map.webMapGeoJson;
    },
  },
  watch: {
    opa(nextOpacity) {
      const payload = {
        layerName: this.$props.layerName,
        opa: nextOpacity/100,
      };
      // console.log('OPACITY CHANGED', payload);
      this.$store.commit('setWebMapLayersOpacity', payload);
    },
    shouldBeDisabled(nextShouldBeDisabled) {
      // console.log('watch shouldBeDisabled is firing:', this.$props.layerName, nextShouldBeDisabled);
      if (this.webMapActiveLayers.includes(this.$props.layerName) && nextShouldBeDisabled === true) {
        this.removeFromWebMapDisplayedLayers();
      } else if (this.webMapActiveLayers.includes(this.$props.layerName) && nextShouldBeDisabled === false) {
        this.addToWebMapDisplayedLayers();
      }
    },
    // inputTagsFilter(nextInputTagsFilter) {
    //   this.findCurrentTags(nextInputTagsFilter);
    // },
  },
  methods: {
    // findCurrentTags(inputTagsFilter) {
    //
    // },
    trim(s) {
      return ( s || '' ).replace( /^\s+|\s+$/g, '' );
    },
    // getGeoJson(layer) {
    //   const layer2 = 'services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/WasteBaskets_Big_Belly/FeatureServer/0'
    //   // const url = 'http://' + layer2;
    //   const url = 'http://' + this.layerUrls[layer];
    //   console.log('getGeoJson is running, layer:', layer, 'url:', url);
    //   const dataQuery = L.esri.query({ url });
    //   dataQuery.where("1=1");
    //   dataQuery.run((function(error, featureCollection, response) {
    //     // console.log('parcelQuery ran, activeParcelLayer:', activeParcelLayer);
    //     this.didGetData(error, featureCollection, response, layer);
    //   }).bind(this)
    // )
    // },
    // didGetData(error, featureCollection, response, layer) {
    //   console.log('didGetData is running, layer:', layer, 'featureCollection:', featureCollection, 'response:', response);
    //   // const obj = {
    //   //   'layerName': layer,
    //   //   'json': response
    //   let obj = this.webMapGeoJson;
    //   obj[layer] = response;
    //   this.$store.commit('setWebMapGeoJson', obj);
    // },
    checkboxToggle(e) {
      console.log('checkboxToggle', e.target, e.target.id, e.target.checked);
      const urlLayer = this.webMapUrlLayer;
      const activeLayers = this.webMapActiveLayers;
      const displayedLayers = this.webMapDisplayedLayers;
      // const splitArray = e.target.id.split('-').splice(0, 1);
      const targetReplace = e.target.id.replace('checkbox-', '');
      if (e.target.checked) {
        console.log('target checked, targetReplace:', targetReplace);
        activeLayers.push(targetReplace);
        displayedLayers.push(targetReplace);
        // activeLayers.push(e.target.id.split('-')[1]);
        // displayedLayers.push(e.target.id.split('-')[1]);
        if (activeLayers.length === 1) {
          this.$store.commit('setWebMapUrlLayer', targetReplace);
        }
        // if (!Object.keys(this.webMapGeoJson).includes(targetReplace)) {
        //   this.getGeoJson(targetReplace);
        // }
      } else {
        console.log('target not checked');
        const activeIndex = activeLayers.indexOf(targetReplace);
        // const activeIndex = activeLayers.indexOf(e.target.id.split('-')[1]);
        if (activeIndex >= 0) {
          activeLayers.splice(activeIndex, 1);
        }
        const displayedIndex = displayedLayers.indexOf(targetReplace);
        // const displayedIndex = displayedLayers.indexOf(e.target.id.split('-')[1]);
        if (displayedIndex >= 0) {
          displayedLayers.splice(displayedIndex, 1);
        }
        // this.$store.commit('setIntersectingFeatures', []);
        if (urlLayer === targetReplace) {
          this.$store.commit('setWebMapUrlLayer', null);
        }
      }
      this.$store.commit('setWebMapActiveLayers', activeLayers);
      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
    },
    removeFromWebMapDisplayedLayers() {
      const displayedLayers = this.webMapDisplayedLayers;
      const index = displayedLayers.indexOf(this.$props.layerName);
      // console.log('layer', this.$props.layerName, 'is active, but now should not be displayed, index:', index);
      if (index >= 0) {
        displayedLayers.splice(index, 1);
      }
      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
    },
    addToWebMapDisplayedLayers() {
      // console.log('layer', this.$props.layerName, 'is active, and now should be displayed');
      const displayedLayers = this.webMapDisplayedLayers;
      displayedLayers.push(this.$props.layerName);
      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
    },
  },
};
</script>

<style scoped>

  .hide-div {
    display: none;
  }

  .main-div-selected {
    padding-bottom: 20px;
  }

  .sliderDiv {
    height: 60px;
  }

  .flex {
    margin-bottom: 16px;
  }

  .metadata-link {
    display: inline-block;
    height: 10px;
    width: 10px;
    /*border: solid;
    border-width: 1px;*/
  }

  .download-select {
    width: 200px;
  }

  .div-row {
    position: relative;
    margin-bottom: 12px;
  }

  /* input[type="checkbox"] {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    margin-left: 32px;
    cursor: pointer;
  } */

  a {
    position: absolute;
    /* top: 50%; */
    /* margin-top: -10px; */
    /*margin-left: 25px;*/
  }

  input[type=checkbox]+label[for] {
    font-size: 16px;
  }

  input[type=checkbox]+label::before {
    position: absolute;
    margin-top: -12px;
    font-size: 30px;
    padding-right: 5px;
  }

  .disabled {
    color: #d3d3d3 !important;
  }

  input[type=checkbox]+label.disabled::before {
    color: #d3d3d3;
  }

  .label-text-no-datalinks {
    /* position: absolute; */
    display: inline-block;
    /* margin-top: 4px; */
    margin-left: 0px;
  }

  .label-text {
    /* position: absolute; */
    display: inline-block;
    /* margin-top: 4px; */
    margin-left: 0px;
    padding-left: 30px;
  }

  .layer-name {
    font-weight: normal;
    vertical-align: middle;
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 6px;
  }

  .layer-name-no-checkbox {
    font-weight: normal;
    vertical-align: middle;
    display: inline-block;
    /* margin-left: 30px; */
    margin-bottom: 6px;
  }

  .tag-title {
    padding-left: 30px;
    font-weight: normal;
    font-style: italic;
    font-size: 14px;
    color: red;
  }

  .tag-holder {
    /* display: inline-block; */
    padding-left: 30px;
    font-weight: normal;
    font-size: 14px;
    color: red;
  }

  .missing-data-link {
    display: inline-block;
    width: 30px;
  }


</style>
