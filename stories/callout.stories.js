/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Callout from '../src/components/Callout.vue';

storiesOf('Callout', module)
    .add('without styling', 
    () => ({
        components: { Callout },
        template: `<callout :slots="slotsValue" />`,
        data: () => ({
            slotsValue: {
                text: 'some text'
            }
        })
    }));
/* eslint-enable react/react-in-jsx-scope */
