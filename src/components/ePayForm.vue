<template>
  <!-- <form action="https://test-secure.phila.gov/PaymentCenter/Gateway1/InitiatePurchase.aspx" -->
  <form
    :action="actionAddress"
    method="post"
    target="_blank"
  >
    <input
      :value="xmlData"
      name="billStmt"
      type="hidden"
    >
    <input
      v-show="shouldShowButton"
      :value="this.$props.slots.text"
      :style="buttonStyle"
      type="submit"
      class="button external"
    >
  </form>
</template>

<script>
import TopicComponent from './TopicComponent.vue';
import generateBillingXml from '../util/generate-billing-xml';

const BALANCE_PARTS = [
  'principal',
  'interest',
  'penalty',
  'other',
];

export default {
  mixins: [ TopicComponent ],
  data() {
    const data = {
      parseData: {
        'accountNum': this.$store.state.sources.tips.data.data.accountNum,
        'totalDue': '',
        'balances': this.$store.state.sources.tips.data.data,
        'address': {
          'streetAddress':  this.$store.state.sources.tips.data.data.property.address,
          'zipCode': this.zipCode,
        },
      },
      xmlData: {},
      buttonStyle: 'height: ' + this.$props.options.height + 'px;\
         width: ' + this.$props.options.width + 'px;\
         font-size: ' + this.$props.options.fontSize + 'px;\
         ',
      actionAddress: this.$props.options.actionAddress || 'https://test-secure.phila.gov/PaymentCenter/Gateway1/InitiatePurchase.aspx',
    };
    return data;
  },
  computed: {
    // this was added to allow fetchData to run even without a geocode result
    // for the real estate tax site which sometimes needs data from TIPS
    // even if the property is not in OPA and AIS
    zipCode() {
      // console.log('ePayForm zipCode computed');
      if (this.$store.state.geocode.data) {
        return this.$store.state.geocode.data.properties.zip_code;
      }
      return '';

    },
    message() {
      let value;
      if (this.$props.slots) {
        value = this.evaluateSlot(this.$props.slots.text);
      }
      return value;
    },
    class() {
      let value;
      if (this.$props.options) {
        value = this.$props.options.class || '';
      }
      return value;
    },
    style() {
      let value;
      if (this.$props.options) {
        value = this.$props.options.style || '';
      }
      return value;
    },
    shouldShowButton() {
      if (this.parseData.totalDue > 0) {
        return true;
      }
      return false;

    },
  },
  created() {
    // console.log('ePayForm created is running, this.zipCode:', this.zipCode)
    this.parseData.totalDue = this.calculateTotalDue();
    this.$store.commit('setPropertyBalance', this.parseData.totalDue);
  },
  mounted() {
    // console.log('ePayForm mounted, this.zipCode:', this.zipCode);
    this.$data.parseData.address.zipCode = this.zipCode;
    this.xmlData = generateBillingXml(this.parseData);
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
</script>

<style scoped>

</style>
