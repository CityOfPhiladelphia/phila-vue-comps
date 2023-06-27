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

export default {
  name: 'TopicComponentGroup',
  components: {
    Anchor: () => import(/* webpackChunkName: "tcg_pvc_Anchor" */'./Anchor.vue'),
    Badge: () => import(/* webpackChunkName: "tcg_pvc_Badge" */'./Badge.vue'),
    BadgeSet: () => import(/* webpackChunkName: "tcg_pvc_Badge" */'./BadgeSet.vue'),
    ButtonComp: () => import(/* webpackChunkName: "tcg_pvc_ButtonComp" */'./ButtonComp.vue'),
    Callout: () => import(/* webpackChunkName: "tcg_pvc_Callout" */'./Callout.vue'),
    CollectionSummary: () => import(/* webpackChunkName: "tcg_pvc_CollectionSummary" */'./CollectionSummary.vue'),
    Division: () => import(/* webpackChunkName: "tcg_pvc_Division" */'./Division.vue'),
    ExternalLink: () => import(/* webpackChunkName: "pvc_ExternalLink" */'./ExternalLink.vue'),
    HorizontalTable: () => import(/* webpackChunkName: "tcg_pvc_HorizontalTable" */'./HorizontalTable.vue'),
    InfoBox: () => import(/* webpackChunkName: "tcg_pvc_InfoBox" */'./InfoBox.vue'),
    Image_: () => import(/* webpackChunkName: "tcg_pvc_Image" */'./Image.vue'),
    VerticalTable: () => import(/* webpackChunkName: "tcg_pvc_VerticalTable" */'./VerticalTable.vue'),
    OverlayToggleGroup: () => import(/* webpackChunkName: "tcg_pvc_OverlayToggleGroup" */'./OverlayToggleGroup.vue'),
    Paragraph: () => import(/* webpackChunkName: "tcg_pvc_Paragraph" */'./Paragraph.vue'),
    SpanComp: () => import(/* webpackChunkName: "tcg_pvc_SpanComp" */'./SpanComp.vue'),
    List: () => import(/* webpackChunkName: "tcg_pvc_List" */'./List.vue'),
    HorizontalTableGroup: () => import(/* webpackChunkName: "tcg_pvc_HorizontalTableGroup" */'./HorizontalTableGroup.vue'),
    PopoverIcon: () => import(/* webpackChunkName: "tcg_pvc_PopoverIcon" */'./PopoverIcon.vue'),
    PopoverLink: () => import(/* webpackChunkName: "tcg_pvc_PopoverLink" */'./PopoverLink.vue'),
    Popover: () => import(/* webpackChunkName: "tcg_pvc_Popover" */'./Popover.vue'),
    TabGroup: () => import(/* webpackChunkName: "tcg_pvc_TabGroup" */'./TabGroup.vue'),
    TabGroupBuildings: () => import(/* webpackChunkName: "tcg_pvc_TabGroupBuildings" */'./TabGroupBuildings.vue'),
    BadgeCustom: () => import(/* webpackChunkName: "tcg_pvc_BadgeCustom" */'./BadgeCustom.vue'),
    Topic: () => import(/* webpackChunkName: "tcg_pvc_Topic" */'./Topic.vue'),
    TopicSet: () => import(/* webpackChunkName: "tcg_pvc_TopicSet" */'./TopicSet.vue'),
    AnyHeader: () => import(/* webpackChunkName: "tcg_pvc_AnyHeader" */'./AnyHeader.vue'),
    CheckboxSet: () => import(/* webpackChunkName: "tcg_pvc_CheckboxSet" */'./CheckboxSet.vue'),
    RadioButtonSet: () => import(/* webpackChunkName: "tcg_pvc_RadioButtonSet" */'./RadioButtonSet.vue'),
    Checkbox: () => import(/* webpackChunkName: "tcg_pvc_Checkbox" */'./Checkbox.vue'),
    RadioButton: () => import(/* webpackChunkName: "tcg_pvc_RadioButton" */'./RadioButton.vue'),
    LegendBox: () => import(/* webpackChunkName: "tcg_pvc_LegendBox" */'./LegendBox.vue'),
    Slider: () => import(/* webpackChunkName: "tcg_pvc_Slider" */'./Slider.vue'),
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
          let hide = false
          if (comp.options && comp.options.hide) {
            const items = comp.slots.items(this.$store.state);
            console.log('hide topicComponentsComp computed, items:', items, 'comp.options.hide(items):', comp.options.hide(items));
            hide = comp.options.hide(items);
          }
          console.log('topicComponentsComp, comp:', comp, 'hide:', hide);
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
