(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash.debounce'), require('axios'), require('moment'), require('escape-html'), require('jspdf'), require('jspdf-autotable'), require('leaflet'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/vue-fontawesome')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash.debounce', 'axios', 'moment', 'escape-html', 'jspdf', 'jspdf-autotable', 'leaflet', '@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome'], factory) :
	(factory((global.philaVueComps = {}),global.debounce,global.axios,global.moment,global.escapeHtml,global.jsPDF,global.jspdfAutotable,global.L,global.fontawesomeSvgCore,global.vueFontAwesome));
}(this, (function (exports,debounce,axios,moment,escapeHtml,jsPDF,jspdfAutotable,L,fontawesomeSvgCore,vueFontawesome) { 'use strict';

	debounce = debounce && debounce.hasOwnProperty('default') ? debounce['default'] : debounce;
	axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
	moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
	escapeHtml = escapeHtml && escapeHtml.hasOwnProperty('default') ? escapeHtml['default'] : escapeHtml;
	jsPDF = jsPDF && jsPDF.hasOwnProperty('default') ? jsPDF['default'] : jsPDF;
	jspdfAutotable = jspdfAutotable && jspdfAutotable.hasOwnProperty('default') ? jspdfAutotable['default'] : jspdfAutotable;
	L = L && L.hasOwnProperty('default') ? L['default'] : L;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var faExternalLink = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
	  icon: [width, height, ligatures, unicode, svgPathData]
	};
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
	  icon: [width, height, ligatures, unicode, svgPathData]
	};
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
	  icon: [width, height, ligatures, unicode, svgPathData]
	};
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
	  icon: [width, height, ligatures, unicode, svgPathData]
	};
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
	  icon: [width, height, ligatures, unicode, svgPathData]
	};
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
	  icon: [width, height, ligatures, unicode, svgPathData]
	};
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























	var AddressCandidateList = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowAddressCandidateList),expression:"this.shouldShowAddressCandidateList"}],class:this.listGroupClass,style:(this.listStyle)},[_c('ul',_vm._l((_vm.candidates),function(candidate,i){return _c('li',[_c('a',{staticClass:"list-group-item",attrs:{"href":_vm.createLink(candidate),"tabindex":"-1","id":'address-candidate-list-' + i},on:{"click":function($event){_vm.closeAddressCandidateList(candidate);},"keydown":_vm.maybeUsedArrow}},[_vm._v(" "+_vm._s(candidate)+" ")])])}))])},staticRenderFns: [],_scopeId: 'data-v-557d70bd',
	  name: 'AddressCandidateList',
	  data() {
	    const data = {
	      listStyle: {
	        'width': '250px'
	      }
	    };
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
	      const autocompleteMax = this.$config.addressInput.autocompleteMax;
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
	      );
	      if (index !== 0) {
	        indexDown = index - 1;
	      } else {
	        indexDown = 0;
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

	function generateUniqueId() {
	  return 'id-' + Math.random().toString(36).substring(7);
	}

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvc-search-control-form[data-v-6340ff46] { display: inline-block; } /* Container */ .pvc-search-control-container[data-v-6340ff46] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 305px; } .pvc-container-non-mobile[data-v-6340ff46] { height: 48px; } .pvc-container-mobile[data-v-6340ff46] { height: 38px; } /* Input */ .pvc-search-control-input[data-v-6340ff46] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvc-input-non-mobile[data-v-6340ff46] { height: 48px; } .pvc-input-mobile[data-v-6340ff46] { height: 38px; } /* Button */ .pvc-search-control-button[data-v-6340ff46] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvc-button-non-mobile[data-v-6340ff46] { height: 48px; line-height: 48px; } .pvc-button-mobile[data-v-6340ff46] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var AddressInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvc-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvc-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSearchFormSubmit($event)}}},[_c('input',{class:'pvc-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":_vm.inputID,"placeholder":this.$props.placeholder || 'Search the map',"tabindex":"0"},domProps:{"value":this.addressEntered},on:{"keyup":_vm.didType}})]),_vm._v(" "),(this.addressEntered != '' && this.addressEntered != null)?_c('button',{class:'pvc-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('font-awesome-icon',{attrs:{"icon":"times"}})],1):_vm._e(),_vm._v(" "),_c('button',{class:'pvc-search-control-button ' + this.buttonClass,attrs:{"tabindex":"-1"},on:{"click":this.handleSearchFormSubmit}},[_c('font-awesome-icon',{attrs:{"icon":"search"}})],1),_vm._v(" "),_vm._t("address-candidates-slot")],2)},staticRenderFns: [],_scopeId: 'data-v-6340ff46',
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
	    };
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

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvc-search-control-form[data-v-17bde5b1] { height: 300px; display: inline-block; } /* Container */ .pvc-search-control-container[data-v-17bde5b1] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 455px; /* width: 305px; */ } .pvc-container-non-mobile[data-v-17bde5b1] { height: 48px; } .pvc-container-mobile[data-v-17bde5b1] { height: 38px; } /* Select */ .pvc-search-control-select[data-v-17bde5b1] { display: inline-block; width: 150px; margin-bottom: 0px; } /* Input */ .pvc-search-control-input[data-v-17bde5b1] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvc-input-non-mobile[data-v-17bde5b1] { height: 48px; } .pvc-input-mobile[data-v-17bde5b1] { height: 38px; } /* Button */ .pvc-search-control-button[data-v-17bde5b1] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvc-button-non-mobile[data-v-17bde5b1] { height: 48px; line-height: 48px; } .pvc-button-mobile[data-v-17bde5b1] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var ConfigurableInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvc-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvc-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();}}},[_c('select',{staticClass:"pvc-search-control-select",style:(this.selectStyle),attrs:{"id":_vm.selectID}},[_c('option',{attrs:{"value":"address"}},[_vm._v("address")]),_vm._v(" "),_c('option',{attrs:{"value":"owner"}},[_vm._v("owner")])]),_vm._v(" "),_c('input',{class:'pvc-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":_vm.inputID,"placeholder":this.$props.placeholder || 'Search',"tabindex":"0"},domProps:{"value":this.configurableInputValueEntered},on:{"keyup":_vm.didType}}),_vm._v(" "),(this.configurableInputValueEntered != '' && this.configurableInputValueEntered != null)?_c('button',{class:'pvc-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('font-awesome-icon',{attrs:{"icon":"times"}})],1):_vm._e(),_vm._v(" "),_c('button',{class:'pvc-search-control-button ' + this.buttonClass,attrs:{"tabindex":"-1"},on:{"click":this.handleConfigurableInputSubmit}},[_c('font-awesome-icon',{attrs:{"icon":"search"}})],1)])])},staticRenderFns: [],_scopeId: 'data-v-17bde5b1',
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
	    };
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
	  beforeCreate() {
	    // console.log('TopicComponent.vue beforeCreate is running, this:', this);
	  },
	  created() {
	    // console.log('TopicComponent.vue created is running, this.$props.slots:', this.$props.slots);
	  },
	  computed: {
	    nullValue() {
	      const options = this.options || {};
	      return options.nullValue;
	    },
	  },
	  methods: {
	    evaluateSlot(valOrGetter, transforms = [], nullValue = '') {
	      // console.log('evaluateSlot is running, valOrGetter:', valOrGetter);
	      // check for null val/getter
	      if (!valOrGetter) {
	        return valOrGetter;
	      }

	      const valOrGetterType = typeof valOrGetter;
	      let val;

	      // fn
	      if (valOrGetterType === 'function') {
	        const state = this.$store.state;
	        const controller = this.$controller;
	        const getter = valOrGetter;

	        // const getterText = String(getter);
	        // const depsRe = /state(\.\w+)+/g;
	        // const depsText = getterText.match(depsRe);
	        // const deps = depsText.map(eval);

	        const item = this.item;
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
	      for (let transformKey of transforms) {
	        // get transform definition from config by name
	        const transform = this.$config.transforms[transformKey];
	        // make object of (relevant) globals by filtering window object
	        let globals;
	        const globalKeys = transform.globals;
	        if (globalKeys) {
	          globals = Object.keys(window)
	                        .filter(key => globalKeys.includes(key))
	                        .reduce((obj, key) => {
	                            obj[key] = window[key];
	                            return obj;
	                        }, {});
	        }
	        // run transform
	        const fn = transform.transform;
	        val = fn(val, globals);
	      }

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

	var AnyHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.headerType === 'h1')?_c('h1',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h2')?_c('h2',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h3')?_c('h3',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h4')?_c('h4',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h5')?_c('h5',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h6')?_c('h6',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-810eb58e',
	  name: 'AnyHeader',
	  mixins: [TopicComponent],
	  computed: {
	    headerType() {
	      return this.$props.options.headerType;
	    },
	    additionalTags() {
	      return this.$props.slots.additionalTags || [];
	    },
	    message() {
	      // if there is a transform, it needs this textWithTags section
	      let textWithTags = '';
	      for (let tag of this.additionalTags) {
	        textWithTags = textWithTags + '<' + tag + '>';
	      }
	      textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
	      for (let tag of this.additionalTags) {
	        textWithTags = textWithTags + '</' + tag + '>';
	      }
	      return textWithTags;
	    },
	    style() {
	      if (this.$props.options) {
	        return this.$props.options.style || '';
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .external-link[data-v-38fcd5f5] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var ExternalLink = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"external-link"},[_c('a',{attrs:{"target":"_blank","href":_vm.externalLinkHref}},[_vm._v(" "+_vm._s(_vm.externalLinkText)+" "),_c('font-awesome-icon',{attrs:{"icon":"external-link","aria-hidden":"true"}})],1)])},staticRenderFns: [],_scopeId: 'data-v-38fcd5f5',
	  mixins: [TopicComponent],
	  props: ['count', 'limit', 'type'],
	  computed: {
	    // for horizontal tables only
	    externalLinkCount() {
	      return this.count - this.limit;
	    },
	    // for horizontal or vertical tables
	    externalLinkAction() {
	      const actionFn = this.options.action;
	      if (actionFn) {
	        return actionFn(this.externalLinkCount) || 'See more at ';
	      }
	    },
	    // for anything else, for getting data from the state
	    externalLinkDataFromState() {
	      // return this.options.externalLink.action || 'See more at ';
	      const stateData = this.options.data;
	      return this.evaluateSlot(stateData);
	    },
	    externalLinkText() {
	      if (this.options) {
	        const name = this.options.name  || '';
	        // const preText = this.options.preText;
	        // const postText = this.options.postText;

	        if (this.type === 'vertical-table') {
	        // if (this.externalLinkAction) {
	          if (name) {
	            return `${this.externalLinkAction} at ${name}`;
	          } else {
	            return `${this.externalLinkAction}`;
	          }
	        } else if (this.type === 'horizontal-table') {
	          // if (name) {
	          //   return `${this.externalLinkAction} at ${name}`;
	          // } else {
	            return `${this.externalLinkAction}`;
	          // }
	        } else {
	          return `${this.externalLinkDataFromState}`
	        }
	      } else {
	        return null;
	      }
	    },
	    externalLinkHref() {
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

	var Badge = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center"},[_c('div',{staticClass:"mb-badge panel"},[_c('div',{staticClass:"mb-badge-header",style:(_vm.style)},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]),_vm._v(" "),_c('div',{staticClass:"mb-badge-body"},[_c('h1',[_vm._v(_vm._s(_vm.evaluateSlot(_vm.slots.value)))]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.evaluateSlot(_vm.slots.description)))])])]),_vm._v(" "),(_vm.options && _vm.options.externalLink)?_c('external-link',{attrs:{"options":_vm.options.externalLink,"type":'badge'}}):_vm._e()],1)},staticRenderFns: [],_scopeId: 'data-v-d6ffef7a',
	  name: 'Badge',
	  mixins: [TopicComponent],
	  components: {
	    ExternalLink,
	  },
	  computed: {
	    style() {
	      const titleBackgroundValOrFn = (this.options || {}).titleBackground;
	      let titleBackground;

	      if (titleBackgroundValOrFn) {
	        if (typeof titleBackgroundValOrFn === 'function') {
	          titleBackground = titleBackgroundValOrFn(this.$store.state);
	        } else {
	          titleBackground = titleBackgroundValOrFn;
	        }
	      } else {
	        titleBackground = '#444';
	      }

	      return { background: titleBackground };
	    },
	    // externalLinkAction() {
	    //   return this.evaluateSlot(this.options.externalLink.action) || 'See more at ';
	    // },
	    // externalLinkText() {
	    //   const externalLinkConf = this.options.externalLink;
	    //   const actionFn = externalLinkConf.action;
	    //   const name = this.externalLinkAction || '';
	    //   return `${name}`;
	    // },
	    // externalLinkHref() {
	    //   return this.evaluateSlot(this.options.externalLink.href);
	    // },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=ButtonComp.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var ButtonComp = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:'button ' + this.class,style:(this.style),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.evaluateSlot(_vm.slots.buttonAction);}}},[_vm._v(" "+_vm._s(_vm.message)+" ")])},staticRenderFns: [],_scopeId: 'data-v-7ba3a61e',
	  mixins: [TopicComponent],
	  computed: {
	    message() {
	      if (this.$props.slots) {
	        return this.evaluateSlot(this.$props.slots.text);
	      }
	    },
	    class() {
	      if (this.$props.options) {
	        return this.$props.options.class || '';
	      }
	    },
	    style() {
	      if (this.$props.options) {
	        return this.$props.options.style || '';
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .wrapper[data-v-3cf74c50] { } .callout[data-v-3cf74c50] { margin-top: 1rem; position: inherit; height: auto; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Callout = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper grid-y"},[_c('div',{class:'callout ' + this.calloutClass},[(this.message)?_c('p',{domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.components)?_c('topic-component-group',{attrs:{"topic-components":this.components}}):_vm._e()],1)])},staticRenderFns: [],_scopeId: 'data-v-3cf74c50',
	  mixins: [TopicComponent],
	  computed: {
	    calloutClass() {
	      if (this.$props.options) {
	        if (this.$props.options.class) {
	          return this.$props.options.class;
	        } else {
	          return 'columns small-24';
	        }
	      }
	    },
	    message() {
	      if (this.$props.slots) {
	        return this.evaluateSlot(this.$props.slots.text) || '';
	      } else {
	        return '';
	      }
	    },
	    components() {
	      if (this.$props.options) {
	        return this.$props.options.components || null;
	      } else {
	        return null;
	      }
	    },
	  },
	  components: {},
	  beforeCreate() {
	    this.$options.components.TopicComponentGroup = TopicComponentGroup;
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=CollectionSummary.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var CollectionSummary = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',[_vm._v(" "+_vm._s(_vm.summary)+" ")])},staticRenderFns: [],_scopeId: 'data-v-79669948',
	  mixins: [TopicComponent],
	  computed: {
	    // the final stringified output
	    summary() {
	      // get value quantity map
	      const valueQuantities = this.valueQuantities;
	      // check if plural
	      const isPlural = this.isPlural(valueQuantities);
	      // get context renderer
	      const contextFnKey = 'context' + (isPlural ? 'Plural' : 'Singular');
	      const contextFn = this[contextFnKey];
	      // get a natural list
	      const naturalList = this.naturalList;
	      // summarize
	      const summary = contextFn(naturalList);

	      return summary;
	    },
	    contextSingular() {
	      const context = this.options.context;
	      return context.singular || context;
	    },
	    contextPlural() {
	      const context = this.options.context;
	      return context.plural || context;
	    },
	    descriptorSingular() {
	      const descriptor = this.options.descriptor;
	      return descriptor.singular || descriptor;
	    },
	    descriptorPlural() {
	      const descriptor = this.options.descriptor;
	      return descriptor.plural || descriptor + 's';
	    },
	    // serializes naturalized quantities into a list
	    // e.g. "1 apple and 2 oranges"
	    naturalList() {
	      const valueQuantities = this.valueQuantities;
	      const items = this.naturalizeQuantities(valueQuantities);
	      const len = items.length;
	      if (Array.isArray(items) && len > 0) {
	        if (len === 1) {
	          return items[0];
	        } else if (len === 2) {
	          return items.join(' and ');
	        }
	        const leadingItems = items.slice(0, items.length - 1).join(', ');
	        const lastItem = items[items.length - 1];
	        return `${leadingItems}, and ${lastItem}`;
	      }
	      // TODO should this text be an option?
	      return `no ${this.descriptorPlural}`;
	    },
	    valueQuantities() {
	      const items = this.slots.items(this.$store.state);
	      const getValue = this.options.getValue;

	      // make an object of value => quantity
	      const valueQuantities = items.reduce((obj, item) => {
	        const val = getValue(item);
	        obj[val] = obj[val] || 0;
	        obj[val]++;
	        return obj;
	      }, {});

	      return valueQuantities;
	    },
	  },
	  methods: {
	    // takes the value of the valueQuantities computed property and returns
	    // the appropriate grammatical number.
	    isPlural(valueQuantities = {}) {
	      const values = Object.keys(valueQuantities);
	      if (values.length === 1) {
	        const firstValue = values[0];
	        const quantity = valueQuantities[firstValue];
	        if (quantity === 1) {
	          return false;
	        }
	      }
	      return true;
	    },
	    // takes the value quantity map and converts values to natural language
	    // quantities (e.g. {apple: 2} => "2 apples")
	    naturalizeQuantities(valueQuantities = {}) {
	      // get some options
	      const types = this.options.types;
	      const includeZeroes = this.options.includeZeroes;

	      // convert to natural language and sort per order of types option
	      const quantities = types.reduce((acc, type) => {
	        const value = type.value;
	        let quantity = valueQuantities[value] || 0;

	        if (quantity === 0) {
	          if (!includeZeroes) {
	            return acc;
	          }
	          // natural zero => "no"
	          quantity = 'no';
	        }

	        const labelSingular = type.label;
	        let labelWithNumber;

	        // singular
	        if (quantity !== 1) {
	          const labelPlural = type.plural || labelSingular + 's';
	          labelWithNumber = labelPlural;
	        // plural
	        } else {
	          labelWithNumber = labelSingular;
	        }

	        // make label and push
	        const quantityWithLabel = `${quantity} ${labelWithNumber}`;
	        acc.push(quantityWithLabel);

	        return acc;
	      }, []);

	      return quantities;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=Division.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Division = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(this.vshowComputed),expression:"this.vshowComputed"}],class:this.class,style:(this.style)},[_c('topic-component-group',{attrs:{"topic-components":this.$props.options.components}})],1)},staticRenderFns: [],_scopeId: 'data-v-031d1786',
	  mixins: [TopicComponent],
	  computed: {
	    message() {
	      return this.evaluateSlot(this.$props.slots.text)
	    },
	    class() {
	      return this.$props.options.class || '';
	    },
	    style() {
	      return this.$props.options.style || '';
	    },
	    vshowComputed() {
	      if (this.$props.slots) {
	        if (this.evaluateSlot(this.$props.slots.vshowProp) === false) {
	          // console.log('returning vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
	          return false;
	        } else {
	          // console.log('returning true, vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
	          return true;
	        }
	      } else {
	        // console.log('returning true, no props');
	        return true;
	      }
	    }
	  },
	  components: {},
	  beforeCreate() {
	    this.$options.components.TopicComponentGroup = TopicComponentGroup;
	  }
	};

	/*
	  this is a helper fn that accepts a data object containing the following:

	    - accountNum <String>
	    - amountDue <Number>
	    - owner <String>
	    - address <Object>
	      - streetAddress <String>
	      - city <String>
	      - state <String>
	      - postalCode <String>
	      - country <String>

	  and returns a serialized xml object which the epay gateway can accept for
	  initiating a purchase.

	  REVIEW does this need to handle credits?
	*/

	function generateBillingXml (data) {
	  console.log('generate billing xml', data); // if data object is empty, return empty string

	  if (Object.keys(data).length < 1) {
	    return '';
	  } // get the current date/time in iso format with timezone


	  const timestamp = moment().format(); // TODO use a json to xml lib instead of forming this string?

	  const xmlString = `<?xml version="1.0" encoding="utf-16"?>
<BillingStatement xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <ApplicationID>fcd68fd2-e923-4b03-a0e7-a678c2ed612a</ApplicationID>
  <AccountNumber />
  <BillNumber>${data.balances.accountNum}</BillNumber>
  <StatementNumber />
  <BillingDate>${timestamp}</BillingDate>
  <DueDate>${timestamp}</DueDate>
  <TotalDue>${data.totalDue}</TotalDue>
  <DepartMentId>0</DepartMentId>
  <Fund>0</Fund>
  <PaymentDate>0001-01-01T00:00:00</PaymentDate>
  <Quantity>0</Quantity>
  <ItemAmount>0</ItemAmount>
  <TotalAmountdue>0</TotalAmountdue>
  <PartialPaymentFlag>false</PartialPaymentFlag>
  <ReceiptpresentFlag>false</ReceiptpresentFlag>
  <Details>
    <BillingStatementDetail>
      <ItemDate>${timestamp}</ItemDate>
      <ItemDescription>Real Estate Tax</ItemDescription>
      <Charges>${data.totalDue}</Charges>
      <Credits>0</Credits>
    </BillingStatementDetail>
  </Details>
  <Customers>
    <Customer>
      <FirstName>${data.balances.property.ownerName}</FirstName>
      <MiddleName />
      <LastName />
      <BillingAddress>
        <Address>
          <AddressLine1>${data.address.streetAddress}</AddressLine1>
          <City>PHILADELPHIA</City>
          <State>PA</State>
          <PostalCode>${data.address.zipCode}</PostalCode>
          <Country>US</Country>
        </Address>
      </BillingAddress>
    </Customer>
  </Customers>
</BillingStatement>
  `;
	  return escapeHtml(xmlString);
	}

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=ePayForm.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	const BALANCE_PARTS = [
	  'principal',
	  'interest',
	  'penalty',
	  'other',
	];

	var ePayForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"action":_vm.actionAddress,"method":"post","target":"_blank"}},[_c('input',{attrs:{"name":"billStmt","type":"hidden"},domProps:{"value":_vm.xmlData}}),_vm._v(" "),_c('input',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowButton),expression:"this.shouldShowButton"}],staticClass:"button external",style:(_vm.buttonStyle),attrs:{"type":"submit"},domProps:{"value":this.$props.slots.text}})])},staticRenderFns: [],_scopeId: 'data-v-a7b82852',
	  mixins: [TopicComponent],
	  data() {
	    const data = {
	      parseData: {
	        'accountNum': this.$store.state.sources.tips.data.data.accountNum,
	        'totalDue': '',
	        'balances': this.$store.state.sources.tips.data.data,
	        'address': {
	          'streetAddress':  this.$store.state.sources.tips.data.data.property.address,
	          'zipCode': this.$store.state.geocode.data.properties.zip_code,
	        }
	      },
	      xmlData: {},
	      buttonStyle: 'height: ' + this.$props.options.height + 'px;\
       width: ' + this.$props.options.width + 'px;\
       font-size: ' + this.$props.options.fontSize + 'px;\
       ',
	      actionAddress: this.$props.options.actionAddress || 'https://test-secure.phila.gov/PaymentCenter/Gateway1/InitiatePurchase.aspx'
	    };
	    return data;
	  },
	  created() {
	    this.parseData.totalDue = this.calculateTotalDue();
	    this.$store.commit('setPropertyBalance', this.parseData.totalDue);
	    this.xmlData = generateBillingXml(this.parseData);
	  },
	  computed: {
	    message() {
	      if (this.$props.slots) {
	        return this.evaluateSlot(this.$props.slots.text);
	      }
	    },
	    class() {
	      if (this.$props.options) {
	        return this.$props.options.class || '';
	      }
	    },
	    style() {
	      if (this.$props.options) {
	        return this.$props.options.style || '';
	      }
	    },
	    shouldShowButton() {
	      if (this.parseData.totalDue > 0) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	  },
	  methods: {
	    calculateTotalDue() {
	      return this.parseData.balances.years.reduce((acc, year) => {
	        const yearTotal = this.calculateTotalForYear(year);
	        return acc + yearTotal;
	      }, 0);
	    },
	    calculateTotalForYear(year) {
	      const amounts = BALANCE_PARTS.map(part => year[part]);
	      return amounts.reduce((acc, amount) => acc + amount, 0);
	    },
	  },
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .popover-link { border-bottom: 1px dotted; font-weight: bold; /* color: #444; */ color: #2176d2; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var PopoverLink = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" "+_vm._s(_vm.evaluateFieldLabel())+" "),_c('a',{staticClass:"popover-link",attrs:{"title":_vm.value + ' ' + _vm.popoverValue},on:{"click":_vm.didClickPopoverLink}},[_vm._v(" "+_vm._s(_vm.value)+" ")])])},staticRenderFns: [],
	  mixins: [TopicComponent],
	  props: ['fieldLabel'],
	  data() {
	    const data = {
	      showFieldLabel: false
	    };
	    return data;
	  },
	  created() {
	    window.addEventListener('resize', this.handleWindowResize);
	    this.handleWindowResize();
	  },
	  computed: {
	    value() {
	      const value = this.$props.slots.value;
	      const transforms = this.$props.slots.transforms || [];
	      const nullValue = this.$props.slots.nullValue || '';
	      return this.evaluateSlot(value, transforms, nullValue);
	    },
	    popoverValue() {
	      const value = this.value;
	      const popoverTransforms = this.$props.slots.popoverTransforms || [];
	      const popoverNullValue = this.$props.slots.popoverNullValue || '';
	      return this.evaluateSlot(value, popoverTransforms, popoverNullValue);
	    },
	    popoverPreText() {
	      let popoverPreText = this.$props.slots.popoverPreText || '';
	      return this.evaluateSlot(popoverPreText);
	    },
	    popoverPostText() {
	      let popoverPostText = this.$props.slots.popoverPostText || '';
	      return this.evaluateSlot(popoverPostText);
	    },
	    shouldShowValue() {
	      if (this.$props.slots.shouldShowValue === false) {
	        return false
	      } else {
	        return true;
	      }
	    },
	    popoverText() {
	      if (this.shouldShowValue === true) {
	        return this.popoverPreText + ' ' + this.popoverValue + ' ' + this.popoverPostText;
	      } else {
	        return this.popoverPreText + ' ' + this.popoverPostText;
	      }
	    },
	  },
	  methods: {
	    didClickPopoverLink(e) {
	      this.$store.commit('setPopoverOpen', true);
	      this.$store.commit('setPopoverText', this.popoverText);
	    },
	    handleWindowResize() {
	      if (window.innerWidth >= 750) {
	        this.showFieldLabel = false;
	      } else {
	        this.showFieldLabel = true;
	      }
	    },
	    evaluateFieldLabel() {
	      if (this.showFieldLabel) {
	        return this.$props.fieldLabel + ': ';
	      } else {
	        return '';
	      }
	    }
	  },
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .active[data-v-36d2e900] { background: #F3D661; } td[data-v-36d2e900] { font-size: 15px; text-align: left; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var HorizontalTableRow = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',{class:{ active: this.isActive },on:{"mouseover":_vm.handleRowMouseover,"click":_vm.handleRowClick,"mouseout":_vm.handleRowMouseout}},_vm._l((_vm.fields),function(field){return _c('td',{attrs:{"item":_vm.item}},[_c('b',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldBeBold),expression:"shouldBeBold"}]},[(field.popoverLink)?_c('popover-link',{attrs:{"slots":field,"item":_vm.item,"fieldLabel":field.label}}):_vm._e(),_vm._v(" "),(!field.popoverLink)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.evaluateFieldLabel(field.label) + _vm.evaluateSlot(field.value, field.transforms, field.nullValue))}}):_vm._e()],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.shouldBeBold),expression:"!shouldBeBold"}]},[(field.popoverLink)?_c('popover-link',{attrs:{"slots":field,"item":_vm.item,"fieldLabel":field.label}}):_vm._e(),_vm._v(" "),(!field.popoverLink)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.evaluateFieldLabel(field.label) + _vm.evaluateSlot(field.value, field.transforms, field.nullValue))}}):_vm._e()],1)])}))},staticRenderFns: [],_scopeId: 'data-v-36d2e900',
	  mixins: [TopicComponent],
	  components: {
	    PopoverLink,
	  },
	  props: ['fields', 'hasOverlay', 'tableId', 'shouldBeBold', 'totalRowField'],
	  data() {
	    const data = {
	      showFieldLabel: false
	    };
	    return data;
	  },
	  created() {
	    window.addEventListener('resize', this.handleWindowResize);
	    this.handleWindowResize();
	  },
	  computed: {
	    activeFeature() {
	      return this.$store.state.activeFeature;
	    },
	    isActive() {
	      if (this.activeFeature) {
	        return this.activeFeature.featureId === this.$props.item._featureId && this.$props.tableId === this.activeFeature.tableId;
	      } else {
	        return;
	      }
	    },
	    isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	  },
	  watch: {
	    isActive(value) {
	      if (value === true) {
	        const el = this.$el;
	        const visible = this.isElementInViewport(el);
	        // console.log('horizontaltablerow WATCH isActive is firing, el:', el, 'visible:', visible);

	        // console.log('visible?', visible ? 'YES' : 'NO');

	        if (!visible) {
	          el.scrollIntoView();
	        }
	      }
	    }
	  },
	  methods: {
	    handleRowMouseover(e) {
	      // console.log('handleRowMouseover is starting');
	      if(!this.isMobileOrTablet && !this.$props.options.mouseOverDisabled) {
	        // console.log('handleRowMouseover actions are running');
	        if (!this.hasOverlay) return;

	        const featureId = this.item._featureId;
	        const tableId = this.tableId;
	        this.$store.commit('setActiveFeature', { featureId, tableId });
	      }
	    },
	    handleRowClick(e) {
	      // console.log('handleRowClick is starting');
	      if(this.isMobileOrTablet || this.$props.options.mouseOverDisabled) {
	        console.log('handleRowClick actions are running');
	        if (!this.hasOverlay) return;

	        const featureId = this.item._featureId;
	        const tableId = this.tableId;
	        this.$store.commit('setActiveFeature', { featureId, tableId });
	      }
	    },
	    handleRowMouseout(e) {
	      // console.log('handleRowMouseout is starting');
	      // if(!this.isMobileOrTablet) {
	        // console.log('handleRowMouseout actions are running');
	        if(!this.$props.options.mouseOverDisabled) {
	          if (!this.hasOverlay) return;
	          this.$store.commit('setActiveFeature', null);
	        }
	      // }
	    },
	    // REVIEW there's very similar code in the controller. if these can be
	    // the same thing, make it into a util.
	    isElementInViewport(el) {
	      const rect = el.getBoundingClientRect();

	      // console.log('bounding box', rect);

	      const visibility = {
	        // TODO the 108 below is account for the combined height of the
	        // app header and address header. this is not a good long-term
	        // solution - instead, use the `bottom` value of the address header's
	        // bounding rect. however, this should only fire on small devices,
	        // which would require again hard-coding screen breakpoints from
	        // standards or some other magic, which might not a huge
	        // improvement in terms of decoupling logic and presentation. hmm.
	        top: rect.top >= 108,
	        left: rect.left >= 0,
	        bottom: rect.bottom <= (window.innerHeight || document.documentElement.clientHeight),
	        right: rect.right <= (window.innerWidth || document.documentElement.clientWidth),
	      };

	      // console.log('visibility', visibility);

	      // return if all sides are visible
	      return Object.values(visibility).every(val => val);
	    },
	    featuresMatch(a, b) {
	      return a.featureId === b.featureId && a.tableId === b.tableId;
	    },
	    handleWindowResize() {
	      if (window.innerWidth >= 750) {
	        this.showFieldLabel = false;
	      } else {
	        this.showFieldLabel = true;
	      }
	    },
	    evaluateFieldLabel(label) {
	      // console.log('evaluateFieldLabel, label:', label);
	      if (this.showFieldLabel && this.$props.totalRowField !== label.toLowerCase()) {
	        return label + ': ';
	      } else {
	        return '';
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inline-block[data-v-6dbe65ac] { display: inline-block; } .vertically-centered[data-v-6dbe65ac] { display: inline-block; vertical-align: middle; } .pvc-horizontal-table[data-v-6dbe65ac] { margin-bottom: 10px !important; } .pvc-horizontal-table-controls[data-v-6dbe65ac] { text-align: center; vertical-align: middle; margin-bottom: 10px; } /* dropdown filters */ .pvc-select-text[data-v-6dbe65ac] { font-size: 16px; padding-right: 5px; padding-left: 5px; } .pvc-select[data-v-6dbe65ac] { width: auto; height: 40px; vertical-align: middle; /*padding-right: 20px;*/ } .pvc-select-option[data-v-6dbe65ac] { display: inline-block; padding-right: 100px; margin-right: 100px; } /* input filters using text */ .pvc-search-control-input[data-v-6dbe65ac] { height: 40px !important; line-height: 48px; padding: 8px; font-size: 16px; width: 300px; /*margin-left: 10px;*/ } /*REVIEW this repeats a lot of .pvc-search-control-input. can it be refactored?*/ .pvc-search-control-input-full[data-v-6dbe65ac] { height: 40px !important; line-height: 48px; padding: 8px; font-size: 16px; width: 260px; } .pvc-search-control-button[data-v-6dbe65ac] { width: 40px; background: #ccc; line-height: 40px; float: right; } .pvc-export-data-button[data-v-6dbe65ac] { float: right; vertical-align: baseline; display: inline-block; margin-left: 5px; margin-right: 5px; margin-bottom: 5px; } .group[data-v-6dbe65ac]:after { content: \"\"; display: table; clear: both; } .pvc-horizontal-table-body[data-v-6dbe65ac] { padding-top: 1rem; padding-bottom: 0.35rem; } .no-padding[data-v-6dbe65ac] { padding-top: 0; padding-bottom: 0; } .center-button[data-v-6dbe65ac] { display: flex; align-items: center; justify-content: center; } .loading[data-v-6dbe65ac] { float: right; } .filter-by-text-form[data-v-6dbe65ac] { border: 2px solid #0f4d90; } table[data-v-6dbe65ac] { /* table-layout: fixed; */ margin: 0; } .external-link[data-v-6dbe65ac] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	const DEFAULT_SORT_FIELDS = [
	  'distance',
	  'date',
	];

	var HorizontalTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pvc-horizontal-table"},[(_vm.shouldShowTable)?_c('div',[(_vm.shouldShowFilters !== false)?_c('div',{staticClass:"pvc-horizontal-table-controls"},[(!!_vm.options.filters)?_c('div',{staticClass:"vertically-centered"},_vm._l((_vm.filters),function(filter,index){return _c('div',{staticClass:"inline-block",attrs:{"id":'filter-' + index}},[_c('div',{staticClass:"vertically-centered pvc-select-text"},[_vm._v(_vm._s(filter.label))]),_vm._v(" "),_c('select',{staticClass:"pvc-select",on:{"change":_vm.handleFilterValueChange}},[_c('optgroup',_vm._l((filter.values),function(filterValue){return _c('option',{staticClass:"pvc-select-option",domProps:{"value":_vm.slugifyFilterValue(filterValue)}},[_vm._v(" "+_vm._s(filterValue.label)+" ")])}))])])})):_vm._e(),_vm._v(" "),(!!_vm.options.sort && !!_vm.options.sort.select)?_c('div',{staticClass:"vertically-centered"},[_c('div',{staticClass:"vertically-centered pvc-select-text"},[_vm._v("Sort by")]),_vm._v(" "),_c('select',{staticClass:"pvc-select",on:{"change":_vm.handleSortValueChange}},[_c('optgroup',_vm._l((_vm.sortFields),function(sortField){return _c('option',{staticClass:"pvc-select-option",domProps:{"value":sortField}},[_vm._v(" "+_vm._s(sortField)+" ")])}))])]):_vm._e(),_vm._v(" "),(_vm.filterByTextFields)?_c('div',{staticClass:"vertically-centered"},[_c('div',{staticClass:"pvc-select-text inline-block"},[_vm._v(" "+_vm._s(_vm.options.filterByText.label)+" ")]),_vm._v(" "),_c('form',{staticClass:"inline-block filter-by-text-form",on:{"submit":function($event){$event.preventDefault();return _vm.handleFilterFormX($event)}}},[_c('input',{class:this.inputClass,attrs:{"id":"theInput"},on:{"keyup":_vm.handleFilterFormKeyup}}),_vm._v(" "),(this.searchText != '')?_c('button',{staticClass:"pvc-search-control-button"},[_c('font-awesome-icon',{staticClass:"fa-lg",attrs:{"icon":"times"}})],1):_vm._e()])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{class:{ 'pvc-horizontal-table-body': true, 'no-padding': !_vm.shouldShowFilters }},[(_vm.slots.title)?_c('div',[_c('h4',{staticStyle:{"display":"inline-block"}},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" "+_vm._s(_vm.countText)+" ")]),_vm._v(" "),_c('h5',{staticStyle:{"display":"inline-block","color":"gray"}},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.subtitle))+" ")]),_vm._v(" "),(this.shouldShowExportCSV)?_c('a',{staticClass:"button pvc-export-data-button",on:{"click":this.exportTableToCSV}},[_vm._v(" "+_vm._s(this.options.export.formatButtons.csv)+" ")]):_vm._e(),_vm._v(" "),(this.shouldShowExportPDF)?_c('a',{staticClass:"button pvc-export-data-button",on:{"click":this.exportTableToPDF}},[_vm._v(" "+_vm._s(this.options.export.formatButtons.pdf)+" ")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('table',{staticClass:"stack",attrs:{"role":"grid"}},[(_vm.shouldShowHeaders !== false)?_c('thead',[_c('tr',_vm._l((_vm.fields),function(field){return _c('th',[_vm._v(_vm._s(_vm.evaluateSlot(field.label)))])}))]):_vm._e(),_vm._v(" "),_c('tbody',[_vm._l((_vm.itemsLimited),function(item){return _c('horizontal-table-row',{key:item._featureId,attrs:{"item":item,"fields":_vm.fields,"hasOverlay":_vm.hasOverlay,"tableId":_vm.options.tableId,"options":_vm.options}})}),_vm._v(" "),(_vm.totalRowEnabled)?_c('horizontal-table-row',{attrs:{"shouldBeBold":true,"item":this.itemsLimitedSummed,"fields":_vm.fields,"tableId":_vm.options.tableId,"totalRowField":this.totalRowField}}):_vm._e()],2)]),_vm._v(" "),(_vm.options.externalLink && _vm.shouldShowExternalLink)?_c('external-link',{attrs:{"options":_vm.options.externalLink,"count":this.count,"limit":this.limit,"type":'horizontal-table'}}):_vm._e()],1),_vm._v(" "),(this.shouldShowRetrieveButton)?_c('a',{staticClass:"button center-button",on:{"click":this.showMoreRecords}},[_vm._v(" Retrieve "+_vm._s(this.nextIncrement)+" More "+_vm._s(this.nextIncrement === 1? 'Record' : 'Records')+" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.secondaryStatus === 'waiting'),expression:"secondaryStatus === 'waiting'"}],staticClass:"loading"},[_c('font-awesome-icon',{staticClass:"fa-lg",attrs:{"icon":"spinner"}})],1)]):_vm._e()]):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-6dbe65ac',
	  mixins: [TopicComponent],
	  data() {
	    const filters = this.options.filters || [];
	    // console.log('in horiz table data, filters:', filters, 'filtersKeys:', filtersKeys);
	    // const defaultFilterSelections = Object.keys(filters).reduce((acc, i) =>
	    //                                 {
	    //                                   const key = `filter-${i}`;
	    //                                   console.log('in reduce, i:', i, 'acc:', acc, 'key:', key, 'acc[key]:', acc[key]);
	    //                                   acc[key] = {};
	    //                                   return acc;
	    //                                 }, {});
	    let defaultFilterSelections = {};
	    for (let index=0; index < filters.length; index++) {
	      defaultFilterSelections['filter-' + index] = filters[index].values[0];
	    }
	    // console.log('in horiz table data, filters:', filters, 'filtersKeys:', filtersKeys, 'defaultFilterSelections:', defaultFilterSelections);
	    let sortFields;
	    if (this.options.sort){
	      sortFields = this.options.sort.sortFields || [];
	    }
	    let sortField;
	    if (sortFields) {
	      sortField = sortFields[0];
	    } else {
	      sortField = DEFAULT_SORT_FIELDS[0];
	    }
	    const highestRowRetrieved = this.options.defaultIncrement;

	    const initialData = {
	      filterSelections: defaultFilterSelections,
	      searchText: '',
	      sortField,
	      highestRowRetrieved
	    };

	    return initialData;
	  },
	  components: {
	    HorizontalTableRow,
	    ExternalLink,
	  },
	  // beforeCreate() {
	  //   console.log('horizTable before create, this.$config:', this.$config, 'this.$store.state:', this.$store.state);
	  // },
	  created() {
	    // console.log('horiz table created props slots items', this.$props.slots.items);
	    if (this.filters) {
	      for (let [index, filter] of this.filters.entries()) {
	        const key = `filter-${index}`;
	        const defaultValue = filter.values[0] || {};
	        this.filterSelections[key] = defaultValue;
	      }
	    }

	    // put row data in state once on load
	    // const data = this.itemsAfterSearch;
	    // const tableId = this.options.tableId;

	    // this.$store.commit('setHorizontalTableFilteredData', {
	    //   tableId,
	    //   data
	    // });
	  },
	  mounted() {
	    // console.log('horiz table mounted props slots items', this.$props.slots.items);
	    if (this.$store.state.horizontalTables) {
	      this.updateTableFilteredData();
	    }
	  },
	  watch: {
	    itemsAfterFilters(nextItems) {
	      // console.log('WATCH items after filters', nextItems);
	      // this.$nextTick(() => {
	      if (this.$store.state.horizontalTables) {
	        this.updateTableFilteredData();
	      }
	      // })
	    }
	  },
	  computed: {
	    totalRowEnabled() {
	      if (this.$props.options.totalRow) {
	        return this.$props.options.totalRow.enabled || false;
	      }
	    },
	    totalRowField() {
	      if (this.$props.options.totalRow) {
	        return this.$props.options.totalRow.totalField || '';
	      }
	    },
	    hasData() {
	      // console.log('horizTable hasData is running, this.$config:', this.$config, 'this.$store.state:', this.$store.state);
	      if (!this.$props.options.dataSources) {
	        return true;
	      } else {
	        const hasData = this.$props.options.dataSources.every(dataSource => {
	          // const targetsFn = this.$config.dataSources[dataSource].targets;
	          const targetsFn = this.$store.state.sources[dataSource].targets;
	          const maybeEmpty = this.isEmpty(targetsFn);
	          // if the data source is configured for targets
	          if (!this.isEmpty(targetsFn)) {
	            const targetsMap = this.$store.state.sources[dataSource].targets;
	            const targets = Object.values(targetsMap);

	            // but there are no targets for this address, return false
	            if (targets.length === 0) {
	              return false;
	            }

	            // if there are targets for this address, make sure none of them
	            // are "waiting"
	            return targets.every(target => target.status !== 'waiting');

	            // if the data source is not configured for targets, just check that
	            // it has data
	          } else {
	            return !!this.$store.state.sources[dataSource].data;
	          }
	        });

	        return hasData;
	      }
	    },
	    shouldShowFilters() {
	      if (typeof this.options.shouldShowFilters === 'undefined') {
	        return true;
	      } else {
	        return this.options.shouldShowFilters;
	      }
	    },
	    shouldShowHeaders() {
	      if (typeof this.options.shouldShowHeaders === 'undefined') {
	        return true;
	      } else {
	        return this.options.shouldShowHeaders;
	      }
	    },
	    shouldShowExportPDF() {
	      let shouldExport = false;
	      if (this.options.export.formatButtons) {
	        const keys = Object.keys(this.options.export.formatButtons);
	        shouldExport = keys.includes('pdf');
	      }
	      return shouldExport;
	    },
	    shouldShowExportCSV() {
	      let shouldExport = false;
	      if (this.options.export.formatButtons) {
	        const keys = Object.keys(this.options.export.formatButtons);
	        shouldExport = keys.includes('csv');
	      }
	      return shouldExport;
	    },
	    secondaryStatus() {
	      return this.$store.state.sources[this.options.id].secondaryStatus;
	    },
	    shouldShowTable() {
	      let result = true;

	      // if the table is in a tab group or table group, it will have an "item" in props
	      // if (this.item) {
	      //   // if it is in a table group, the item will contain an "activeTable" for the group
	      //   if (this.item.activeTable) {
	      //     const id = this.options.id;
	      //     if (this.item.activeTable != id) {
	      //       result = false
	      //     }
	      //   }
	      // }
	      // if there is no data, and the table should not show at all if it is empty
	      if (this.$props.options.showOnlyIfData && this.items.length === 0) {
	        result = false;
	      }

	      return result;
	    },
	    shouldShowRetrieveButton() {
	      return this.highestRowRetrieved < this.count;
	    },
	    leftToRetrieve() {
	      return this.count - this.highestRowRetrieved;
	    },
	    nextIncrement() {
	      if (!this.options.showAllRowsOnFirstClick) {
	        if (this.leftToRetrieve < this.options.defaultIncrement) {
	          return this.leftToRetrieve;
	        } else {
	          return this.options.defaultIncrement;
	        }
	      } else {
	        return this.leftToRetrieve;
	      }
	    },
	    highestPageRetrieved() {
	      return this.evaluateSlot(this.slots.highestPageRetrieved);
	    },
	    pageCount() {
	      return this.evaluateSlot(this.slots.pageCount);
	    },
	    totalSize() {
	      return this.evaluateSlot(this.slots.totalSize);
	    },
	    limit() {
	      return this.options.limit;
	    },
	    // REVIEW what does this do? can this be simplified?
	    inputClass() {
	      if (this.searchText === '') {
	        return 'pvc-search-control-input';
	      } else {
	        return 'pvc-search-control-input-full';
	      }
	    },
	    filters() {
	      return this.options.filters;
	    },
	    activeFilters() {
	      //TODO make this work with not-always-on filters
	      return this.filters;
	    },
	    fields() {
	      return this.options.fields;
	    },
	    hasOverlay() {
	      return !!this.options.mapOverlay;
	    },
	    items() {
	      if (this.hasData) {
	        const itemsSlot = this.slots.items;
	        const items = this.evaluateSlot(itemsSlot) || [];
	        // console.log('horiz table items', items);
	        return items
	      } else {
	        return [];
	      }
	    },
	    filterByTextFields() {
	      if (this.options.filterByText) {
	        return this.options.filterByText.fields;
	      } else {
	        return null;
	      }
	    },
	    itemsAfterSearch() {
	      // console.log('itemsAfterSearch is running');
	      const items = this.items;
	      const searchText = this.searchText;

	      if (!searchText) {
	        return items;
	      }

	      const searchTextLower = searchText.toLowerCase();

	      // get full set of items

	      // if text search is not enabled, return all items
	      const searchFields = this.filterByTextFields || [];
	      if (searchFields.length === 0) {
	        return items;
	      }

	      // get items that contain the search text in one of their filter fields
	      const matchingItems = items.filter(item => {
	        const searchVals = searchFields.map(filterField => {
	          const props = item.properties;
	          const searchVal = props ? props[filterField] : item[filterField];
	          // console.log('props', props, 'searchVal', searchVal);
	          return searchVal.toLowerCase();
	        });

	        let boolean = false;
	        for (let searchVal of searchVals) {
	          // console.log('searchVal', searchVal, 'searchTextLower', searchTextLower);
	          if (searchVal.includes(searchTextLower)) {
	            boolean = true;
	          }
	        }
	        return boolean;
	      });

	      return matchingItems;
	    },
	    // this takes itemsAfterSearch and applies selected filters
	    itemsAfterFilters() {
	      // console.log('itemsAfterFilters is running, this.filters:', this.filters, 'this.filterSelections:', this.filterSelections);
	      if (!this.itemsAfterSearch) {
	        return [];
	      } else {
	        const itemsAfterSearch = this.itemsAfterSearch;
	        const items = this.filterItems(itemsAfterSearch,
	          this.filters,
	          this.filterSelections);
	          // console.log('horiz table itemsAfterFilters', items);
	          return items;
	      }
	    },
	    itemsAfterSort() {
	      const itemsAfterFilters = this.itemsAfterFilters;
	      const sortOpts = this.options.sort;
	      return this.sortItems(itemsAfterFilters, sortOpts);
	    },
	    sortFields() {
	      if (this.options.sort.sortFields) {
	        return this.options.sort.sortFields;
	      } else {
	        return DEFAULT_SORT_FIELDS;
	      }
	    },
	    // this takes filtered items and applies the max number of rows
	    itemsLimited() {
	      // console.log('items limited', this.itemsAfterSort.slice(0, this.limit));
	      if (this.options.limit) {
	        return this.itemsAfterSort.slice(0, this.options.limit);
	      } else if (this.options.defaultIncrement) {
	        return this.itemsAfterSort.slice(0, this.highestRowRetrieved);
	      } else {
	        return this.itemsAfterSort;
	      }
	    },
	    itemsLimitedSummed() {
	      let summed = {};
	      for (let key of Object.keys(this.itemsLimited[0])) {
	        if (typeof this.itemsLimited[0][key] === 'number') {
	          summed[key] = 0;
	        }
	        if (this.totalRowField) {
	          summed[this.totalRowField] = 'Total';
	        }
	        for (let item of this.itemsLimited) {
	          if (typeof summed[key] === 'number') {
	            summed[key] = summed[key] + item[key];
	          }
	        }
	      }
	      return summed;
	    },
	    count() {
	      if (this.$props.options.useApiCount) {
	        return this.totalSize;
	      } else {
	        return this.itemsAfterFilters.length;
	      }
	    },
	    countText() {
	      if (this.$props.options.noCount) {
	        return '';
	      } else if (this.highestRowRetrieved < this.count) {
	        return `(1 - ${ this.count < this.highestRowRetrieved ? this.count : this.highestRowRetrieved } of ${this.count})`;
	      } else {
	        return `(${this.count})`;
	      }
	    },
	    shouldShowExternalLink() {
	      if (this.options.externalLink.forceShow) {
	        return this.options.externalLink.forceShow;
	      } else {
	        return this.itemsAfterSearch.length > this.limit;
	      }
	    },
	    // externalLinkAction() {
	    //   return this.options.externalLink.action || 'See more';
	    // },
	    // externalLinkText() {
	    //   const externalLinkConf = this.options.externalLink;
	    //   const actionFn = externalLinkConf.action;
	    //   const actionText = actionFn(this.externalLinkCount);
	    //   const name = externalLinkConf.name;
	    //
	    //   return `${actionText}`;
	    //   // return `${actionText} at ${name}`;
	    // },
	    // externalLinkHref() {
	    //   return this.evaluateSlot(this.options.externalLink.href);
	    // },
	    // // the number of items that aren't being shown (e.g. See 54 more...)
	    // externalLinkCount() {
	    //   return this.count - this.limit;
	    // },
	  },
	  methods: {
	    exportTableToPDF() {
	      const tableData = [];
	      let fields = [];
	      let totals = {};
	      for (let field of this.$props.options.fields) {
	        fields.push(field.label);
	        totals[field.label] = 0;
	      }
	      for (let item of this.items) {
	        let theArray = [];
	        for (let field of this.$props.options.fields) {
	          if (field['value'](this.$store.state, item) === null) {
	            theArray.push('');
	          } else {
	            theArray.push(field['value'](this.$store.state, item)) || '';
	          }

	          if (field['value'](this.$store.state, item) === null || isNaN(field['value'](this.$store.state, item))) {
	          // if (isNaN(field['value'](this.$store.state, item))) {
	            console.log('isnull:', field['value'](this.$store.state, item));
	            totals[field.label] = '';
	          } else {
	            console.log('is not null:', field['value'](this.$store.state, item));
	            totals[field.label] = totals[field.label] + parseFloat(field['value'](this.$store.state, item));
	          }
	        }
	        tableData.push(theArray);
	      }

	      if (this.$props.options.totalRow.enabled) {
	        let theArray = [];
	        for (let field of this.$props.options.fields) {
	          if (field.label.toLowerCase() === this.$props.options.totalRow.totalField) {
	            theArray.push('Total');
	          } else {
	            theArray.push(totals[field.label]);
	          }
	        }
	        tableData.push(theArray);
	      }
	      console.log('tableData:', tableData);
	      var doc = new jsPDF();
	      doc.setFontSize(12);
	      // var doc = new jsPDF('p', 'pt');
	      let top = 10;
	      for (let introLine of this.$props.options.export.introLines) {
	        doc.text(10, top, this.evaluateSlot(introLine));
	        top = top + 6;
	      }
	      doc.autoTable(fields, tableData, {
	        startY: 50
	      });

	      let filename;
	      let fileStart = this.evaluateSlot(this.$props.options.export.file);
	      if (fileStart) {
	        filename = this.evaluateSlot(this.$props.options.export.file) + '.pdf';
	      } else {
	        filename = 'export.pdf';
	      }
	      doc.save(filename);
	    },

	    exportTableToCSV() {
	      // console.log('exportTableToCSV is running');
	      const tableData = [];

	      let fields = [];
	      let totals = {};
	      for (let field of this.$props.options.fields) {
	        fields.push(field.label);
	        totals[field.label] = 0;
	      }
	      for (let item of this.items) {
	        let object = {};
	        for (let field of this.$props.options.fields) {
	          object[field.label] = field['value'](this.$store.state, item);
	          if (isNaN(field['value'](this.$store.state, item))) {
	            totals[field.label] = null;
	          } else {
	            totals[field.label] = totals[field.label] + parseFloat(field['value'](this.$store.state, item));
	          }
	        }
	        tableData.push(object);
	      }

	      if (this.$props.options.totalRow.enabled) {
	        let object = {};
	        for (let field of this.$props.options.fields) {
	          if (field.label.toLowerCase() === this.$props.options.totalRow.totalField) {
	            object[field.label] = 'Total';
	          } else {
	            object[field.label] = totals[field.label];
	          }
	        }
	        tableData.push(object);
	      }

	      try {
	        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

	        data = tableData || null;
	        if (data == null || !data.length) {
	            return null;
	        }

	        columnDelimiter = ',';
	        lineDelimiter = '\n';
	        // columnDelimiter = args.columnDelimiter || ',';
	        // lineDelimiter = args.lineDelimiter || '\n';

	        keys = Object.keys(data[0]);

	        result = '';

	        for (let introLine of this.$props.options.export.introLines) {
	          result += this.evaluateSlot(introLine);
	          result += lineDelimiter;
	        }

	        result += lineDelimiter;
	        result += keys.join(columnDelimiter);
	        result += lineDelimiter;

	        data.forEach(function(item) {
	            ctr = 0;
	            keys.forEach(function(key) {
	                if (ctr > 0) result += columnDelimiter;

	                result += item[key] || '';
	                ctr++;
	            });
	            result += lineDelimiter;
	        });

	        let csv = result;

	        data = null;
	        let filename;
	        let link;

	        // filename = 'export.csv';
	        let fileStart = this.evaluateSlot(this.$props.options.export.file);
	        if (fileStart) {
	          filename = this.evaluateSlot(this.$props.options.export.file) + '.csv';
	        } else {
	          filename = 'export.csv';
	        }

	        if (!csv.match(/^data:text\/csv/i)) {
	            csv = 'data:text/csv;charset=utf-8,' + csv;
	        }
	        data = encodeURI(csv);

	        link = document.createElement('a');
	        link.setAttribute('href', data);
	        link.setAttribute('download', filename);
	        link.click();

	      } catch (err) {
	        console.error(err);
	      }

	    },
	    showMoreRecords() {
	      // if there is only 1 page to return (from AIS);
	      if (!this.pageCount) {
	        this.compareAndSetHighestRowRetrieved();
	      // if there are multiple pages to return (from AIS) and there are not enough items in the table state (itemsFiltered) to cover the increment;
	      } else if (this.itemsAfterFilters.length < this.highestRowRetrieved + this.options.defaultIncrement) {
	        // if there is another page to return (from AIS)
	        if (this.pageCount > this.highestPageRetrieved) {
	          this.getMoreRecords();
	          this.compareAndSetHighestRowRetrieved();
	        // if there are no more pages to return (from AIS)
	        } else {
	          this.highestRowRetrieved = this.count;
	        }
	      // if there are multiple pages to return (from AIS) but there are already enough items in the table state (itemsFiltered) to cover the increment;
	      } else {
	        if (!this.options.showAllRowsOnFirstClick) {
	          this.highestRowRetrieved = this.highestRowRetrieved + this.options.defaultIncrement;
	        } else {
	          this.highestRowRetrieved = this.count;
	        }
	      }
	    },
	    compareAndSetHighestRowRetrieved() {
	      if (!this.options.showAllRowsOnFirstClick) {
	        if (this.count < this.highestRowRetrieved + this.options.defaultIncrement) {
	          this.highestRowRetrieved = this.count;
	        } else {
	          this.highestRowRetrieved = this.highestRowRetrieved + this.options.defaultIncrement;
	        }
	      } else {
	        this.highestRowRetrieved = this.count;
	      }
	    },
	    getMoreRecords() {
	      const dataSource = this.options.id;
	      const highestPageRetrieved = this.highestPageRetrieved;
	      this.$controller.getMoreRecords(dataSource, highestPageRetrieved);
	    },
	    slugifyFilterValue(filterValue) {
	      const { direction, value, unit } = filterValue;
	      return [direction, value, unit].join('-');
	    },
	    deslugifyFilterValue(slug) {
	      const parts = slug.split('-');
	      const [direction, value, unit] = parts;
	      return {value, unit, direction};
	    },
	    handleSortValueChange(e) {
	      // console.log('handleSortValueChange running', e);

	      const value = e.target.value;
	      this.sortField = value;
	    },
	    handleFilterValueChange(e) {
	      console.log('handle filter value change', e);

	      const target = e.target;
	      const slug = target.value;

	      // deslugify filter value
	      const valueObj = this.deslugifyFilterValue(slug);

	      const parent = target.parentElement;
	      const parentId = parent.id;

	      // patch and replace filter selections
	      const prevFilterSelections = this.filterSelections;
	      const nextFilterSelections = Object.assign({}, prevFilterSelections);
	      nextFilterSelections[parentId] = valueObj;
	      this.filterSelections = nextFilterSelections;
	    },
	    values(item) {
	      const fields = this.options.fields;
	      const sourceFields = fields.map(field => field.sourceField);
	      return sourceFields.map(sourceField => item[sourceField])
	    },
	    handleFilterFormKeyup(e) {
	      const input = e.target.value;
	      this.searchText = input;
	    },
	    handleFilterFormX(e) {
	      e.target[0].value = '';
	      this.searchText = "";
	    },
	    filterItems(items, filters, filterSelections) {
	      // console.log('typeof items:', typeof items);
	      // console.log('FILTER ITEMS is running, items:', items, 'filters:', filters, 'filterSelections:', filterSelections);
	      let itemsFiltered = items.slice();

	      if (filters) {
	        // console.log('in filterItems, filters:', filters, 'filters.length', filters.length, 'filters.entries():', filters.entries(), 'filters.keys():', filters.keys());
	        // for (let [index, filter] of filters.entries()) {
	        for (let index=0; index < filters.length; index++) {
	          const key = 'filter-' + index;
	          // const key = `filter-${index}`;
	          const data = filterSelections[key];
	          // console.log('index:', index, 'key:', key, 'data:', data, 'filters:', filters[index]);
	          const {type, getValue} = filters[index];
	          const {unit, value} = data;
	          const direction = data.direction || 'subtract';

	          // console.log('type:', type);

	          // TODO put these in separate methods
	          switch(type) {
	            case 'data':
	              // console.log('DATA FILTER');
	              // itemsFiltered = itemsFiltered.filter(item => {
	              //   const itemValue = getValue(item);
	              //   console.log('horiz table itemValue:', itemValue);
	              //   return itemValue;
	              // });
	              break;
	            case 'time':
	              console.log('TIME FILTER direction', direction, 'value:', value, 'unit:', unit);
	              let min, max;

	              if (direction === 'subtract') {
	                max = moment();
	                min = moment().subtract(value, unit);
	                // console.log('max:', max, 'min', min);
	              } else if (direction === 'add') {
	                min = moment();
	                max = min.add(value, unit);
	              } else {
	                throw `Invalid time direction: ${direction}`;
	              }

	              // console.log('in case time, itemsFiltered:', itemsFiltered);
	              itemsFiltered = itemsFiltered.filter(item => {
	                const itemValue = getValue(item);
	                const itemMoment = moment(itemValue);
	                const isBetween = itemMoment.isBetween(min, max);
	                // console.log('itemValue:', itemValue, 'itemMoment:', itemMoment, 'min:', min, 'max:', max, 'isBetween:', isBetween);
	                return isBetween;
	              });
	              // console.log('ITEMS FILTERED BY TIME FILTER', itemsFiltered);
	              break;

	            default:
	              throw `Unhandled filter type: ${type}`;
	              break;
	          }
	        }
	      }
	      return itemsFiltered;
	    },
	    // sortItems(items, sortOpts) {
	    sortItems(items, sortOpts) {
	      // console.log('sortItems, sortOpts:', sortOpts);
	      // TODO finish this
	      // if (Object.keys(this.filterData).length) {
	      //   console.log('there is filterData', this.filterData);
	      //   return this.itemsFiltered;
	      // } else {
	      //   console.log('there is no filterData');
	      //   return this.items;
	      // }

	      // const items = this.itemsFiltered;
	      // const sortOpts = this.options.sort;
	      // console.log(sortOpts)

	      // if there's no no sort config, just return the items.
	      if (!sortOpts) {
	        // console.log('noSortOpts');
	        return items;
	      }

	      // const getValueFn = sortOpts.getValue;
	      // const order = sortOpts.order;

	      // get sort fn or use this basic one
	      const sortFn = sortOpts.compare || this.defaultSortFn;
	      // console.log('sortFn', sortFn);
	      // console.log('sortFn', sortFn)
	      return items.sort(sortFn);
	    },
	    defaultSortFn(a, b) {
	      // console.log('defaultSortFn is running, a:', a, 'b:', b);
	      const sortOpts = this.options.sort;
	      const getValueFn = sortOpts.getValue;
	      const sortField = this.sortField;
	      let order;
	      if (typeof sortOpts.order === 'function') {
	        const orderFn = sortOpts.order;
	        order = orderFn(sortField);
	      } else {
	        order = sortOpts.order;
	      }
	      console.log('sortField', sortField, 'order', order);

	      const valA = getValueFn(a, sortField);
	      const valB = getValueFn(b, sortField);
	      let result;

	      if (valA === null) {
	        if (order === 'desc') {
	          result = -1;
	        } else {
	          result = 1;
	        }
	      } else if (valB === null) {
	        if (order === 'desc') {
	          result = 1;
	        } else {
	          result = -1;
	        }
	      } else if (valA < valB) {
	        result = -1;
	      } else if (valB < valA) {
	        result = 1;
	      } else {
	        result = 0;
	      }

	      // reverse if we have an order and the target order is desc
	      if (order) {
	        if (order === 'desc') {
	          result = result * -1;
	        } else if (order !== 'asc') {
	          throw `Unknown sort order: ${order}`;
	        }
	      }

	      // console.log('compare', valA, 'to', valB, ', result:', result);

	      return result;
	    },
	    // this updates the global state that stores filtered table rows
	    updateTableFilteredData() {
	      // console.log('update table filtered data is running, options:', this.options);

	      // get table id
	      const { tableId } = this.options;

	      // update global state
	      this.$store.commit('setHorizontalTableFilteredData', {
	        tableId,
	        data: this.itemsAfterFilters
	      });
	    },
	    isEmpty(obj) {
	      for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	          return false;
	      }
	      return true;
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" img[data-v-3b8b0c0a] { display: block; margin: 0 auto; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	  var Image_ = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{attrs:{"src":_vm.slots.source}})},staticRenderFns: [],_scopeId: 'data-v-3b8b0c0a',
	    mixins: [TopicComponent]
	  };

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" table[data-v-42075018] { margin: 0; } th[data-v-42075018], td[data-v-42075018] { font-size: 15px; text-align: left; } th[data-v-42075018] { width: 30%; } .external-link[data-v-42075018] { padding-top: 5px; } .table-title[data-v-42075018] { /*too much*/ /*margin-top: 1rem;*/ } .table-container[data-v-42075018] { /*this was too much padding for the parcel table, taking out for now*/ /*padding-top: 1rem;*/ margin-bottom: 10px !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var VerticalTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.shouldShowTable)?_c('div',{staticClass:"table-container"},[(_vm.slots.title)?_c('h4',{staticClass:"table-title"},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]):_vm._e(),_vm._v(" "),_c('table',[_c('tbody',_vm._l((_vm.slots.fields),function(field){return _c('tr',[_c('th',{style:(_vm.styles.th || ''),domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.label))}}),_vm._v(" "),(_vm.hasData)?_c('td',{domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.value, field.transforms, _vm.nullValue))}}):_vm._e(),_vm._v(" "),(!_vm.hasData)?_c('td',{domProps:{"innerHTML":_vm._s('')}}):_vm._e()])}))]),_vm._v(" "),(_vm.options && _vm.options.externalLink)?_c('external-link',{attrs:{"options":_vm.options.externalLink,"type":'vertical-table'}}):_vm._e()],1):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-42075018',
	  mixins: [TopicComponent],
	  components: {
	    ExternalLink,
	  },
	  computed: {
	    styles() {
	      if (this.$props.options.styles) {
	        return this.$props.options.styles;
	      } else {
	        return '';
	      }
	    },
	    shouldShowTable() {
	      const hasData = this.hasData;
	      if (this.item) {
	        if (this.item.activeTable) {
	          const filterValue = this.item.activeTable;
	          const id = this.options.id;
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
	    hasData() {
	      // console.log(this.topicKey, '-', 'hasData?', this.dataSources);
	      // console.log('vertTable hasData is running, this.$props.options:', this.$props.options, 'this.$config.dataSources:', this.$config.dataSources);

	      // make sure the following is true for all data sources
	      if (!this.$props.options.dataSources) {
	        return true;
	      } else {
	        const hasData = this.$props.options.dataSources.every(dataSource => {
	          const targetsFn = this.$config.dataSources[dataSource].targets;

	          // if the data source is configured for targets
	          if (targetsFn) {
	            const targetsMap = this.$store.state.sources[dataSource].targets;
	            const targets = Object.values(targetsMap);

	            // but there are no targets for this address, return false
	            if (targets.length === 0) {
	              return false;
	            }

	            // if there are targets for this address, make sure none of them
	            // are "waiting"
	            return targets.every(target => target.status !== 'waiting');

	          // if the data source is not configured for targets, just check that
	          // it has data
	          } else {
	            return !!this.$store.state.sources[dataSource].data;
	          }
	        });

	        return hasData;
	      }
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .container[data-v-15b137ab] { margin-bottom: 30px; } .button[data-v-15b137ab] { margin-right: 10px; margin-top: 0px; margin-bottom: 0px; } .overlay-toggle[data-v-15b137ab] { border: 1px solid #f99300 !important; color: #f99300 !important; background: #fff !important; } .overlay-toggle.mouseover[data-v-15b137ab] { background: #444 !important; color: white !important; } .overlay-toggle.active[data-v-15b137ab] { background: #f99300 !important; color: #fff !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var OverlayToggleGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items.length)?_c('div',[_c('div',{staticClass:"container"},[(_vm.slots.title)?_c('h4',[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.items),function(item){return _c('a',{staticClass:"button overlay-toggle",class:{'active': _vm.isActive(item), 'mouseover': _vm.isMousedover(item)},attrs:{"href":"#","data-key":_vm.keyForItem(item)},on:{"click":_vm.handleClick,"mouseover":function($event){_vm.handleMouseover(_vm.keyForItem(item));},"mouseout":_vm.handleMouseout}},[_vm._v(" "+_vm._s(_vm.keyForItem(item))+" ")])})],2)]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-15b137ab',
	  mixins: [TopicComponent],
	  data() {
	    return {
	      mouseover: null
	    }
	  },
	  computed: {
	    items() {
	      return this.evaluateSlot(this.slots.items);
	    },
	  },
	  methods: {
	    isActive(item) {
	      const imageOverlay = this.$store.state.map.imageOverlay;
	      const itemKey = this.keyForItem(item);
	      return imageOverlay === itemKey;
	    },
	    keyForItem(item) {
	      const getKeyFn = this.options.getKey;
	      return getKeyFn(item);
	    },
	    handleClick(e) {
	      e.preventDefault();
	      const prevImageOverlay = this.$store.state.map.imageOverlay;
	      const nextImageOverlay = e.target.getAttribute('data-key');
	      // console.log(nextImageOverlay);
	      if (prevImageOverlay === nextImageOverlay) {
	        this.$store.commit('setImageOverlay', null);
	      } else {
	        this.$store.commit('setImageOverlay', nextImageOverlay);
	      }
	    },
	    handleMouseover(key) {
	      this.mouseover = key;
	    },
	    handleMouseout() {
	      this.mouseover = null;
	    },
	    isMousedover(item) {
	      const itemKey = this.keyForItem(item);
	      if (itemKey === this.mouseover) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=Paragraph.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Paragraph = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{directives:[{name:"show",rawName:"v-show",value:(this.vshowComputed),expression:"this.vshowComputed"}],style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}})},staticRenderFns: [],_scopeId: 'data-v-bfe356e4',
	  mixins: [TopicComponent],
	  computed: {
	    additionalTags() {
	      return this.$props.slots.additionalTags || [];
	    },
	    message() {
	      // if there is a transform, it needs this textWithTags section
	      let textWithTags = '';
	      for (let tag of this.additionalTags) {
	        textWithTags = textWithTags + '<' + tag + '>';
	      }
	      textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
	      for (let tag of this.additionalTags) {
	        textWithTags = textWithTags + '</' + tag + '>';
	      }
	      return textWithTags;
	    },
	    style() {
	      if (this.$props.options) {
	        return this.$props.options.style || '';
	      }
	    },
	    vshowComputed() {
	      // console.log('vshowProp:', this.$props.slots.vshowProp);
	      if (this.$props.slots) {
	        if (this.evaluateSlot(this.$props.slots.vshowProp) === false) {
	          // console.log('returning vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
	          return false;
	        } else {
	          // console.log('returning true, vshowProp:', this.evaluateSlot(this.$props.slots.vshowProp));
	          return true;
	        }
	      } else {
	        // console.log('returning true, no props');
	        return true;
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=SpanComp.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var SpanComp = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}})},staticRenderFns: [],_scopeId: 'data-v-1f4a6309',
	  mixins: [TopicComponent],
	  computed: {
	    additionalTags() {
	      return this.$props.slots.additionalTags || [];
	    },
	    message() {
	      // if there is a transform, it needs this textWithTags section
	      let textWithTags = '';
	      for (let tag of this.additionalTags) {
	        textWithTags = textWithTags + '<' + tag + '>';
	      }
	      textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
	      for (let tag of this.additionalTags) {
	        textWithTags = textWithTags + '</' + tag + '>';
	      }
	      return textWithTags;
	    },
	    style() {
	      if (this.$props.options) {
	        return this.$props.options.style || '';
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .list[data-v-2473e0a4] { position: inherit; margin-bottom: 0px !important; } ul[data-v-2473e0a4] { list-style: none; padding-left: 0; margin-left: 0; } .message-p[data-v-2473e0a4] { margin-bottom: 0px; } /*.topic-body { margin-bottom: 0px; }*/ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var List = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list"},[(_vm.evaluateSlot(_vm.slots.relatedAddresses))?_c('ul',_vm._l((_vm.evaluateSlot(_vm.slots.relatedAddresses)),function(relatedAddress){return _c('li',[_c('a',{attrs:{"href":'#/' + encodeURIComponent(relatedAddress.properties.street_address)}},[_vm._v(" "+_vm._s(relatedAddress.properties.street_address)+" ")])])})):_c('p',{staticClass:"message-p"},[_vm._v(" No related addresses were found for this address. ")])])},staticRenderFns: [],_scopeId: 'data-v-2473e0a4',
	  mixins: [TopicComponent],
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .tabs-panel[data-v-291fce0c] { padding: 20px; padding-bottom: 0px; } /*recreate phila patterns tab styles*/ .tabs-title a[data-v-291fce0c] { border-left: 5px solid #fff; } .tabs-title.is-active a[data-v-291fce0c] { border-left: 5px solid #f99300; /*when you first load the page, the active tab doesn't turn gray for some reason. forcing it here.*/ background: #f0f0f0; } .tabs-title a[data-v-291fce0c]:hover { border-left: 5px solid #f99300; background: #f0f0f0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	// console.log('in TabGroup.vue script, TopicComponentGroup:', TopicComponentGroup);

	var TabGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"tabs",attrs:{"data-tabs":""}},_vm._l((_vm.items),function(item){return _c('li',{key:_vm.keyForItem(item),staticClass:"tabs-title",class:{'is-active': _vm.itemIsActive(item)}},[_c('a',{attrs:{"href":'#parcel-' + _vm.keyForItem(item)},on:{"click":function($event){$event.preventDefault();_vm.clickedItem(item);}}},[_vm._v(" "+_vm._s(_vm.titleForItem(item))+" ")])])})),_vm._v(" "),_c('div',{staticClass:"tabs-content"},_vm._l((_vm.items),function(item){return _c('div',{staticClass:"tabs-panel",class:{'is-active': _vm.itemIsActive(item)},attrs:{"id":'parcel-' + _vm.keyForItem(item)}},[_c('topic-component-group',{attrs:{"topic-components":_vm.comps,"item":item}})],1)}))])},staticRenderFns: [],_scopeId: 'data-v-291fce0c',
	  name: 'TabGroup',
	  mixins: [TopicComponent],
	  components: {
	    // TopicComponentGroup
	  },
	  beforeCreate() {
	    // console.log('tabGroup beforeCreate is running');
	    this.$options.components.TopicComponentGroup = TopicComponentGroup;
	  },
	  // some internal state for things local enough that they shouldn't be in
	  // vuex if we can avoid it.
	  data() {
	    // computed props aren't accessible here, so evaluate slot separately
	    const items = this.evaluateSlot(this.slots.items);
	    return {
	      activeItem: this.activeItemFromState,// || this.keyForItem(items[0]),
	      activeMapreg: this.activeMapregFromState,// || this.titleForItem(items[0]),
	      activeAddress: this.activeAddressFromState,// || this.addressForItem(items[0])
	    };
	  },
	  mounted() {
	  //   // REVIEW globals. also is this still needed?
	    this.$data.activeItem = this.activeItemFromState;
	    this.$data.activeMapreg = this.activeMapregFromState;
	    this.$data.activeAddress = this.activeAddressFromState;
	  },
	  // props: [],
	  computed: {
	    items() {
	      const items = this.evaluateSlot(this.slots.items);

	      // sort
	      const sortFn = this.options.sort;
	      let itemsSorted = items;
	      if (sortFn) {
	        itemsSorted = sortFn(items);
	      }

	      return itemsSorted;
	    },
	    comps() {
	      return this.options.components;
	    },
	    activeItemFromState() {
	      return this.$store.state.parcels.dor.activeParcel;
	    },
	    activeMapregFromState() {
	      return this.$store.state.parcels.dor.activeMapreg;
	    },
	    activeAddressFromState() {
	      return this.$store.state.parcels.dor.activeAddress;
	    }
	  },
	  watch: {
	    // when items change, update the activeItem
	    items(items) {
	      const nextFirstItem = items[0];
	      const nextActiveKey = this.keyForItem(nextFirstItem);
	      this.activeItem = nextActiveKey;
	      const nextMapreg = this.titleForItem(nextFirstItem);
	      this.activeMapreg = nextMapreg;
	      const nextAddress = this.addressForItem(nextFirstItem);
	      this.activeAddress = nextAddress;
	    }
	  },
	  methods: {
	    clickedItem(item) {
	      this.$data.activeItem = this.keyForItem(item);
	      this.$data.activeMapreg = this.titleForItem(item);
	      this.$data.activeAddress = this.addressForItem(item);

	      const payload = {
	        parcelLayer: 'dor',
	        activeParcel: this.$data.activeItem,
	        activeMapreg: this.$data.activeMapreg,
	        activeAddress: this.$data.activeAddress
	      };
	      this.$store.commit('setActiveParcel', payload);
	      // this.$store.commit('setActiveDorParcel', this.$data.activeItem);
	    },
	    keyForItem(item) {
	      try {
	        return this.options.getKey(item);
	      } catch (e) {
	        return null;
	      }
	    },
	    titleForItem(item) {
	      try {
	        return this.options.getTitle(item);
	      } catch (e) {
	        return null;
	      }
	    },
	    addressForItem(item) {
	      try {
	        return this.options.getAddress(item);
	      } catch (e) {
	        return null;
	      }
	    },
	    itemIsActive(item) {
	      const isActive = (this.activeItem === this.keyForItem(item));
	      return isActive;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .tabs-panel[data-v-7953bbb6] { padding: 20px; } .inline-block[data-v-7953bbb6] { display: inline-block; } .vertically-centered[data-v-7953bbb6] { display: inline-block; vertical-align: middle; } .mb-horizontal-table-controls[data-v-7953bbb6] { text-align: center; vertical-align: middle; margin-bottom: 10px; } /* dropdown filters */ .mb-select-text[data-v-7953bbb6] { font-size: 16px; padding-right: 5px; padding-left: 5px; } .mb-select[data-v-7953bbb6] { width: auto; height: 40px; vertical-align: middle; /*padding-right: 20px;*/ } .mb-select-option[data-v-7953bbb6] { display: inline-block; padding-right: 100px; margin-right: 100px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	// import TopicComponentGroup from '../TopicComponentGroup.vue';

	var HorizontalTableGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!!this.$props.options.filters)?_c('div',{staticClass:"mb-horizontal-table-controls"},_vm._l((this.$props.options.filters),function(filter,index){return _c('div',{staticClass:"inline-block",attrs:{"id":'filter-' + index}},[_c('div',{staticClass:"vertically-centered mb-select-text"},[_vm._v(_vm._s(filter.label))]),_vm._v(" "),_c('select',{staticClass:"mb-select",on:{"change":_vm.handleFilterValueChange}},[_c('optgroup',_vm._l((filter.values),function(filterValue){return _c('option',{staticClass:"mb-select-option",domProps:{"value":_vm.slugifyFilterValue(filterValue)}},[_vm._v(" "+_vm._s(filterValue.label)+" ")])}))])])})):_vm._e(),_vm._v(" "),_vm._l((_vm.options.tables),function(table){return _c('horizontal-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldShowTable(table.options.id)),expression:"shouldShowTable(table.options.id)"}],attrs:{"item":_vm.tableGroupData,"options":table.options,"slots":table.slots}})})],2)},staticRenderFns: [],_scopeId: 'data-v-7953bbb6',
	  // name: 'HorizontalTableGroup',
	  mixins: [TopicComponent],
	  components: {
	    HorizontalTable,
	    // TopicComponentGroup
	  },
	  // some internal state for things local enough that they shouldn't be in
	  // vuex if we can avoid it.
	  data() {
	    const tableGroupData = {
	      'tableGroupId': this.options.horizontalTableGroupId,
	      'activeTable': null,
	      'activeTableId': null,
	    };
	    // return {
	    //   horizontalTableGroupId: this.options.horizontalTableGroupId,
	    //   activeTable: null,
	    //   activeTableId: null,
	    // };
	    return {
	      tableGroupData
	    };
	  },
	  created() {
	    console.log('horizontalTableGroup created is starting, this.tableGroupData:', this.tableGroupData);
	    if (this.options.filters) {
	      console.log('horizontalTableGroup created, if this.options.filters is running:', this.options.filters, this.options.filters.entries());
	      for (let filter of this.options.filters) {
	      // for (let [index, filter] of this.options.filters.entries()) {
	        console.log('for loop, this.options.filters:', this.options.filters[0]);
	        // let filter = this.options.filters[0]
	      // for (let [index, filter] of this.options.filters.entries()) {
	        console.log('for loop, filter:', filter);
	        // console.log('for loop, index:', index, 'filter:', filter);
	        const defaultTableName = filter.values[0].value || {};
	        console.log('for loop, defaultTableName:', defaultTableName);

	        // add activeTable to local data
	        this.tableGroupData.activeTable = defaultTableName;
	        // add activeTableId to local data
	        // console.log('for loop, this.options.components:', this.options.components);
	        for (let comp of this.options.tables) {
	          if (comp.options.id === defaultTableName) {
	            this.tableGroupData.activeTableId = comp._id;
	          }
	        }
	        console.log('horizontalTableGroup this.tableGroupData:', this.tableGroupData);
	        this.$store.commit('setHorizontalTableGroupActiveTable', this.tableGroupData);
	        // this.$store.commit('setHorizontalTableGroupActiveTableId', this.activeTable);
	      }
	      console.log('horizontalTableGroup created, if this.options.filters is ending');
	    }
	    if (this.options.alternate) {
	      console.log('horizontalTableGroup created, if this.options.alternate - mainTable', this.options.alternate.mainTable, this.altMainTable, 'dependentTable', this.options.alternate.dependentTable, this.altDepTable);
	      const sources = this.$store.state.sources;
	      // console.log('Tablegroup source check dep', sources[this.altDepTable.dataSource].data);
	      // console.log('Tablegroup source check main', sources[this.altMainTable.dataSource].data);
	      if (sources[this.altDepTable.dataSource].data && !sources[this.altMainTable.dataSource].data) {
	        // console.log('Tablegroup there is a dep table, and not a main table');
	        this.activeTable = this.altDepTable.id;
	        this.activeTableId = 'aaa';
	        this.$store.commit('setHorizontalTableGroupActiveTable', this.tableGroupData);
	        // this.$store.commit('setHorizontalTableGroupActiveTableId', this.activeTable);
	      } else if (sources[this.altMainTable.dataSource].data) {
	        this.activeTable = this.altMainTable.id;
	        this.activeTableId = 'bbb';
	        this.$store.commit('setHorizontalTableGroupActiveTable', this.tableGroupData);
	        // this.$store.commit('setHorizontalTableGroupActiveTableId', this.activeTable);
	      }
	    }
	    if (this.options.showBoth) {
	      console.log('tableGroup showBoth');
	    }
	  },
	  computed: {
	    altMainTable() {
	      if (this.options.alternate) {
	        return this.options.alternate.mainTable;
	      } else {
	        return null
	      }
	    },
	    altDepTable() {
	      if (this.options.alternate) {
	        return this.options.alternate.dependentTable;
	      } else {
	        return null
	      }
	    },
	  },
	  methods: {
	    shouldShowTable(id) {
	      let result = true;

	      // if the table is in a tab group or table group, it will have an "item" in props
	      // if (this.item) {
	        // if it is in a table group, the item will contain an "activeTable" for the group
	        // if (this.activeTable) {
	          // const id = this.options.id;
	          if (this.tableGroupData.activeTable != id) {
	            result = false;
	          }
	        // }
	      // }
	      // if there is no data, and the table should not show at all if it is empty
	      // if (this.options.showOnlyIfData && this.tableGroupData.length === 0) {
	      //   result = false;
	      // }

	      return result;
	    },
	    slugifyFilterValue(filterValue) {
	      const { direction, value, unit } = filterValue;
	      return [direction, value, unit].join('-');
	    },
	    deslugifyFilterValue(slug) {
	      const parts = slug.split('-');
	      const [direction, value, unit] = parts;
	      return {value, unit, direction};
	    },
	    handleFilterValueChange(e) {
	      console.log('handle activeTable value change', e);
	      const target = e.target;
	      const slug = target.value;
	      // deslugify filter value
	      const valueObj = this.deslugifyFilterValue(slug);
	      const tableName = valueObj.value;

	      // add activeTable to local data
	      this.tableGroupData.activeTable = tableName;

	      // add activeTableId to local data
	      for (let comp of this.options.tables) {
	        console.log('tableName:', tableName, 'comp.options.id:', comp.options.id, 'comp:', comp);
	        if (comp.options.id === tableName) {
	          this.tableGroupData.activeTableId = comp._id;
	        }
	      }

	      console.log('handleFilterValueChange, this.tableGroupData:', this.tableGroupData);
	      this.$store.commit('setHorizontalTableGroupActiveTable', this.tableGroupData);
	      // this.$store.commit('setHorizontalTableGroupActiveTableId', this.activeTable);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*REVIEW these aren't prefixed `mb-`because they're scoped, but it feels inconsistent?*/ .topic-header[data-v-2db893cf] { background: #f5f5f5; border: 1px solid #ddd; display: block; font-size: 18px; font-weight: normal; min-height: 70px; line-height: 25px; padding: 10px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); margin-bottom: 8px; display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: space-between; } .topic-header[data-v-2db893cf]:hover { background: #fff; color: inherit; } .topic-header-content[data-v-2db893cf] { display: flex; flex-direction: row; align-items: center; } .topic-header-icon[data-v-2db893cf] { padding-left: 10px; padding-right: 10px; } .topic-header-label-holder[data-v-2db893cf] { margin-left: 15px; } .topic-body[data-v-2db893cf] { padding: 5px; margin-bottom: 10px; } .topic-body-enter-active[data-v-2db893cf], .topic-body-leave-active[data-v-2db893cf] { transition: opacity 0.18s; } .topic-body-enter[data-v-2db893cf], .topic-body-leave-to[data-v-2db893cf] { opacity: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Topic = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.shouldShowTopic)?_c('div',[(_vm.shouldShowHeader)?_c('a',{staticClass:"topic-header",attrs:{"href":"#","data-topic-key":_vm.topicKey},on:{"click":function($event){$event.preventDefault();return _vm.handleTopicHeaderClick($event)}}},[_c('div',{staticClass:"topic-header-content"},[_c('font-awesome-icon',{attrs:{"icon":_vm.icon}}),_vm._v(" "),_c('div',{staticClass:"topic-header-label-holder"},[_vm._v(" "+_vm._s(_vm.topic.label)+" ")])],1),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === 'waiting'),expression:"status === 'waiting'"}],staticClass:"loading"},[_c('font-awesome-icon',{staticClass:"fa-lg spin",attrs:{"icon":"spinner"}})],1)]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"topic-body"}},[(_vm.shouldShowBody)?_c('div',{staticClass:"topic-body",attrs:{"data-topic-key":_vm.topicKey}},[_c('topic-component-group',{attrs:{"topic-components":_vm.topic.components}})],1):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldShowError),expression:"shouldShowError"}],staticClass:"topic-body",domProps:{"innerHTML":_vm._s(this.errorMessage)}})],1):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-2db893cf',
	  name: 'Topic',
	  props: ['topicKey'],
	  components: {},
	  beforeCreate() {
	    this.$options.components.TopicComponentGroup = TopicComponentGroup;
	  },
	  computed: {
	    // returns the full config object for the topic
	    topic() {
	      const topicKey = this.$props.topicKey;
	      const topicsFiltered = this.$config.topics.filter((topic) => {
	        return topic.key === this.$props.topicKey;
	      });
	      if (topicsFiltered.length !== 1) {
	        throw `Could not get single config object for topic '${topicKey}'.`;
	      }
	      const config = topicsFiltered[0];
	      return config;
	    },
	    icon() {
	      return this.topic.icon;
	    },
	    isActive() {
	      const key = this.topic.key;
	      const activeTopic = this.$store.state.activeTopic;
	      return activeTopic === key;
	    },
	    shouldShowHeader() {
	      return this.$config.topics.length > 1;
	    },
	    dataSources() {
	      return this.topic.dataSources || [];
	    },
	    hasData() {
	      // console.log(this.topicKey, '-', 'hasData?', this.dataSources);

	      // make sure the following is true for all data sources
	      const hasData = this.dataSources.every(dataSource => {
	        const targetsFn = this.$config.dataSources[dataSource].targets;

	        // if the data source is configured for targets
	        if (targetsFn) {
	          const targetsMap = this.$store.state.sources[dataSource].targets;
	          const targets = Object.values(targetsMap);

	          // but there are no targets for this address, return false
	          if (targets.length === 0) {
	            return false;
	          }

	          // if there are targets for this address, make sure none of them
	          // are "waiting"
	          return targets.every(target => target.status !== 'waiting');

	        // if the data source is not configured for targets, just check that
	        // it has data
	        } else {
	          return !!this.$store.state.sources[dataSource].data;
	        }
	      });

	      return hasData;
	    },
	    shouldShowBody() {
	      const succeeded = this.status === 'success';
	      const hasData = this.hasData;
	      const should = succeeded && hasData && this.isActive;
	      return should;
	    },
	    shouldShowTopic() {
	      if (!this.topic.onlyShowTopicIfDataExists) {
	        return true;
	      } else {
	        let result = true;
	        const requiredDataSources = Object.keys(this.topic.onlyShowTopicIfDataExists);
	        // console.log('requiredDataSources', requiredDataSources);
	        for (let requiredDataSource of requiredDataSources) {
	          const dataSource = this.topic.onlyShowTopicIfDataExists[requiredDataSource];
	          const pathToDataArray = dataSource.pathToDataArray;
	          const minDataLength = dataSource.minDataLength;
	          // console.log('requiredDataSource', requiredDataSource, 'dataSource', dataSource);
	          let dataArray;
	          if (!this.$store.state.sources[requiredDataSource].data) {
	            // if there is no data (yet)
	            return false;
	          } else {
	            if (!pathToDataArray) {
	              dataArray = this.$store.state.sources[requiredDataSource].data;
	            } else if (pathToDataArray.length === 1) {
	              dataArray = this.$store.state.sources[requiredDataSource].data[pathToDataArray[0]];
	            }
	            // TODO - implement system if the path to the data is longer than a single step
	            // else {
	              //   dataArray = this.$store.state.sources[requiredDataSource].data[pathToDataArray[0]].[pathToDataArray[1]];
	              // }
	            if (dataArray.length < minDataLength) {
	              result = false;
	            }
	          }
	        }
	        return result;
	      }
	    },
	    shouldShowError() {
	      const shouldShowError = (
	        // topic must be active and
	        this.isActive && (
	          // there either has to be an error or
	          this.status === 'error' ||
	          // we got the response and it's empty
	          (this.status !== 'waiting' && !this.hasData)
	        )
	      );
	      shouldShowError && console.log('BINGO BINGO BINGO:', this.topicKey, 'shouldShowError:', shouldShowError, 'status:', this.status, 'hasData:', this.hasData);
	      return shouldShowError;
	    },
	    errorMessage() {
	      if (this.topic.errorMessage) {
	        return this.topic.errorMessage(this.$store.state);
	      } else {
	        return 'Could not locate records for that address.';
	      }
	    },
	    // REVIEW this is getting cached and not updating when the deps update
	    status: {
	      cache: false,
	      get() {
	        // get the status of each source
	        const dataSources = this.topic.dataSources || [];

	        // if no sources, return success
	        if (dataSources.length === 0) {
	          return 'success';
	        }

	        let topicStatus;
	        const sourceStatuses = dataSources.map(dataSource => {
	          const targetsFn = this.$config.dataSources[dataSource].targets;

	          // if the data source is configured for targets
	          if (targetsFn) {
	            const targetsMap = this.$store.state.sources[dataSource].targets;
	            const targets = Object.values(targetsMap);

	            // but there are no targets for this address, return false
	            if (targets.length === 0) {
	              return;
	            }

	            // if there are targets for this address, make sure none of them
	            // are "waiting"
	            return targets.map(target => {
	              return target.status
	            });

	          // if the data source is not configured for targets, just check that
	          // it has data
	          } else {
	            return [this.$store.state.sources[dataSource].status];
	          }
	        });

	        let flatArray = [];
	        for (let sourceStatus of sourceStatuses) {
	          if (sourceStatus) {
	            for (let sourceStatusValue of sourceStatus) {
	              flatArray.push(sourceStatusValue);
	            }
	          }
	        }

	        if (flatArray.includes('waiting')) {
	          topicStatus = 'waiting';
	        } else if (flatArray.includes('error')) {
	          topicStatus = 'error';
	        } else {
	          topicStatus = 'success';
	        }
	        return topicStatus;
	      }
	    },
	  },
	  methods: {
	    configForBasemap(key) {
	      return this.$config.map.basemaps[key];
	    },

	    handleTopicHeaderClick(e) {
	      const topic = this.$props.topicKey;
	      let nextTopic;

	      if (topic !== this.$store.state.activeTopic) {
	        nextTopic = topic;
	      }

	      // notify controller (which will handle routing)
	      this.$controller.handleTopicHeaderClick(nextTopic);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var TopicSet = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((this.$config.topics),function(topic){return _c('topic',{key:topic.key,attrs:{"topicKey":topic.key}})}))},staticRenderFns: [],
	  mixins: [TopicComponent],
	  name: 'TopicSet',
	  components: {
	    Topic,
	  },
	  mounted() {
	    if (this.$store.state.activeTopic === null || this.$store.state.activeTopic === '') {
	      this.setDefaultTopicActive();
	    }
	  },
	  methods: {
	    setDefaultTopicActive() {
	      if (this.$props.options.defaultTopic) {
	        this.$store.state.activeTopic = this.$props.options.defaultTopic;
	      }
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pl-alert { position: fixed; right: 0; bottom: 0; /* height: 100%; */ /* height: 300px; */ width: 100%; background: rgba(68, 68, 68, 0.95); color: #fff; z-index: 10000; font-size: 1.25em; margin: 0 auto; padding: 1em; overflow-y: auto; } .pl-alert-body { width: 75%; margin-left: auto; margin-right: auto; margin-bottom: 0 auto; margin-top: 50px; } .pl-alert-close-button { position: fixed; right: 40px; /* float: right; */ cursor: pointer; } .pl-alert a { color: #a5c0e4 !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	var Popover = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pl-alert",style:(_vm.plAlertStyle)},[_c('span',{staticClass:"pl-alert-close-button",on:{"click":_vm.close}},[_c('font-awesome-icon',{staticClass:"fa-2x",attrs:{"icon":"times-circle"}})],1),_vm._v(" "),_c('div',{staticClass:"pl-alert-body"},[_c('span',{domProps:{"innerHTML":_vm._s(this.value)}}),_vm._v(" "),_c('topic-component-group',{attrs:{"topic-components":_vm.options.components,"item":_vm.item}})],1)])},staticRenderFns: [],
	  mixins: [TopicComponent],
	  data() {
	    const data = {
	      plAlertStyle: {
	        'height': '300px'
	      }
	    };
	    return data;
	  },
	  beforeCreate() {
	    this.$options.components.TopicComponentGroup = TopicComponentGroup;
	  },
	  created() {
	    // console.log('this.$props.options.height:', this.$props.options.height);
	    if (this.$props.options.height) {
	      this.plAlertStyle.height = this.$props.options.height;
	    }
	  },
	  computed: {
	    value() {
	      if (this.$props.slots.text) {
	        return this.$props.slots.text;
	      } else {
	        return '';
	      }
	    }
	  },
	  methods: {
	    close() {
	      this.$store.commit('setPopoverOpen', false);
	      this.$store.commit('setPopoverOptions', {});
	      this.$store.commit('setPopoverText', '');
	    },
	  },
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .topic-component[data-v-6c6d5231] { /* margin-bottom: 10px !important; */ } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
	// console.log('in TopicComponentGroup.vue script, BadgeCustom:', BadgeCustom, 'Badge:', Badge, 'TabGroup:', TabGroup, 'Callout:', Callout, 'CollectionSummary:', CollectionSummary, 'HorizontalTable:', HorizontalTable);

	var TopicComponentGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.topicComponents),function(comp,compIndex){return _c(comp.type,{key:_vm.getCompKey(_vm.key, compIndex),tag:"component",staticClass:"topic-component",attrs:{"slots":comp.slots,"options":comp.options,"item":_vm.item}})}))},staticRenderFns: [],_scopeId: 'data-v-6c6d5231',
	  name: 'TopicComponentGroup',
	  props: ['topicComponents', 'item', 'filterData'],
	  components: {
	    Badge,
	    ButtonComp,
	    Callout,
	    CollectionSummary,
	    Division,
	    ePayForm,
	    ExternalLink,
	    HorizontalTable,
	    Image_,
	    VerticalTable,
	    OverlayToggleGroup,
	    Paragraph,
	    SpanComp,
	    List,
	    HorizontalTableGroup,
	    PopoverLink,
	    Popover,
	  },
	  beforeCreate() {
	    // console.log('TopicComponentGroup beforeCreate is running');
	    this.$options.components.TabGroup = TabGroup;
	    this.$options.components.BadgeCustom = BadgeCustom;
	    this.$options.components.Topic = Topic;
	    this.$options.components.TopicSet = TopicSet;
	    this.$options.components.AnyHeader = AnyHeader;
	  },
	  data() {
	    return {
	      // generate a (basically) unique id for the group. the go-to npm packages
	      // for uuid generation aren't available as umd builds on unpkg and
	      // therefore won't work with the examples. this is good enough :)
	      key: generateUniqueId()
	    };
	  },
	  methods: {
	    getCompKey(compGroupKey, compIndex) {
	      return `topic-comp-${compGroupKey}-${compIndex}`;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-badge[data-v-7ccdb9d8] { /*width: 300px;*/ padding: 0; margin: 0 auto; /* margin-bottom: inherit; */ margin-bottom: 10px !important; } @media (max-width: 640px) { .mb-badge[data-v-7ccdb9d8] { width: 100%; } } /*REVIEW this should use foundation classes*/ @media (min-width: 640px) { .mb-badge[data-v-7ccdb9d8] { width: 325px; } } .mb-badge-header[data-v-7ccdb9d8] { color: #fff; font-weight: bold; text-align: center; padding-top: 2px; padding-bottom: 2px; } .mb-badge-body[data-v-7ccdb9d8] { padding: 12px; } .mb-badge-body > h1[data-v-7ccdb9d8] { margin: 0; margin-bottom: 5px; } .external-link[data-v-7ccdb9d8] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var BadgeCustom = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center"},[_c('div',{staticClass:"mb-badge panel"},[_c('div',{staticClass:"mb-badge-header",style:(_vm.style)},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]),_vm._v(" "),_c('topic-component-group',{attrs:{"topic-components":_vm.options.components,"item":_vm.item}})],1),_vm._v(" "),(_vm.options && _vm.options.externalLink)?_c('external-link',{attrs:{"options":_vm.options.externalLink,"type":'badge-custom'}}):_vm._e()],1)},staticRenderFns: [],_scopeId: 'data-v-7ccdb9d8',
	  name: 'BadgeCustom',
	  mixins: [TopicComponent],
	  components: {
	    ExternalLink,
	  },
	  beforeCreate() {
	    this.$options.components.TopicComponentGroup = TopicComponentGroup;
	  },
	  computed: {
	    style() {
	      const titleBackgroundValOrFn = (this.options || {}).titleBackground;
	      let titleBackground;

	      if (titleBackgroundValOrFn) {
	        if (typeof titleBackgroundValOrFn === 'function') {
	          titleBackground = titleBackgroundValOrFn(this.$store.state);
	        } else {
	          titleBackground = titleBackgroundValOrFn;
	        }
	      } else {
	        titleBackground = '#444';
	      }

	      return { background: titleBackground };
	    },
	    // externalLinkAction() {
	    //   return this.evaluateSlot(this.options.externalLink.action) || 'See more at ';
	    // },
	    // externalLinkText() {
	    //   const externalLinkConf = this.options.externalLink;
	    //   const actionFn = externalLinkConf.action;
	    //   const name = this.externalLinkAction || '';
	    //   return `${name}`;
	    // },
	    // externalLinkHref() {
	    //   return this.evaluateSlot(this.options.externalLink.href);
	    // },
	  },
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .toggle-tab { position: absolute; left: 0px; border-width: 1.3px; border-color: #CAC9C9; height: 48px; line-height: 58px; width:24px; background-color: white; display: inline-block; z-index: 500; */ /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ /* } */ .toggle-tab[data-v-c0f28abc] { display: none; } .align-span[data-v-c0f28abc] { margin-left: 6px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-c0f28abc] { position: absolute; right: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 48px; line-height: 56px; width:24px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













	var FullScreenTopicsToggleTab = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!this.isMobileOrTablet)?_c('div',{staticClass:"toggle-tab",style:({ top: _vm.buttonPosition }),attrs:{"id":"toggle-tab"},on:{"click":_vm.handleFullScreenTopicsToggleButtonClick}},[_c('span',{staticClass:"align-span"},[_c('font-awesome-icon',{staticClass:"fa-2x",attrs:{"icon":this.currentIcon}})],1)]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-c0f28abc',
	  props: {
	    elementContainer: {
	      type: String,
	      default: 'topic-panel-container'
	    }
	  },
	  data() {
	    return {
	      'divHeight': 0,
	      'buttonPosition': 0,
	    }
	  },
	  mounted() {
	    window.addEventListener('resize', this.setDivHeight);
	    this.setDivHeight();
	  },
	  computed: {
	    fullScreenMapEnabled() {
	      return this.$store.state.fullScreenMapEnabled;
	    },
	    fullScreenTopicsEnabled() {
	      console.log('this.$store.state.fullScreenTopicsEnabled:', this.$store.state.fullScreenTopicsEnabled);
	      return this.$store.state.fullScreenTopicsEnabled;// || true;
	    },
	    isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    cyclomediaActive() {
	      if (this.$store.state.cyclomedia) {
	        return this.$store.state.cyclomedia.active;
	      } else {
	        return null;
	      }
	    },
	    pictometryActive() {
	      if (this.$store.state.pictometry) {
	        return this.$store.state.pictometry.active;
	      } else {
	        return null;
	      }
	    },
	    picOrCycloActive() {
	      if (this.cyclomediaActive || this.pictometryActive) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    currentIcon() {
	      if (this.fullScreenTopicsEnabled) {
	        return 'caret-left';
	      } else {
	        return 'caret-right';
	      }
	    }
	  },
	  watch: {
	    picOrCycloActive() {
	      this.$nextTick(() => {
	        this.setDivHeight();
	      });
	    }
	  },
	  methods: {
	    setDivHeight() {
	      let el;
	      if (this.fullScreenTopicsEnabled) {
	        el = document.getElementById(this.$props.elementContainer);
	      } else {
	        el = document.getElementById('map-tag');
	      }
	      const mapDivStyle = window.getComputedStyle(el);
	      const mapDivHeight = parseFloat(mapDivStyle.getPropertyValue('height').replace('px', ''));
	      // console.log('FullScreenTopicsToggleTab setDivHeight is running, el:', el, 'mapDivHeight:', mapDivHeight);

	      this.buttonPosition = (mapDivHeight-48)/2 + 'px';
	    },
	    handleFullScreenTopicsToggleButtonClick(e) {
	      const prevFullScreenTopicsEnabled = this.$store.state.fullScreenTopicsEnabled;
	      const nextFullScreenTopicsEnabled = !prevFullScreenTopicsEnabled;
	      this.$store.commit('setFullScreenTopicsEnabled', nextFullScreenTopicsEnabled);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .toggle-tab[data-v-25262138] { display: none; } .align-span[data-v-25262138] { margin-left: 14px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-25262138] { position: absolute; top: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 24px; line-height: 16px; width:48px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













	var FullScreenTopicsToggleTabVertical = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!this.isMobileOrTablet)?_c('div',{staticClass:"toggle-tab",style:({ left: _vm.buttonPosition }),attrs:{"id":"toggle-tab"},on:{"click":_vm.handleFullScreenTopicsToggleButtonClick}},[_c('span',{staticClass:"align-span"},[_c('font-awesome-icon',{staticClass:"fa-2x",attrs:{"icon":this.currentIcon}})],1)]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-25262138',
	  data() {
	    return {
	      'divWidth': 0,
	      'buttonPosition': 0,
	    }
	  },
	  mounted() {
	    window.addEventListener('resize', this.setDivWidth);
	    this.setDivWidth();
	  },
	  computed: {
	    fullScreenMapEnabled() {
	      return this.$store.state.fullScreenMapEnabled;
	    },
	    fullScreenTopicsEnabled() {
	      return this.$store.state.fullScreenTopicsEnabled;
	    },
	    isMobileOrTablet() {
	      return this.$store.state.isMobileOrTablet;
	    },
	    cyclomediaActive() {
	      return this.$store.state.cyclomedia.active;
	    },
	    pictometryActive() {
	      return this.$store.state.pictometry.active;
	    },
	    picOrCycloActive() {
	      if (this.cyclomediaActive || this.pictometryActive) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    currentIcon() {
	      if (this.fullScreenTopicsEnabled) {
	        return 'caret-down'
	      } else {
	        return 'caret-up'
	      }
	    }
	  },
	  watch: {
	    fullScreenMapEnabled() {
	      this.setDivWidth();
	    }
	  },
	  methods: {
	    setDivWidth() {
	      let el;
	      if (this.fullScreenTopicsEnabled) {
	        el = document.getElementById('topic-panel-container');
	      } else {
	        el = document.getElementById('map-tag');
	      }
	      const mapDivStyle = window.getComputedStyle(el);
	      const mapDivWidth = parseFloat(mapDivStyle.getPropertyValue('width').replace('px', ''));
	      this.buttonPosition = (mapDivWidth-48)/2 + 'px';
	    },
	    handleFullScreenTopicsToggleButtonClick(e) {
	      const prevFullScreenTopicsEnabled = this.$store.state.fullScreenTopicsEnabled;
	      const nextFullScreenTopicsEnabled = !prevFullScreenTopicsEnabled;
	      this.$store.commit('setFullScreenTopicsEnabled', nextFullScreenTopicsEnabled);
	    },
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-panel-topics-greeting[data-v-2d681dc9] { padding-top: 20px; } .greeting[data-v-2d681dc9] { font-size: 20px; color: #444; padding: 14px; } .greeting-error[data-v-2d681dc9] { border-left-color: #ff0000; } /*medium*/ @media screen and (min-width: 750px) { .mb-panel-topics-greeting[data-v-2d681dc9] { /*make this scroll on medium screens*/ /*REVIEW this is a little hacky. the 120px shouldn't be hard-coded.*/ height: calc(100vh - 120px); overflow: auto; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Greeting = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns medium-20 medium-centered",style:(_vm.greetingStyle)},[(this.shouldShowAddressInput)?_c('address-input'):_vm._e(),_vm._v(" "),(this.addressAutocompleteEnabled && this.shouldShowAddressInput)?_c('address-candidate-list'):_vm._e(),_vm._v(" "),(!_vm.components && !_vm.hasError)?_c('div',{staticClass:"greeting",domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),_vm._v(" "),(!_vm.components && _vm.hasError)?_c('div',{staticClass:"greeting greeting-error",domProps:{"innerHTML":_vm._s(_vm.errorMessage)}}):_vm._e(),_vm._v(" "),_c('topic-component-group',{attrs:{"topic-components":_vm.options.components,"item":_vm.item}}),_vm._v(" "),_vm._l((_vm.components),function(topicComp,topicCompIndex){return (_vm.components)?_c(topicComp.type,{key:'greeting',tag:"component",staticClass:"topic-comp",attrs:{"slots":topicComp.slots}}):_vm._e()})],2)},staticRenderFns: [],_scopeId: 'data-v-2d681dc9',
	  components: {
	    Image_,
	    AddressInput,
	    AddressCandidateList,
	  },
	  mixins: [TopicComponent],
	  data() {
	    let data = {
	      greetingStyle: this.$props.options.style || {}
	    };
	    return data;
	  },
	  props: {
	    'message': {
	      type: String,
	      default: function() {
	        return 'defaultMessage';
	      }
	    },
	  },
	  beforeCreate() {
	    if (this.$options.components) {
	      this.$options.components.TopicComponentGroup = TopicComponentGroup;
	    }
	  },
	  computed: {
	    shouldShowAddressInput() {
	      if (this.$config.addressInputLocation == 'topics') {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    addressAutocompleteEnabled() {
	      // TODO tidy up the code
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
	    components() {
	      const greetingConfig = this.$config.greeting || {};
	      return greetingConfig.components;
	    },
	    hasError() {
	      return this.$store.state.geocode.status === 'error';
	    },
	    errorMessage() {
	      const input = this.$store.state.geocode.input;
	      return `
        <p>
          We couldn't find
          ${input ? '<strong>' + input + '</strong>' : 'that address'}.
          Are you sure everything was spelled correctly?
        </p>
        <p>
          Here are some examples of things you can search for:
        </p>
        <ul>
          <li>1234 Market St</li>
          <li>1001 Pine Street #201</li>
          <li>12th & Market</li>
        </ul>
      `;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .legend { margin-left: 10px; } ul { list-style: none; margin-left: 0px; } ul ul { list-style: none; margin-left: 0px; } li { list-style: none; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var LegendBox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"legend",domProps:{"innerHTML":_vm._s(this.legendHtml)}})])},staticRenderFns: [],
	  props: ['layer',
	          'layerName',
	          'layerId',
	          // minScale, maxScale, and drawingInfo are stored in layerDefinition
	          'layerDefinition',
	          'legend',
	          'scales'
	  ],
	  data() {
	    return {
	      legendHtml: '',
	      options: {
	        listTemplate: '<ul>{layers}</ul>',
	        layerTemplate: '<li><ul>{legends}</ul></li>',
	        // layerTemplate: '<li><strong>{layerName}</strong><ul>{legends}</ul></li>',
	        listRowTemplate: '<li><img width="{width}" height="{height}" src="data:{contentType};base64,{imageData}"><span>{label}</span></li>',
	        emptyLabel: '',
	        // emptyLabel: '<all values>',
	        container: null
	      },
	    }
	  },
	  created() {
	    this.initialize();
	  },
	  watch: {
	    scale(nextScale) {
	      this.createLegend(nextScale);
	    },
	    legend() {
	      console.log('watch legend fired');
	      this.createLegend(this.scale);
	    }
	  },
	  computed: {
	    scale() {
	      const zoom = this.$store.state.map.zoom;
	      const zoomPlus = zoom + 1;
	      const scale = this.$props.scales[zoomPlus];
	      return scale;
	    },
	  },
	  methods: {
	    initialize() {
	      let drawingInfo;
	      if (this.$props.layerDefinition) {
	        drawingInfo = this.$props.layerDefinition.drawingInfo;
	      }
	      const opts = {
	        layerName: this.$props.layerName,
	        layerId: this.$props.layerId,
	        store: this.$store,
	        drawingInfo
	      };
	      console.log('LegendBox initialize is running:', this.$props.layer, opts);
	      const legend = L.esri.legendControl(this.$props.layer, opts);
	    },
	    createLegend(scale) {
	      const legend = this.$props.legend;
	      console.log('METHOD createLegend running', scale, legend);
	      let layersHtml = '';
	      if (legend.layers.length === 1) {
	        const layer = legend.layers[0];
	        let legendsHtml = '';
	        for (let layerLegend of layer.legend) {
	          const layerLegendJSON = JSON.parse(JSON.stringify(layerLegend));
	          // console.log('layerLegendJSON', layerLegendJSON);
	          if (!layerLegendJSON.label) {
	            layerLegendJSON.label = '';
	          }
	          legendsHtml += L.Util.template(this.options.listRowTemplate, layerLegendJSON);
	        }
	        layersHtml += L.Util.template(this.options.layerTemplate, {
	          layerName: layer.layerName,
	          legends: legendsHtml
	        });
	      } else {
	        for (let layer of legend.layers) {
	          // console.log('max:', layer.maxScale, 'scale:', scale, 'min:', layer.minScale);
	          let legendsHtml = '';
	          if (parseFloat(scale) > parseFloat(layer.maxScale) && parseFloat(scale) < parseFloat(layer.minScale)) {
	            // console.log('correct!', layer.layerId);
	            for (let layerLegend of layer.legend) {
	              const layerLegendJSON = JSON.parse(JSON.stringify(layerLegend));
	              legendsHtml += L.Util.template(this.options.listRowTemplate, layerLegendJSON);
	            }
	          }
	          layersHtml += L.Util.template(this.options.layerTemplate, {
	            layerName: layer.layerName,
	            legends: legendsHtml
	          });
	        }
	      }

	      const legendHtml = L.Util.template(this.options.listTemplate, {
	        layers: layersHtml
	      });

	      // store calculatedlegendHtml in data
	      this.legendHtml = legendHtml;
	    }
	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .slider-wrapper { /*display: inline-block;*/ width: 250px; /*height: 50px;*/ /*padding-top: 3px; margin-bottom: 8px;*/ } .slider-wrapper input { /*padding-top: 3px; padding-bottom: 8px; margin-bottom: 8px;*/ width: 250px; /*height: 20px;*/ } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Slider = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.opa),expression:"opa"}],staticClass:"slider",attrs:{"type":"range","min":"1","max":"100","step":"1"},domProps:{"value":(_vm.opa)},on:{"__r":function($event){_vm.opa=$event.target.value;}}})])},staticRenderFns: [],
	  props: ['layer',
	          'layerName',
	          'layerId',
	          'opacity'
	  ],
	  data() {
	    return {
	      opa: this.$props.opacity * 100
	    }
	  },
	  watch: {
	    opa(nextOpacity) {
	      const payload = {
	                        layerName: this.$props.layerName,
	                        opa: nextOpacity/100
	                      };
	      // console.log('OPACITY CHANGED', payload);
	      this.$store.commit('setWebMapLayersOpacity', payload);
	    }
	  },
	  created() {
	    // this.initialize();
	  },
	  computed: {

	  },
	  methods: {

	  }
	};

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .sliderDiv[data-v-02d0375a] { height: 60px; } .flex[data-v-02d0375a] { margin-bottom: 16px; } .metadata-link[data-v-02d0375a] { display: inline-block; height: 10px; width: 10px; /*border: solid; border-width: 1px;*/ } .download-select[data-v-02d0375a] { width: 200px; } .div-row[data-v-02d0375a] { position: relative; margin-bottom: 12px; } /* input[type=\"checkbox\"] { width: 25px; height: 25px; position: absolute; top: 50%; margin-top: -10px; margin-left: 32px; cursor: pointer; } */ a[data-v-02d0375a] { position: absolute; /* top: 50%; */ /* margin-top: -10px; */ /*margin-left: 25px;*/ } input[type=checkbox]+label[for][data-v-02d0375a] { font-size: 16px; } input[type=checkbox]+label[data-v-02d0375a]::before { position: absolute; margin-top: -12px; font-size: 30px; padding-right: 5px; } .disabled[data-v-02d0375a] { color: #d3d3d3 !important; } input[type=checkbox]+label.disabled[data-v-02d0375a]::before { color: #d3d3d3; } .label-text[data-v-02d0375a] { /* position: absolute; */ display: inline-block; /* margin-top: 4px; */ margin-left: 0px; padding-left: 30px; } .layer-name[data-v-02d0375a] { font-weight: normal; vertical-align: middle; display: inline-block; margin-left: 30px; margin-bottom: 6px; } .tag-title[data-v-02d0375a] { padding-left: 30px; font-weight: normal; font-style: italic; font-size: 14px; color: red; } .tag-holder[data-v-02d0375a] { /* display: inline-block; */ padding-left: 30px; font-weight: normal; font-size: 14px; color: red; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

	var Checkbox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"div-row"},[(_vm.bennyId)?_c('a',{attrs:{"href":'http://metadata.phila.gov/#home/representationdetails/' + this.bennyId,"target":"_blank"}},[_c('span',[_c('font-awesome-icon',{staticClass:"fa-2x",attrs:{"icon":"info-circle"}})],1)]):_vm._e(),_vm._v(" "),_c('input',{class:{ disabled: _vm.shouldBeDisabled },attrs:{"id":'checkbox-'+_vm.layerName,"type":"checkbox","layerid":_vm.layerId},domProps:{"checked":_vm.webMapActiveLayers.includes(_vm.layerName)},on:{"click":_vm.checkboxToggle}}),_vm._v(" "),_c('label',{class:{ disabled: _vm.shouldBeDisabled, 'label-text': true },attrs:{"for":'checkbox-'+_vm.layerName}},[_c('div',{staticClass:"layer-name"},[_vm._v(_vm._s(_vm.layerName))]),_vm._v(" "),(_vm.matchingTags.length > 0)?_c('div',{staticClass:"tag-title"},[_vm._v(" Matching Tags: ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.matchingTags),function(matchingTag){return (_vm.matchingTags.length > 0)?_c('div',{staticClass:"tag-holder"},[_vm._v(" "+_vm._s(matchingTag)+" ")]):_vm._e()})],2)]),_vm._v(" "),(this.$store.state.map.webMapActiveLayers.includes(_vm.layerName))?_c('legend-box',{attrs:{"layer":_vm.layer,"layerName":_vm.layerName,"layerId":_vm.layerId,"layerDefinition":_vm.layerDefinition,"legend":_vm.legend,"scales":this.$config.map.scales}}):_vm._e(),_vm._v(" "),(this.$store.state.map.webMapActiveLayers.includes(_vm.layerName))?_c('slider',{attrs:{"layer":_vm.layer,"layerName":_vm.layerName,"layerId":_vm.layerId,"opacity":_vm.opacity}}):_vm._e()],1)},staticRenderFns: [],_scopeId: 'data-v-02d0375a',
	  components: {
	    LegendBox,
	    Slider
	  },
	  props: ['layer',
	          'layerName',
	          'layerId',
	          // minScale, maxScale, and drawingInfo are stored in layerDefinition
	          'layerDefinition',
	          'opacity',
	          'legend',
	          'tags'
	  ],
	  data() {
	    return {
	      opa: this.$props.opacity * 100
	    }
	  },
	  watch: {
	    opa(nextOpacity) {
	      const payload = {
	                        layerName: this.$props.layerName,
	                        opa: nextOpacity/100
	                      };
	      // console.log('OPACITY CHANGED', payload);
	      this.$store.commit('setWebMapLayersOpacity', payload);
	    },
	    shouldBeDisabled(nextShouldBeDisabled) {
	      // console.log('watch shouldBeDisabled is firing:', this.$props.layerName, nextShouldBeDisabled);
	      if (this.webMapActiveLayers.includes(this.$props.layerName) && nextShouldBeDisabled === true) {
	        this.removeFromWebMapDisplayedLayers();
	      } else if (this.webMapActiveLayers.includes(this.$props.layerName) && nextShouldBeDisabled === false) {
	        this.addToWebMapDisplayedLayers();
	      }
	    },
	    // inputTagsFilter(nextInputTagsFilter) {
	    //   this.findCurrentTags(nextInputTagsFilter);
	    // },
	  },
	  computed: {
	    matchingTags() {
	      let matches = [];
	      if (this.$props.tags !== null && this.inputTagsFilter !== '') {
	        for (let tag of this.$props.tags) {
	          if (tag.toLowerCase().includes(this.inputTagsFilter.toLowerCase())) {
	            matches.push(tag);
	          }
	        }
	      }
	      return matches;
	    },
	    inputTagsFilter() {
	      return this.$store.state.layers.inputTagsFilter;
	    },
	    scale() {
	      return this.$store.state.map.scale;
	    },
	    shouldBeDisabled() {
	      const def = this.$props.layerDefinition;
	      if (def) {
	        if (def.minScale) {
	          if (this.scale > def.minScale) {
	            return true;
	          } else {
	            return false;
	          }
	        }
	      } else {
	        return false;
	      }
	    },
	    layerUrls() {
	      return this.$store.state.layers.layerUrls;
	    },
	    bennyEndpoints() {
	      return this.$store.state.bennyEndpoints;
	    },
	    url() {
	      return this.layerUrls[this.$props.layerName];
	    },
	    bennyId() {
	      if (Object.keys(this.bennyEndpoints).length > 0) {
	        const id = this.bennyEndpoints[this.url];
	        // const id = this.bennyEndpoints[this.url]['Metadata'];
	        return id;
	      } else {
	        return ' ';
	      }
	    },
	    webMapUrlLayer() {
	      return this.$store.state.map.webMapUrlLayer;
	    },
	    webMapActiveLayers() {
	      return this.$store.state.map.webMapActiveLayers;
	    },
	    webMapDisplayedLayers() {
	      return this.$store.state.map.webMapDisplayedLayers;
	    },
	    webMapGeoJson() {
	      return this.$store.state.map.webMapGeoJson;
	    }
	  },
	  methods: {
	    // findCurrentTags(inputTagsFilter) {
	    //
	    // },
	    trim(s) {
	      return ( s || '' ).replace( /^\s+|\s+$/g, '' );
	    },
	    // getGeoJson(layer) {
	    //   const layer2 = 'services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/WasteBaskets_Big_Belly/FeatureServer/0'
	    //   // const url = 'http://' + layer2;
	    //   const url = 'http://' + this.layerUrls[layer];
	    //   console.log('getGeoJson is running, layer:', layer, 'url:', url);
	    //   const dataQuery = L.esri.query({ url });
	    //   dataQuery.where("1=1");
	    //   dataQuery.run((function(error, featureCollection, response) {
	    //     // console.log('parcelQuery ran, activeParcelLayer:', activeParcelLayer);
	    //     this.didGetData(error, featureCollection, response, layer);
	    //   }).bind(this)
	    // )
	    // },
	    // didGetData(error, featureCollection, response, layer) {
	    //   console.log('didGetData is running, layer:', layer, 'featureCollection:', featureCollection, 'response:', response);
	    //   // const obj = {
	    //   //   'layerName': layer,
	    //   //   'json': response
	    //   let obj = this.webMapGeoJson;
	    //   obj[layer] = response;
	    //   this.$store.commit('setWebMapGeoJson', obj);
	    // },
	    checkboxToggle(e) {
	      console.log('checkboxToggle', e.target, e.target.id, e.target.checked);
	      const urlLayer = this.webMapUrlLayer;
	      const activeLayers = this.webMapActiveLayers;
	      const displayedLayers = this.webMapDisplayedLayers;
	      // const splitArray = e.target.id.split('-').splice(0, 1);
	      const targetReplace = e.target.id.replace('checkbox-', '');
	      if (e.target.checked) {
	        console.log('target checked, targetReplace:', targetReplace);
	        activeLayers.push(targetReplace);
	        displayedLayers.push(targetReplace);
	        // activeLayers.push(e.target.id.split('-')[1]);
	        // displayedLayers.push(e.target.id.split('-')[1]);
	        if (activeLayers.length === 1) {
	          this.$store.commit('setWebMapUrlLayer', targetReplace);
	          // this.$controller.handleCheckboxClick(targetReplace);
	        }
	        // if (!Object.keys(this.webMapGeoJson).includes(targetReplace)) {
	        //   this.getGeoJson(targetReplace);
	        // }
	      } else {
	        console.log('target not checked');
	        const activeIndex = activeLayers.indexOf(targetReplace);
	        // const activeIndex = activeLayers.indexOf(e.target.id.split('-')[1]);
	        if (activeIndex >= 0) {
	          activeLayers.splice(activeIndex, 1);
	        }
	        const displayedIndex = displayedLayers.indexOf(targetReplace);
	        // const displayedIndex = displayedLayers.indexOf(e.target.id.split('-')[1]);
	        if (displayedIndex >= 0) {
	          displayedLayers.splice(displayedIndex, 1);
	        }
	        // this.$store.commit('setIntersectingFeatures', []);
	        if (urlLayer === targetReplace) {
	          this.$store.commit('setWebMapUrlLayer', null);
	          // this.$controller.handleCheckboxUnClick(targetReplace);
	        }
	      }
	      this.$store.commit('setWebMapActiveLayers', activeLayers);
	      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
	    },
	    removeFromWebMapDisplayedLayers() {
	      const displayedLayers = this.webMapDisplayedLayers;
	      const index = displayedLayers.indexOf(this.$props.layerName);
	      // console.log('layer', this.$props.layerName, 'is active, but now should not be displayed, index:', index);
	      if (index >= 0) {
	        displayedLayers.splice(index, 1);
	      }
	      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
	    },
	    addToWebMapDisplayedLayers() {
	      // console.log('layer', this.$props.layerName, 'is active, and now should be displayed');
	      const displayedLayers = this.webMapDisplayedLayers;
	      displayedLayers.push(this.$props.layerName);
	      this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
	    }
	  }
	};

	const initialState = {
	  // configurableInputCategorySelected: '',
	  // configurableInputValueEntered: '',
	  shouldShowAddressCandidateList: false,
	  popover: {
	    open: false,
	    text: '',
	    options: {}
	  },
	  fullScreenTopicsEnabled: false
	};
	const pvmStore = {
	  state: initialState,
	  mutations: {
	    // setConfigurableInputCategorySelected(state, payload) {
	    //   state.configurableInputCategorySelected = payload;
	    // },
	    // setConfigurableInputValueEntered(state, payload) {
	    //   state.configurableInputValueEntered = payload;
	    // },
	    setShouldShowAddressCandidateList(state, payload) {
	      state.shouldShowAddressCandidateList = payload;
	    },

	    setPopoverOpen(state, payload) {
	      state.popover.open = payload;
	    },

	    setPopoverText(state, payload) {
	      state.popover.text = payload;
	    },

	    setPopoverOptions(state, payload) {
	      state.popover.options = payload;
	    },

	    setFullScreenTopicsEnabled(state, payload) {
	      state.fullScreenTopicsEnabled = payload;
	    }

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

	exports.pvcStore = pvmStore;
	exports.AddressCandidateList = AddressCandidateList;
	exports.AddressInput = AddressInput;
	exports.ConfigurableInput = ConfigurableInput;
	exports.AnyHeader = AnyHeader;
	exports.Badge = Badge;
	exports.BadgeCustom = BadgeCustom;
	exports.ButtonComp = ButtonComp;
	exports.Callout = Callout;
	exports.CollectionSummary = CollectionSummary;
	exports.Division = Division;
	exports.ExternalLink = ExternalLink;
	exports.ePayForm = ePayForm;
	exports.FullScreenTopicsToggleTab = FullScreenTopicsToggleTab;
	exports.FullScreenTopicsToggleTabVertical = FullScreenTopicsToggleTabVertical;
	exports.Greeting = Greeting;
	exports.HorizontalTable = HorizontalTable;
	exports.HorizontalTableGroup = HorizontalTableGroup;
	exports.HorizontalTableRow = HorizontalTableRow;
	exports.Image = Image_;
	exports.List = List;
	exports.OverlayToggleGroup = OverlayToggleGroup;
	exports.Paragraph = Paragraph;
	exports.SpanComp = SpanComp;
	exports.TabGroup = TabGroup;
	exports.VerticalTable = VerticalTable;
	exports.Topic = Topic;
	exports.TopicSet = TopicSet;
	exports.TopicComponent = TopicComponent;
	exports.TopicComponentGroup = TopicComponentGroup;
	exports.Popover = Popover;
	exports.PopoverLink = PopoverLink;
	exports.Checkbox = Checkbox;
	exports.LegendBox = LegendBox;
	exports.Slider = Slider;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=phila-vue-comps.js.map
