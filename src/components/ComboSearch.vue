<template>
  <div>
    test test
  </div>
  <!-- <div class="combo-search">
    <select v-model="dept" @change="updateResultsList()">
      <option value="">Showing All Departments</option>
      <option v-for="(department, index) in departmentsWithJobs" :key="`${department}-${index}`">{{ department }}</option>
    </select>
    <div class="search">
      <input class="search-field" type="text" v-model="search" v-on:keydown.enter="updateResultsList();" v-on:keyup.enter="hideMobileKeyboard($event); updateResultsList()" :placeholder="staticText.searchBarPlaceholder"><input ref="jb-search-bar" type="submit" class="search-submit" @click="updateResultsList();" value="Search">
      <button v-if="search.length > 0" class="jb-clear-search-btn" @click="clearSearchBar"><i class="fal fa-times-square"></i></button>
    </div>
  </div> -->
</template>

<script>

export default {
  name: 'comboSearch',
  // methods: {
  //   async updateResultsList () {
  //     let filteredJobs = this.jobs
  //
  //     filteredJobs = this.departmentFilter(filteredJobs)
  //     filteredJobs = await this.searchBarFilter(filteredJobs)
  //     filteredJobs = this.jobFilters(filteredJobs)
  //
  //     this.results = filteredJobs
  //
  //     this.sortResults()
  //   },
  // },
}

</script>

<style>

</style>
