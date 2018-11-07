<template>
  <div :class="'pvc-search-control-container ' + this.containerClass"
       :style="this.containerStyle"
  >
    <!-- <form @submit.prevent="handleConfigurableInputSubmit" -->
    <form @submit.prevent
          autocomplete="off"
          id="search-form"
          class="pvc-search-control-form"
    >
      <select class="pvc-search-control-select"
              :id="selectID"
              :style="this.selectStyle"
      >
      <!-- name="select" -->
        <option value="address">address</option>
        <option value="owner">owner</option>
      </select>
      <input :class="'pvc-search-control-input ' + this.inputClass"
             :id="inputID"
             :style="this.inputStyle"
             :placeholder="this.$props.placeholder || 'Search'"
             :value="this.configurableInputValueEntered"
             tabindex="0"
             @keyup="didType"
      />
    <!-- </form> -->
      <button :class="'pvc-search-control-button ' + this.buttonClass"
              v-if="this.configurableInputValueEntered != '' && this.configurableInputValueEntered != null"
              @click="handleFormX"
      >
      <font-awesome-icon icon="times" />
      </button>
      <button :class="'pvc-search-control-button ' + this.buttonClass"
              tabindex="-1"
              @click="this.handleConfigurableInputSubmit"
      >
        <font-awesome-icon icon="search" />
      </button>
    </form>
  </div>
</template>

<script>
  import debounce from 'lodash.debounce';
  import axios from 'axios';
  import generateUniqueId from '../util/unique-id';

  export default {
    props: [
      'process',
      'widthFromConfig',
      'placeholder',
    ],
    data() {
      const data = {
        containerStyle: {
          'width': '455px',
          'height': '48px',
          // 'width': '305px',
        },
        selectStyle: {
          'width': '150px',
        },
        inputStyle: {
          'width': '250px',
        },
        inputID: generateUniqueId(),
        configurableInputValueEntered: null,
        selectID: generateUniqueId(),
        categorySelected: null,
      }
      return data;
    },
    created() {

      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    },
    watch: {
      configurableInputValueEntered(nextValue) {
        this.handleWindowResize();
      }
    },
    computed: {
      inputWidth() {
        if (this.configurableInputValueEntered === '' || this.configurableInputValueEntered === null) {
          return this.$props.widthFromConfig - 55;
        } else {
          return this.$props.widthFromConfig - 108;
        }
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
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
    },
    methods: {
      didType: debounce(function (e) {
          // console.log('debounce is running');
          const { value } = e.target;
          this.$data.configurableInputValueEntered = value;
          // this.$store.commit('setConfigurableInputValueEntered', value);
        }, 300
      ),
      handleFormX() {
        console.log('handleFormX is running');
        this.$data.configurableInputValueEntered = '';
        // this.$store.commit('setConfigurableInputValueEntered', '');
      },
      handleConfigurableInputSubmit() {
        console.log('handleConfigurableInputSubmit is running');
        const process = this.$props.process || 'mapboard';
        let searchCategory, value;
        // if (document.querySelector('#' + this.$data.selectID)) {
        const e = document.getElementById(this.$data.selectID);
        searchCategory = e.options[e.selectedIndex].value;
        // }
        // if (document.querySelector('#pvc-search-control-input')) {
        value = document.querySelector('#' + this.$data.inputID).value;
        // } else if (document.querySelector('#pvm-search-control-input')) {
        //   value = document.querySelector('#pvm-search-control-input').value;
        // } else {
        //   return;
        // }
        this.$controller.filterInputSubmit(value, process, searchCategory);
        this.$data.configurableInputValueEntered = value;
        this.$data.categorySelected = searchCategory;
      },
      handleWindowResize() {
        const configurableInputValueEntered = this.configurableInputValueEntered;
        const theWidth = window.innerWidth;
        // console.log('AddressInput.vue handleWindowResize is running', theWidth, 'configurableInputValueEntered:', configurableInputValueEntered);
        if (window.innerWidth >= 850) {
          this.containerStyle.width = this.$props.widthFromConfig + 'px';
          this.containerStyle.height = '48px';
          this.selectStyle.width = '150px';
          if (configurableInputValueEntered === '' || configurableInputValueEntered === null) {
            // this.inputStyle.width = this.$props.widthFromConfig - 55 + 'px';
            this.inputStyle.width = this.$props.widthFromConfig - 208 + 'px';
          } else {
            // this.inputStyle.width = this.$props.widthFromConfig - 108 + 'px';
            this.inputStyle.width = this.$props.widthFromConfig - 261 + 'px';
          }
        } else if (window.innerWidth >= 750) {
          this.containerStyle.width = this.$props.widthFromConfig - 97 + 'px';
          this.containerStyle.height = '48px';
          this.selectStyle.width = '150px';
          if (configurableInputValueEntered === '' || configurableInputValueEntered === null) {
            // this.inputStyle.width = this.$props.widthFromConfig - 155 + 'px';
            this.inputStyle.width = this.$props.widthFromConfig - 305 + 'px';
          } else {
            // this.inputStyle.width = this.$props.widthFromConfig - 208 + 'px';
            this.inputStyle.width = this.$props.widthFromConfig - 358 + 'px';
          }
        } else {
          // console.log('theWidth:', theWidth);
          this.containerStyle.width = theWidth - 30 + 'px';
          this.containerStyle.height = '92px';
          this.selectStyle.width = theWidth - 40 + 'px';
          if (configurableInputValueEntered === '' || configurableInputValueEntered === null) {
            // this.inputStyle.width = '245px';
            this.inputStyle.width = theWidth - 95 + 'px';
          } else {
            // this.inputStyle.width = '192px';
            this.inputStyle.width = theWidth - 148 + 'px';
          }
        }
      }
    }
  };
</script>

<style scoped>

.pvc-search-control-form {
  height: 300px;
  display: inline-block;
}

/* Container */

.pvc-search-control-container {
  display: inline-block;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
  width: 455px;
  /* width: 305px; */
}

.pvc-container-non-mobile {
  height: 48px;
}

.pvc-container-mobile {
  height: 38px;
}

/* Select */
.pvc-search-control-select {
  display: inline-block;
  width: 150px;
  margin-bottom: 0px;
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
