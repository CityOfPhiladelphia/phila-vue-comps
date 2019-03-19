<template>
  <div :class="'pvc-search-control-container ' + this.containerClass"
       :style="this.containerStyle"
  >
    <form @submit.prevent="handleSearchFormSubmit"
          autocomplete="off"
          id="search-form"
          class="pvc-search-control-form"
    >
      <input :class="'pvc-search-control-input ' + this.inputClass"
             :id="inputID"
             :style="this.inputStyle"
             :placeholder="this.$props.placeholder || 'Search the map'"
             :value="this.addressEntered"
             tabindex="0"
             @keyup="didType"
      />
    </form>
    <button :class="'pvc-search-control-button ' + this.buttonClass"
            v-if="this.addressEntered != '' && this.addressEntered != null"
            @click="handleFormX"
    >
    <!-- v-if="this.addressAutocompleteEnabled && this.addressEntered != '' && this.addressEntered != null" -->
      <font-awesome-icon icon="times" />
    </button>
    <button :class="'pvc-search-control-button ' + this.buttonClass"
            tabindex="-1"
            @click="this.handleSearchFormSubmit"
    >
      <font-awesome-icon icon="search" />
    </button>
    <slot name="address-candidates-slot" />
  </div>
</template>

<script>
  import debounce from 'lodash.debounce';
  import axios from 'axios';
  import generateUniqueId from '../util/unique-id';

  export default {
    name: 'AddressInput',
    props: [
      'widthFromConfig',
      'placeholder',
    ],
    data() {
      const data = {
        containerStyle: {
          'width': '305px',
        },
        inputStyle: {
          'width': '250px',
        },
        inputID: generateUniqueId(),
        addressEntered: null,
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
    computed: {
      // addressEntered() {
      //   return this.$store.state.addressEntered;
      // },
      inputWidth() {
        // if (this.addressAutocompleteEnabled) {
          if (this.addressEntered === '' || this.addressEntered === null) {
            return this.$props.widthFromConfig - 55;
          } else {
            return this.$props.widthFromConfig - 108;
          }
        // } else {
        //   return this.$props.widthFromConfig - 55;
        // }
      },
      inputClass() {
        if (this.isMobileOrTablet) {
          return 'pvc-input-mobile';
        } else {
          return 'pvc-input-non-mobile';
        }
      },
      containerClass() {
        if (this.isMobileOrTablet) {
          return 'pvc-container-mobile';
        } else {
          return 'pvc-container-non-mobile';
        }
      },
      buttonClass() {
        if (this.isMobileOrTablet) {
          return 'pvc-button-mobile'
        } else {
          return 'pvc-button-non-mobile'
        }
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
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
    },
    methods: {
      didType: debounce(function (e) {
          // console.log('debounce is running');
          const { value } = e.target;
          this.$data.addressEntered = value;
          // this.$store.commit('setAddressEntered', value);

          if (this.addressAutocompleteEnabled) {
            // console.log('debounce is running, e:', e, 'this:', this);
            if (e.key === "ArrowDown") {
              document.getElementById('address-candidate-list-0').focus();
              return;
            }
            // const { value } = e.target;
            this.getCandidates(value);
            // this.$store.commit('setAddressEntered', value);
            if (e.key !== "Enter") {
              // console.log('AddressInput.vue didType is running, e.key !== "Enter"');
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
        console.log('handleFormX is running');
        this.$data.addressEntered = '';
        // this.$store.commit('setAddressEntered', '');
        this.$store.commit('setShouldShowAddressCandidateList', false);
        this.$store.commit('setCandidates', []);
      },
      handleSearchFormSubmit() {
        console.log('handleSearchFormSubmit is running');
        let value;
        if (this.addressAutocompleteEnabled){
          value = addressEntered
          // value = this.$store.state.addressEntered;
        } else {
          // if (document.querySelector('#' + inputID)) {
          value = document.querySelector('#' + this.$data.inputID.toString()).value;
          // } else if (document.querySelector('#pvm-search-control-input')) {
          //   value = document.querySelector('#pvm-search-control-input')
          // } else {
          //   return;
          // }
        }
        // console.log('phila-vue-comps AddressInput.vue, handleSearchFormSubmit is running, value:', value);
        this.$controller.handleSearchFormSubmit(value);
        // this.$store.commit('setAddressEntered', value);
      },
      handleWindowResize() {
        const addressEntered = this.addressEntered;
        // console.log('AddressInput.vue handleWindowResize is running', window.innerWidth, 'addressEntered:', addressEntered);
        if (window.innerWidth >= 850) {
          this.containerStyle.width = this.$props.widthFromConfig + 'px';
          if (addressEntered === '' || addressEntered === null) {
            this.inputStyle.width = this.$props.widthFromConfig - 55 + 'px';
          } else {
            this.inputStyle.width = this.$props.widthFromConfig - 108 + 'px';
          }
        } else if (window.innerWidth >= 750) {
          this.containerStyle.width = this.$props.widthFromConfig - 100 + 'px';
          if (addressEntered === '' || addressEntered === null) {
            this.inputStyle.width = this.$props.widthFromConfig - 155 + 'px';
          } else {
            this.inputStyle.width = this.$props.widthFromConfig - 208 + 'px';
          }
        } else {
          this.containerStyle.width = '300px';
          if (addressEntered === '' || addressEntered === null) {
            this.inputStyle.width = '245px';
          } else {
            this.inputStyle.width = '192px';
          }
        }
      }
    }
  };
</script>

<style scoped>

.pvc-search-control-form {
  display: inline-block;
}

/* Container */

.pvc-search-control-container {
  display: inline-block;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
  width: 305px;
}

.pvc-container-non-mobile {
  height: 48px;
}

.pvc-container-mobile {
  height: 38px;
}


/* Input */

.pvc-search-control-input {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
}

.pvc-input-non-mobile {
  height: 48px;
}

.pvc-input-mobile {
  height: 38px;
}


/* Button */

.pvc-search-control-button {
  display: inline-block;
  color: #fff;
  background: #2176d2;
  padding: 0px;
  width: 50px;
}

.pvc-button-non-mobile {
  height: 48px;
  line-height: 48px;
}

.pvc-button-mobile {
  height: 38px;
  line-height: 38px;
  padding-top: 1px;
}


</style>
