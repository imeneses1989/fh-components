import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

import { Icon } from 'fht-components/Icon/Icon';

const stories = storiesOf('ButtonIcon', module);

stories
  .add('with icon like', () => (
    <div>
      <ButtonIcon
          disabled={boolean('Disabled', false)}
          onClick={action('clicked')}>
          <Icon icon={text('icon', 'outline-favorite-24px')} />
      </ButtonIcon>
    </div>
  )).add('with icon share', () => (
    <ButtonIcon
        disabled={boolean('Disabled', false)}
        onClick={action('clicked')}>
        <Icon icon={text('icon', 'outline-share-24px')} />
    </ButtonIcon>
  ))