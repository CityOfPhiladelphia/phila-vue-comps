<template>
  <div class="combo-search">
    <select :id="selectId"
            @change="handleCategoryChange"
    >
      <option
        v-for="(item, key) in dropdown"
        :value="item.text"
        :key="key"
        :selected="item.selected"
      >
        {{ item.text }}
      </option>
    </select>
    <div class="search">
      <!-- <input class="search-field" type="text" :id="inputId" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" :placeholder="placeholderText"> -->
      <input class="search-field" type="text" :id="inputId" :placeholder="placeholderText" @keyup="handleTypeInInput" :value="searchString">
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
      default: {
        key: {
          text: 'value',
          data: 'value',
        }
      },
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
    // console.log('ComboSearch mounted, this.dropdown.keyword.data:', this.dropdown.keyword.data);
    for (let dropdownOption of Object.keys(this.dropdown)) {
      // console.log('ComboSearch mounted in loop, dropdownOption:', dropdownOption);
      if (this.dropdown[dropdownOption].data) {
        console.log('ComboSearch mounted dropdownOption.data:', this.dropdown[dropdownOption].data);
        let dataConcat;
        if (Array.isArray(this.dropdown[dropdownOption].data)) {
          dataConcat = this.dropdown[dropdownOption].data.join(', ');
        }
        this.value = dataConcat;
        continue;
      }
    }

    if (this.searchString != '') {
      this.value = searchString;
      this.handleSearchFormSubmit();
    }

  },
  watch: {
    value(nextValue) {
      console.log('ComboSearch watch value fired, nextValue:', nextValue);
      let input = document.getElementById('inputId');
      input.value = nextValue;
    },
    dropdownValue(nextDropdownValue) {
      console.log('ComboSearch watch dropdownValue fired, nextDropdown:', nextDropdownValue);
      this.value = nextDropdownValue;
    }
  },
  computed: {
    dropdownValue() {
      let data;
      for (let dropdownOption of Object.keys(this.dropdown)) {
        // console.log('ComboSearch dropdownValue computed in loop, dropdownOption:', dropdownOption);
        if (this.dropdown[dropdownOption].data) {
          // console.log('ComboSearch dropdownValue computed:', this.dropdown[dropdownOption].data);
          let dataConcat = this.dropdown[dropdownOption].data;
          if (Array.isArray(this.dropdown[dropdownOption].data)) {
            dataConcat = this.dropdown[dropdownOption].data.join(', ');
          }
          data = dataConcat;
          continue;
        }
      }
      return data;
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
      searchCategory = e.options[e.selectedIndex].value;
      value = document.querySelector('#' + this.$data.inputId.toString()).value;
      this.value = value;
      console.log('handleSearchFormSubmit is running, value:', value, 'searchCategory:', searchCategory);
      comboSearch[searchCategory] = value;
      this.$emit('trigger-combo-search', comboSearch)
      this.$controller.handleSearchFormSubmit(value, searchCategory);
    },
    handleCategoryChange(event) {
      console.log('handleCategoryChange is running, event:', event);
      this.value = '';
      // this.$controller.routeToNoAddress();
      this.$controller.resetGeocode();
      this.$store.commit('setSelectedKeywords', []);
      this.$store.commit('setSearchType', event.target.value)
    },
    clearSearch(event) {
      console.log('clearSearch is running, event:', event);
      this.value = '';
      // this.$controller.routeToNoAddress();
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
