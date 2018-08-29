(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('lodash.debounce'), require('axios'), require('moment'), require('escape-html'), require('leaflet')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash', 'lodash.debounce', 'axios', 'moment', 'escape-html', 'leaflet'], factory) :
  (factory((global.philaVueComps = {}),global._,global.lodash_debounce,global.axios,global.moment,global.escapeHtml,global.L));
}(this, (function (exports,_,lodash_debounce,axios,moment,escapeHtml,L) { 'use strict';

  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  lodash_debounce = lodash_debounce && lodash_debounce.hasOwnProperty('default') ? lodash_debounce['default'] : lodash_debounce;
  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
  escapeHtml = escapeHtml && escapeHtml.hasOwnProperty('default') ? escapeHtml['default'] : escapeHtml;
  L = L && L.hasOwnProperty('default') ? L['default'] : L;

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .list-group[data-v-557d70bd] { display: inline-block; height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } /* .list-group-full { display: inline-block; height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } */ /* .list-group-mobile { display: inline-block; height: 300px; width: 250px; overflow: auto; margin-top: 1px !important; } .list-group-mobile-full { display: inline-block; height: 300px; width: 197px; overflow: auto; margin-top: 1px !important; } */ ul[data-v-557d70bd] { list-style-type: none; margin-left: 0px; } .list-group-item[data-v-557d70bd] { /* width: 237px; */ display: block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); border: 2; background-color: white; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 14px; font-weight: normal; } .list-group-item[data-v-557d70bd]:hover { background-color: #ffefa2; font-weight: bold; } /*small*/ @media screen and (max-width: 39.9375em) { .list-group[data-v-557d70bd] { width: 200px; } .list-group-mobile[data-v-557d70bd] { width: 200px; } .list-group-full[data-v-557d70bd] { width: 147px; } .list-group-mobile-full[data-v-557d70bd] { width: 158px; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();























  var AddressCandidateList = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowAddressCandidateList),expression:"this.shouldShowAddressCandidateList"}],class:this.listGroupClass,style:(this.listStyle)},[_c('ul',_vm._l((_vm.candidates),function(candidate,i){return _c('li',[_c('a',{staticClass:"list-group-item",attrs:{"href":_vm.createLink(candidate),"tabindex":"-1","id":'address-candidate-list-' + i},on:{"click":function($event){_vm.closeAddressCandidateList(candidate);},"keydown":_vm.maybeUsedArrow}},[_vm._v(" "+_vm._s(candidate)+" ")])])}))])},staticRenderFns: [],_scopeId: 'data-v-557d70bd',
    data: function data() {
      var data = {
        listStyle: {
          'width': '250px'
        }
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
    props: [
      'widthFromConfig' ],
    computed: {
      inputWidth: function inputWidth() {
        return this.$props.widthFromConfig - 55;
      },
      candidates: function candidates() {
        var autocompleteMax = this.$config.addressInput.autocompleteMax;
        if (!autocompleteMax) {
          return this.$store.state.candidates;
        } else {
          var candidates = this.$store.state.candidates.slice(0, autocompleteMax);
          return candidates;
        }
      },
      shouldShowAddressCandidateList: function shouldShowAddressCandidateList() {
        return this.$store.state.shouldShowAddressCandidateList;
      },
      activeTopic: function activeTopic() {
        return this.$store.state.activeTopic;
      },
      isMobileOrTablet: function isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
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
      listGroupClass: function listGroupClass() {
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
      createLink: function createLink(candidate) {
        if (this.$store.state.activeTopic) {
          return '#/' + candidate + '/' + this.activeTopic;
        } else {
          return '#/' + candidate;
        }
      },
      maybeUsedArrow: function maybeUsedArrow(e) {
        var id = e.target.id;
        var index = parseInt(id.substring(id.lastIndexOf('-') + 1));
        var indexUp, indexDown;
        if (index < this.candidates.length - 1) {
          indexUp = index + 1;
        } else { (
          indexUp = index
        ); }
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
      closeAddressCandidateList: function closeAddressCandidateList(addressCandidate) {
        console.log('AddressCandidateList.vue closeAddressCandidateList is running, addressCandidate:', addressCandidate);
        // this.$controller.handleSearchFormSubmit(addressCandidate);
        this.$store.commit('setAddressEntered', addressCandidate);
        this.$store.commit('setShouldShowAddressCandidateList', false);
      },
      handleWindowResize: function handleWindowResize(addressEntered) {
        if ($(window).width() >= 850) {
          this.listStyle.width = this.$props.widthFromConfig - 55 + 'px';
        } else if ($(window).width() >= 750) {
          this.listStyle.width = this.$props.widthFromConfig - 155 + 'px';
        } else {
          this.listStyle.width = '248px';
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .pvc-search-control-form[data-v-6340ff46] { display: inline-block; } /* Container */ .pvc-search-control-container[data-v-6340ff46] { display: inline-block; border-radius: 2px; box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02); width: 305px; } .pvc-container-non-mobile[data-v-6340ff46] { height: 48px; } .pvc-container-mobile[data-v-6340ff46] { height: 38px; } /* Input */ .pvc-search-control-input[data-v-6340ff46] { display: inline-block; border: 0; padding: 15px; font-family: 'Montserrat', 'Tahoma', sans-serif; font-size: 16px; width: 250px; } .pvc-input-non-mobile[data-v-6340ff46] { height: 48px; } .pvc-input-mobile[data-v-6340ff46] { height: 38px; } /* Button */ .pvc-search-control-button[data-v-6340ff46] { display: inline-block; color: #fff; background: #2176d2; padding: 0px; width: 50px; } .pvc-button-non-mobile[data-v-6340ff46] { height: 48px; line-height: 48px; } .pvc-button-mobile[data-v-6340ff46] { height: 38px; line-height: 38px; padding-top: 1px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var AddressInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'pvc-search-control-container ' + this.containerClass,style:(this.containerStyle)},[_c('form',{staticClass:"pvc-search-control-form",attrs:{"autocomplete":"off","id":"search-form"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSearchFormSubmit($event)}}},[_c('input',{class:'pvc-search-control-input ' + this.inputClass,style:(this.inputStyle),attrs:{"id":"pvc-search-control-input","placeholder":this.$props.placeholder || 'Search the map',"tabindex":"0"},domProps:{"value":this.addressEntered},on:{"keyup":_vm.didType}})]),_vm._v(" "),(this.addressAutocompleteEnabled && this.addressEntered != '' && this.addressEntered != null)?_c('button',{class:'pvc-search-control-button ' + this.buttonClass,on:{"click":_vm.handleFormX}},[_c('i',{staticClass:"fa fa-times fa-lg"})]):_vm._e(),_vm._v(" "),_c('button',{class:'pvc-search-control-button ' + this.buttonClass,attrs:{"tabindex":"-1"},on:{"click":this.handleSearchFormSubmit}},[_c('i',{staticClass:"fa fa-search fa-lg"})]),_vm._v(" "),_vm._t("address-candidates-slot")],2)},staticRenderFns: [],_scopeId: 'data-v-6340ff46',
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
        }
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
      addressEntered: function addressEntered() {
        return this.$store.state.addressEntered;
      },
      inputWidth: function inputWidth() {
        if (this.addressAutocompleteEnabled) {
          if (this.addressEntered === '' || this.addressEntered === null) {
            return this.$props.widthFromConfig - 55;
          } else {
            return this.$props.widthFromConfig - 108;
          }
        } else {
          return this.$props.widthFromConfig - 55;
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
      didType: _.debounce(function (e) {
          // console.log('debounce is running');
          if (this.addressAutocompleteEnabled) {
            // console.log('debounce is running, e:', e, 'this:', this);
            if (e.key === "ArrowDown") {
              document.getElementById('address-candidate-list-0').focus();
              return;
            }
            var ref = e.target;
            var value = ref.value;
            this.getCandidates(value);
            this.$store.commit('setAddressEntered', value);
            if (e.key !== "Enter") {
              console.log('AddressInput.vue didType is running, e.key !== "Enter"');
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
        this.$store.commit('setAddressEntered', '');
        this.$store.commit('setShouldShowAddressCandidateList', false);
        this.$store.commit('setCandidates', []);
      },
      handleSearchFormSubmit: function handleSearchFormSubmit() {
        var value;
        if (this.addressAutocompleteEnabled){
          value = this.$store.state.addressEntered;
        } else {
          value = $('#pvc-search-control-input').val();
        }
        // console.log('phila-vue-comps AddressInput.vue, handleSearchFormSubmit is running, value:', value);
        this.$controller.handleSearchFormSubmit(value);
        this.$store.commit('setAddressEntered', value);
      },
      handleWindowResize: function handleWindowResize() {
        var addressEntered = this.addressEntered;
        // console.log('AddressInput.vue handleWindowResize is running', $(window).width(), 'addressEntered:', addressEntered);
        if ($(window).width() >= 850) {
          this.containerStyle.width = this.$props.widthFromConfig + 'px';
          if (addressEntered === '' || addressEntered === null) {
            this.inputStyle.width = this.$props.widthFromConfig - 55 + 'px';
          } else {
            this.inputStyle.width = this.$props.widthFromConfig - 108 + 'px';
          }
        } else if ($(window).width() >= 750) {
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

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
  var TopicComponent = {
    props: ['slots', 'options', 'item'],
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

        // check for null val/getter
        if (!valOrGetter) {
          return valOrGetter;
        }

        var valOrGetterType = typeof valOrGetter;
        var val;

        // fn
        if (valOrGetterType === 'function') {
          var state = this.$store.state;
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
            val = getter(state, item);
          } else {
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

  var AnyHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.headerType === 'h1')?_c('h1',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h2')?_c('h2',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h3')?_c('h3',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h4')?_c('h4',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h5')?_c('h5',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.headerType === 'h6')?_c('h6',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-810eb58e',
    mixins: [TopicComponent],
    computed: {
      headerType: function headerType() {
        return this.$props.options.headerType;
      },
      additionalTags: function additionalTags() {
        return this.$props.slots.additionalTags || [];
      },
      message: function message() {
        var this$1 = this;

        // if there is a transform, it needs this textWithTags section
        var textWithTags = '';
        for (var i = 0, list = this$1.additionalTags; i < list.length; i += 1) {
          var tag = list[i];

          textWithTags = textWithTags + '<' + tag + '>';
        }
        textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
        for (var i$1 = 0, list$1 = this$1.additionalTags; i$1 < list$1.length; i$1 += 1) {
          var tag$1 = list$1[i$1];

          textWithTags = textWithTags + '</' + tag$1 + '>';
        }
        return textWithTags;
      },
      style: function style() {
        if (this.$props.options) {
          return this.$props.options.style || '';
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-badge[data-v-d6ffef7a] { /*width: 300px;*/ padding: 0; margin: 0 auto; margin-bottom: inherit; } @media (max-width: 640px) { .mb-badge[data-v-d6ffef7a] { width: 100%; } } /*REVIEW this should use foundation classes*/ @media (min-width: 640px) { .mb-badge[data-v-d6ffef7a] { width: 325px; } } .mb-badge-header[data-v-d6ffef7a] { color: #fff; font-weight: bold; text-align: center; padding-top: 2px; padding-bottom: 2px; } .mb-badge-body[data-v-d6ffef7a] { padding: 12px; } .mb-badge-body > h1[data-v-d6ffef7a] { margin: 0; margin-bottom: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Badge = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mb-badge panel center"},[_c('div',{staticClass:"mb-badge-header",style:(_vm.style)},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]),_vm._v(" "),_c('div',{staticClass:"mb-badge-body"},[_c('h1',[_vm._v(_vm._s(_vm.evaluateSlot(_vm.slots.value)))]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.evaluateSlot(_vm.slots.description)))])])])},staticRenderFns: [],_scopeId: 'data-v-d6ffef7a',
    mixins: [TopicComponent],
    computed: {
      style: function style() {
        var titleBackgroundValOrFn = (this.options || {}).titleBackground;
        var titleBackground;

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
      }
    }
  };

  function generateUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=ButtonComp.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var ButtonComp = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:'button ' + this.class,style:(this.style),attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.evaluateSlot(_vm.slots.buttonAction);}}},[_vm._v(" "+_vm._s(_vm.message)+" ")])},staticRenderFns: [],_scopeId: 'data-v-7ba3a61e',
    mixins: [TopicComponent],
    computed: {
      message: function message() {
        if (this.$props.slots) {
          return this.evaluateSlot(this.$props.slots.text);
        }
      },
      class: function class$1() {
        if (this.$props.options) {
          return this.$props.options.class || '';
        }
      },
      style: function style() {
        if (this.$props.options) {
          return this.$props.options.style || '';
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .wrapper[data-v-3cf74c50] { } .callout[data-v-3cf74c50] { /* position: inherit; */ height: auto; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Callout = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper grid-y"},[_c('div',{class:'callout ' + this.calloutClass},[(this.message)?_c('p',{domProps:{"innerHTML":_vm._s(this.message)}}):_vm._e(),_vm._v(" "),(this.components)?_c('topic-component-group',{attrs:{"topic-components":this.components}}):_vm._e()],1)])},staticRenderFns: [],_scopeId: 'data-v-3cf74c50',
    mixins: [TopicComponent],
    computed: {
      calloutClass: function calloutClass() {
        if (this.$props.options) {
          if (this.$props.options.class) {
            return this.$props.options.class;
          } else {
            return 'columns small-24';
          }
        }
      },
      message: function message() {
        if (this.$props.slots) {
          return this.evaluateSlot(this.$props.slots.text) || '';
        } else {
          return '';
        }
      },
      components: function components() {
        if (this.$props.options) {
          return this.$props.options.components || null;
        } else {
          return null;
        }
      },
    },
    components: {},
    beforeCreate: function beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=CollectionSummary.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var CollectionSummary = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',[_vm._v(" "+_vm._s(_vm.summary)+" ")])},staticRenderFns: [],_scopeId: 'data-v-79669948',
    mixins: [TopicComponent],
    computed: {
      // the final stringified output
      summary: function summary() {
        // get value quantity map
        var valueQuantities = this.valueQuantities;
        // check if plural
        var isPlural = this.isPlural(valueQuantities);
        // get context renderer
        var contextFnKey = 'context' + (isPlural ? 'Plural' : 'Singular');
        var contextFn = this[contextFnKey];
        // get a natural list
        var naturalList = this.naturalList;
        // summarize
        var summary = contextFn(naturalList);

        return summary;
      },
      contextSingular: function contextSingular() {
        var context = this.options.context;
        return context.singular || context;
      },
      contextPlural: function contextPlural() {
        var context = this.options.context;
        return context.plural || context;
      },
      descriptorSingular: function descriptorSingular() {
        var descriptor = this.options.descriptor;
        return descriptor.singular || descriptor;
      },
      descriptorPlural: function descriptorPlural() {
        var descriptor = this.options.descriptor;
        return descriptor.plural || descriptor + 's';
      },
      // serializes naturalized quantities into a list
      // e.g. "1 apple and 2 oranges"
      naturalList: function naturalList() {
        var valueQuantities = this.valueQuantities;
        var items = this.naturalizeQuantities(valueQuantities);
        var len = items.length;
        if (Array.isArray(items) && len > 0) {
          if (len === 1) {
            return items[0];
          } else if (len === 2) {
            return items.join(' and ');
          }
          var leadingItems = items.slice(0, items.length - 1).join(', ');
          var lastItem = items[items.length - 1];
          return (leadingItems + ", and " + lastItem);
        }
        // TODO should this text be an option?
        return ("no " + (this.descriptorPlural));
      },
      valueQuantities: function valueQuantities() {
        var items = this.slots.items(this.$store.state);
        var getValue = this.options.getValue;

        // make an object of value => quantity
        var valueQuantities = items.reduce(function (obj, item) {
          var val = getValue(item);
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
      isPlural: function isPlural(valueQuantities) {
        if ( valueQuantities === void 0 ) valueQuantities = {};

        var values = Object.keys(valueQuantities);
        if (values.length === 1) {
          var firstValue = values[0];
          var quantity = valueQuantities[firstValue];
          if (quantity === 1) {
            return false;
          }
        }
        return true;
      },
      // takes the value quantity map and converts values to natural language
      // quantities (e.g. {apple: 2} => "2 apples")
      naturalizeQuantities: function naturalizeQuantities(valueQuantities) {
        if ( valueQuantities === void 0 ) valueQuantities = {};

        // get some options
        var types = this.options.types;
        var includeZeroes = this.options.includeZeroes;

        // convert to natural language and sort per order of types option
        var quantities = types.reduce(function (acc, type) {
          var value = type.value;
          var quantity = valueQuantities[value] || 0;

          if (quantity === 0) {
            if (!includeZeroes) {
              return acc;
            }
            // natural zero => "no"
            quantity = 'no';
          }

          var labelSingular = type.label;
          var labelWithNumber;

          // singular
          if (quantity !== 1) {
            var labelPlural = type.plural || labelSingular + 's';
            labelWithNumber = labelPlural;
          // plural
          } else {
            labelWithNumber = labelSingular;
          }

          // make label and push
          var quantityWithLabel = quantity + " " + labelWithNumber;
          acc.push(quantityWithLabel);

          return acc;
        }, []);

        return quantities;
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=Division.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Division = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.class,style:(this.style)},[_c('topic-component-group',{attrs:{"topic-components":this.$props.options.components}})],1)},staticRenderFns: [],_scopeId: 'data-v-031d1786',
    mixins: [TopicComponent],
    computed: {
      message: function message() {
        return this.evaluateSlot(this.$props.slots.text)
      },
      class: function class$1() {
        return this.$props.options.class || '';
      },
      style: function style() {
        return this.$props.options.style || '';
      },
    },
    components: {},
    beforeCreate: function beforeCreate() {
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
    console.log('generate billing xml', data);

    // if data object is empty, return empty string
    if (Object.keys(data).length < 1) {
      return '';
    }

    // get the current date/time in iso format with timezone
    var timestamp = moment().format();

    // TODO use a json to xml lib instead of forming this string?
    var xmlString = "<?xml version=\"1.0\" encoding=\"utf-16\"?>\n<BillingStatement xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <ApplicationID>fcd68fd2-e923-4b03-a0e7-a678c2ed612a</ApplicationID>\n  <AccountNumber />\n  <BillNumber>" + (data.balances.accountNum) + "</BillNumber>\n  <StatementNumber />\n  <BillingDate>" + timestamp + "</BillingDate>\n  <DueDate>" + timestamp + "</DueDate>\n  <TotalDue>" + (data.totalDue) + "</TotalDue>\n  <DepartMentId>0</DepartMentId>\n  <Fund>0</Fund>\n  <PaymentDate>0001-01-01T00:00:00</PaymentDate>\n  <Quantity>0</Quantity>\n  <ItemAmount>0</ItemAmount>\n  <TotalAmountdue>0</TotalAmountdue>\n  <PartialPaymentFlag>false</PartialPaymentFlag>\n  <ReceiptpresentFlag>false</ReceiptpresentFlag>\n  <Details>\n    <BillingStatementDetail>\n      <ItemDate>" + timestamp + "</ItemDate>\n      <ItemDescription>Real Estate Tax</ItemDescription>\n      <Charges>" + (data.totalDue) + "</Charges>\n      <Credits>0</Credits>\n    </BillingStatementDetail>\n  </Details>\n  <Customers>\n    <Customer>\n      <FirstName>" + (data.balances.property.ownerName) + "</FirstName>\n      <MiddleName />\n      <LastName />\n      <BillingAddress>\n        <Address>\n          <AddressLine1>" + (data.address.streetAddress) + "</AddressLine1>\n          <City>PHILADELPHIA</City>\n          <State>PA</State>\n          <PostalCode>" + (data.address.zipCode) + "</PostalCode>\n          <Country>US</Country>\n        </Address>\n      </BillingAddress>\n    </Customer>\n  </Customers>\n</BillingStatement>\n  ";

    return escapeHtml(xmlString);
  }

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=ePayForm.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var BALANCE_PARTS = [
    'principal',
    'interest',
    'penalty',
    'other' ];

  var ePayForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"action":"https://test-secure.phila.gov/PaymentCenter/Gateway1/InitiatePurchase.aspx","method":"post","target":"_blank"}},[_c('input',{attrs:{"name":"billStmt","type":"hidden"},domProps:{"value":_vm.xmlData}}),_vm._v(" "),_c('input',{directives:[{name:"show",rawName:"v-show",value:(this.shouldShowButton),expression:"this.shouldShowButton"}],staticClass:"button external",attrs:{"type":"submit","value":"Pay Now"}})])},staticRenderFns: [],_scopeId: 'data-v-a7b82852',
    mixins: [TopicComponent],
    data: function data() {
      var data = {
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
      };
      return data;
    },
    created: function created() {
      this.parseData.totalDue = this.calculateTotalDue();
      this.$store.commit('setPropertyBalance', this.parseData.totalDue);
      this.xmlData = generateBillingXml(this.parseData);
    },
    computed: {
      message: function message() {
        if (this.$props.slots) {
          return this.evaluateSlot(this.$props.slots.text);
        }
      },
      class: function class$1() {
        if (this.$props.options) {
          return this.$props.options.class || '';
        }
      },
      style: function style() {
        if (this.$props.options) {
          return this.$props.options.style || '';
        }
      },
      shouldShowButton: function shouldShowButton() {
        if (this.parseData.totalDue > 0) {
          return true;
        } else {
          return false;
        }
      },
    },
    methods: {
      calculateTotalDue: function calculateTotalDue() {
        var this$1 = this;

        return this.parseData.balances.years.reduce(function (acc, year) {
          var yearTotal = this$1.calculateTotalForYear(year);
          return acc + yearTotal;
        }, 0);
      },
      calculateTotalForYear: function calculateTotalForYear(year) {
        var amounts = BALANCE_PARTS.map(function (part) { return year[part]; });
        return amounts.reduce(function (acc, amount) { return acc + amount; }, 0);
      },
    },
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .active[data-v-36d2e900] { background: #F3D661; } td[data-v-36d2e900] { font-size: 15px; text-align: left; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var HorizontalTableRow = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',{class:{ active: this.isActive },on:{"mouseover":_vm.handleRowMouseover,"click":_vm.handleRowClick,"mouseout":_vm.handleRowMouseout}},_vm._l((_vm.fields),function(field){return _c('td',{domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.value, field.transforms, field.nullValue))}})}))},staticRenderFns: [],_scopeId: 'data-v-36d2e900',
    mixins: [TopicComponent],
    props: ['fields', 'hasOverlay', 'tableId'],
    computed: {
      activeFeature: function activeFeature() {
        return this.$store.state.activeFeature;
      },
      isActive: function isActive() {
        return this.activeFeature.featureId === this.$props.item._featureId && this.$props.tableId === this.activeFeature.tableId;
      },
      isMobileOrTablet: function isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
    },
    watch: {
      isActive: function isActive(value) {
        if (value === true) {
          var el = this.$el;
          var visible = this.isElementInViewport(el);
          // console.log('horizontaltablerow WATCH isActive is firing, el:', el, 'visible:', visible);

          // console.log('visible?', visible ? 'YES' : 'NO');

          if (!visible) {
            el.scrollIntoView();
          }
        }
      }
    },
    methods: {
      handleRowMouseover: function handleRowMouseover(e) {
        // console.log('handleRowMouseover is starting');
        if(!this.isMobileOrTablet) {
          // console.log('handleRowMouseover actions are running');
          if (!this.hasOverlay) { return; }

          var featureId = this.item._featureId;
          var tableId = this.tableId;
          this.$store.commit('setActiveFeature', { featureId: featureId, tableId: tableId });
        }
      },
      handleRowClick: function handleRowClick(e) {
        // console.log('handleRowClick is starting');
        if(this.isMobileOrTablet) {
          // console.log('handleRowClick actions are running');
          if (!this.hasOverlay) { return; }

          var featureId = this.item._featureId;
          var tableId = this.tableId;
          this.$store.commit('setActiveFeature', { featureId: featureId, tableId: tableId });
        }
      },
      handleRowMouseout: function handleRowMouseout(e) {
        // console.log('handleRowMouseout is starting');
        // if(!this.isMobileOrTablet) {
          // console.log('handleRowMouseout actions are running');
          if (!this.hasOverlay) { return; }
          this.$store.commit('setActiveFeature', null);
        // }
      },
      // REVIEW there's very similar code in the controller. if these can be
      // the same thing, make it into a util.
      isElementInViewport: function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        // console.log('bounding box', rect);

        var visibility = {
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
        return Object.values(visibility).every(function (val) { return val; });
      },
      featuresMatch: function featuresMatch(a, b) {
        return a.featureId === b.featureId && a.tableId === b.tableId;
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .inline-block[data-v-6dbe65ac] { display: inline-block; } .vertically-centered[data-v-6dbe65ac] { display: inline-block; vertical-align: middle; } .pvc-horizontal-table[data-v-6dbe65ac] { margin-bottom: 10px !important; } .pvc-horizontal-table-controls[data-v-6dbe65ac] { text-align: center; vertical-align: middle; margin-bottom: 10px; } /* dropdown filters */ .pvc-select-text[data-v-6dbe65ac] { font-size: 16px; padding-right: 5px; padding-left: 5px; } .pvc-select[data-v-6dbe65ac] { width: auto; height: 40px; vertical-align: middle; /*padding-right: 20px;*/ } .pvc-select-option[data-v-6dbe65ac] { display: inline-block; padding-right: 100px; margin-right: 100px; } /* input filters using text */ .pvc-search-control-input[data-v-6dbe65ac] { height: 40px !important; line-height: 48px; padding: 8px; font-size: 16px; width: 300px; /*margin-left: 10px;*/ } /*REVIEW this repeats a lot of .pvc-search-control-input. can it be refactored?*/ .pvc-search-control-input-full[data-v-6dbe65ac] { height: 40px !important; line-height: 48px; padding: 8px; font-size: 16px; width: 260px; } .pvc-search-control-button[data-v-6dbe65ac] { width: 40px; background: #ccc; line-height: 40px; float: right; } .pvc-download-data-button[data-v-6dbe65ac] { float: right; vertical-align: baseline; display: inline-block; } .group[data-v-6dbe65ac]:after { content: \"\"; display: table; clear: both; } .pvc-horizontal-table-body[data-v-6dbe65ac] { padding-top: 1rem; padding-bottom: 0.35rem; } .no-padding[data-v-6dbe65ac] { padding-top: 0; padding-bottom: 0; } .center-button[data-v-6dbe65ac] { display: flex; align-items: center; justify-content: center; } .loading[data-v-6dbe65ac] { float: right; } .filter-by-text-form[data-v-6dbe65ac] { border: 2px solid #0f4d90; } table[data-v-6dbe65ac] { /* table-layout: fixed; */ margin: 0; } .external-link[data-v-6dbe65ac] { padding-top: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
  // import json2csv from 'json2csv';
  // import fs from 'fs';

  var DEFAULT_SORT_FIELDS = [
    'distance',
    'date' ];

  var HorizontalTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pvc-horizontal-table"},[(_vm.shouldShowTable)?_c('div',[(_vm.shouldShowFilters !== false)?_c('div',{staticClass:"pvc-horizontal-table-controls"},[(!!_vm.options.filters)?_c('div',{staticClass:"vertically-centered"},_vm._l((_vm.filters),function(filter,index){return _c('div',{staticClass:"inline-block",attrs:{"id":'filter-' + index}},[_c('div',{staticClass:"vertically-centered pvc-select-text"},[_vm._v(_vm._s(filter.label))]),_vm._v(" "),_c('select',{staticClass:"pvc-select",on:{"change":_vm.handleFilterValueChange}},[_c('optgroup',_vm._l((filter.values),function(filterValue){return _c('option',{staticClass:"pvc-select-option",domProps:{"value":_vm.slugifyFilterValue(filterValue)}},[_vm._v(" "+_vm._s(filterValue.label)+" ")])}))])])})):_vm._e(),_vm._v(" "),(!!_vm.options.sort && !!_vm.options.sort.select)?_c('div',{staticClass:"vertically-centered"},[_c('div',{staticClass:"vertically-centered pvc-select-text"},[_vm._v("Sort by")]),_vm._v(" "),_c('select',{staticClass:"pvc-select",on:{"change":_vm.handleSortValueChange}},[_c('optgroup',_vm._l((_vm.sortFields),function(sortField){return _c('option',{staticClass:"pvc-select-option",domProps:{"value":sortField}},[_vm._v(" "+_vm._s(sortField)+" ")])}))])]):_vm._e(),_vm._v(" "),(_vm.filterByTextFields)?_c('div',{staticClass:"vertically-centered"},[_c('div',{staticClass:"pvc-select-text inline-block"},[_vm._v(" "+_vm._s(_vm.options.filterByText.label)+" ")]),_vm._v(" "),_c('form',{staticClass:"inline-block filter-by-text-form",on:{"submit":function($event){$event.preventDefault();return _vm.handleFilterFormX($event)}}},[_c('input',{class:this.inputClass,attrs:{"id":"theInput"},on:{"keyup":_vm.handleFilterFormKeyup}}),_vm._v(" "),(this.searchText != '')?_c('button',{staticClass:"pvc-search-control-button"},[_c('i',{staticClass:"fa fa-times fa-lg"})]):_vm._e()])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{class:{ 'pvc-horizontal-table-body': true, 'no-padding': !_vm.shouldShowFilters }},[(_vm.slots.title)?_c('div',[_c('h4',{staticStyle:{"display":"inline-block"}},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" "+_vm._s(_vm.countText)+" ")]),_vm._v(" "),_c('h5',{staticStyle:{"display":"inline-block","color":"gray"}},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.subtitle))+" ")]),_vm._v(" "),(this.shouldShowDownloadButton)?_c('a',{staticClass:"button pvc-download-data-button",on:{"click":this.exportTableToCSV}},[_vm._v(" Download Data ")]):_vm._e()]):_vm._e(),_vm._v(" "),_c('table',{staticClass:"stack",attrs:{"role":"grid"}},[(_vm.shouldShowHeaders !== false)?_c('thead',[_c('tr',_vm._l((_vm.fields),function(field){return _c('th',[_vm._v(_vm._s(_vm.evaluateSlot(field.label)))])}))]):_vm._e(),_vm._v(" "),_c('tbody',_vm._l((_vm.itemsLimited),function(item){return _c('horizontal-table-row',{key:item._featureId,attrs:{"item":item,"fields":_vm.fields,"hasOverlay":_vm.hasOverlay,"tableId":_vm.options.tableId}})}))]),_vm._v(" "),(_vm.options.externalLink && _vm.shouldShowExternalLink)?_c('div',{staticClass:"external-link"},[_c('a',{staticClass:"external",attrs:{"href":_vm.externalLinkHref,"target":"_blank"}},[_vm._v(" "+_vm._s(_vm.externalLinkText)+" ")])]):_vm._e()]),_vm._v(" "),(this.shouldShowRetrieveButton)?_c('a',{staticClass:"button center-button",on:{"click":this.showMoreRecords}},[_vm._v(" Retrieve "+_vm._s(this.nextIncrement)+" More "+_vm._s(this.nextIncrement === 1? 'Record' : 'Records')+" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.secondaryStatus === 'waiting'),expression:"secondaryStatus === 'waiting'"}],staticClass:"loading"},[_c('i',{staticClass:"fa fa-spinner fa-lg spin"})])]):_vm._e()]):_vm._e()])},staticRenderFns: [],_scopeId: 'data-v-6dbe65ac',
    mixins: [TopicComponent],
    data: function data() {
      var filters = this.options.filters || [];
      // console.log('in horiz table data, filters:', filters, 'filtersKeys:', filtersKeys);
      // const defaultFilterSelections = Object.keys(filters).reduce((acc, i) =>
      //                                 {
      //                                   const key = `filter-${i}`;
      //                                   console.log('in reduce, i:', i, 'acc:', acc, 'key:', key, 'acc[key]:', acc[key]);
      //                                   acc[key] = {};
      //                                   return acc;
      //                                 }, {});
      var defaultFilterSelections = {};
      for (var index=0; index < filters.length; index++) {
        defaultFilterSelections['filter-' + index] = filters[index].values[0];
      }
      // console.log('in horiz table data, filters:', filters, 'filtersKeys:', filtersKeys, 'defaultFilterSelections:', defaultFilterSelections);
      var sortFields;
      if (this.options.sort){
        sortFields = this.options.sort.sortFields || [];
      }
      var sortField;
      if (sortFields) {
        sortField = sortFields[0];
      } else {
        sortField = DEFAULT_SORT_FIELDS[0];
      }
      var highestRowRetrieved = this.options.defaultIncrement;

      var initialData = {
        filterSelections: defaultFilterSelections,
        searchText: '',
        sortField: sortField,
        highestRowRetrieved: highestRowRetrieved
      };

      return initialData;
    },
    components: {
      HorizontalTableRow: HorizontalTableRow
    },
    created: function created() {
      var this$1 = this;

      // console.log('horiz table created props slots items', this.$props.slots.items);
      if (this.filters) {
        for (var i = 0, list = this$1.filters.entries(); i < list.length; i += 1) {
          var ref = list[i];
          var index = ref[0];
          var filter = ref[1];

          var key = "filter-" + index;
          var defaultValue = filter.values[0] || {};
          this$1.filterSelections[key] = defaultValue;
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
    mounted: function mounted() {
      // console.log('horiz table mounted props slots items', this.$props.slots.items);
      this.updateTableFilteredData();
    },
    watch: {
      itemsAfterFilters: function itemsAfterFilters(nextItems) {
        // console.log('WATCH items after filters', nextItems);
        // this.$nextTick(() => {
        this.updateTableFilteredData();
        // })
      }
    },
    computed: {
      shouldShowFilters: function shouldShowFilters() {
        if (typeof this.options.shouldShowFilters === 'undefined') {
          return true;
        } else {
          return this.options.shouldShowFilters;
        }
      },
      shouldShowHeaders: function shouldShowHeaders() {
        if (typeof this.options.shouldShowHeaders === 'undefined') {
          return true;
        } else {
          return this.options.shouldShowHeaders;
        }
      },
      shouldShowDownloadButton: function shouldShowDownloadButton() {
        var downloadButton = false;
        if (this.options.downloadButton) {
          downloadButton = this.options.downloadButton;
        }
        return downloadButton;
      },
      secondaryStatus: function secondaryStatus() {
        return this.$store.state.sources[this.options.id].secondaryStatus;
      },
      shouldShowTable: function shouldShowTable() {
        var result = true;

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
      shouldShowRetrieveButton: function shouldShowRetrieveButton() {
        return this.highestRowRetrieved < this.count;
      },
      leftToRetrieve: function leftToRetrieve() {
        return this.count - this.highestRowRetrieved;
      },
      nextIncrement: function nextIncrement() {
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
      highestPageRetrieved: function highestPageRetrieved() {
        return this.evaluateSlot(this.slots.highestPageRetrieved);
      },
      pageCount: function pageCount() {
        return this.evaluateSlot(this.slots.pageCount);
      },
      totalSize: function totalSize() {
        return this.evaluateSlot(this.slots.totalSize);
      },
      limit: function limit() {
        return this.options.limit;
      },
      // REVIEW what does this do? can this be simplified?
      inputClass: function inputClass() {
        if (this.searchText === '') {
          return 'pvc-search-control-input';
        } else {
          return 'pvc-search-control-input-full';
        }
      },
      filters: function filters() {
        return this.options.filters;
      },
      activeFilters: function activeFilters() {
        //TODO make this work with not-always-on filters
        return this.filters;
      },
      fields: function fields() {
        return this.options.fields;
      },
      hasOverlay: function hasOverlay() {
        return !!this.options.mapOverlay;
      },
      items: function items() {
        var itemsSlot = this.slots.items;
        var items = this.evaluateSlot(itemsSlot) || [];
        // console.log('horiz table items', items);
        return items
      },
      filterByTextFields: function filterByTextFields() {
        if (this.options.filterByText) {
          return this.options.filterByText.fields;
        } else {
          return null;
        }
      },
      itemsAfterSearch: function itemsAfterSearch() {
        // console.log('itemsAfterSearch is running');
        var items = this.items;
        var searchText = this.searchText;

        if (!searchText) {
          return items;
        }

        var searchTextLower = searchText.toLowerCase();

        // get full set of items

        // if text search is not enabled, return all items
        var searchFields = this.filterByTextFields || [];
        if (searchFields.length === 0) {
          return items;
        }

        // get items that contain the search text in one of their filter fields
        var matchingItems = items.filter(function (item) {
          var searchVals = searchFields.map(function (filterField) {
            var props = item.properties;
            var searchVal = props ? props[filterField] : item[filterField];
            // console.log('props', props, 'searchVal', searchVal);
            return searchVal.toLowerCase();
          });

          var boolean = false;
          for (var i = 0, list = searchVals; i < list.length; i += 1) {
            // console.log('searchVal', searchVal, 'searchTextLower', searchTextLower);
            var searchVal = list[i];

            if (searchVal.includes(searchTextLower)) {
              boolean = true;
            }
          }
          return boolean;
        });

        return matchingItems;
      },
      // this takes itemsAfterSearch and applies selected filters
      itemsAfterFilters: function itemsAfterFilters() {
        // console.log('itemsAfterFilters is running, this.filters:', this.filters, 'this.filterSelections:', this.filterSelections);
        var itemsAfterSearch = this.itemsAfterSearch;
        var items = this.filterItems(itemsAfterSearch,
                                       this.filters,
                                       this.filterSelections);
        // console.log('horiz table itemsAfterFilters', items);
        return items;
      },
      itemsAfterSort: function itemsAfterSort() {
        var itemsAfterFilters = this.itemsAfterFilters;
        var sortOpts = this.options.sort;
        return this.sortItems(itemsAfterFilters, sortOpts);
      },
      sortFields: function sortFields() {
        if (this.options.sort.sortFields) {
          return this.options.sort.sortFields;
        } else {
          return DEFAULT_SORT_FIELDS;
        }
      },
      // this takes filtered items and applies the max number of rows
      itemsLimited: function itemsLimited() {
        // console.log('items limited', this.itemsAfterSort.slice(0, this.limit));
        if (this.options.limit) {
          return this.itemsAfterSort.slice(0, this.options.limit);
        } else if (this.options.defaultIncrement) {
          return this.itemsAfterSort.slice(0, this.highestRowRetrieved);
        } else {
          return this.itemsAfterSort;
        }
      },
      count: function count() {
        if (this.$props.options.useApiCount) {
          return this.totalSize;
        } else {
          return this.itemsAfterFilters.length;
        }
      },
      countText: function countText() {
        if (this.$props.options.noCount) {
          return '';
        } else if (this.highestRowRetrieved < this.count) {
          return ("(1 - " + (this.count < this.highestRowRetrieved ? this.count : this.highestRowRetrieved) + " of " + (this.count) + ")");
        } else {
          return ("(" + (this.count) + ")");
        }
      },
      shouldShowExternalLink: function shouldShowExternalLink() {
        if (this.options.externalLink.forceShow) {
          return this.options.externalLink.forceShow;
        } else {
          return this.itemsAfterSearch.length > this.limit;
        }
      },
      externalLinkAction: function externalLinkAction() {
        return this.options.externalLink.action || 'See more';
      },
      externalLinkText: function externalLinkText() {
        var externalLinkConf = this.options.externalLink;
        var actionFn = externalLinkConf.action;
        var actionText = actionFn(this.externalLinkCount);
        var name = externalLinkConf.name;

        return ("" + actionText);
        // return `${actionText} at ${name}`;
      },
      externalLinkHref: function externalLinkHref() {
        return this.evaluateSlot(this.options.externalLink.href);
      },
      // the number of items that aren't being shown (e.g. See 54 more...)
      externalLinkCount: function externalLinkCount() {
        return this.count - this.limit;
      },
    },
    methods: {
      exportTableToCSV: function exportTableToCSV() {
        var this$1 = this;

        // console.log('exportTableToCSV is running');

        // const Json2csvParser = require('json2csv').Parser;

        var tableData = [];
        for (var i = 0, list = this$1.items; i < list.length; i += 1) {
          // console.log('item:', item);
          var item = list[i];

          var object = {
            'address': item.properties.ADDRESS,
            'distance': item._distance
          };
          tableData.push(object);
        }

        try {
          // const parser = new Json2csvParser(opts);
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
          result += keys.join(columnDelimiter);
          result += lineDelimiter;

          data.forEach(function(item) {
              ctr = 0;
              keys.forEach(function(key) {
                  if (ctr > 0) { result += columnDelimiter; }

                  result += item[key];
                  ctr++;
              });
              result += lineDelimiter;
          });

          var csv = result;
          // console.log('csv', csv);
          // let csv = parser.parse(tableData);
          data = null;
          var filename;
          var link;

          // filename = 'export.csv';
          filename = this.$props.options.downloadFile + '.csv' || 'export.csv';

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
      showMoreRecords: function showMoreRecords() {
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
      compareAndSetHighestRowRetrieved: function compareAndSetHighestRowRetrieved() {
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
      getMoreRecords: function getMoreRecords() {
        var dataSource = this.options.id;
        var highestPageRetrieved = this.highestPageRetrieved;
        this.$controller.getMoreRecords(dataSource, highestPageRetrieved);
      },
      slugifyFilterValue: function slugifyFilterValue(filterValue) {
        var direction = filterValue.direction;
        var value = filterValue.value;
        var unit = filterValue.unit;
        return [direction, value, unit].join('-');
      },
      deslugifyFilterValue: function deslugifyFilterValue(slug) {
        var parts = slug.split('-');
        var direction = parts[0];
        var value = parts[1];
        var unit = parts[2];
        return {value: value, unit: unit, direction: direction};
      },
      handleSortValueChange: function handleSortValueChange(e) {
        // console.log('handleSortValueChange running', e);

        var value = e.target.value;
        this.sortField = value;
      },
      handleFilterValueChange: function handleFilterValueChange(e) {
        console.log('handle filter value change', e);

        var target = e.target;
        var slug = target.value;

        // deslugify filter value
        var valueObj = this.deslugifyFilterValue(slug);

        var parent = target.parentElement;
        var parentId = parent.id;

        // patch and replace filter selections
        var prevFilterSelections = this.filterSelections;
        var nextFilterSelections = Object.assign({}, prevFilterSelections);
        nextFilterSelections[parentId] = valueObj;
        this.filterSelections = nextFilterSelections;
      },
      values: function values(item) {
        var fields = this.options.fields;
        var sourceFields = fields.map(function (field) { return field.sourceField; });
        return sourceFields.map(function (sourceField) { return item[sourceField]; })
      },
      handleFilterFormKeyup: function handleFilterFormKeyup(e) {
        var input = e.target.value;
        this.searchText = input;
      },
      handleFilterFormX: function handleFilterFormX(e) {
        e.target[0].value = '';
        this.searchText = "";
      },
      filterItems: function filterItems(items, filters, filterSelections) {
        // console.log('typeof items:', typeof items);
        // console.log('FILTER ITEMS is running, items:', items, 'filters:', filters, 'filterSelections:', filterSelections);
        var itemsFiltered = items.slice();

        if (filters) {
          // console.log('in filterItems, filters:', filters, 'filters.length', filters.length, 'filters.entries():', filters.entries(), 'filters.keys():', filters.keys());
          // for (let [index, filter] of filters.entries()) {
          var loop = function ( index ) {
            var key = 'filter-' + index;
            // const key = `filter-${index}`;
            var data = filterSelections[key];
            // console.log('index:', index, 'key:', key, 'data:', data, 'filters:', filters[index]);
            var ref = filters[index];
            var type = ref.type;
            var getValue = ref.getValue;
            var unit = data.unit;
            var value = data.value;
            var direction = data.direction || 'subtract';

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
                var min = (void 0), max = (void 0);

                if (direction === 'subtract') {
                  max = moment();
                  min = moment().subtract(value, unit);
                  // console.log('max:', max, 'min', min);
                } else if (direction === 'add') {
                  min = moment();
                  max = min.add(value, unit);
                } else {
                  throw ("Invalid time direction: " + direction);
                }

                // console.log('in case time, itemsFiltered:', itemsFiltered);
                itemsFiltered = itemsFiltered.filter(function (item) {
                  var itemValue = getValue(item);
                  var itemMoment = moment(itemValue);
                  var isBetween = itemMoment.isBetween(min, max);
                  // console.log('itemValue:', itemValue, 'itemMoment:', itemMoment, 'min:', min, 'max:', max, 'isBetween:', isBetween);
                  return isBetween;
                });
                // console.log('ITEMS FILTERED BY TIME FILTER', itemsFiltered);
                break;

              default:
                throw ("Unhandled filter type: " + type);
                break;
            }
          };

          for (var index=0; index < filters.length; index++) loop( index );
        }
        return itemsFiltered;
      },
      // sortItems(items, sortOpts) {
      sortItems: function sortItems(items, sortOpts) {
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
        var sortFn = sortOpts.compare || this.defaultSortFn;
        // console.log('sortFn', sortFn);
        // console.log('sortFn', sortFn)
        return items.sort(sortFn);
      },
      defaultSortFn: function defaultSortFn(a, b) {
        // console.log('defaultSortFn is running, a:', a, 'b:', b);
        var sortOpts = this.options.sort;
        var getValueFn = sortOpts.getValue;
        var sortField = this.sortField;
        var order;
        if (typeof sortOpts.order === 'function') {
          var orderFn = sortOpts.order;
          order = orderFn(sortField);
        } else {
          order = sortOpts.order;
        }
        console.log('sortField', sortField, 'order', order);

        var valA = getValueFn(a, sortField);
        var valB = getValueFn(b, sortField);
        var result;

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
            throw ("Unknown sort order: " + order);
          }
        }

        // console.log('compare', valA, 'to', valB, ', result:', result);

        return result;
      },
      // this updates the global state that stores filtered table rows
      updateTableFilteredData: function updateTableFilteredData() {
        // console.log('update table filtered data is running, options:', this.options);

        // get table id
        var ref = this.options;
        var tableId = ref.tableId;

        // update global state
        this.$store.commit('setHorizontalTableFilteredData', {
          tableId: tableId,
          data: this.itemsAfterFilters
        });
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" img[data-v-3b8b0c0a] { display: block; margin: 0 auto; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

    var Image_ = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{attrs:{"src":_vm.slots.source}})},staticRenderFns: [],_scopeId: 'data-v-3b8b0c0a',
      mixins: [TopicComponent]
    };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" table[data-v-42075018] { margin: 0; } th[data-v-42075018], td[data-v-42075018] { font-size: 15px; text-align: left; } th[data-v-42075018] { width: 30%; } .external-link[data-v-42075018] { padding-top: 5px; } .table-title[data-v-42075018] { /*too much*/ /*margin-top: 1rem;*/ } .table-container[data-v-42075018] { /*this was too much padding for the parcel table, taking out for now*/ /*padding-top: 1rem;*/ margin-bottom: 10px !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var VerticalTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.shouldShowTable)?_c('div',{staticClass:"table-container"},[(_vm.slots.title)?_c('h4',{staticClass:"table-title"},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]):_vm._e(),_vm._v(" "),_c('table',[_c('tbody',_vm._l((_vm.slots.fields),function(field){return _c('tr',[_c('th',{domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.label))}}),_vm._v(" "),_c('td',{domProps:{"innerHTML":_vm._s(_vm.evaluateSlot(field.value, field.transforms, _vm.nullValue))}})])}))]),_vm._v(" "),_c('div',{staticClass:"external-link"},[(_vm.options && _vm.options.externalLink)?_c('a',{staticClass:"external external-link",attrs:{"href":_vm.externalLinkHref,"target":"_blank"}},[_vm._v(" "+_vm._s(_vm.externalLinkText)+" ")]):_vm._e()])]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-42075018',
    mixins: [TopicComponent],
    computed: {
      shouldShowTable: function shouldShowTable() {
        if (this.item) {
          if (this.item.activeTable) {
            var filterValue = this.item.activeTable;
            var id = this.options.id;
            if (filterValue === id) {
              return true
            } else {
              return false;
            }
          } else {
            return true;
          }
        } else {
          return true;
        }
      },
      externalLinkAction: function externalLinkAction() {
        return this.options.externalLink.action || 'See more';
      },
      externalLinkText: function externalLinkText() {
        var externalLinkConf = this.options.externalLink;
        var actionFn = externalLinkConf.action;
        var actionText = actionFn(this.externalLinkCount);
        var name = externalLinkConf.name;

        return (actionText + " at " + name);
      },
      externalLinkHref: function externalLinkHref() {
        return this.evaluateSlot(this.options.externalLink.href);
      },
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .container[data-v-15b137ab] { margin-bottom: 30px; } .button[data-v-15b137ab] { margin-right: 10px; margin-top: 0px; margin-bottom: 0px; } .overlay-toggle[data-v-15b137ab] { border: 1px solid #f99300 !important; color: #f99300 !important; background: #fff !important; } .overlay-toggle.mouseover[data-v-15b137ab] { background: #444 !important; color: white !important; } .overlay-toggle.active[data-v-15b137ab] { background: #f99300 !important; color: #fff !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var OverlayToggleGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items.length)?_c('div',[_c('div',{staticClass:"container"},[(_vm.slots.title)?_c('h4',[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.items),function(item){return _c('a',{staticClass:"button overlay-toggle",class:{'active': _vm.isActive(item), 'mouseover': _vm.isMousedover(item)},attrs:{"href":"#","data-key":_vm.keyForItem(item)},on:{"click":_vm.handleClick,"mouseover":function($event){_vm.handleMouseover(_vm.keyForItem(item));},"mouseout":_vm.handleMouseout}},[_vm._v(" "+_vm._s(_vm.keyForItem(item))+" ")])})],2)]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-15b137ab',
    mixins: [TopicComponent],
    data: function data() {
      return {
        mouseover: null
      }
    },
    computed: {
      items: function items() {
        return this.evaluateSlot(this.slots.items);
      },
    },
    methods: {
      isActive: function isActive(item) {
        var imageOverlay = this.$store.state.map.imageOverlay;
        var itemKey = this.keyForItem(item);
        return imageOverlay === itemKey;
      },
      keyForItem: function keyForItem(item) {
        var getKeyFn = this.options.getKey;
        return getKeyFn(item);
      },
      handleClick: function handleClick(e) {
        e.preventDefault();
        var prevImageOverlay = this.$store.state.map.imageOverlay;
        var nextImageOverlay = e.target.getAttribute('data-key');
        // console.log(nextImageOverlay);
        if (prevImageOverlay === nextImageOverlay) {
          this.$store.commit('setImageOverlay', null);
        } else {
          this.$store.commit('setImageOverlay', nextImageOverlay);
        }
      },
      handleMouseover: function handleMouseover(key) {
        this.mouseover = key;
      },
      handleMouseout: function handleMouseout() {
        this.mouseover = null;
      },
      isMousedover: function isMousedover(item) {
        var itemKey = this.keyForItem(item);
        if (itemKey === this.mouseover) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=Paragraph.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Paragraph = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}})},staticRenderFns: [],_scopeId: 'data-v-bfe356e4',
    mixins: [TopicComponent],
    computed: {
      additionalTags: function additionalTags() {
        return this.$props.slots.additionalTags || [];
      },
      message: function message() {
        var this$1 = this;

        // if there is a transform, it needs this textWithTags section
        var textWithTags = '';
        for (var i = 0, list = this$1.additionalTags; i < list.length; i += 1) {
          var tag = list[i];

          textWithTags = textWithTags + '<' + tag + '>';
        }
        textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
        for (var i$1 = 0, list$1 = this$1.additionalTags; i$1 < list$1.length; i$1 += 1) {
          var tag$1 = list$1[i$1];

          textWithTags = textWithTags + '</' + tag$1 + '>';
        }
        return textWithTags;
      },
      style: function style() {
        if (this.$props.options) {
          return this.$props.options.style || '';
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*# sourceMappingURL=SpanComp.vue.map */"; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var SpanComp = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{style:(this.style),domProps:{"innerHTML":_vm._s(this.message)}})},staticRenderFns: [],_scopeId: 'data-v-1f4a6309',
    mixins: [TopicComponent],
    computed: {
      additionalTags: function additionalTags() {
        return this.$props.slots.additionalTags || [];
      },
      message: function message() {
        var this$1 = this;

        // if there is a transform, it needs this textWithTags section
        var textWithTags = '';
        for (var i = 0, list = this$1.additionalTags; i < list.length; i += 1) {
          var tag = list[i];

          textWithTags = textWithTags + '<' + tag + '>';
        }
        textWithTags = textWithTags + this.evaluateSlot(this.$props.slots.text, this.$props.slots.transforms);
        for (var i$1 = 0, list$1 = this$1.additionalTags; i$1 < list$1.length; i$1 += 1) {
          var tag$1 = list$1[i$1];

          textWithTags = textWithTags + '</' + tag$1 + '>';
        }
        return textWithTags;
      },
      style: function style() {
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
    beforeCreate: function beforeCreate() {
      // console.log('tabGroup beforeCreate is running');
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    },
    // some internal state for things local enough that they shouldn't be in
    // vuex if we can avoid it.
    data: function data() {
      // computed props aren't accessible here, so evaluate slot separately
      var items = this.evaluateSlot(this.slots.items);
      return {
        activeItem: this.activeItemFromState,// || this.keyForItem(items[0]),
        activeMapreg: this.activeMapregFromState,// || this.titleForItem(items[0]),
        activeAddress: this.activeAddressFromState,// || this.addressForItem(items[0])
      };
    },
    mounted: function mounted() {
    //   // REVIEW globals. also is this still needed?
    //   // $(document).foundation();
      this.$data.activeItem = this.activeItemFromState;
      this.$data.activeMapreg = this.activeMapregFromState;
      this.$data.activeAddress = this.activeAddressFromState;
    },
    // props: [],
    computed: {
      items: function items() {
        var items = this.evaluateSlot(this.slots.items);

        // sort
        var sortFn = this.options.sort;
        var itemsSorted = items;
        if (sortFn) {
          itemsSorted = sortFn(items);
        }

        return itemsSorted;
      },
      comps: function comps() {
        return this.options.components;
      },
      activeItemFromState: function activeItemFromState() {
        return this.$store.state.parcels.dor.activeParcel;
      },
      activeMapregFromState: function activeMapregFromState() {
        return this.$store.state.parcels.dor.activeMapreg;
      },
      activeAddressFromState: function activeAddressFromState() {
        return this.$store.state.parcels.dor.activeAddress;
      }
    },
    watch: {
      // when items change, update the activeItem
      items: function items(items$1) {
        var nextFirstItem = items$1[0];
        var nextActiveKey = this.keyForItem(nextFirstItem);
        this.activeItem = nextActiveKey;
        var nextMapreg = this.titleForItem(nextFirstItem);
        this.activeMapreg = nextMapreg;
        var nextAddress = this.addressForItem(nextFirstItem);
        this.activeAddress = nextAddress;
      }
    },
    methods: {
      clickedItem: function clickedItem(item) {
        this.$data.activeItem = this.keyForItem(item);
        this.$data.activeMapreg = this.titleForItem(item);
        this.$data.activeAddress = this.addressForItem(item);

        var payload = {
          parcelLayer: 'dor',
          activeParcel: this.$data.activeItem,
          activeMapreg: this.$data.activeMapreg,
          activeAddress: this.$data.activeAddress
        };
        this.$store.commit('setActiveParcel', payload);
        // this.$store.commit('setActiveDorParcel', this.$data.activeItem);
      },
      keyForItem: function keyForItem(item) {
        try {
          return this.options.getKey(item);
        } catch (e) {
          return null;
        }
      },
      titleForItem: function titleForItem(item) {
        try {
          return this.options.getTitle(item);
        } catch (e) {
          return null;
        }
      },
      addressForItem: function addressForItem(item) {
        try {
          return this.options.getAddress(item);
        } catch (e) {
          return null;
        }
      },
      itemIsActive: function itemIsActive(item) {
        var isActive = (this.activeItem === this.keyForItem(item));
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
      HorizontalTable: HorizontalTable,
      // TopicComponentGroup
    },
    // some internal state for things local enough that they shouldn't be in
    // vuex if we can avoid it.
    data: function data() {
      var tableGroupData = {
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
        tableGroupData: tableGroupData
      };
    },
    created: function created() {
      var this$1 = this;

      console.log('horizontalTableGroup created is starting, this.tableGroupData:', this.tableGroupData);
      if (this.options.filters) {
        console.log('horizontalTableGroup created, if this.options.filters is running:', this.options.filters, this.options.filters.entries());
        for (var i$1 = 0, list$1 = this$1.options.filters; i$1 < list$1.length; i$1 += 1) {
        // for (let [index, filter] of this.options.filters.entries()) {
          var filter = list$1[i$1];

          console.log('for loop, this.options.filters:', this$1.options.filters[0]);
          // let filter = this.options.filters[0]
        // for (let [index, filter] of this.options.filters.entries()) {
          console.log('for loop, filter:', filter);
          // console.log('for loop, index:', index, 'filter:', filter);
          var defaultTableName = filter.values[0].value || {};
          console.log('for loop, defaultTableName:', defaultTableName);

          // add activeTable to local data
          this$1.tableGroupData.activeTable = defaultTableName;
          // add activeTableId to local data
          // console.log('for loop, this.options.components:', this.options.components);
          for (var i = 0, list = this$1.options.tables; i < list.length; i += 1) {
            var comp = list[i];

            if (comp.options.id === defaultTableName) {
              this$1.tableGroupData.activeTableId = comp._id;
            }
          }
          console.log('horizontalTableGroup this.tableGroupData:', this$1.tableGroupData);
          this$1.$store.commit('setHorizontalTableGroupActiveTable', this$1.tableGroupData);
          // this.$store.commit('setHorizontalTableGroupActiveTableId', this.activeTable);
        }
        console.log('horizontalTableGroup created, if this.options.filters is ending');
      }
      if (this.options.alternate) {
        console.log('horizontalTableGroup created, if this.options.alternate - mainTable', this.options.alternate.mainTable, this.altMainTable, 'dependentTable', this.options.alternate.dependentTable, this.altDepTable);
        var sources = this.$store.state.sources;
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
      altMainTable: function altMainTable() {
        if (this.options.alternate) {
          return this.options.alternate.mainTable;
        } else {
          return null
        }
      },
      altDepTable: function altDepTable() {
        if (this.options.alternate) {
          return this.options.alternate.dependentTable;
        } else {
          return null
        }
      },
    },
    methods: {
      shouldShowTable: function shouldShowTable(id) {
        var result = true;

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
      slugifyFilterValue: function slugifyFilterValue(filterValue) {
        var direction = filterValue.direction;
        var value = filterValue.value;
        var unit = filterValue.unit;
        return [direction, value, unit].join('-');
      },
      deslugifyFilterValue: function deslugifyFilterValue(slug) {
        var parts = slug.split('-');
        var direction = parts[0];
        var value = parts[1];
        var unit = parts[2];
        return {value: value, unit: unit, direction: direction};
      },
      handleFilterValueChange: function handleFilterValueChange(e) {
        var this$1 = this;

        console.log('handle activeTable value change', e);
        var target = e.target;
        var slug = target.value;
        // deslugify filter value
        var valueObj = this.deslugifyFilterValue(slug);
        var tableName = valueObj.value;

        // add activeTable to local data
        this.tableGroupData.activeTable = tableName;

        // add activeTableId to local data
        for (var i = 0, list = this$1.options.tables; i < list.length; i += 1) {
          var comp = list[i];

          console.log('tableName:', tableName, 'comp.options.id:', comp.options.id, 'comp:', comp);
          if (comp.options.id === tableName) {
            this$1.tableGroupData.activeTableId = comp._id;
          }
        }

        console.log('handleFilterValueChange, this.tableGroupData:', this.tableGroupData);
        this.$store.commit('setHorizontalTableGroupActiveTable', this.tableGroupData);
        // this.$store.commit('setHorizontalTableGroupActiveTableId', this.activeTable);
      },
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*REVIEW these aren't prefixed `mb-`because they're scoped, but it feels inconsistent?*/ .topic-header[data-v-2db893cf] { background: #f5f5f5; border: 1px solid #ddd; display: block; font-size: 18px; font-weight: normal; height: 70px; line-height: 45px; padding: 10px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); margin-bottom: 8px; } .topic-header[data-v-2db893cf]:hover { background: #fff; color: inherit; } .topic-header-icon[data-v-2db893cf] { padding-left: 10px; padding-right: 10px; } .topic-body[data-v-2db893cf] { padding: 5px; margin-bottom: 10px; } .loading[data-v-2db893cf] { float: right; } .topic-body-enter-active[data-v-2db893cf], .topic-body-leave-active[data-v-2db893cf] { transition: opacity 0.18s; } .topic-body-enter[data-v-2db893cf], .topic-body-leave-to[data-v-2db893cf] { opacity: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Topic = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.shouldShowTopic)?_c('div',[(_vm.shouldShowHeader)?_c('a',{staticClass:"topic-header",attrs:{"href":"#","data-topic-key":_vm.topicKey},on:{"click":function($event){$event.preventDefault();return _vm.handleTopicHeaderClick($event)}}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === 'waiting'),expression:"status === 'waiting'"}],staticClass:"loading"},[_c('i',{staticClass:"fa fa-spinner fa-lg spin"})]),_vm._v(" "),_c('i',{class:['fa', 'fa-' + _vm.icon, 'topic-header-icon'],attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.topic.label)+" ")]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"topic-body"}},[(_vm.shouldShowBody)?_c('div',{staticClass:"topic-body",attrs:{"data-topic-key":_vm.topicKey}},[_c('topic-component-group',{attrs:{"topic-components":_vm.topic.components}})],1):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldShowError),expression:"shouldShowError"}],staticClass:"topic-body",domProps:{"innerHTML":_vm._s(this.errorMessage)}})],1):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-2db893cf',
    name: 'Topic',
    props: ['topicKey'],
    components: {},
    beforeCreate: function beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    },
    computed: {
      // returns the full config object for the topic
      topic: function topic() {
        var this$1 = this;

        var topicKey = this.$props.topicKey;
        var topicsFiltered = this.$config.topics.filter(function (topic) {
          return topic.key === this$1.$props.topicKey;
        });
        if (topicsFiltered.length !== 1) {
          throw ("Could not get single config object for topic '" + topicKey + "'.");
        }
        var config = topicsFiltered[0];
        return config;
      },
      icon: function icon() {
        return this.topic.icon;
      },
      isActive: function isActive() {
        var key = this.topic.key;
        var activeTopic = this.$store.state.activeTopic;
        return activeTopic === key;
      },
      shouldShowHeader: function shouldShowHeader() {
        return this.$config.topics.length > 1;
      },
      dataSources: function dataSources() {
        return this.topic.dataSources || [];
      },
      hasData: function hasData() {
        var this$1 = this;

        // console.log(this.topicKey, '-', 'hasData?', this.dataSources);

        // make sure the following is true for all data sources
        var hasData = this.dataSources.every(function (dataSource) {
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
      },
      shouldShowBody: function shouldShowBody() {
        var succeeded = this.status === 'success';
        var hasData = this.hasData;
        var should = succeeded && hasData && this.isActive;
        return should;
      },
      shouldShowTopic: function shouldShowTopic() {
        var this$1 = this;

        if (!this.topic.onlyShowTopicIfDataExists) {
          return true;
        } else {
          var result = true;
          var requiredDataSources = Object.keys(this.topic.onlyShowTopicIfDataExists);
          // console.log('requiredDataSources', requiredDataSources);
          for (var i = 0, list = requiredDataSources; i < list.length; i += 1) {
            var requiredDataSource = list[i];

            var dataSource = this$1.topic.onlyShowTopicIfDataExists[requiredDataSource];
            var pathToDataArray = dataSource.pathToDataArray;
            var minDataLength = dataSource.minDataLength;
            // console.log('requiredDataSource', requiredDataSource, 'dataSource', dataSource);
            var dataArray = (void 0);
            if (!this$1.$store.state.sources[requiredDataSource].data) {
              // if there is no data (yet)
              return false;
            } else {
              if (!pathToDataArray) {
                dataArray = this$1.$store.state.sources[requiredDataSource].data;
              } else if (pathToDataArray.length === 1) {
                dataArray = this$1.$store.state.sources[requiredDataSource].data[pathToDataArray[0]];
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
      shouldShowError: function shouldShowError() {
        var shouldShowError = (
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
      errorMessage: function errorMessage() {
        if (this.topic.errorMessage) {
          return this.topic.errorMessage(this.$store.state);
        } else {
          return 'Could not locate records for that address.';
        }
      },
      // REVIEW this is getting cached and not updating when the deps update
      status: {
        cache: false,
        get: function get() {
          var this$1 = this;

          // get the status of each source
          var dataSources = this.topic.dataSources || [];

          // if no sources, return success
          if (dataSources.length === 0) {
            return 'success';
          }

          var topicStatus;
          var sourceStatuses = dataSources.map(function (dataSource) {
            var targetsFn = this$1.$config.dataSources[dataSource].targets;

            // if the data source is configured for targets
            if (targetsFn) {
              var targetsMap = this$1.$store.state.sources[dataSource].targets;
              var targets = Object.values(targetsMap);

              // but there are no targets for this address, return false
              if (targets.length === 0) {
                return;
              }

              // if there are targets for this address, make sure none of them
              // are "waiting"
              return targets.map(function (target) {
                return target.status
              });

            // if the data source is not configured for targets, just check that
            // it has data
            } else {
              return [this$1.$store.state.sources[dataSource].status];
            }
          });

          var flatArray = [];
          for (var i$1 = 0, list$1 = sourceStatuses; i$1 < list$1.length; i$1 += 1) {
            var sourceStatus = list$1[i$1];

            if (sourceStatus) {
              for (var i = 0, list = sourceStatus; i < list.length; i += 1) {
                var sourceStatusValue = list[i];

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
      configForBasemap: function configForBasemap(key) {
        return this.$config.map.basemaps[key];
      },

      handleTopicHeaderClick: function handleTopicHeaderClick(e) {
        var topic = this.$props.topicKey;
        var nextTopic;

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
      Topic: Topic,
    },
    mounted: function mounted() {
      if (this.$store.state.activeTopic === null || this.$store.state.activeTopic === '') {
        this.setDefaultTopicActive();
      }
    },
    methods: {
      setDefaultTopicActive: function setDefaultTopicActive() {
        if (this.$props.options.defaultTopic) {
          this.$store.state.activeTopic = this.$props.options.defaultTopic;
        }
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .topic-component[data-v-6c6d5231] { /* margin-bottom: 10px !important; */ } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
  // console.log('in TopicComponentGroup.vue script, BadgeCustom:', BadgeCustom, 'Badge:', Badge, 'TabGroup:', TabGroup, 'Callout:', Callout, 'CollectionSummary:', CollectionSummary, 'HorizontalTable:', HorizontalTable);

  var TopicComponentGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.topicComponents),function(comp,compIndex){return _c(comp.type,{key:_vm.getCompKey(_vm.key, compIndex),tag:"component",staticClass:"topic-component",attrs:{"slots":comp.slots,"options":comp.options,"item":_vm.item}})}))},staticRenderFns: [],_scopeId: 'data-v-6c6d5231',
    name: 'TopicComponentGroup',
    props: ['topicComponents', 'item', 'filterData'],
    components: {
      Badge: Badge,
      ButtonComp: ButtonComp,
      Callout: Callout,
      CollectionSummary: CollectionSummary,
      Division: Division,
      ePayForm: ePayForm,
      HorizontalTable: HorizontalTable,
      Image_: Image_,
      VerticalTable: VerticalTable,
      OverlayToggleGroup: OverlayToggleGroup,
      Paragraph: Paragraph,
      SpanComp: SpanComp,
      List: List,
      HorizontalTableGroup: HorizontalTableGroup,
    },
    beforeCreate: function beforeCreate() {
      // console.log('TopicComponentGroup beforeCreate is running');
      this.$options.components.TabGroup = TabGroup;
      this.$options.components.BadgeCustom = BadgeCustom;
      this.$options.components.Topic = Topic;
      this.$options.components.TopicSet = TopicSet;
      this.$options.components.AnyHeader = AnyHeader;
    },
    data: function data() {
      return {
        // generate a (basically) unique id for the group. the go-to npm packages
        // for uuid generation aren't available as umd builds on unpkg and
        // therefore won't work with the examples. this is good enough :)
        key: generateUniqueId()
      };
    },
    methods: {
      getCompKey: function getCompKey(compGroupKey, compIndex) {
        return ("topic-comp-" + compGroupKey + "-" + compIndex);
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-badge[data-v-7ccdb9d8] { /*width: 300px;*/ padding: 0; margin: 0 auto; margin-bottom: inherit; } @media (max-width: 640px) { .mb-badge[data-v-7ccdb9d8] { width: 100%; } } /*REVIEW this should use foundation classes*/ @media (min-width: 640px) { .mb-badge[data-v-7ccdb9d8] { width: 325px; } } .mb-badge-header[data-v-7ccdb9d8] { color: #fff; font-weight: bold; text-align: center; padding-top: 2px; padding-bottom: 2px; } .mb-badge-body[data-v-7ccdb9d8] { padding: 12px; } .mb-badge-body > h1[data-v-7ccdb9d8] { margin: 0; margin-bottom: 5px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var BadgeCustom = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mb-badge panel center"},[_c('div',{staticClass:"mb-badge-header",style:(_vm.style)},[_vm._v(" "+_vm._s(_vm.evaluateSlot(_vm.slots.title))+" ")]),_vm._v(" "),_c('topic-component-group',{attrs:{"topic-components":_vm.options.components,"item":_vm.item}})],1)},staticRenderFns: [],_scopeId: 'data-v-7ccdb9d8',
    name: 'BadgeCustom',
    mixins: [TopicComponent],
    beforeCreate: function beforeCreate() {
      this.$options.components.TopicComponentGroup = TopicComponentGroup;
    },
    computed: {
      style: function style() {
        var titleBackgroundValOrFn = (this.options || {}).titleBackground;
        var titleBackground;

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
      }
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /* .toggle-tab { position: absolute; left: 0px; border-width: 1.3px; border-color: #CAC9C9; height: 48px; line-height: 58px; width:24px; background-color: white; display: inline-block; z-index: 500; */ /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ /* } */ .toggle-tab[data-v-c0f28abc] { display: none; } .align-span[data-v-c0f28abc] { margin-left: 6px; } @media screen and (min-width: 46.875em) { .toggle-tab[data-v-c0f28abc] { position: absolute; right: 0px; border-width: 1.3px; border-style: solid; border-color: #CAC9C9; height: 48px; line-height: 56px; width:24px; background-color: white; display: inline-block; z-index: 500; opacity: 0.7; /* border-left-style: solid; */ /* box-shadow: 2px 2px 7px grey; */ } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













  var fullScreenTopicsToggleTab = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!this.isMobileOrTablet)?_c('div',{staticClass:"toggle-tab",style:({ top: _vm.buttonPosition }),attrs:{"id":"toggle-tab"},on:{"click":_vm.handleFullScreenTopicsToggleButtonClick}},[_c('span',{staticClass:"align-span"},[_c('i',{class:this.currentIcon})])]):_vm._e()},staticRenderFns: [],_scopeId: 'data-v-c0f28abc',
    data: function data() {
      return {
        'divHeight': 0,
        'buttonPosition': 0,
      }
    },
    mounted: function mounted() {
      window.addEventListener('resize', this.setDivHeight);
      this.setDivHeight();
    },
    computed: {
      fullScreenMapEnabled: function fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
        return this.$store.state.fullScreenTopicsEnabled;
      },
      isMobileOrTablet: function isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      cyclomediaActive: function cyclomediaActive() {
        return this.$store.state.cyclomedia.active;
      },
      pictometryActive: function pictometryActive() {
        return this.$store.state.pictometry.active;
      },
      picOrCycloActive: function picOrCycloActive() {
        if (this.cyclomediaActive || this.pictometryActive) {
          return true;
        } else {
          return false;
        }
      },
      currentIcon: function currentIcon() {
        if (this.fullScreenTopicsEnabled) {
          return 'fa fa-caret-left fa-2x'
        } else {
          return 'fa fa-caret-right fa-2x'
        }
      }
    },
    watch: {
      picOrCycloActive: function picOrCycloActive() {
        var this$1 = this;

        this.$nextTick(function () {
          this$1.setDivHeight();
        });
      }
    },
    methods: {
      setDivHeight: function setDivHeight() {
        var el;
        if (this.fullScreenTopicsEnabled) {
          el = document.getElementById('topic-panel-container');
        } else {
          el = document.getElementById('map-tag');
        }
        var mapDivStyle = window.getComputedStyle(el);
        var mapDivHeight = parseFloat(mapDivStyle.getPropertyValue('height').replace('px', ''));
        // console.log('FullScreenTopicsToggleTab setDivHeight is running, el:', el, 'mapDivHeight:', mapDivHeight);

        this.buttonPosition = (mapDivHeight-48)/2 + 'px';
      },
      handleFullScreenTopicsToggleButtonClick: function handleFullScreenTopicsToggleButtonClick(e) {
        var prevFullScreenTopicsEnabled = this.$store.state.fullScreenTopicsEnabled;
        var nextFullScreenTopicsEnabled = !prevFullScreenTopicsEnabled;
        this.$store.commit('setFullScreenTopicsEnabled', nextFullScreenTopicsEnabled);
      },
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-panel-topics-greeting[data-v-2d681dc9] { padding-top: 20px; } .greeting[data-v-2d681dc9] { font-size: 20px; color: #444; padding: 14px; } .greeting-error[data-v-2d681dc9] { border-left-color: #ff0000; } /*medium*/ @media screen and (min-width: 750px) { .mb-panel-topics-greeting[data-v-2d681dc9] { /*make this scroll on medium screens*/ /*REVIEW this is a little hacky. the 120px shouldn't be hard-coded.*/ height: calc(100vh - 120px); overflow: auto; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Greeting = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mb-panel-topics-greeting"},[_c('div',{staticClass:"columns medium-20 medium-centered"},[(this.shouldShowAddressInput)?_c('address-input'):_vm._e(),_vm._v(" "),(this.addressAutocompleteEnabled && this.shouldShowAddressInput)?_c('address-candidate-list'):_vm._e(),_vm._v(" "),(!_vm.components && !_vm.hasError)?_c('div',{staticClass:"greeting",domProps:{"innerHTML":_vm._s(_vm.initialMessage)}}):_vm._e(),_vm._v(" "),(!_vm.components && _vm.hasError)?_c('div',{staticClass:"greeting greeting-error",domProps:{"innerHTML":_vm._s(_vm.errorMessage)}}):_vm._e(),_vm._v(" "),_vm._l((_vm.components),function(topicComp,topicCompIndex){return (_vm.components)?_c(topicComp.type,{key:'greeting',tag:"component",staticClass:"topic-comp",attrs:{"slots":topicComp.slots}}):_vm._e()})],2)])},staticRenderFns: [],_scopeId: 'data-v-2d681dc9',
    components: {
      Image_: Image_,
      AddressInput: AddressInput,
      AddressCandidateList: AddressCandidateList,
    },
    computed: {
      shouldShowAddressInput: function shouldShowAddressInput() {
        if (this.$config.addressInputLocation == 'topics') {
          return true;
        } else {
          return false;
        }
      },
      addressAutocompleteEnabled: function addressAutocompleteEnabled() {
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
      components: function components() {
        var greetingConfig = this.$config.greeting || {};
        return greetingConfig.components;
      },
      hasError: function hasError() {
        return this.$store.state.geocode.status === 'error';
      },
      initialMessage: function initialMessage() {
        var greetingConfig = this.$config.greeting || {};
        return greetingConfig.initialMessage;
      },
      errorMessage: function errorMessage() {
        var input = this.$store.state.geocode.input;
        return ("\n        <p>\n          We couldn't find\n          " + (input ? '<strong>' + input + '</strong>' : 'that address') + ".\n          Are you sure everything was spelled correctly?\n        </p>\n        <p>\n          Here are some examples of things you can search for:\n        </p>\n        <ul>\n          <li>1234 Market St</li>\n          <li>1001 Pine Street #201</li>\n          <li>12th & Market</li>\n        </ul>\n      ");
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
    data: function data() {
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
    created: function created() {
      this.initialize();
    },
    watch: {
      scale: function scale(nextScale) {
        this.createLegend(nextScale);
      },
      legend: function legend() {
        console.log('watch legend fired');
        this.createLegend(this.scale);
      }
    },
    computed: {
      scale: function scale() {
        var zoom = this.$store.state.map.zoom;
        var zoomPlus = zoom + 1;
        var scale = this.$props.scales[zoomPlus];
        return scale;
      },
    },
    methods: {
      initialize: function initialize() {
        var drawingInfo;
        if (this.$props.layerDefinition) {
          drawingInfo = this.$props.layerDefinition.drawingInfo;
        }
        var opts = {
          layerName: this.$props.layerName,
          layerId: this.$props.layerId,
          store: this.$store,
          drawingInfo: drawingInfo
        };
        console.log('LegendBox initialize is running:', this.$props.layer, opts);
        var legend = L.esri.legendControl(this.$props.layer, opts);
      },
      createLegend: function createLegend(scale) {
        var this$1 = this;

        var legend = this.$props.legend;
        console.log('METHOD createLegend running', scale, legend);
        var layersHtml = '';
        if (legend.layers.length === 1) {
          var layer = legend.layers[0];
          var legendsHtml = '';
          for (var i = 0, list = layer.legend; i < list.length; i += 1) {
            var layerLegend = list[i];

            var layerLegendJSON = JSON.parse(JSON.stringify(layerLegend));
            // console.log('layerLegendJSON', layerLegendJSON);
            if (!layerLegendJSON.label) {
              layerLegendJSON.label = '';
            }
            legendsHtml += L.Util.template(this$1.options.listRowTemplate, layerLegendJSON);
          }
          layersHtml += L.Util.template(this.options.layerTemplate, {
            layerName: layer.layerName,
            legends: legendsHtml
          });
        } else {
          for (var i$2 = 0, list$2 = legend.layers; i$2 < list$2.length; i$2 += 1) {
            // console.log('max:', layer.maxScale, 'scale:', scale, 'min:', layer.minScale);
            var layer$1 = list$2[i$2];

            var legendsHtml$1 = '';
            if (parseFloat(scale) > parseFloat(layer$1.maxScale) && parseFloat(scale) < parseFloat(layer$1.minScale)) {
              // console.log('correct!', layer.layerId);
              for (var i$1 = 0, list$1 = layer$1.legend; i$1 < list$1.length; i$1 += 1) {
                var layerLegend$1 = list$1[i$1];

                var layerLegendJSON$1 = JSON.parse(JSON.stringify(layerLegend$1));
                legendsHtml$1 += L.Util.template(this$1.options.listRowTemplate, layerLegendJSON$1);
              }
            }
            layersHtml += L.Util.template(this$1.options.layerTemplate, {
              layerName: layer$1.layerName,
              legends: legendsHtml$1
            });
          }
        }

        var legendHtml = L.Util.template(this.options.listTemplate, {
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
    data: function data() {
      return {
        opa: this.$props.opacity * 100
      }
    },
    watch: {
      opa: function opa(nextOpacity) {
        var payload = {
                          layerName: this.$props.layerName,
                          opa: nextOpacity/100
                        };
        // console.log('OPACITY CHANGED', payload);
        this.$store.commit('setWebMapLayersOpacity', payload);
      }
    },
    created: function created() {
      // this.initialize();
    },
    computed: {

    },
    methods: {

    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .sliderDiv[data-v-02d0375a] { height: 60px; } .flex[data-v-02d0375a] { margin-bottom: 16px; } .metadata-link[data-v-02d0375a] { display: inline-block; height: 10px; width: 10px; /*border: solid; border-width: 1px;*/ } .download-select[data-v-02d0375a] { width: 200px; } .div-row[data-v-02d0375a] { position: relative; margin-bottom: 12px; } /* input[type=\"checkbox\"] { width: 25px; height: 25px; position: absolute; top: 50%; margin-top: -10px; margin-left: 32px; cursor: pointer; } */ a[data-v-02d0375a] { position: absolute; /* top: 50%; */ /* margin-top: -10px; */ /*margin-left: 25px;*/ } input[type=checkbox]+label[for][data-v-02d0375a] { font-size: 16px; } input[type=checkbox]+label[data-v-02d0375a]::before { position: absolute; margin-top: -12px; font-size: 30px; padding-right: 5px; } .disabled[data-v-02d0375a] { color: #d3d3d3 !important; } input[type=checkbox]+label.disabled[data-v-02d0375a]::before { color: #d3d3d3; } .label-text[data-v-02d0375a] { /* position: absolute; */ display: inline-block; /* margin-top: 4px; */ margin-left: 0px; padding-left: 30px; } .layer-name[data-v-02d0375a] { font-weight: normal; vertical-align: middle; display: inline-block; margin-left: 30px; margin-bottom: 6px; } .tag-title[data-v-02d0375a] { padding-left: 30px; font-weight: normal; font-style: italic; font-size: 14px; color: red; } .tag-holder[data-v-02d0375a] { /* display: inline-block; */ padding-left: 30px; font-weight: normal; font-size: 14px; color: red; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Checkbox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"div-row"},[(_vm.bennyId)?_c('a',{attrs:{"href":'http://metadata.phila.gov/#home/representationdetails/' + this.bennyId,"target":"_blank"}},[_vm._m(0)]):_vm._e(),_vm._v(" "),_c('input',{class:{ disabled: _vm.shouldBeDisabled },attrs:{"id":'checkbox-'+_vm.layerName,"type":"checkbox","layerid":_vm.layerId},domProps:{"checked":_vm.webMapActiveLayers.includes(_vm.layerName)},on:{"click":_vm.checkboxToggle}}),_vm._v(" "),_c('label',{class:{ disabled: _vm.shouldBeDisabled, 'label-text': true },attrs:{"for":'checkbox-'+_vm.layerName}},[_c('div',{staticClass:"layer-name"},[_vm._v(_vm._s(_vm.layerName))]),_vm._v(" "),(_vm.matchingTags.length > 0)?_c('div',{staticClass:"tag-title"},[_vm._v(" Matching Tags: ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.matchingTags),function(matchingTag){return (_vm.matchingTags.length > 0)?_c('div',{staticClass:"tag-holder"},[_vm._v(" "+_vm._s(matchingTag)+" ")]):_vm._e()})],2)]),_vm._v(" "),(this.$store.state.map.webMapActiveLayers.includes(_vm.layerName))?_c('legend-box',{attrs:{"layer":_vm.layer,"layerName":_vm.layerName,"layerId":_vm.layerId,"layerDefinition":_vm.layerDefinition,"legend":_vm.legend,"scales":this.$config.map.scales}}):_vm._e(),_vm._v(" "),(this.$store.state.map.webMapActiveLayers.includes(_vm.layerName))?_c('slider',{attrs:{"layer":_vm.layer,"layerName":_vm.layerName,"layerId":_vm.layerId,"opacity":_vm.opacity}}):_vm._e()],1)},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('i',{staticClass:"fa fa-info-circle fa-2x"})])}],_scopeId: 'data-v-02d0375a',
    components: {
      LegendBox: LegendBox,
      Slider: Slider
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
    data: function data() {
      return {
        opa: this.$props.opacity * 100
      }
    },
    watch: {
      opa: function opa(nextOpacity) {
        var payload = {
                          layerName: this.$props.layerName,
                          opa: nextOpacity/100
                        };
        // console.log('OPACITY CHANGED', payload);
        this.$store.commit('setWebMapLayersOpacity', payload);
      },
      shouldBeDisabled: function shouldBeDisabled(nextShouldBeDisabled) {
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
    // mounted() {
    //   // REVIEW globals. also is this still needed?
    //   $(document).foundation();
    // },
    computed: {
      matchingTags: function matchingTags() {
        var this$1 = this;

        var matches = [];
        if (this.$props.tags !== null && this.inputTagsFilter !== '') {
          for (var i = 0, list = this$1.$props.tags; i < list.length; i += 1) {
            var tag = list[i];

            if (tag.toLowerCase().includes(this$1.inputTagsFilter.toLowerCase())) {
              matches.push(tag);
            }
          }
        }
        return matches;
      },
      inputTagsFilter: function inputTagsFilter() {
        return this.$store.state.layers.inputTagsFilter;
      },
      scale: function scale() {
        return this.$store.state.map.scale;
      },
      shouldBeDisabled: function shouldBeDisabled() {
        var def = this.$props.layerDefinition;
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
      layerUrls: function layerUrls() {
        return this.$store.state.layers.layerUrls;
      },
      bennyEndpoints: function bennyEndpoints() {
        return this.$store.state.bennyEndpoints;
      },
      url: function url() {
        return this.layerUrls[this.$props.layerName];
      },
      bennyId: function bennyId() {
        if (Object.keys(this.bennyEndpoints).length > 0) {
          var id = this.bennyEndpoints[this.url];
          // const id = this.bennyEndpoints[this.url]['Metadata'];
          return id;
        } else {
          return ' ';
        }
      },
      webMapUrlLayer: function webMapUrlLayer() {
        return this.$store.state.map.webMapUrlLayer;
      },
      webMapActiveLayers: function webMapActiveLayers() {
        return this.$store.state.map.webMapActiveLayers;
      },
      webMapDisplayedLayers: function webMapDisplayedLayers() {
        return this.$store.state.map.webMapDisplayedLayers;
      },
      webMapGeoJson: function webMapGeoJson() {
        return this.$store.state.map.webMapGeoJson;
      }
    },
    methods: {
      // findCurrentTags(inputTagsFilter) {
      //
      // },
      trim: function trim(s) {
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
      checkboxToggle: function checkboxToggle(e) {
        console.log('checkboxToggle', e.target, e.target.id, e.target.checked);
        var urlLayer = this.webMapUrlLayer;
        var activeLayers = this.webMapActiveLayers;
        var displayedLayers = this.webMapDisplayedLayers;
        // const splitArray = e.target.id.split('-').splice(0, 1);
        var targetReplace = e.target.id.replace('checkbox-', '');
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
          var activeIndex = activeLayers.indexOf(targetReplace);
          // const activeIndex = activeLayers.indexOf(e.target.id.split('-')[1]);
          if (activeIndex >= 0) {
            activeLayers.splice(activeIndex, 1);
          }
          var displayedIndex = displayedLayers.indexOf(targetReplace);
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
      removeFromWebMapDisplayedLayers: function removeFromWebMapDisplayedLayers() {
        var displayedLayers = this.webMapDisplayedLayers;
        var index = displayedLayers.indexOf(this.$props.layerName);
        // console.log('layer', this.$props.layerName, 'is active, but now should not be displayed, index:', index);
        if (index >= 0) {
          displayedLayers.splice(index, 1);
        }
        this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
      },
      addToWebMapDisplayedLayers: function addToWebMapDisplayedLayers() {
        // console.log('layer', this.$props.layerName, 'is active, and now should be displayed');
        var displayedLayers = this.webMapDisplayedLayers;
        displayedLayers.push(this.$props.layerName);
        this.$store.commit('setWebMapDisplayedLayers', displayedLayers);
      }
    }
  };

  exports.AddressCandidateList = AddressCandidateList;
  exports.AddressInput = AddressInput;
  exports.AnyHeader = AnyHeader;
  exports.Badge = Badge;
  exports.BadgeCustom = BadgeCustom;
  exports.ButtonComp = ButtonComp;
  exports.Callout = Callout;
  exports.CollectionSummary = CollectionSummary;
  exports.Division = Division;
  exports.FullScreenTopicsToggleTab = fullScreenTopicsToggleTab;
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

  exports.Checkbox = Checkbox;
  exports.LegendBox = LegendBox;
  exports.Slider = Slider;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=phila-vue-comps.js.map
