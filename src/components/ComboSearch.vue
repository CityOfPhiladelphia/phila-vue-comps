<template>
  <div class="combo-search">
    <label
      v-if="Object.keys(dropdown).length > 1"
      :for="selectId"
      class="accessible-text"
    >Filter search by:</label>
    <select
      v-if="Object.keys(dropdown).length > 1"
      :id="selectId"
      @change="handleCategoryChange"
    >
      <option
        v-for="(item, key) in dropdown"
        :key="key"
        :value="item.text"
        :selected="item.selected"
      >
        {{ item.text }}
      </option>
    </select>
    <!-- <div :class="'search ' + position + '-side'"> -->
    <div :class="{ search: Object.keys(dropdown).length > 1, 'search-full': Object.keys(dropdown).length <= 1 }">
      <!-- <input class="search-field" type="text" :id="inputId" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" :placeholder="placeholderText"> -->
      <input
        :id="inputId"
        :placeholder="placeholderText"
        :value="searchString"
        class="search-field"
        type="text"
        @keyup="handleTypeInInput"
      >
      <label
        :for="inputId"
        class="accessible-text"
      >Enter search text</label>
      <button
        v-if="value.length > 0"
        class="search-x"
        @click="clearSearch"
      >
        <font-awesome-icon icon="times" />
      </button>
      <button
        class="search-submit"
        value="search"
        @click="handleSearchFormSubmit();"
      >
        <span class="accessible-text">Search</span>
        <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ComboSearch',
  props: {
    dropdown: {
      type: Object,
      default: {
        key: {
          text: 'value',
          data: 'value',
        },
      },
    },
    position: {
      type: String,
      default: 'left',
    },
    searchString: {
      type: String,
      default: '',
    },
    placeholderText: {
      type: String,
      default: 'Search',
    },
    dropdownSelected: {
      type: String,
      default: '',
    },
    inputId: {
      type: String,
      default: 'inputId',
    },
    selectId: {
      type: String,
      default: 'selectId',
    }
  },
  data() {
    const data = {
      // inputId: 'inputId',
      // selectId: 'selectId',
      categorySelected: null,
      value: '',
    };
    return data;
  },
  watch: {
    value(nextValue) {
      // console.log('ComboSearch watch value fired, nextValue:', nextValue);
      let input = document.getElementById(this.$props.inputId);
      input.value = nextValue;
    },
  },
  mounted() {
    // console.log('ComboSearch mounted, this.dropdown.keyword.data:', this.dropdown.keyword.data, 'this.searchString:', this.searchString);
    for (let dropdownOption of Object.keys(this.dropdown)) {
      // console.log('ComboSearch mounted in loop, dropdownOption:', dropdownOption);
      if (this.dropdown[dropdownOption].data) {
        // console.log('ComboSearch mounted dropdownOption.data:', this.dropdown[dropdownOption].data);
        let dataConcat;
        if (Array.isArray(this.dropdown[dropdownOption].data)) {
          dataConcat = this.dropdown[dropdownOption].data.join(', ');
        }
        this.value = dataConcat;
        continue;
      }
    }

    if (this.searchString && this.searchString != '') {
      // this.value = this.searchString;
      this.handleSearchFormSubmit();
    }

  },
  methods: {
    handleTypeInInput(event) {
      if(event.key == "Enter") {
        this.handleSearchFormSubmit();
      }
    },
    handleSearchFormSubmit() {
      let searchCategory, value, comboSearch = {};
      const e = document.getElementById(this.$data.selectId);
      if (e) {
        searchCategory = e.options[e.selectedIndex].value.toLowerCase();
      } else {
        searchCategory = Object.keys(this.dropdown)[0]
      }
      value = document.querySelector('#' + this.$props.inputId.toString()).value;
      this.value = value;
      // console.log('ComboSearch handleSearchFormSubmit is running, value:', value, 'searchCategory:', searchCategory);
      comboSearch[searchCategory] = value;
      this.$emit('trigger-combo-search', comboSearch);
    },
    handleCategoryChange(event) {
      // console.log('handleCategoryChange is running, event:', event);
      this.value = '';
      this.$emit('trigger-search-category-change', event.target.value.toLowerCase());
    },
    clearSearch(event) {
      // console.log('clearSearch is running, event:', event);
      this.value = '';
      this.$emit('trigger-clear-search');
    },
  },
};

</script>

<style lang="scss">
  .accessible-text{
    position: absolute;
    left: -99999px;
    height: 10px;
    width: 10px;
  }
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

    .search-full {
      float: left;
      width: 100%;
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

    @media screen and (min-width: 1050px) {
      .right-side {
        float: right !important;
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

  .search-full {
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
