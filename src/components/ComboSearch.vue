<template>
  <div class="combo-search">
    <select :id="selectId"
            @change="handleCategoryChange"
    >
      <option
        v-for="(item, key) in dropdown"
        :value="key"
        :key="key">{{ item }}</option>
    </select>
    <div class="search">
      <!-- <input class="search-field" type="text" :id="inputId" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" :placeholder="placeholderText"> -->
      <input class="search-field" type="text" :id="inputId" :placeholder="placeholderText" @keyup="handleTypeInInput">
      <button class="search-x"
        @click="clearSearch"
        v-if="value.length > 0"
      >
        <font-awesome-icon icon="times" />
      </button>
      <button class="search-submit"
        @click="handleSearchFormSubmit();"
        value="search"><font-awesome-icon icon="search" /></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comboSearch',
  props: {
    dropdown: {
      type: Object,
      default: { key: 'value' },
    },
    placeholderText: {
      type: String,
      default: 'Search',
    },
  },
  data() {
    const data = {
      inputId: 'inputId',
      selectId: 'selectId',
      categorySelected: null,
      value: ''
    }
    return data;
  },
  mounted() {
    console.log('ComboSearch mounted, this.$store.state.selectedKeywords:', this.$store.state.selectedKeywords)
    if (this.$store.state.selectedKeywords.length) {
      const el = document.getElementById('selectId');
      console.log('still in mounted, el:', el);
      el.value = 'keyword';
      let keywords = this.$store.state.selectedKeywords.join(', ');
      this.value = keywords;
    }
  },
  computed: {
    address() {
      if (this.$store.state.geocode.data) {
        if (this.$store.state.geocode.data.properties) {
          return this.$store.state.geocode.data.properties.street_address;
        }
      } else {
        return ''
      }
    },
    keywords() {
      return this.$store.state.selectedKeywords;
    }
  },
  watch: {
    value(nextValue) {
      // console.log('watch value fired, nextValue:', nextValue);
      let input = document.getElementById('inputId');
      input.value = nextValue;
    },
    address(nextAddress) {
      this.value = nextAddress;
    },
    keywords(nextKeywords) {
      console.log('ComboSearch watch keywords is firing, nextKeywords', nextKeywords);
    }
  },
  methods: {
    handleCategoryChange(event) {
      console.log('handleCategoryChange is running, event:', event);
      this.$controller.routeToNoAddress();
      this.$controller.resetGeocode();
      this.$store.commit('setSelectedKeywords', []);
      this.value = '';
      this.$store.commit('setSearchType', event.target.value)
    },
    handleTypeInInput(event) {
      // console.log('handleTypeInInput is running, event:', event);
      if(event.key == "Enter") {
        this.handleSearchFormSubmit();
      } else {
        // console.log('event key not enter')
        this.value = event.target.value;
      }
    },
    handleSearchFormSubmit() {
      let searchCategory, value;
      const e = document.getElementById(this.$data.selectId);
      searchCategory = e.options[e.selectedIndex].value;
      value = document.querySelector('#' + this.$data.inputId.toString()).value;
      console.log('handleSearchFormSubmit is running, value:', value, 'searchCategory:', searchCategory);
      // if (searchCategory === "keyword") {
      //   let values = value.split(',');
      //   this.$store.commit('setSelectedKeywords', values);
      // } else {
        this.$controller.handleSearchFormSubmit(value, searchCategory);
      // }
    },
    clearSearch(event) {
      console.log('clearSearch, event:', event);
      this.value = '';
      this.$controller.routeToNoAddress();
      this.$controller.resetGeocode();
      this.$store.commit('setSelectedKeywords', []);
    },
  },
}

</script>

<style lang="scss">

  .combo-search {
    select {
      float: left;
      width: 27.8%;
      height: 39px;
      margin:0;
    }
    .search {
      float: left;
      width: 72.2%;
      height: 40px;
      .search-field {
        min-height: 2.8rem;
        background: white;
        //add white border to ensure heights match when focus is set
        border-top: 2px solid white;
        border-right: 2px solid white;
        border-bottom:2px solid white;
        border-left: 2px solid color(ghost-gray);
      }
    }
  }

  .search {
    width: 100%;
    position: relative;
    margin:0;

    .search-field,
    input[type="text"]:focus {
      min-height: 2.8rem;
      border-color: color(electric-blue);
      background: white;
      margin:0;
    }

    input[type="text"] {
      background: white;
    }

    .search-x {
      z-index: 10;
      position: absolute;
      top: 2.5px;
      right: 3rem;
      min-width: 2.4rem;
      min-height: 2.4rem;
      background: color(electric-blue);
      cursor: pointer;
    }

    .search-submit {
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
      min-width: 2.8rem;
      min-height: 2.8rem;
      background: color(electric-blue);
      cursor: pointer;
    }
  }

</style>
