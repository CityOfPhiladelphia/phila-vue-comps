<template>
  <div class="combo-search">
    <select :id="selectId"
    >
      <option
        v-for="(item, key) in dropdown"
        :value="key"
        :key="key">{{ item }}</option>
    </select>
    <div class="search">
      <!-- <input class="search-field" type="text" :id="inputId" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" :placeholder="placeholderText"> -->
      <input class="search-field" type="text" :id="inputId" :placeholder="placeholderText" @keyup="testForEnter">
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
    }
    return data;
  },
  methods: {
    async updateResultsList () {

    },
    testForEnter(event) {
      if(event.key == "Enter") {
        // console.log('enter key was pressed')
        this.handleSearchFormSubmit();
      }
    },
    handleSearchFormSubmit() {
      let searchCategory, value;
      const e = document.getElementById(this.$data.selectId);
      searchCategory = e.options[e.selectedIndex].value;
      value = document.querySelector('#' + this.$data.inputId.toString()).value;
      console.log('handleSearchFormSubmit is running, value:', value, 'searchCategory:', searchCategory);
      if (searchCategory === "keyword") {
        let values = value.split(',');
        this.$store.commit('setSelectedKeywords', values);
      } else {
        this.$controller.handleSearchFormSubmit(value);
      }
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
