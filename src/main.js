/*     .__    .__.__
______ |  |__ |__|  | _____            ___  ____ __   ____             ____  ____   _____ ______  ______
\____ \|  |  \|  |  | \__  \    ______ \  \/ /  |  \_/ __ \   ______ _/ ___\/  _ \ /     \\____ \/  ___/
|  |_> >   Y  \  |  |__/ __ \_ /_____/  \   /|  |  /\  ___/  /_____/ \  \__(  <_> )  Y Y  \  |_> >___ \
|   __/|___|  /__|____(____  /           \_/ |____/  \___  >          \___  >____/|__|_|  /   __/____  >
|__|        \/             \/                            \/               \/            \/|__|       \/
*/

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { faSearch } from '@fortawesome/pro-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/pro-solid-svg-icons/faTimes';
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons/faTimesCircle';
import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/pro-solid-svg-icons/faCaretRight';
library.add(faExternalLink, faSearch, faTimes, faTimesCircle, faCaretLeft, faCaretRight);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import AddressCandidateList from './components/AddressCandidateList.vue';
import AddressInput from './components/AddressInput.vue';
import ConfigurableInput from './components/ConfigurableInput.vue';
import AnyHeader from './components/AnyHeader.vue';
import Badge from './components/Badge.vue';
import BadgeCustom from './components/BadgeCustom.vue';
import ButtonComp from './components/ButtonComp.vue';
import Callout from './components/Callout.vue';
import CollectionSummary from './components/CollectionSummary.vue';
import Division from './components/Division.vue';
import ExternalLink from './components/ExternalLink.vue';
import EPayForm from './components/ePayForm.vue';
import fullScreenTopicsToggleTab from './components/FullScreenTopicsToggleTab.vue';
import FullScreenTopicsToggleTabVertical from './components/FullScreenTopicsToggleTabVertical.vue';
import Greeting from './components/Greeting.vue';
import HorizontalTable from './components/HorizontalTable.vue';
import HorizontalTableGroup from './components/HorizontalTableGroup.vue';
import HorizontalTableRow from './components/HorizontalTableRow.vue';
import Image from './components/Image.vue';
import List from './components/List.vue';
import OverlayToggleGroup from './components/OverlayToggleGroup.vue';
import Paragraph from './components/Paragraph.vue';
import SpanComp from './components/SpanComp.vue';
import TabGroup from './components/TabGroup.vue';
import VerticalTable from './components/VerticalTable.vue';
import Topic from './components/Topic.vue';
import TopicSet from './components/TopicSet.vue';
import TopicComponent from './components/TopicComponent.vue';
import TopicComponentGroup from './components/TopicComponentGroup.vue';
import Popover from './components/Popover.vue';
import PopoverLink from './components/PopoverLink.vue';

import Checkbox from './components/Checkbox.vue';
import LegendBox from './components/LegendBox.vue';
import Slider from './components/Slider.vue';

import pvcStore from './store.js';
console.log('pvcStore:', pvcStore);

// exports.AddressCandidateList = AddressCandidateList;
// exports.AddressInput = AddressInput;
// exports.ConfigurableInput = ConfigurableInput;
// exports.AnyHeader = AnyHeader;
// exports.Badge = Badge;
// exports.BadgeCustom = BadgeCustom;
// exports.ButtonComp = ButtonComp;
// exports.Callout = Callout;
// exports.CollectionSummary = CollectionSummary;
// exports.Division = Division;
// exports.ExternalLink = ExternalLink;
// exports.ePayForm = EPayForm;
// exports.FullScreenTopicsToggleTab = fullScreenTopicsToggleTab;
// exports.FullScreenTopicsToggleTabVertical =  FullScreenTopicsToggleTabVertical;
// exports.Greeting = Greeting;
// exports.HorizontalTable = HorizontalTable;
// exports.HorizontalTableGroup = HorizontalTableGroup;
// exports.HorizontalTableRow = HorizontalTableRow;
// exports.Image = Image;
// exports.List = List;
// exports.OverlayToggleGroup = OverlayToggleGroup;
// exports.Paragraph = Paragraph;
// exports.SpanComp = SpanComp;
// exports.TabGroup = TabGroup;
// exports.VerticalTable = VerticalTable;
// exports.Topic = Topic;
// exports.TopicSet = TopicSet;
// exports.TopicComponent = TopicComponent;
// exports.TopicComponentGroup = TopicComponentGroup;
// exports.Popover = Popover;
// exports.PopoverLink = PopoverLink;
//
// exports.Checkbox = Checkbox;
// exports.LegendBox = LegendBox;
// exports.Slider = Slider;
//
// exports.pvcStore = pvcStore;

// export default exports;
export {
  pvcStore,
  VerticalTable,
  HorizontalTable,
}
