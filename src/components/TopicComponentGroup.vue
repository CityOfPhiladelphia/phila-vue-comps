<template>
  <div>
    <div v-if="!isList">
      <component
        :is="comp.type"
        v-for="(comp, compIndex) in topicComponentsComp"
        :key="getCompKey(key, compIndex)"
        :slots="comp.slots"
        :options="comp.options"
        :item="item"
        class="topic-component"
        @handle-topic-header-click="handleTopicHeaderClick"
        @get-more-records="getMoreRecords"
        @close-popover="closePopover"
      />
    </div>
    <div v-if="isList">
      <li
        v-for="(comp, compIndex) in topicComponentsComp"
        :key="compIndex"
      >
        <component
          :is="comp.type"
          :key="getCompKey(key, compIndex)"
          :slots="comp.slots"
          :options="comp.options"
          :item="item"
          class="topic-component"
          @handle-topic-header-click="handleTopicHeaderClick"
          @get-more-records="getMoreRecords"
          @close-popover="closePopover"
        />
      </li>
    </div>
  </div>
</template>

<script>
import generateUniqueId from '../util/unique-id';

import { defineAsyncComponent } from 'vue'

export default {
  name: 'TopicComponentGroup',
  components: {
    Anchor: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Anchor" */'./Anchor.vue')),
    Badge: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Badge" */'./Badge.vue')),
    BadgeSet: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Badge" */'./BadgeSet.vue')),
    ButtonComp: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_ButtonComp" */'./ButtonComp.vue')),
    Callout: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Callout" */'./Callout.vue')),
    CollectionSummary: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_CollectionSummary" */'./CollectionSummary.vue')),
    Division: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Division" */'./Division.vue')),
    ExternalLink: defineAsyncComponent(() => import(/* webpackChunkName: "pvc_ExternalLink" */'./ExternalLink.vue')),
    HorizontalTable: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_HorizontalTable" */'./HorizontalTable.vue')),
    InfoBox: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_InfoBox" */'./InfoBox.vue')),
    Image_: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Image" */'./Image.vue')),
    VerticalTable: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_VerticalTable" */'./VerticalTable.vue')),
    OverlayToggleGroup: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_OverlayToggleGroup" */'./OverlayToggleGroup.vue')),
    Paragraph: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Paragraph" */'./Paragraph.vue')),
    SpanComp: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_SpanComp" */'./SpanComp.vue')),
    List: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_List" */'./List.vue')),
    UnorderedList: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_UnorderedList" */'./UnorderedList.vue')),
    HorizontalTableGroup: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_HorizontalTableGroup" */'./HorizontalTableGroup.vue')),
    PopoverIcon: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_PopoverIcon" */'./PopoverIcon.vue')),
    PopoverLink: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_PopoverLink" */'./PopoverLink.vue')),
    Popover: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Popover" */'./Popover.vue')),
    TabGroup: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_TabGroup" */'./TabGroup.vue')),
    TabGroupBuildings: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_TabGroupBuildings" */'./TabGroupBuildings.vue')),
    BadgeCustom: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_BadgeCustom" */'./BadgeCustom.vue')),
    Topic: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Topic" */'./Topic.vue')),
    TopicSet: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_TopicSet" */'./TopicSet.vue')),
    AnyHeader: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_AnyHeader" */'./AnyHeader.vue')),
    CheckboxSet: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_CheckboxSet" */'./CheckboxSet.vue')),
    RadioButtonSet: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_RadioButtonSet" */'./RadioButtonSet.vue')),
    Checkbox: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Checkbox" */'./Checkbox.vue')),
    RadioButton: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_RadioButton" */'./RadioButton.vue')),
    LegendBox: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_LegendBox" */'./LegendBox.vue')),
    Slider: defineAsyncComponent(() => import(/* webpackChunkName: "tcg_pvc_Slider" */'./Slider.vue')),
  },
  props: [ 'topicComponents', 'item', 'filterData', 'isList' ],
  data() {
    return {
      // generate a (basically) unique id for the group. the go-to npm packages
      // for uuid generation aren't available as umd builds on unpkg and
      // therefore won't work with the examples. this is good enough :)
      key: generateUniqueId(),
    };
  },
  computed: {
    topicComponentsComp() {
      if (this.topicComponents) {
        let value = [];
        for (let comp of this.topicComponents) {
          // console.log('TopicComponentGroup.vue, topicComponentsComp computed, comp:', comp);
          let hide = false
          if (comp.options && comp.options.hide) {
            const items = comp.slots.items(this.$store.state);
            // console.log('hide topicComponentsComp computed, items:', items, 'comp.options.hide(items):', comp.options.hide(items));
            hide = comp.options.hide(items);
          }
          // console.log('topicComponentsComp, comp:', comp, 'hide:', hide);
          if (!hide) {
            value.push(comp);
          }
        }
        return value;
      }
    },
  },
  methods: {
    getCompKey(compGroupKey, compIndex) {
      return `topic-comp-${compGroupKey}-${compIndex}`;
    },
    handleTopicHeaderClick(nextTopic) {
      // console.log('TopicComponentGroup handleTopicHeaderClick is running');
      this.$emit('handle-topic-header-click', nextTopic);
    },
    getMoreRecords(dataSource, highestPageRetrieved) {
      // console.log('TopicComponentGroup getMoreRecords is running, dataSource:', dataSource, 'highestPageRetrieved:', highestPageRetrieved);
      this.$emit('get-more-records', dataSource, highestPageRetrieved);
    },
    closePopover() {
      console.log('TopicComponentGroup closePopover is running');
      this.$emit('close-popover');
    },
  },
};
</script>

<style scoped>
  .topic-component {
    /* margin-bottom: 10px !important; */
  }
</style>
