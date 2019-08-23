<template>
  <div>

    <div v-if="!this.isList">
      <component v-for="(comp, compIndex) in topicComponents"
                 :is="comp.type"
                 class="topic-component"
                 :slots="comp.slots"
                 :options="comp.options"
                 :item="item"
                 :key="getCompKey(key, compIndex)"
      />
    </div>
    <div v-if="this.isList">
      <li v-for="(comp, compIndex) in topicComponents">
        <component :is="comp.type"
                   class="topic-component"
                   :slots="comp.slots"
                   :options="comp.options"
                   :item="item"
                   :key="getCompKey(key, compIndex)"
        />
      </li>
    </div>
  </div>
</template>

<script>
  import generateUniqueId from '../util/unique-id';

  import AnyHeader from './AnyHeader.vue';
  import Badge from './Badge.vue';
  import ButtonComp from './ButtonComp.vue';
  import Callout from './Callout.vue';
  import CollectionSummary from './CollectionSummary.vue';
  import Division from './Division.vue';
  import ePayForm from './ePayForm.vue';
  import ExternalLink from './ExternalLink.vue';
  import HorizontalTable from './HorizontalTable.vue';
  import Image_ from './Image.vue';
  import VerticalTable from './VerticalTable.vue';
  import OverlayToggleGroup from './OverlayToggleGroup.vue';
  import Paragraph from './Paragraph.vue';
  import SpanComp from './SpanComp.vue';
  import List from './List.vue';
  import TabGroup from './TabGroup.vue';
  import HorizontalTableGroup from './HorizontalTableGroup.vue';
  import BadgeCustom from './BadgeCustom.vue';
  import Topic from './Topic.vue';
  import TopicSet from './TopicSet.vue';
  import PopoverLink from './PopoverLink.vue';
  import Popover from './Popover.vue';

  export default {
    name: 'TopicComponentGroup',
    props: ['topicComponents', 'item', 'filterData', 'isList'],
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
      this.$options.components.HorizontalTable = HorizontalTable;
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
</script>

<style scoped>
  .topic-component {
    /* margin-bottom: 10px !important; */
  }
</style>
