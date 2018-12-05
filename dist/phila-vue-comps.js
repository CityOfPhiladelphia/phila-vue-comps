(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash.debounce'), require('axios'), require('moment'), require('escape-html'), require('leaflet'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/vue-fontawesome')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash.debounce', 'axios', 'moment', 'escape-html', 'leaflet', '@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome'], factory) :
	(factory((global.philaVueComps = {}),global.debounce,global.axios,global.moment,global.escapeHtml,global.L,global.fontawesomeSvgCore,global.vueFontAwesome));
}(this, (function (exports,debounce,axios,moment,escapeHtml,L,fontawesomeSvgCore,vueFontawesome) { 'use strict';

	debounce = debounce && debounce.hasOwnProperty('default') ? debounce['default'] : debounce;
	axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
	moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
	escapeHtml = escapeHtml && escapeHtml.hasOwnProperty('default') ? escapeHtml['default'] : escapeHtml;
	L = L && L.hasOwnProperty('default') ? L['default'] : L;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var faExternalLink = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'external-link';
	var width = 576;
	var height = 512;
	var ligatures = [];
	var unicode = 'f08e';
	var svgPathData = 'M448 279.196V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h248a24 24 0 0 1 16.97 7.029l16 16C344.09 102.149 333.382 128 312 128H64v320h320V295.196c0-6.365 2.529-12.47 7.029-16.971l16-16C422.148 247.106 448 257.814 448 279.196zM576 37.333C576 16.715 559.285 0 538.667 0H380c-15.464 0-28 12.536-28 28v17.885c0 15.766 13.011 28.424 28.772 27.989l67.203-1.906L199.09 319.09c-9.429 9.363-9.457 24.605-.061 34.001l23.879 23.879c9.396 9.396 24.639 9.369 34.001-.06l247.122-248.885-1.906 67.203c-.434 15.76 12.224 28.772 27.99 28.772H548c15.464 0 28-12.536 28-28V37.333z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faExternalLink = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faExternalLink);
	var faExternalLink_1 = faExternalLink.definition;
	var faExternalLink_2 = faExternalLink.faExternalLink;
	var faExternalLink_3 = faExternalLink.prefix;
	var faExternalLink_4 = faExternalLink.iconName;
	var faExternalLink_5 = faExternalLink.width;
	var faExternalLink_6 = faExternalLink.height;
	var faExternalLink_7 = faExternalLink.ligatures;
	var faExternalLink_8 = faExternalLink.unicode;
	var faExternalLink_9 = faExternalLink.svgPathData;

	var faSearch = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'search';
	var width = 512;
	var height = 512;
	var ligatures = [];
	var unicode = 'f002';
	var svgPathData = 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faSearch = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faSearch);
	var faSearch_1 = faSearch.definition;
	var faSearch_2 = faSearch.faSearch;
	var faSearch_3 = faSearch.prefix;
	var faSearch_4 = faSearch.iconName;
	var faSearch_5 = faSearch.width;
	var faSearch_6 = faSearch.height;
	var faSearch_7 = faSearch.ligatures;
	var faSearch_8 = faSearch.unicode;
	var faSearch_9 = faSearch.svgPathData;

	var faTimes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'times';
	var width = 352;
	var height = 512;
	var ligatures = [];
	var unicode = 'f00d';
	var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faTimes = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faTimes);
	var faTimes_1 = faTimes.definition;
	var faTimes_2 = faTimes.faTimes;
	var faTimes_3 = faTimes.prefix;
	var faTimes_4 = faTimes.iconName;
	var faTimes_5 = faTimes.width;
	var faTimes_6 = faTimes.height;
	var faTimes_7 = faTimes.ligatures;
	var faTimes_8 = faTimes.unicode;
	var faTimes_9 = faTimes.svgPathData;

	var faTimesCircle = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'times-circle';
	var width = 512;
	var height = 512;
	var ligatures = [];
	var unicode = 'f057';
	var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faTimesCircle = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faTimesCircle);
	var faTimesCircle_1 = faTimesCircle.definition;
	var faTimesCircle_2 = faTimesCircle.faTimesCircle;
	var faTimesCircle_3 = faTimesCircle.prefix;
	var faTimesCircle_4 = faTimesCircle.iconName;
	var faTimesCircle_5 = faTimesCircle.width;
	var faTimesCircle_6 = faTimesCircle.height;
	var faTimesCircle_7 = faTimesCircle.ligatures;
	var faTimesCircle_8 = faTimesCircle.unicode;
	var faTimesCircle_9 = faTimesCircle.svgPathData;

	var faCaretLeft = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'caret-left';
	var width = 192;
	var height = 512;
	var ligatures = [];
	var unicode = 'f0d9';
	var svgPathData = 'M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faCaretLeft = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faCaretLeft);
	var faCaretLeft_1 = faCaretLeft.definition;
	var faCaretLeft_2 = faCaretLeft.faCaretLeft;
	var faCaretLeft_3 = faCaretLeft.prefix;
	var faCaretLeft_4 = faCaretLeft.iconName;
	var faCaretLeft_5 = faCaretLeft.width;
	var faCaretLeft_6 = faCaretLeft.height;
	var faCaretLeft_7 = faCaretLeft.ligatures;
	var faCaretLeft_8 = faCaretLeft.unicode;
	var faCaretLeft_9 = faCaretLeft.svgPathData;

	var faCaretRight = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, '__esModule', { value: true });
	var prefix = 'fas';
	var iconName = 'caret-right';
	var width = 192;
	var height = 512;
	var ligatures = [];
	var unicode = 'f0da';
	var svgPathData = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';

	exports.definition = {
	  prefix: prefix,
	  iconName: iconName,
	  icon: [
	    width,
	    height,
	    ligatures,
	    unicode,
	    svgPathData
	  ]};

	exports.faCaretRight = exports.definition;
	exports.prefix = prefix;
	exports.iconName = iconName;
	exports.width = width;
	exports.height = height;
	exports.ligatures = ligatures;
	exports.unicode = unicode;
	exports.svgPathData = svgPathData;
	});

	unwrapExports(faCaretRight);
	var faCaretRight_1 = faCaretRight.definition;
	var faCaretRight_2 = faCaretRight.faCaretRight;
	var faCaretRight_3 = faCaretRight.prefix;
	var faCaretRight_4 = faCaretRight.iconName;
	var faCaretRight_5 = faCaretRight.width;
	var faCaretRight_6 = faCaretRight.height;
	var faCaretRight_7 = faCaretRight.ligatures;
	var faCaretRight_8 = faCaretRight.unicode;
	var faCaretRight_9 = faCaretRight.svgPathData;

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .list-group[data-v-557d70bd] { display: inline-block; height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } /* .list-group-full { display: inline-block; height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } */ /* .list-group-mobile { display: inline-block; height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } .list-group-mobile-full { display: inline-block; height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } */ ul[data-v-557d70bd] { list-style-type: none; margin-left: 0px; } .list-group-item[data-v-557d70bd] { /* width: 237px; */ display: block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); border: 2; background-color: white; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 14px; font-weight: normal; } .list-group-item[data-v-557d70bd]:hover { background-color: #ffefa2; font-weight: bold; } /*small*/ @media screen and (max-width: 39.9375em) { .list-group[data-v-557d70bd] { width: 200px; } .list-group-mobile[data-v-557d70bd] { width: 200px; } .list-group-full[data-v-557d70bd] { width: 147px; } .list-group-mobile-full[data-v-557d70bd] { width: 158px; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	function generateUniqueId() {
	  return 'id-' + Math.random().toString(36).substring(7);
	}

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvc-search-control-form[data-v-6340ff46] { display: inline-block; } /* Container */ .pvc-search-control-container[data-v-6340ff46] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 305px; } .pvc-container-non-mobile[data-v-6340ff46] { height: 48px; } .pvc-container-mobile[data-v-6340ff46] { height: 38px; } /* Input */ .pvc-search-control-input[data-v-6340ff46] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvc-input-non-mobile[data-v-6340ff46] { height: 48px; } .pvc-input-mobile[data-v-6340ff46] { height: 38px; } /* Button */ .pvc-search-control-button[data-v-6340ff46] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvc-button-non-mobile[data-v-6340ff46] { height: 48px; line-height: 48px; } .pvc-button-mobile[data-v-6340ff46] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

