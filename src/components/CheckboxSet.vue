<template>
  <div>
    <form action="#/">
      <fieldset class="options">
        <checkbox v-for="(currentWmLayer, index) in this.currentWmLayers"
                  :layer="currentWmLayer.layer"
                  :layerName="currentWmLayer.title"
                  :layerId="currentWmLayer.id"
                  :layerDefinition="currentWmLayer.rest.layerDefinition"
                  :opacity="currentWmLayer.opacity"
                  :legend="currentWmLayer.legend"
                  :key="currentWmLayer.id"
                  :shouldShowDataLinks="computedShouldShowDataLinks"
                  :options="currentWmLayer.options"
        >
        </checkbox>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import TopicComponent from './TopicComponent.vue';
  import Checkbox from './Checkbox.vue';

  export default {
    mixins: [TopicComponent],
    components: {
      Checkbox
    },
    computed: {
      categories() {
        return this.$store.state.map.categories;
      },
      selectedCategory() {
        return this.$store.state.map.selectedCategory;
      },
      scale() {
        return this.$store.state.map.scale;
      },
      computedShouldShowDataLinks() {
        let configValue;
        if (Object.keys(this.$props.options).includes('shouldShowDataLinks')) {
          configValue = this.$props.options.shouldShowDataLinks;
        } else {
          configValue = true;
        }
        return configValue;
      },
      topicLayers() {
        if (this.$props.options.topicLayers) {
          return this.$props.options.topicLayers;
        } else {
          // if no topicLayers are provided, use all
          let titles = [];
          for (let layer of this.$store.state.map.webMapLayersAndRest) {
            titles.push({
              title: layer.title
            });
          }
          return titles;
        }
      },
      activeLayers() {
        return this.$store.state.map.webMapActiveLayers;
      },
      currentWmLayers() {
        const layers = this.$store.state.map.webMapLayersAndRest;
        const topicLayers = this.topicLayers;
        let topicLayersKeys = [];
        for (let topicLayer of topicLayers) {
          topicLayersKeys.push(topicLayer.title)
        }
        let currentLayers = [];
        let currentLayersOrdered = [];

        // loop through all layers to calculate currentLayers
        for (let layer of layers) {
          const lcFilter = this.inputLayerFilter.toLowerCase();
          const lcTagsFilter = this.inputTagsFilter.toLowerCase();
          const lcTitle = layer.title.toLowerCase();

          if (layer.tags) {
            const lcTags = layer.tags.join().toLowerCase();
            if (
              topicLayersKeys.includes(layer.title) && lcTitle.includes(lcFilter) && layer.category.includes(this.selectedCategory) && lcTags.includes(lcTagsFilter)
              || topicLayersKeys.includes(layer.title) && lcTitle.includes(lcTagsFilter) && layer.category.includes(this.selectedCategory)
              // || topicLayersKeys.includes(layer.title) && lcTags.includes(lcTagsFilter)
              || topicLayersKeys.includes(layer.title) && this.activeLayers.includes(layer.title)
            ) {
              for (let topicLayer of topicLayers) {
                if (topicLayer.title === layer.title) {
                  layer.options = topicLayer.options
                }
              }
              currentLayers.push(layer);
            }
          } else if (this.inputTagsFilter !== '') {
            // continue;
            if (
              topicLayersKeys.includes(layer.title) && lcTitle.includes(lcTagsFilter) && layer.category.includes(this.selectedCategory)
              || topicLayersKeys.includes(layer.title) && this.activeLayers.includes(layer.title)
            ) {
              for (let topicLayer of topicLayers) {
                if (topicLayer.title === layer.title) {
                  layer.options = topicLayer.options
                }
              }
              currentLayers.push(layer);
            }
          } else {
            if (
              topicLayersKeys.includes(layer.title) && lcTitle.includes(lcFilter) && layer.category.includes(this.selectedCategory)
              || topicLayersKeys.includes(layer.title) && this.activeLayers.includes(layer.title)
            ) {
              for (let topicLayer of topicLayers) {
                if (topicLayer.title === layer.title) {
                  layer.options = topicLayer.options
                }
              }
              currentLayers.push(layer);
            }
          }
        }
        for (let topicLayer of topicLayersKeys) {
          let potentialLayer = currentLayers.filter(currentLayers => currentLayers.title === topicLayer);
          if (potentialLayer) {
            currentLayersOrdered.push(potentialLayer[0]);
          }
        }
        return currentLayersOrdered;
      },
      inputLayerFilter() {
        return this.$store.state.layers.inputLayerFilter;
      },
      inputTagsFilter() {
        return this.$store.state.layers.inputTagsFilter;
      },
    },
    methods: {
      handleLayerFilterFormKeyup(e) {
        const input = e.target.value;
        this.$store.commit('setInputLayerFilter', input);
      },
      handleLayerFilterFormX(e) {
        e.target[0].value = ''
        this.$store.commit('setInputLayerFilter', '');
      },
      handleTagsFilterFormKeyup(e) {
        const input = e.target.value;
        // if (input.length >= 3) {
        this.$store.commit('setInputTagsFilter', input);
        // } else {
          // this.$store.commit('setInputLayerFilter', null);
        // }
      },
      handleTagsFilterFormX(e) {
        e.target[0].value = ''
        this.$store.commit('setInputTagsFilter', '');
      },
      didSelectCategory(e) {
        const selected = e.target.selectedIndex;
        this.$store.commit('setSelectedCategory', this.categories[selected]);
      },
      preventEnter(e) {
        if(e.keyCode === 13) {
          e.preventDefault();
        }
      },
    }
  };
</script>

<style scoped>

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


</style>
