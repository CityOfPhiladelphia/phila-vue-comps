<template>
  <div class="combo-search">
    <select>
      <option
        v-for="(item, key) in dropdown"
        :value="key"
        :key="key">{{ item }}</option>
    </select>
    <div class="search">
      <input class="search-field" type="text" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" placeholder="enter your address">
      <!-- <input ref="jb-search-bar" type="submit" class="search-submit" @click="updateResultsList();" value="Search"> -->
      <button class="search-submit"><font-awesome-icon icon="search" /></button>
      <button class="jb-clear-search-btn"><i class="fal fa-times-square"></i></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comboSearch',
  props: {
    dropdown: {
      type: Object,
      default: {'key': 'value'},
    },
    appTitle: {
      type: String,
      default: 'App Title',
    },
  },
  methods: {
    async updateResultsList () {
      let filteredJobs = this.jobs

      filteredJobs = this.departmentFilter(filteredJobs)
      filteredJobs = await this.searchBarFilter(filteredJobs)
      filteredJobs = this.jobFilters(filteredJobs)

      this.results = filteredJobs

      this.sortResults()
    },
  },
}

</script>

<style lang="scss">

  .combo-search {
    select {
      float: left;
      width: 27.8%;
    }
    .search {
      float: left;
      width: 72.2%;
      .search-field {
        min-height: 3.15rem;
        border-left: 0;
        padding-right: 5.15rem;
        &:focus {
          min-height: 3.15rem;
          border-left: 0;
        }
      }
      &:after {
        height: 3.15rem;
        width: 3.15rem;
        font-size: 1.5rem;
      }
    }
    @media screen and (max-width: 39.9375em) {
      select {
        width: 100%;
        float: none;
        margin-bottom: 5px;
      }
      .search {
        width: 100%;
        float: none;
        margin-bottom: 5px;
        .search-field {
          border-left: 2px solid #0f4d90 !important;
        }
      }
    }
  }

  .search {
    width: 100%;
    position: relative;

    // &::after {
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   height: 3.8rem;
    //   padding: 0.4rem;
    //   width: 4rem;
    //   font-size: 2rem;
    //   font-family: "Font Awesome Free";
    //   font-weight: 400; /* regular */
    //   content: "\f002"; /* search */
    //   text-align: center;
    //   background: color(dark-ben-franklin);
    //   color: white;
    //   font-weight: normal;
    // }

    .search-field,
    input[type="text"]:focus {
      min-height: 3.8rem;
      border: 2px solid color(dark-ben-franklin);
      background: white;
    }

    input[type="text"] {
      background: white;
    }

    .search-submit {
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
      width: 3.8rem;
      height: 3.8rem;
      // opacity: 0;
      cursor: pointer;
    }

    .fa-search {
      color: red
    }
  }

</style>
