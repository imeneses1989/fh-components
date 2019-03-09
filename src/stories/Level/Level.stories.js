import React from 'react';
import { storiesOf } from '@storybook/react';
import { Level } from 'fht-components/Level/Level';
import { LevelType } from 'fht-components/Level/LevelType';

const stories = storiesOf('Level', module);

stories
  .add('With Left-Right', () => (
    <Level>
        <LevelType type="left">
            <LevelType type="item">
                <p className="subtitle is-5">
                    <strong>123</strong> posts
                </p>
            </LevelType>
        </LevelType>
        <LevelType type="right">
            <LevelType type="item" as="p"><strong>All</strong></LevelType>
            <LevelType type="item" as="p"><a href="/">Published</a></LevelType>
            <LevelType type="item" as="p"><a href="/">Drafts</a></LevelType>
            <LevelType type="item" as="p"><a href="/">Deleted</a></LevelType>
            <LevelType type="item" as="p"><a href="/" className="button is-success" >New</a></LevelType>
        </LevelType>
    </Level>
  ))
  .add('With items centered', () => (
    <Level>
        <LevelType type="item" centered>
            <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
            </div>
        </LevelType>
        <LevelType type="item" centered>
            <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
            </div>
        </LevelType>
        <LevelType type="item" centered>
            <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
            </div>
        </LevelType>
        <LevelType type="item" centered>
            <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
            </div>
        </LevelType>
    </Level>
  ));
  