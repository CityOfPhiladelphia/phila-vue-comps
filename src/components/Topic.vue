<template>
  <div v-if="shouldShowTopic">
    <!-- <div> -->
    <a
      v-if="shouldShowHeader"
      :class="shouldBeDisabled ? 'topic-header-disabled' : 'topic-header'"
      :data-topic-key="topicKey"
      href="#"
      @click.prevent="handleTopicHeaderClick"
    >
      <div class="topic-header-content">
        <font-awesome-icon :icon="icon" />
        <div class="topic-header-label-holder">
          {{ topic.label }}
        </div>
      </div>

      <span
        v-show="status === 'waiting'"
        class="loading"
      >
        <font-awesome-icon
          icon="spinner"
          class="fa-lg spin"
        />
      </span>

      <span v-show="options.plusMinus && !shouldBeDisabled && !shouldShowBody">
        <font-awesome-icon icon="plus" />
      </span>

      <span v-show="options.plusMinus && !shouldBeDisabled && shouldShowBody">
        <font-awesome-icon icon="minus" />
      </span>

    </a>

    <!-- success -->
    <transition name="topic-body">
      <div
        v-if="shouldShowBody"
        :data-topic-key="topicKey"
        class="topic-body"
      >
        <topic-component-group
          :topic-components="topic.components"
          @get-more-records="getMoreRecords"
        />
      </div>
    </transition>

    <!-- error -->
    <div
      v-show="shouldShowError"
      class="topic-body"
      v-html="errorMessage"
    >
    </div>
  </div>
</template>

<script>

import TopicComponent from './TopicComponent.vue';
import TopicComponentGroup from './TopicComponentGroup.vue';

