import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Button } from 'fht-components/Button/Button';

const stories = storiesOf('Button', module);

stories
  .add('with text', () => (
    <Button disabled={boolean('Disabled', false)}
            onClick={action('clicked')}>
            {text('value', 'Hello Storybook')}
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
  )); 