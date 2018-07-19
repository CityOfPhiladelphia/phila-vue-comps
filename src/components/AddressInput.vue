<template>
  <div :class="this.containerClass">
    <form @submit.prevent="handleSearchFormSubmit"
          autocomplete="off"
          id="search-form"
          class="pvc-search-control-form"
    >
      <!-- <div class="form-group"> -->
        <input :class="this.inputClass"
               id="pvc-search-control-input"
               placeholder="Search for an Address"
               :value="this.addressEntered"
               tabindex="0"
               @keyup="didType"
        />
      <!-- </div> -->
    </form>
    <button :class="this.buttonClass"
            v-if="this.addressAutocompleteEnabled && this.addressEntered != '' && this.addressEntered != null"
            @click="handleFormX"
    >
      <i class="fa fa-times fa-lg"></i>
    </button>
    <button :class="this.buttonClass"
            name="pvc-search-control-button"
            tabindex="-1"
            @click="this.handleSearchFormSubmit"
    >
      <i class="fa fa-search fa-lg"></i>
    </button>
    <slot name="address-candidates-slot">
  </div>
</template>

<script>
  import _ from 'lodash';
  import debounce from 'lodash.debounce';
  import axios from 'axios';

  export default {
    computed: {
      addressEntered() {
        return this.$store.state.addressEntered;
      },
      containerClass() {
        if (this.isMobileOrTablet) {
          return 'pvc-search-control-container-mobile';
        } else {
          return 'pvc-search-control-container';
        }
      },
      inputClass() {
        if (this.isMobileOrTablet) {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'pvc-search-control-input-mobile';
            } else {
              return 'pvc-search-control-input-mobile-full';
            }
          } else {
            return 'pvc-search-control-input-mobile';
          }
        } else {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'pvc-search-control-input';
            } else {
              return 'pvc-search-control-input-full';
            }
          } else {
            return 'pvc-search-control-input';
          }
        }
      },
      buttonClass() {
        if (this.isMobileOrTablet) {
          return 'pvc-search-control-button-mobile'
        } else {
          return 'pvc-search-control-button'
        }
      },
      addressAutocompleteEnabled() {
        // TODO this is temporarily disabled
        if (this.$config.addressAutocomplete.enabled === true) {
          return true;
        } else {
          return false;
        }
      },
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
    },
    methods: {
      didType: _.debounce(function (e) {
          // console.log('debounce is running');
          if (this.addressAutocompleteEnabled) {
            // console.log('debounce is running, e:', e, 'this:', this);
            if (e.key === "ArrowDown") {
              document.getElementById('address-candidate-list-0').focus();
              return;
            }
            const { value } = e.target;
            this.getCandidates(value);
            this.$store.commit('setAddressEntered', value);
            if (e.key !== "Enter") {
              console.log('AddressInput.vue didType is running, e.key !== "Enter"');
              this.$store.commit('setShouldShowAddressCandidateList', true);
            }
          }
        }, 300
      ),
      getCandidates(address) {
        // console.log('getCandidates is running, address:', address);
        axios.get('https://cqvfg1pm72.execute-api.us-east-1.amazonaws.com/dev/first-api-test/', {
          params: {
            address,
          },
        })
          .then(this.didGetCandidates)
          .catch(this.didGetCandidatesError);
      },
      didGetCandidates(res) {
        const { matches } = res.data;
        // console.log('matches:', matches, 'matches map:', matches.map(x => x.address));
        const matchesArray = matches.map(x => x.address);
        this.$store.commit('setCandidates', matchesArray);
      },
      didGetCandidatesError(err) {
        console.log('error getting candidates', err);
        this.$store.commit('setCandidates', []);
      },
      handleFormX() {
        this.$store.commit('setAddressEntered', '');
        this.$store.commit('setShouldShowAddressCandidateList', false);
        this.$store.commit('setCandidates', []);
      },
      handleSearchFormSubmit() {
        let value;
        if (this.addressAutocompleteEnabled){
          value = this.$store.state.addressEntered;
        } else {
          value = $('#pvc-search-control-input').val();
        }
        // console.log('phila-vue-comps AddressInput.vue, handleSearchFormSubmit is running, value:', value);
        this.$controller.handleSearchFormSubmit(value);
        this.$store.commit('setAddressEntered', value);
      },
    }
  };
</script>

<style scoped>

.pvc-search-control-form {
  display: inline-block;
}

.pvc-search-control-button {
  display: inline-block;
  color: #fff;
  width: 50px;
  background: #2176d2;
  line-height: 48px;
  padding: 0px;
}

.pvc-search-control-button-mobile {
  display: inline-block;
  color: #fff;
  width: 38px;
  height: 38px;
  background: #2176d2;
  line-height: 38px;
  padding: 0px;
  padding-top: 1px;
}

.pvc-search-control-container {
  height: 48px;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
  margin-bottom: 10px;
  width: 305px;
}

.pvc-search-control-container-mobile {
  height: 38px;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
  margin-bottom: 10px;
  width: 305px;
}

.pvc-search-control-input {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
}

.pvc-search-control-input-full {
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 197px;
}

.pvc-search-control-input-mobile {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
  height: 38px;
}

.pvc-search-control-input-mobile-full {
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 209px;
  height: 38px;
}

/*small*/
@media screen and (max-width: 39.9375em) {

  .pvc-search-control-container {
    width: 255px;
  }

  .pvc-search-control-container-mobile {
    width: 255px;
  }

  .pvc-search-control-input {
    width: 200px;
  }

  .pvc-search-control-input-mobile {
    width: 200px;
  }

  .pvc-search-control-input-full {
    width: 147px;
  }

  .pvc-search-control-input-mobile-full {
    width: 158px;
  }

}

</style>
