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

  export default {
    name: 'TopicComponentGroup',
    props: ['topicComponents', 'item', 'filterData'],
    components: {
      Badge: () => import(/* webpackChunkName: "tcg_pvc_Badge" */'./Badge.vue'),
      ButtonComp: () => import(/* webpackChunkName: "tcg_pvc_ButtonComp" */'./ButtonComp.vue'),
      Callout: () => import(/* webpackChunkName: "tcg_pvc_Callout" */'./Callout.vue'),
      CollectionSummary: () => import(/* webpackChunkName: "tcg_pvc_CollectionSummary" */'./CollectionSummary.vue'),
      Division: () => import(/* webpackChunkName: "tcg_pvc_Division" */'./Division.vue'),
      ePayForm: () => import(/* webpackChunkName: "tcg_pvc_ePayForm" */'./ePayForm.vue'),
      ExternalLink: () => import(/* webpackChunkName: "tcg_pvc_ExternalLink" */'./externalLink.vue'),
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
