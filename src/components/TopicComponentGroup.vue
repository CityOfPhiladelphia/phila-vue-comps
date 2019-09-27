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
                 @handle-topic-header-click="handleTopicHeaderClick"
                 @get-more-records="getMoreRecords"
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
                   @handle-topic-header-click="handleTopicHeaderClick"
                   @get-more-records="getMoreRecords"
        />
      </li>
    </div>
  </div>
</template>

<script>
  import generateUniqueId from '../util/unique-id';

  export default {
    name: 'TopicComponentGroup',
    props: ['topicComponents', 'item', 'filterData', 'isList'],
    components: {
      Anchor: () => import(/* webpackChunkName: "tcg_pvc_Anchor" */'./Anchor.vue'),
      Badge: () => import(/* webpackChunkName: "tcg_pvc_Badge" */'./Badge.vue'),
      ButtonComp: () => import(/* webpackChunkName: "tcg_pvc_ButtonComp" */'./ButtonComp.vue'),
      Callout: () => import(/* webpackChunkName: "tcg_pvc_Callout" */'./Callout.vue'),
      CollectionSummary: () => import(/* webpackChunkName: "tcg_pvc_CollectionSummary" */'./CollectionSummary.vue'),
      Division: () => import(/* webpackChunkName: "tcg_pvc_Division" */'./Division.vue'),
      ePayForm: () => import(/* webpackChunkName: "tcg_pvc_ePayForm" */'./ePayForm.vue'),
      ExternalLink: () => import(/* webpackChunkName: "pvc_ExternalLink" */'./ExternalLink.vue'),
      HorizontalTable: () => import(/* webpackChunkName: "tcg_pvc_HorizontalTable" */'./HorizontalTable.vue'),
      Image_: () => import(/* webpackChunkName: "tcg_pvc_Image" */'./Image.vue'),
      VerticalTable: () => import(/* webpackChunkName: "tcg_pvc_VerticalTable" */'./VerticalTable.vue'),
      OverlayToggleGroup: () => import(/* webpackChunkName: "tcg_pvc_OverlayToggleGroup" */'./OverlayToggleGroup.vue'),
      Paragraph: () => import(/* webpackChunkName: "tcg_pvc_Paragraph" */'./Paragraph.vue'),
      SpanComp: () => import(/* webpackChunkName: "tcg_pvc_SpanComp" */'./SpanComp.vue'),
      List: () => import(/* webpackChunkName: "tcg_pvc_List" */'./List.vue'),
      HorizontalTableGroup: () => import(/* webpackChunkName: "tcg_pvc_HorizontalTableGroup" */'./HorizontalTableGroup.vue'),
      PopoverLink: () => import(/* webpackChunkName: "tcg_pvc_PopoverLink" */'./PopoverLink.vue'),
      Popover: () => import(/* webpackChunkName: "tcg_pvc_Popover" */'./Popover.vue'),
      TabGroup: () => import(/* webpackChunkName: "tcg_pvc_TabGroup" */'./TabGroup.vue'),
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
      },
      handleTopicHeaderClick(nextTopic) {
        // console.log('TopicComponentGroup handleTopicHeaderClick is running');
        this.$emit('handle-topic-header-click', nextTopic);
      },
      getMoreRecords(dataSource, highestPageRetrieved) {
        // console.log('TopicComponentGroup getMoreRecords is running, dataSource:', dataSource, 'highestPageRetrieved:', highestPageRetrieved);
        this.$emit('get-more-records', dataSource, highestPageRetrieved);
      }
    }
  };
</script>

<style scoped>
  .topic-component {
    /* margin-bottom: 10px !important; */
  }
</style>
