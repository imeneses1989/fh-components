import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from 'fht-components/Container/Container';
import { Columns } from 'fht-components/Columns/Columns';
import { Column } from 'fht-components/Column/Column';

const stories = storiesOf('Grid', module);

stories
  .add('With Columns', () => (
    <Container>
        <Columns>
            <Column>This is...</Column>
            <Column>just a normal...</Column>
            <Column>container...</Column>
            <Column>with columns and column.</Column>
            <Column>For more options look at columns.scss</Column>
        </Columns>
    </Container>
  ))
  .add('Container is-fluid', () => (
    <Container className="is-fluid">
        <Columns>
        <Column>This is...</Column>
            <Column>a full width...</Column>
            <Column>container...</Column>
            <Column>with columns and column.</Column>
            <Column>For more options look at columns.scss</Column>
        </Columns>
    </Container>
  ))
  .add('Is centered', () => (
    <Container className="is-fluid">
        <Columns className="is-centered">
            <Column>This is...</Column>
            <Column>a flex centered...</Column>
            <Column>container...</Column>
            <Column>with columns and column.</Column>
            <Column>For more options look at columns.scss</Column>
        </Columns>
    </Container>
  ))
  .add('Is V-centered', () => (
    <Container>
        <Columns className="is-vcentered">
            <Column>This is...</Column>
            <Column>vertical centered...</Column>
            <Column>container...</Column>
            <Column>with columns and column.</Column>
            <Column>For more options look at columns.scss</Column>
        </Columns>
    </Container>
  ))
  .add('Is multiline', () => (
    <Container>
        <Columns className="is-multiline">
            <Column>This is...</Column>
            <Column>multiline...</Column>
            <Column>container...</Column>
            <Column>with columns and column.</Column>
            <Column>For more options look at columns.scss</Column>
        </Columns>
    </Container>
  ))
  .add('Is-gapless', () => (
    <Container>
        <Columns className="is-gapless">
            <Column>This is...</Column>
            <Column>marginledd and paddingless</Column>
            <Column>container...</Column>
            <Column>with columns and column.</Column>
            <Column>For more options look at columns.scss</Column>
        </Columns>
    </Container>
  ));
  