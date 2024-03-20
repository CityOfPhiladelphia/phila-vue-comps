<template>
  <div>
    <topic
      v-for="topic in this.$config.topics"
      :key="topic.key"
      :topic-key="topic.key"
      :options="options"
      @handle-topic-header-click="handleTopicHeaderClick"
      @get-more-records="getMoreRecords"
    />
  </div>
</template>

<script>
import Topic from './Topic.vue';
import TopicComponent from './TopicComponent.vue';

export default {
  name: 'TopicSet',
  components: {
    Topic,
  },
  mixins: [ TopicComponent ],
  mounted() {
    console.log('TopicSet mounted is running, this.$config.topics:', this.$config.topics);
  //   if (this.$store.state.activeTopic === null || this.$store.state.activeTopic === '') {
  //     this.setDefaultTopicActive();
  //   }
  },
  methods: {
    getMoreRecords(dataSource, highestPageRetrieved) {
      // console.log('TopicSet getMoreRecords is running, dataSource:', dataSource, 'highestPageRetrieved:', highestPageRetrieved);
      this.$emit('get-more-records', dataSource, highestPageRetrieved);
    },
    handleTopicHeaderClick(nextTopic) {
      // console.log('TopicSet.vue handleTopicHeaderClick is running, nextTopic:', nextTopic);
      this.$emit('handle-topic-header-click', nextTopic);
    },
    setDefaultTopicActive() {
      console.log('TopicSet setDefaultTopicActive is running');
      if (this.$props.options.defaultTopic) {
        this.$store.commit('setActiveTopic', this.$props.options.defaultTopic);
        // this.$store.state.activeTopic = this.$props.options.defaultTopic;
      }
    },
  },
};
</script>
