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

  export default {
    name: 'TopicSet',
    components: {
      Topic,
    },
  };
</script>
