import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../../components/Card/Card';

import Recipes from './CardInfo';

// import image from '../../components/styles/images/paella.jpg';

const stories = storiesOf('Card', module);

const data = Recipes.find(r=>r.id === 1);

stories
  .add('Complex Interaction', () => (
    <Card 
        title={data.title}
        date={data.date}
        excerpt={data.excerpt}
        content={data.method}
        onMoreClicked={action('More Clicked')}
        onLikeClicked={action('Like Clicked')}
        onShareClicked={action('Share Clicked')}
        // image={image}
    />
  ));
  