<template>
  <div :class="this.listGroupClass"
       v-show="this.shouldShowAddressCandidateList"
       :style="this.listStyle"
  >
  <!-- :style="'width: ' + this.inputWidth + 'px;'" -->
    <ul>
      <li v-for="(candidate, i) in candidates">
        <a :href="createLink(candidate)"
           @click="closeAddressCandidateList(candidate)"
           class="list-group-item"
           tabindex="-1"
           :id="'address-candidate-list-' + i"
           @keydown="maybeUsedArrow"
        >
          {{ candidate }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'AddressCandidateList',
    data() {
      const data = {
        listStyle: {
          'width': '250px'
        }
      }
      return data;
    },
    created() {
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    },
    watch: {
      addressEntered(nextValue) {
        this.handleWindowResize();
      }
    },
    props: [
      'widthFromConfig',
    ],
    computed: {
      inputWidth() {
        return this.$props.widthFromConfig - 55;
      },
      candidates() {
        const autocompleteMax = this.$config.addressInput.autocompleteMax
        if (!autocompleteMax) {
          return this.$store.state.candidates;
        } else {
          let candidates = this.$store.state.candidates.slice(0, autocompleteMax);
          return candidates;
        }
      },
      shouldShowAddressCandidateList() {
        return this.$store.state.shouldShowAddressCandidateList;
      },
      activeTopic() {
        return this.$store.state.activeTopic;
      },
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      addressAutocompleteEnabled() {
        // TODO this is temporarily disabled
        if (this.$config.addressInput) {
          if (this.$config.addressInput.autocompleteEnabled === true) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      listGroupClass() {
        if (this.isMobileOrTablet) {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'list-group-mobile';
            } else {
              return 'list-group-mobile-full';
            }
          } else {
            return 'list-group-mobile';
          }
        } else {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'list-group';
            } else {
              return 'list-group-full';
            }
          } else {
            return 'list-group';
          }
        }
      }
    },
    methods: {
      createLink(candidate) {
        if (this.$store.state.activeTopic) {
          return '#/' + candidate + '/' + this.activeTopic;
        } else {
          return '#/' + candidate;
        }
      },
      maybeUsedArrow(e) {
        const id = e.target.id;
        const index = parseInt(id.substring(id.lastIndexOf('-') + 1));
        let indexUp, indexDown;
        if (index < this.candidates.length - 1) {
          indexUp = index + 1;
        } else (
          indexUp = index
        )
        if (index !== 0) {
          indexDown = index - 1;
        } else {
          indexDown = 0
        }
        // console.log('maybeUsedArrow running, e:', e, 'index:', index, 'indexUp:', indexUp, 'indexDown:', indexDown);
        if (e.key === "ArrowDown") {
          document.getElementById('address-candidate-list-' + indexUp).focus();
        }
        if (e.key === "ArrowUp") {
          document.getElementById('address-candidate-list-' + indexDown).focus();
        }
      },
      closeAddressCandidateList(addressCandidate) {
        console.log('AddressCandidateList.vue closeAddressCandidateList is running, addressCandidate:', addressCandidate);
        // this.$controller.handleSearchFormSubmit(addressCandidate);
        this.$store.commit('setAddressEntered', addressCandidate);
        this.$store.commit('setShouldShowAddressCandidateList', false);
      },
      handleWindowResize(addressEntered) {
        if (window.innerWidth >= 850) {
          this.listStyle.width = this.$props.widthFromConfig - 55 + 'px';
        } else if (window.innerWidth >= 750) {
          this.listStyle.width = this.$props.widthFromConfig - 155 + 'px';
        } else {
          this.listStyle.width = '248px';
        }
      }
    }
  };

</script>

<style scoped>

.list-group {
  display: inline-block;
  height: 300px;
  width: 250px;
  overflow: auto;
  margin-top: 1px !important;
}

/* .list-group-full {
  display: inline-block;
  height: 300px;
  width: 197px;
  overflow: auto;
  margin-top: 1px !important;
} */

/* .list-group-mobile {
  display: inline-block;
  height: 300px;
  width: 250px;
  overflow: auto;
  margin-top: 1px !important;
}

.list-group-mobile-full {
  display: inline-block;
  height: 300px;
  width: 197px;
  overflow: auto;
  margin-top: 1px !important;
} */

ul {
  list-style-type: none;
  margin-left: 0px;
}

.list-group-item {
  /* width: 237px; */
  display: block;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
  border: 2;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 14px;
  font-weight: normal;
}

.list-group-item:hover {
  background-color: #ffefa2;
  font-weight: bold;
}

/*small*/
@media screen and (max-width: 39.9375em) {
  .list-group {
    width: 200px;
  }

  .list-group-mobile {
    width: 200px;
  }

  .list-group-full {
    width: 147px;
  }

  .list-group-mobile-full {
    width: 158px;
  }
}

</style>