(	{render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvc-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvc-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSearchFormSubmit($event)}}},[_c('input',{class:'pvc-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":_vm.inputID,"placeholder":this.$props.placeholder || 'Search the map',"tabindex":"0"},domProps:{"value":this.addressEntered},on:{"keyup":_vm.didType}})]),_vm._v(" "),(this.addressEntered != '' && this.addressEntered != null)?_c('button',{class:'pvc-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('font-awesome-icon',{attrs:{"icon":"times"}})],1):_vm._e(),_vm._v(" "),_c('button',{class:'pvc-search-control-button ' + this.buttonClass,attrs:{"tabindex":"-1"},on:{"click":this.handleSearchFormSubmit}},[_c('font-awesome-icon',{attrs:{"icon":"search"}})],1),_vm._v(" "),_vm._t("address-candidates-slot")],2)},staticRenderFns: [],_scopeId: 'data-v-6340ff46',
	  props: [
	    'widthFromConfig',
	    'placeholder' ],
	  data: function data() {
	    var data = {
	      containerStyle: {
	        'width': '305px',
	      },
	      inputStyle: {
	        'width': '250px',
	      },
	      inputID: generateUniqueId(),
	      addressEntered: null,
	    };
	    return data;
	  },
	  created: function created() {
	    window.addEventListener('resize', this.handleWindowResize);
	    this.handleWindowResize();
	  },
	  watch: {
	    addressEntered: function addressEntered(nextValue) {
	      this.handleWindowResize();
	    }
	  },
	  computed: {
	    // addressEntered() {
	    //   return this.$store.state.addressEntered;
	    // },
	    inputWidth: function inputWidth() {
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
	    inputClass: function inputClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvc-input-mobile';
	      } else {
	        return 'pvc-input-non-mobile';
	      }
	    },
	    containerClass: function containerClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvc-container-mobile';
	      } else {
	        return 'pvc-container-non-mobile';
	      }
	    },
	    buttonClass: function buttonClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvc-button-mobile'
	      } else {
	        return 'pvc-button-non-mobile'
	      }
	    },
	    addressAutocompleteEnabled: function addressAutocompleteEnabled() {
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
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	  },
	  methods: {
	    didType: debounce(function (e) {
	        // console.log('debounce is running');
	        var ref = e.target;
	        var value = ref.value;
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
	    getCandidates: function getCandidates(address) {
	      // console.log('getCandidates is running, address:', address);
	      axios.get('https://cqvfg1pm72.execute-api.us-east-1.amazonaws.com/dev/first-api-test/', {
	        params: {
	          address: address,
	        },
	      })
	        .then(this.didGetCandidates)
	        .catch(this.didGetCandidatesError);
	    },
	    didGetCandidates: function didGetCandidates(res) {
	      var ref = res.data;
	      var matches = ref.matches;
	      // console.log('matches:', matches, 'matches map:', matches.map(x => x.address));
	      var matchesArray = matches.map(function (x) { return x.address; });
	      this.$store.commit('setCandidates', matchesArray);
	    },
	    didGetCandidatesError: function didGetCandidatesError(err) {
	      console.log('error getting candidates', err);
	      this.$store.commit('setCandidates', []);
	    },
	    handleFormX: function handleFormX() {
	      console.log('handleFormX is running');
	      this.$data.addressEntered = '';
	      // this.$store.commit('setAddressEntered', '');
	      this.$store.commit('setShouldShowAddressCandidateList', false);
	      this.$store.commit('setCandidates', []);
	    },
	    handleSearchFormSubmit: function handleSearchFormSubmit() {
	      console.log('handleSearchFormSubmit is running');
	      var value;
	      if (this.addressAutocompleteEnabled){
	        value = addressEntered;
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
	    handleWindowResize: function handleWindowResize() {
	      var addressEntered = this.addressEntered;
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
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvc-search-control-form[data-v-17bde5b1] { height: 300px; display: inline-block; } /* Container */ .pvc-search-control-container[data-v-17bde5b1] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 455px; /* width: 305px; */ } .pvc-container-non-mobile[data-v-17bde5b1] { height: 48px; } .pvc-container-mobile[data-v-17bde5b1] { height: 38px; } /* Select */ .pvc-search-control-select[data-v-17bde5b1] { display: inline-block; width: 150px; margin-bottom: 0px; } /* Input */ .pvc-search-control-input[data-v-17bde5b1] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvc-input-non-mobile[data-v-17bde5b1] { height: 48px; } .pvc-input-mobile[data-v-17bde5b1] { height: 38px; } /* Button */ .pvc-search-control-button[data-v-17bde5b1] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvc-button-non-mobile[data-v-17bde5b1] { height: 48px; line-height: 48px; } .pvc-button-mobile[data-v-17bde5b1] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

(	{render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvc-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvc-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();}}},[_c('select',{staticClass:"pvc-search-control-select",style:(this.selectStyle),attrs:{"id":_vm.selectID}},[_c('option',{attrs:{"value":"address"}},[_vm._v("address")]),_vm._v(" "),_c('option',{attrs:{"value":"owner"}},[_vm._v("owner")])]),_vm._v(" "),_c('input',{class:'pvc-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":_vm.inputID,"placeholder":this.$props.placeholder || 'Search',"tabindex":"0"},domProps:{"value":this.configurableInputValueEntered},on:{"keyup":_vm.didType}}),_vm._v(" "),(this.configurableInputValueEntered != '' && this.configurableInputValueEntered != null)?_c('button',{class:'pvc-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('font-awesome-icon',{attrs:{"icon":"times"}})],1):_vm._e(),_vm._v(" "),_c('button',{class:'pvc-search-control-button ' + this.buttonClass,attrs:{"tabindex":"-1"},on:{"click":this.handleConfigurableInputSubmit}},[_c('font-awesome-icon',{attrs:{"icon":"search"}})],1)])])},staticRenderFns: [],_scopeId: 'data-v-17bde5b1',
	  props: [
	    'process',
	    'widthFromConfig',
	    'placeholder' ],
	  data: function data() {
	    var data = {
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
	    };
	    return data;
	  },
	  created: function created() {

	    window.addEventListener('resize', this.handleWindowResize);
	    this.handleWindowResize();
	  },
	  watch: {
	    configurableInputValueEntered: function configurableInputValueEntered(nextValue) {
	      this.handleWindowResize();
	    }
	  },
	  computed: {
	    inputWidth: function inputWidth() {
	      if (this.configurableInputValueEntered === '' || this.configurableInputValueEntered === null) {
	        return this.$props.widthFromConfig - 55;
	      } else {
	        return this.$props.widthFromConfig - 108;
	      }
	    },
	    inputClass: function inputClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvc-input-mobile';
	      } else {
	        return 'pvc-input-non-mobile';
	      }
	    },
	    containerClass: function containerClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvc-container-mobile';
	      } else {
	        return 'pvc-container-non-mobile';
	      }
	    },
	    buttonClass: function buttonClass() {
	      if (this.isMobileOrTablet) {
	        return 'pvc-button-mobile'
	      } else {
	        return 'pvc-button-non-mobile'
	      }
	    },
	    isMobileOrTablet: function isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	  },
	  methods: {
	    didType: debounce(function (e) {
	        // console.log('debounce is running');
	        var ref = e.target;
	        var value = ref.value;
	        this.$data.configurableInputValueEntered = value;
	        // this.$store.commit('setConfigurableInputValueEntered', value);
	      }, 300
	    ),
	    handleFormX: function handleFormX() {
	      console.log('handleFormX is running');
	      this.$data.configurableInputValueEntered = '';
	      // this.$store.commit('setConfigurableInputValueEntered', '');
	    },
	    handleConfigurableInputSubmit: function handleConfigurableInputSubmit() {
	      console.log('handleConfigurableInputSubmit is running');
	      var process = this.$props.process || 'mapboard';
	      var searchCategory, value;
	      // if (document.querySelector('#' + this.$data.selectID)) {
	      var e = document.getElementById(this.$data.selectID);
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
	    handleWindowResize: function handleWindowResize() {
	      var configurableInputValueEntered = this.configurableInputValueEntered;
	      var theWidth = window.innerWidth;
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
	});

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var TopicComponent = {
	  // props: ['slots', 'options', 'item'],
	  props: {
	    'slots': {
	      type: Object,
	      default: function() { return {} }
	    },
	    'options': {
	      type: Object,
	      default: function() { return {} }
	    },
	    'item': {
	      type: Object,
	      default: function() { return {} }
	    },
	  },
	  beforeCreate: function beforeCreate() {
	    // console.log('TopicComponent.vue beforeCreate is running, this:', this);
	  },
	  created: function created() {
	    // console.log('TopicComponent.vue created is running, this.$props.slots:', this.$props.slots);
	  },
	  computed: {
	    nullValue: function nullValue() {
	      var options = this.options || {};
	      return options.nullValue;
	    },
	  },
	  methods: {
	    evaluateSlot: function evaluateSlot(valOrGetter, transforms, nullValue) {
	      var this$1 = this;
	      if ( transforms === void 0 ) transforms = [];
	      if ( nullValue === void 0 ) nullValue = '';

	      // console.log('evaluateSlot is running, valOrGetter:', valOrGetter);
	      // check for null val/getter
	      if (!valOrGetter) {
	        return valOrGetter;
	      }

	      var valOrGetterType = typeof valOrGetter;
	      var val;

	      // fn
	      if (valOrGetterType === 'function') {
	        var state = this.$store.state;
	        var controller = this.$controller;
	        var getter = valOrGetter;

	        // const getterText = String(getter);
	        // const depsRe = /state(\.\w+)+/g;
	        // const depsText = getterText.match(depsRe);
	        // const deps = depsText.map(eval);

	        var item = this.item;
	        // console.log('in evaluateSlot, item:', item);

	        // if this comp is associated with an "item" (generally some object
	        // from a list of things, e.g. dor parcels), pass the item itself
	        // as well when evaluating
	        if (item) {
	          val = getter(state, item, controller);
	        } else {
	          // console.log('evaluateSlot, about to get value');
	          val = getter(state);
	          // console.log('state:', state, 'val:', val);
	        }
	      } else {
	        val = valOrGetter;
	      }

	      // format nulls but not falses
	      if (val === false) {

	      } else if (!val) {
	        return nullValue;
	      }

	      // apply transforms
	      var loop = function () {
	        // get transform definition from config by name
	        var transformKey = list[i];

	        var transform = this$1.$config.transforms[transformKey];
	        // make object of (relevant) globals by filtering window object
	        var globals = (void 0);
	        var globalKeys = transform.globals;
	        if (globalKeys) {
	          globals = Object.keys(window)
	                        .filter(function (key) { return globalKeys.includes(key); })
	                        .reduce(function (obj, key) {
	                            obj[key] = window[key];
	                            return obj;
	                        }, {});
	        }
	        // run transform
	        var fn = transform.transform;
	        val = fn(val, globals);
	      };

	      for (var i = 0, list = transforms; i < list.length; i += 1) loop();

	      return val;
	    },

	    // not sure how children can use this. `this` isn't binding correctly at
	    // the time the child gets instantiated.
	    // getComputedProperties() {
	    //   const slots = this.slots;
	    //   return Object.keys(slots).reduce((o, key) => {
	    //     const valOrGetter = slots[key];
	    //     // wrap slot val/getter in evaluator fn
	    //     o[key] = () => {
	    //       this.evaluateSlot(valOrGetter);
	    //     }
	    //     return o;
	    //   }, {});
	    // }
	  },
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=AnyHeader.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .external-link[data-v-38fcd5f5] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var ExternalLink = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"external-link"},[_c('a',{attrs:{"target":"_blank","href":_vm.externalLinkHref}},[_vm._v(" "+_vm._s(_vm.externalLinkText)+" "),_c('font-awesome-icon',{attrs:{"icon":"external-link","aria-hidden":"true"}})],1)])},staticRenderFns: [],_scopeId: 'data-v-38fcd5f5',
	  mixins: [TopicComponent],
	  props: ['count', 'limit', 'type'],
	  computed: {
	    // for horizontal tables only
	    externalLinkCount: function externalLinkCount() {
	      return this.count - this.limit;
	    },
	    // for horizontal or vertical tables
	    externalLinkAction: function externalLinkAction() {
	      var actionFn = this.options.action;
	      if (actionFn) {
	        return actionFn(this.externalLinkCount) || 'See more at ';
	      }
	    },
	    // for anything else, for getting data from the state
	    externalLinkDataFromState: function externalLinkDataFromState() {
	      // return this.options.externalLink.action || 'See more at ';
	      var stateData = this.options.data;
	      return this.evaluateSlot(stateData);
	    },
	    externalLinkText: function externalLinkText() {
	      if (this.options) {
	        var name = this.options.name  || '';
	        // const preText = this.options.preText;
	        // const postText = this.options.postText;

	        if (this.type === 'vertical-table') {
	        // if (this.externalLinkAction) {
	          if (name) {
	            return ((this.externalLinkAction) + " at " + name);
	          } else {
	            return ("" + (this.externalLinkAction));
	          }
	        } else if (this.type === 'horizontal-table') {
	          // if (name) {
	          //   return `${this.externalLinkAction} at ${name}`;
	          // } else {
	            return ("" + (this.externalLinkAction));
	          // }
	        } else {
	          return ("" + (this.externalLinkDataFromState))
	        }
	      } else {
	        return null;
	      }
	    },
	    externalLinkHref: function externalLinkHref() {
	      if (this.options) {
	        return this.evaluateSlot(this.options.href);
	      } else {
	        return null;
	      }
	    },
	    // the number of items that aren't being shown (e.g. See 54 more...)
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-badge[data-v-d6ffef7a] { /*width: 300px;*/ padding: 0; margin: 0 auto; margin-bottom: inherit; } @media (max-width: 640px) { .mb-badge[data-v-d6ffef7a] { width: 100%; } } /*REVIEW this should use foundation classes*/ @media (min-width: 640px) { .mb-badge[data-v-d6ffef7a] { width: 325px; } } .mb-badge-header[data-v-d6ffef7a] { color: #fff; font-weight: bold; text-align: center; padding-top: 2px; padding-bottom: 2px; } .mb-badge-body[data-v-d6ffef7a] { padding: 12px; } .mb-badge-body > h1[data-v-d6ffef7a] { margin: 0; margin-bottom: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=ButtonComp.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .wrapper[data-v-3cf74c50] { } .callout[data-v-3cf74c50] { margin-top: 1rem; position: inherit; height: auto; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=CollectionSummary.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=Division.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=ePayForm.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .popover-link { border-bottom: 1px dotted; font-weight: bold; /* color: #444; */ color: #2176d2; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .active[data-v-36d2e900] { background: #F3D661; } td[data-v-36d2e900] { font-size: 15px; text-align: left; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inline-block[data-v-6dbe65ac] { display: inline-block; } .vertically-centered[data-v-6dbe65ac] { display: inline-block; vertical-align: middle; } .pvc-horizontal-table[data-v-6dbe65ac] { margin-bottom: 10px !important; } .pvc-horizontal-table-controls[data-v-6dbe65ac] { text-align: center; vertical-align: middle; margin-bottom: 10px; } /* dropdown filters */ .pvc-select-text[data-v-6dbe65ac] { font-size: 16px; padding-right: 5px; padding-left: 5px; } .pvc-select[data-v-6dbe65ac] { width: auto; height: 40px; vertical-align: middle; /*padding-right: 20px;*/ } .pvc-select-option[data-v-6dbe65ac] { display: inline-block; padding-right: 100px; margin-right: 100px; } /* input filters using text */ .pvc-search-control-input[data-v-6dbe65ac] { height: 40px !important; line-height: 48px; padding: 8px; font-size: 16px; width: 300px; /*margin-left: 10px;*/ } /*REVIEW this repeats a lot of .pvc-search-control-input. can it be refactored?*/ .pvc-search-control-input-full[data-v-6dbe65ac] { height: 40px !important; line-height: 48px; padding: 8px; font-size: 16px; width: 260px; } .pvc-search-control-button[data-v-6dbe65ac] { width: 40px; background: #ccc; line-height: 40px; float: right; } .pvc-download-data-button[data-v-6dbe65ac] { float: right; vertical-align: baseline; display: inline-block; } .group[data-v-6dbe65ac]:after { content: \"\"; display: table; clear: both; } .pvc-horizontal-table-body[data-v-6dbe65ac] { padding-top: 1rem; padding-bottom: 0.35rem; } .no-padding[data-v-6dbe65ac] { padding-top: 0; padding-bottom: 0; } .center-button[data-v-6dbe65ac] { display: flex; align-items: center; justify-content: center; } .loading[data-v-6dbe65ac] { float: right; } .filter-by-text-form[data-v-6dbe65ac] { border: 2px solid #0f4d90; } table[data-v-6dbe65ac] { /* table-layout: fixed; */ margin: 0; } .external-link[data-v-6dbe65ac] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" img[data-v-3b8b0c0a] { display: block; margin: 0 auto; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" table[data-v-42075018] { margin: 0; } th[data-v-42075018], td[data-v-42075018] { font-size: 15px; text-align: left; } th[data-v-42075018] { width: 30%; } .external-link[data-v-42075018] { padding-top: 5px; } .table-title[data-v-42075018] { /*too much*/ /*margin-top: 1rem;*/ } .table-container[data-v-42075018] { /*this was too much padding for the parcel table, taking out for now*/ /*padding-top: 1rem;*/ margin-bottom: 10px !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var VerticalTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.shouldShowTable)?_c('div',{staticClass:"table-container"},[(_vm.slots.title)?_c('h4',{staticClass:"table-title"},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]):_vm._e(),_vm._v(" "),_c('table',[_c('tbody',_vm._l((_vm.slots.fields),function(field){return _c('tr',[_c('th',{style:(_vm.styles.th || ''),domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.label))}}),_vm._v(" "),(_vm.hasData)?_c('td',{domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.value, field.transforms, _vm.nullValue))}}):_vm._e(),_vm._v(" "),(!_vm.hasData)?_c('td',{domProps:{"innerHTML":_vm._s('')}}):_vm._e()])}))]),_vm._v(" "),(_vm.options && _vm.options.externalLink)?_c('external-link',{attrs:{"options":_vm.options.externalLink,"type":'vertical-table'}}):_vm._e()],1):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-42075018',
	  mixins: [TopicComponent],
	  components: {
	    ExternalLink: ExternalLink,
	  },
	  computed: {
	    styles: function styles() {
	      if (this.$props.options.styles) {
	        return this.$props.options.styles;
	      } else {
	        return '';
	      }
	    },
	    shouldShowTable: function shouldShowTable() {
	      var hasData = this.hasData;
	      if (this.item) {
	        if (this.item.activeTable) {
	          var filterValue = this.item.activeTable;
	          var id = this.options.id;
	          if (filterValue === id) {
	            return true
	            // return hasData;
	          } else {
	            return false;
	          }
	        } else {
	          return true;
	          // return hasData;
	        }
	      } else {
	        return true;
	        // return hasData;
	      }
	    },
	    hasData: function hasData() {
	      var this$1 = this;

	      // console.log(this.topicKey, '-', 'hasData?', this.dataSources);
	      // console.log('vertTable hasData is running, this.$props.options:', this.$props.options, 'this.$config.dataSources:', this.$config.dataSources);

	      // make sure the following is true for all data sources
	      if (!this.$props.options.dataSources) {
	        return true;
	      } else {
	        var hasData = this.$props.options.dataSources.every(function (dataSource) {
	          var targetsFn = this$1.$config.dataSources[dataSource].targets;

	          // if the data source is configured for targets
	          if (targetsFn) {
	            var targetsMap = this$1.$store.state.sources[dataSource].targets;
	            var targets = Object.values(targetsMap);

	            // but there are no targets for this address, return false
	            if (targets.length === 0) {
	              return false;
	            }

	            // if there are targets for this address, make sure none of them
	            // are "waiting"
	            return targets.every(function (target) { return target.status !== 'waiting'; });

	          // if the data source is not configured for targets, just check that
	          // it has data
	          } else {
	            return !!this$1.$store.state.sources[dataSource].data;
	          }
	        });

	        return hasData;
	      }
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .container[data-v-15b137ab] { margin-bottom: 30px; } .button[data-v-15b137ab] { margin-right: 10px; margin-top: 0px; margin-bottom: 0px; } .overlay-toggle[data-v-15b137ab] { border: 1px solid #f99300 !important; color: #f99300 !important; background: #fff !important; } .overlay-toggle.mouseover[data-v-15b137ab] { background: #444 !important; color: white !important; } .overlay-toggle.active[data-v-15b137ab] { background: #f99300 !important; color: #fff !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=Paragraph.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=SpanComp.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .list[data-v-2473e0a4] { position: inherit; margin-bottom: 0px !important; } ul[data-v-2473e0a4] { list-style: none; padding-left: 0; margin-left: 0; } .message-p[data-v-2473e0a4] { margin-bottom: 0px; } /*.topic-body { margin-bottom: 0px; }*/ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .tabs-panel[data-v-291fce0c] { padding: 20px; padding-bottom: 0px; } /*recreate phila patterns tab styles*/ .tabs-title a[data-v-291fce0c] { border-left: 5px solid #fff; } .tabs-title.is-active a[data-v-291fce0c] { border-left: 5px solid #f99300; /*when you first load the page, the active tab doesn't turn gray for some reason. forcing it here.*/ background: #f0f0f0; } .tabs-title a[data-v-291fce0c]:hover { border-left: 5px solid #f99300; background: #f0f0f0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .tabs-panel[data-v-7953bbb6] { padding: 20px; } .inline-block[data-v-7953bbb6] { display: inline-block; } .vertically-centered[data-v-7953bbb6] { display: inline-block; vertical-align: middle; } .mb-horizontal-table-controls[data-v-7953bbb6] { text-align: center; vertical-align: middle; margin-bottom: 10px; } /* dropdown filters */ .mb-select-text[data-v-7953bbb6] { font-size: 16px; padding-right: 5px; padding-left: 5px; } .mb-select[data-v-7953bbb6] { width: auto; height: 40px; vertical-align: middle; /*padding-right: 20px;*/ } .mb-select-option[data-v-7953bbb6] { display: inline-block; padding-right: 100px; margin-right: 100px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*REVIEW these aren't prefixed `mb-`because they're scoped, but it feels inconsistent?*/ .topic-header[data-v-2db893cf] { background: #f5f5f5; border: 1px solid #ddd; display: block; font-size: 18px; font-weight: normal; min-height: 70px; line-height: 25px; padding: 10px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); margin-bottom: 8px; display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: space-between; } .topic-header[data-v-2db893cf]:hover { background: #fff; color: inherit; } .topic-header-content[data-v-2db893cf] { display: flex; flex-direction: row; align-items: center; } .topic-header-icon[data-v-2db893cf] { padding-left: 10px; padding-right: 10px; } .topic-header-label-holder[data-v-2db893cf] { margin-left: 15px; } .topic-body[data-v-2db893cf] { padding: 5px; margin-bottom: 10px; } .topic-body-enter-active[data-v-2db893cf], .topic-body-leave-active[data-v-2db893cf] { transition: opacity 0.18s; } .topic-body-enter[data-v-2db893cf], .topic-body-leave-to[data-v-2db893cf] { opacity: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pl-alert { position: fixed; right: 0; bottom: 0; /* height: 100%; */ /* height: 300px; */ width: 100%; background: rgba(68, 68, 68, 0.95); color: #fff; z-index: 10000; font-size: 1.25em; margin: 0 auto; padding: 1em; overflow-y: auto; } .pl-alert-body { width: 75%; margin-left: auto; margin-right: auto; margin-bottom: 0 auto; margin-top: 50px; } .pl-alert-close-button { position: fixed; right: 40px; /* float: right; */ cursor: pointer; } .pl-alert a { color: #a5c0e4 !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .topic-component[data-v-6c6d5231] { /* margin-bottom: 10px !important; */ } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-badge[data-v-7ccdb9d8] { /*width: 300px;*/ padding: 0; margin: 0 auto; /* margin-bottom: inherit; */ margin-bottom: 10px !important; } @media (max-width: 640px) { .mb-badge[data-v-7ccdb9d8] { width: 100%; } } /*REVIEW this should use foundation classes*/ @media (min-width: 640px) { .mb-badge[data-v-7ccdb9d8] { width: 325px; } } .mb-badge-header[data-v-7ccdb9d8] { color: #fff; font-weight: bold; text-align: center; padding-top: 2px; padding-bottom: 2px; } .mb-badge-body[data-v-7ccdb9d8] { padding: 12px; } .mb-badge-body > h1[data-v-7ccdb9d8] { margin: 0; margin-bottom: 5px; } .external-link[data-v-7ccdb9d8] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .toggle-tab { position: absolute; left: 0px; border-width: 1.3px; border-color: #CAC9C9; height: 48px; line-height: 58px; width:24px; background-color: white; display: inline-block; z-index: 500; */ /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ /* } */ .toggle-tab[data-v-c0f28abc] { display: none; } .align-span[data-v-c0f28abc] { margin-left: 6px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-c0f28abc] { position: absolute; right: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 48px; line-height: 56px; width:24px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .toggle-tab[data-v-25262138] { display: none; } .align-span[data-v-25262138] { margin-left: 14px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-25262138] { position: absolute; top: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 24px; line-height: 16px; width:48px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-panel-topics-greeting[data-v-2d681dc9] { padding-top: 20px; } .greeting[data-v-2d681dc9] { font-size: 20px; color: #444; padding: 14px; } .greeting-error[data-v-2d681dc9] { border-left-color: #ff0000; } /*medium*/ @media screen and (min-width: 750px) { .mb-panel-topics-greeting[data-v-2d681dc9] { /*make this scroll on medium screens*/ /*REVIEW this is a little hacky. the 120px shouldn't be hard-coded.*/ height: calc(100vh - 120px); overflow: auto; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .legend { margin-left: 10px; } ul { list-style: none; margin-left: 0px; } ul ul { list-style: none; margin-left: 0px; } li { list-style: none; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .slider-wrapper { /*display: inline-block;*/ width: 250px; /*height: 50px;*/ /*padding-top: 3px; margin-bottom: 8px;*/ } .slider-wrapper input { /*padding-top: 3px; padding-bottom: 8px; margin-bottom: 8px;*/ width: 250px; /*height: 20px;*/ } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .sliderDiv[data-v-02d0375a] { height: 60px; } .flex[data-v-02d0375a] { margin-bottom: 16px; } .metadata-link[data-v-02d0375a] { display: inline-block; height: 10px; width: 10px; /*border: solid; border-width: 1px;*/ } .download-select[data-v-02d0375a] { width: 200px; } .div-row[data-v-02d0375a] { position: relative; margin-bottom: 12px; } /* input[type=\"checkbox\"] { width: 25px; height: 25px; position: absolute; top: 50%; margin-top: -10px; margin-left: 32px; cursor: pointer; } */ a[data-v-02d0375a] { position: absolute; /* top: 50%; */ /* margin-top: -10px; */ /*margin-left: 25px;*/ } input[type=checkbox]+label[for][data-v-02d0375a] { font-size: 16px; } input[type=checkbox]+label[data-v-02d0375a]::before { position: absolute; margin-top: -12px; font-size: 30px; padding-right: 5px; } .disabled[data-v-02d0375a] { color: #d3d3d3 !important; } input[type=checkbox]+label.disabled[data-v-02d0375a]::before { color: #d3d3d3; } .label-text[data-v-02d0375a] { /* position: absolute; */ display: inline-block; /* margin-top: 4px; */ margin-left: 0px; padding-left: 30px; } .layer-name[data-v-02d0375a] { font-weight: normal; vertical-align: middle; display: inline-block; margin-left: 30px; margin-bottom: 6px; } .tag-title[data-v-02d0375a] { padding-left: 30px; font-weight: normal; font-style: italic; font-size: 14px; color: red; } .tag-holder[data-v-02d0375a] { /* display: inline-block; */ padding-left: 30px; font-weight: normal; font-size: 14px; color: red; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var initialState = {
	  // configurableInputCategorySelected: '',
	  // configurableInputValueEntered: '',
	  shouldShowAddressCandidateList: false,
	  popover: {
	    open: false,
	    text: '',
	    options: {},
	  },
	  fullScreenTopicsEnabled: false,
	};

	var pvmStore = {
	  state: initialState,
	  mutations: {
	    // setConfigurableInputCategorySelected(state, payload) {
	    //   state.configurableInputCategorySelected = payload;
	    // },
	    // setConfigurableInputValueEntered(state, payload) {
	    //   state.configurableInputValueEntered = payload;
	    // },
	    setShouldShowAddressCandidateList: function setShouldShowAddressCandidateList(state, payload) {
	      state.shouldShowAddressCandidateList = payload;
	    },
	    setPopoverOpen: function setPopoverOpen(state, payload) {
	      state.popover.open = payload;
	    },
	    setPopoverText: function setPopoverText(state, payload) {
	      state.popover.text = payload;
	    },
	    setPopoverOptions: function setPopoverOptions(state, payload) {
	      state.popover.options = payload;
	    },
	    setFullScreenTopicsEnabled: function setFullScreenTopicsEnabled(state, payload) {
	      state.fullScreenTopicsEnabled = payload;
	    },
	  }
	};

	/*     .__    .__.__
	______ |  |__ |__|  | _____            ___  ____ __   ____             ____  ____   _____ ______  ______
	\____ \|  |  \|  |  | \__  \    ______ \  \/ /  |  \_/ __ \   ______ _/ ___\/  _ \ /     \\____ \/  ___/
	|  |_> >   Y  \  |  |__/ __ \_ /_____/  \   /|  |  /\  ___/  /_____/ \  \__(  <_> )  Y Y  \  |_> >___ \
	|   __/|___|  /__|____(____  /           \_/ |____/  \___  >          \___  >____/|__|_|  /   __/____  >
	|__|        \/             \/                            \/               \/            \/|__|       \/
	*/
	fontawesomeSvgCore.library.add(faExternalLink_2, faSearch_2, faTimes_2, faTimesCircle_2, faCaretLeft_2, faCaretRight_2);
	console.log('pvcStore:', pvmStore);

	exports.pvcStore = pvmStore;
	exports.VerticalTable = VerticalTable;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=phila-vue-comps.js.map
