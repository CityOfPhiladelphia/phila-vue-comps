<template>
  <!-- <form action="https://test-secure.phila.gov/PaymentCenter/Gateway1/InitiatePurchase.aspx" -->
  <form :action="actionAddress"
        method="post"
        target="_blank"
  >
  <input name="billStmt"
         type="hidden"
         :value="xmlData"
  >
  <input type="submit"
         class="button external"
         :value="this.$props.slots.text"
         v-show="this.shouldShowButton"
         :style="buttonStyle"
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
      }
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
</script>

<style scoped>

</style>
