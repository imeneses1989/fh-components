import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/stories', true, /\.stories\.(jsx|js)$/);

function loadStories() {
    addDecorator(withKnobs);
    req.keys().forEach(fileStory => {
        req(fileStory)
    });
}

configure(loadStories, module);