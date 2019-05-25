import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.'

storiesOf('Button', module)

  .add('with text', () => (
    <div>
      <Button>Button</Button>
    </div>
  ))

  .add('with some emoji', () => (
    <div>
      <Button>😀 😎 👍 💯</Button>
    </div>
  ))