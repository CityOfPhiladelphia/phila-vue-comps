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
      currentWmLayers() {
        const layers = this.$store.state.map.webMapLayersAndRest;
        const topicLayers = this.$props.options.topicLayers;
        let currentLayers = [];
        for (let layer of layers) {
          if (layer.tags) {
            if (
              topicLayers.includes(layer.title) && layer.title.toLowerCase().includes(this.inputLayerFilter.toLowerCase()) && layer.tags.join().toLowerCase().includes(this.inputTagsFilter.toLowerCase()) && layer.category.includes(this.selectedCategory)
              || topicLayers.includes(layer.title) && this.$store.state.map.webMapActiveLayers.includes(layer.title)
            ) {
              // if (this.inputTagsFilter !== '') {
              //   for (let layerTag of layer.tags) {
              //     if (layerTag.toLowerCase().includes(this.inputTagsFilter.toLowerCase())) {
              //       console.log('layerTag:', layerTag);
              //     }
              //   }
              // }
              currentLayers.push(layer)
            }
          } else if (this.inputTagsFilter !== '') {
            continue;
          } else {
            if (
              topicLayers.includes(layer.title) && layer.title.toLowerCase().includes(this.inputLayerFilter.toLowerCase()) && layer.category.includes(this.selectedCategory)
              || topicLayers.includes(layer.title) && this.$store.state.map.webMapActiveLayers.includes(layer.title)
            ) {
              currentLayers.push(layer)
            }
          }
        }
        return currentLayers;
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
