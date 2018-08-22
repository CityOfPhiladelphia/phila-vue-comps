<template>
  <div>
    <topic v-for="topic in this.$config.topics"
           :topicKey="topic.key"
           :key="topic.key"
    />
  </div>
</template>

<script>
  import Topic from './Topic.vue';
  import TopicComponent from './TopicComponent.vue';

  export default {
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
</script>
