setC<template>
  <div :class="'pvc-search-control-container ' + this.containerClass"
       :style="this.containerStyle"
  >
    <form @submit.prevent="handleConfigurableInputSubmit"
          autocomplete="off"
          id="search-form"
          class="pvc-search-control-form"
    >
      <input :class="'pvc-search-control-input ' + this.inputClass"
             id="pvc-search-control-input"
             :style="this.inputStyle"
             :placeholder="this.$props.placeholder || 'Search'"
             :value="this.configurableInputValueEntered"
             tabindex="0"
             @keyup="didType"
      />
    </form>
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
  </div>
</template>

<script>
  import debounce from 'lodash.debounce';
  import axios from 'axios';

  export default {
    props: [
      'process',
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
        }
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
      configurableInputValueEntered() {
        return this.$store.state.configurableInputValueEntered;
      },
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
          this.$store.commit('setConfigurableInputValueEntered', value);
        }, 300
      ),
      handleFormX() {
        this.$store.commit('setConfigurableInputValueEntered', '');
      },
      handleConfigurableInputSubmit() {
        const process = this.$props.process || 'mapboard';
        let value;
        if (document.querySelector('#pvc-search-control-input')) {
          value = document.querySelector('#pvc-search-control-input').value;
        } else if (document.querySelector('#pvm-search-control-input')) {
          value = document.querySelector('#pvm-search-control-input').value;
        } else {
          return;
        }
        this.$controller.handleConfigurableInputSubmit(value, process);
        this.$store.commit('setConfigurableInputValueEntered', value);
      },
      handleWindowResize() {
        const configurableInputValueEntered = this.configurableInputValueEntered;
        // console.log('AddressInput.vue handleWindowResize is running', window.innerWidth, 'configurableInputValueEntered:', configurableInputValueEntered);
        if (window.innerWidth >= 850) {
          this.containerStyle.width = this.$props.widthFromConfig + 'px';
          if (configurableInputValueEntered === '' || configurableInputValueEntered === null) {
            this.inputStyle.width = this.$props.widthFromConfig - 55 + 'px';
          } else {
            this.inputStyle.width = this.$props.widthFromConfig - 108 + 'px';
          }
        } else if (window.innerWidth >= 750) {
          this.containerStyle.width = this.$props.widthFromConfig - 100 + 'px';
          if (configurableInputValueEntered === '' || configurableInputValueEntered === null) {
            this.inputStyle.width = this.$props.widthFromConfig - 155 + 'px';
          } else {
            this.inputStyle.width = this.$props.widthFromConfig - 208 + 'px';
          }
        } else {
          this.containerStyle.width = '300px';
          if (configurableInputValueEntered === '' || configurableInputValueEntered === null) {
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