export default {
  name: 'Topic',
  components: {},
  mixins: [ TopicComponent ],
  props: [ 'topicKey' ],
  computed: {
    shouldBeDisabled() {
      if (this.topic.disabled) {
        return true;
      }
      return false;

    },
    // returns the full config object for the topic
    topic() {
      const topicKey = this.$props.topicKey || this.options.topicKey;
      const topicsFiltered = this.$config.topics.filter((topic) => {
        // return topic.key === this.$props.topicKey;
        return topic.key === topicKey;
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

          // this was added to allow fetchData to run even without a geocode result
          // for the real estate tax site which sometimes needs data from TIPS
          // even if the property is not in OPA and AIS
        } else if (this.$store.state.sources[dataSource].data) {
          if (this.$store.state.sources[dataSource].data.body) {
            if (this.$store.state.sources[dataSource].data.body.includes('Invalid account number')) {
              return false;
            }
            return true;

          }
          return true;


          // if the data source is not configured for targets, just check that
          // it has data
        }
        return !!this.$store.state.sources[dataSource].data;

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
      if (!this.topic.showTopicOnlyIfDataExists) {
        return true;
        // if showTopicOnlyIfDataExists, but you want to overrule that
      } else if (this.showTopicBasedOnOtherData) {
        return true;
        // if showTopicOnlyIfDataExists and it is not overrulled
      }
      return this.showTopicOnlyIfDataExists;

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
      // shouldShowError && console.log('BINGO BINGO BINGO:', this.topicKey, 'shouldShowError:', shouldShowError, 'status:', this.status, 'hasData:', this.hasData);
      return shouldShowError;
    },
    errorMessage() {
      if (this.topic.errorMessage) {
        return this.topic.errorMessage(this.$store.state);
      }
      return 'Could not locate records for that address.';

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
          // const targetsFn = this.$config.dataSources[dataSource].targets;
          const targetsFn = false;

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
              return target.status;
            });

            // if the data source is not configured for targets, just check that
            // it has data
          }
          console.log('dataSource:', dataSource, 'this.$store.state.sources:', this.$store.state.sources, 'this.$store.state.sources[dataSource]:', this.$store.state.sources[dataSource]);
          return [ this.$store.state.sources[dataSource].status ];

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
      },
    },
    showTopicBasedOnOtherData() {
      // stop if "showTopicBasedOnOtherData" doesn't exist
      if (!this.topic.showTopicBasedOnOtherData) {
        return false;
      }

      // stop if the required data for this topic does not exist
      const requiredData = this.topic.showTopicBasedOnOtherData.requiredData;
      let requiredDataExists = this.checkForData(requiredData);
      // console.log('requiredDataExists:', requiredDataExists);
      if (!requiredDataExists) {
        return false;
      }

      // continue if the other data does not match the conditions put into the "showTopicBasedOnOtherData" object
      const otherDataSources = Object.keys(this.topic.showTopicBasedOnOtherData.otherData);
      let answers = [];
      for (let otherDataSource of otherDataSources) {
        const dataSource = this.topic.showTopicBasedOnOtherData.otherData[otherDataSource];
        const dataSourceKeys = Object.keys(dataSource);
        for (let dataSourceKey of dataSourceKeys) {
          if (this.$store.state.sources[otherDataSource][dataSourceKey] === dataSource[dataSourceKey]) {
            answers.push(true);
          } else {
            answers.push(false);
          }
        }
      }
      if (!answers.includes(false)) {
        return true;
      }
      return false;

    },
    showTopicOnlyIfDataExists() {
      return this.checkForData(this.topic.showTopicOnlyIfDataExists);
    },
  },
  beforeCreate() {
    this.$options.components.TopicComponentGroup = TopicComponentGroup;
  },
  methods: {
    getMoreRecords(dataSource, highestPageRetrieved) {
      console.log('Topic.vue getMoreRecords is running, dataSource:', dataSource, 'highestPageRetrieved:', highestPageRetrieved);
      // this.$emit('test-event', dataSource, highestPageRetrieved);
      this.$emit('get-more-records', dataSource, highestPageRetrieved);
    },
    checkForData(requiredData) {
      const requiredDataSources = Object.keys(requiredData);
      // console.log('checkForData is running, requiredData:', requiredData, 'requiredDataSources:', requiredDataSources);
      let result = true;
      for (let requiredDataSource of requiredDataSources) {
        const pathToDataArray = requiredData[requiredDataSource].pathToDataArray;
        const minDataLength = requiredData[requiredDataSource].minDataLength;
        let dataArray;
        if (!this.$store.state.sources[requiredDataSource].data) {
          // if there is no data (yet)
          return false;
        }
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
      return result;
    },
    configForBasemap(key) {
      return this.$config.map.basemaps[key];
    },

    handleTopicHeaderClick(e) {
      // console.log('Topic.vue handleTopicHeaderClick is running');
      const topic = this.$props.topicKey;
      let nextTopic;

      if (topic !== this.$store.state.activeTopic) {
        nextTopic = topic;
      }
      // send event up
      this.$emit('handle-topic-header-click', nextTopic);
    },
  },
};
</script>

<style scoped>
  /*REVIEW these aren't prefixed `mb-`because they're scoped, but it feels
  inconsistent?*/
  .topic-header, .topic-header-disabled {
    background: #f5f5f5;
    border: 1px solid #ddd;
    display: block;
    font-size: 18px;
    font-weight: normal;
    min-height: 70px;
    line-height: 25px;
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .topic-header-disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: default;
  }

  .topic-header:hover {
    background: #fff;
    color: inherit;
  }

  .topic-header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .topic-header-icon {
    padding-left: 10px;
    padding-right: 10px;
  }

  .topic-header-label-holder {
    margin-left: 15px;
  }

  .topic-body {
    padding: 5px;
    margin-bottom: 10px;
  }

  .topic-body-enter-active, .topic-body-leave-active {
    transition: opacity 0.18s;
  }

  .topic-body-enter, .topic-body-leave-to {
    opacity: 0;
  }
</style>
