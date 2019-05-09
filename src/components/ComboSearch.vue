<template>
  <div class="combo-search">
    <select>
      <option
        v-for="(item, key) in dropdown"
        :value="key"
        :key="key">{{ item }}</option>
    </select>
    <div class="search">
      <!-- <input class="search-field" type="text" :id="inputId" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" :placeholder="placeholderText"> -->
      <input class="search-field" type="text" :id="inputId" :placeholder="placeholderText">
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
      inputId: 'testing'
    }
    return data;
  },
  methods: {
    async updateResultsList () {

    },
    handleSearchFormSubmit() {
      console.log('handleSearchFormSubmit is running');
      let value;
      value = document.querySelector('#' + this.$data.inputId.toString()).value;
      this.$controller.handleSearchFormSubmit(value);
    },
  },
}

</script>

<style lang="scss">

  .combo-search {
    select {
      float: left;
      width: 27.8%;
      margin:0;
    }
    .search {
      float: left;
      width: 72.2%;
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
