import React from 'react';
import { storiesOf } from '@storybook/react';
import { Media } from 'fht-components/Media/Media';
import { MediaType } from 'fht-components/Media/MediaType';
import { Icon } from 'fht-components/Icon/Icon';
import '../../styles/elements/content.scss';
import '../../styles/elements/image.scss';

const stories = storiesOf('Media', module);

stories
  .add('With Left-Right-content', () => (
    <Media>
        <MediaType type="left" as="figure">
            <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png"/>
            </p>
        </MediaType>
        <MediaType type="content">
            <p className="content">
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
        </MediaType>
        <MediaType type="right">
            <Icon icon="outline-clear-24px" />
        </MediaType>
    </Media>
  ));
  