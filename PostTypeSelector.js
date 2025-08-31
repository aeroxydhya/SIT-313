import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

export default function PostTypeSelector({ value, onChange }) {
  return (
    <Form>
      <Form.Group inline>
        <Form.Field>
          <Radio
            label="Question"
            name="postType"
            value="question"
            checked={value === 'question'}
            onChange={() => onChange('question')}
          />
        </Form.Field>

        <Form.Field>
          <Radio
            label="Article"
            name="postType"
            value="article"
            checked={value === 'article'}
            onChange={() => onChange('article')}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
}
