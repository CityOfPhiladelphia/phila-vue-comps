<template>
  <div>
    <component v-for="(comp, compIndex) in topicComponents"
               :is="comp.type"
               class="topic-component"
               :slots="comp.slots"
               :options="comp.options"
               :item="item"
               :key="getCompKey(key, compIndex)"
    />
  </div>
</template>

<script>
  import generateUniqueId from '../util/unique-id';

  // import AnyHeader from './AnyHeader.vue';
  // import Badge from './Badge.vue';
  // import ButtonComp from './ButtonComp.vue';
  // import Callout from './Callout.vue';
  // import CollectionSummary from './CollectionSummary.vue';
  // import Division from './Division.vue';
  // import ePayForm from './ePayForm.vue';
  // import ExternalLink from './ExternalLink.vue';
  // import HorizontalTable from './HorizontalTable.vue';
  // import Image_ from './Image.vue';
  // import VerticalTable from './VerticalTable.vue';
  // import OverlayToggleGroup from './OverlayToggleGroup.vue';
  // import Paragraph from './Paragraph.vue';
  // import SpanComp from './SpanComp.vue';
  // import List from './List.vue';
  // import TabGroup from './TabGroup.vue';
  // import HorizontalTableGroup from './HorizontalTableGroup.vue';
  // import BadgeCustom from './BadgeCustom.vue';
  // import Topic from './Topic.vue';
  // import TopicSet from './TopicSet.vue';
  // import PopoverLink from './PopoverLink.vue';
  // import Popover from './Popover.vue';
  // console.log('in TopicComponentGroup.vue script, BadgeCustom:', BadgeCustom, 'Badge:', Badge, 'TabGroup:', TabGroup, 'Callout:', Callout, 'CollectionSummary:', CollectionSummary, 'HorizontalTable:', HorizontalTable);

  export default {
    name: 'TopicComponentGroup',
    props: ['topicComponents', 'item', 'filterData'],
    components: {
      Badge: () => import(/* webpackChunkName: "badge" */'./Badge.vue'),
      ButtonComp: () => import(/* webpackChunkName: "buttonComp" */'./ButtonComp.vue'),
      Callout: () => import(/* webpackChunkName: "callout" */'./Callout.vue'),
      CollectionSummary: () => import(/* webpackChunkName: "collectionSummary" */'./CollectionSummary.vue'),
      Division: () => import(/* webpackChunkName: "division" */'./Division.vue'),
      ePayForm: () => import(/* webpackChunkName: "ePayForm" */'./ePayForm.vue'),
      ExternalLink: () => import(/* webpackChunkName: "externalLink" */'./externalLink.vue'),
      HorizontalTable: () => import(/* webpackChunkName: "horizontalTable" */'./HorizontalTable.vue'),
      Image_: () => import(/* webpackChunkName: "image" */'./Image.vue'),
      VerticalTable: () => import(/* webpackChunkName: "verticalTable" */'./VerticalTable.vue'),
      OverlayToggleGroup: () => import(/* webpackChunkName: "overlayToggleGroup" */'./OverlayToggleGroup.vue'),
      Paragraph: () => import(/* webpackChunkName: "paragraph" */'./Paragraph.vue'),
      SpanComp: () => import(/* webpackChunkName: "spanComp" */'./SpanComp.vue'),
      List: () => import(/* webpackChunkName: "list" */'./List.vue'),
      HorizontalTableGroup: () => import(/* webpackChunkName: "horizontalTableGroup" */'./HorizontalTableGroup.vue'),
      PopoverLink: () => import(/* webpackChunkName: "popoverLink" */'./PopoverLink.vue'),
      Popover: () => import(/* webpackChunkName: "popover" */'./Popover.vue'),
      TabGroup: () => import(/* webpackChunkName: "tabGroup" */'./TabGroup.vue'),
      BadgeCustom: () => import(/* webpackChunkName: "badgeCustom" */'./BadgeCustom.vue'),
      Topic: () => import(/* webpackChunkName: "topic" */'./Topic.vue'),
      TopicSet: () => import(/* webpackChunkName: "topicSet" */'./TopicSet.vue'),
      AnyHeader: () => import(/* webpackChunkName: "anyHeader" */'./AnyHeader.vue'),
    },
    beforeCreate() {
      // console.log('TopicComponentGroup beforeCreate is running');
      // this.$options.components.TabGroup = TabGroup;
      // this.$options.components.BadgeCustom = BadgeCustom;
      // this.$options.components.Topic = Topic;
      // this.$options.components.TopicSet = TopicSet;
      // this.$options.components.AnyHeader = AnyHeader;
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
