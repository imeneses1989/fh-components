import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Icon } from 'fht-components/Icon/Icon';
import IconList from '../../util/IconList';

const stories = storiesOf('Icon', module);





stories
  .add('Example: outline-account-box-24px', () => (
    <Icon icon={text('icon', 'outline-account-box-24px')}
          onClick={action('clicked')}>
    </Icon>
  ))
  .add('All Icons', () => (
    <IconList />
  ))
