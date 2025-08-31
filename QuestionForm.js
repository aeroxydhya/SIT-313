import React, { useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

export default function QuestionForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [tags, setTags] = useState('');

  const handlePost = () => {
    if (!title.trim()) return alert('Please enter a title for your question.');
    onSubmit({
      title: title.trim(),
      details: details.trim(),
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 3), // limit to 3 tags
    });
  };

  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <Input
          placeholder="Start your question with how, what, why, etc."
          value={title}
          onChange={(e, { value }) => setTitle(value)}
        />
      </Form.Field>

      <Form.Field
        control={TextArea}
        label="Describe your problem"
        placeholder="Write a clear and detailed description of your problem..."
        value={details}
        onChange={(e, { value }) => setDetails(value)}
        rows={8}
      />

      <Form.Field>
        <label>Tags</label>
        <Input
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          value={tags}
          onChange={(e, { value }) => setTags(value)}
        />
      </Form.Field>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button primary onClick={handlePost}>
          Post
        </Button>
      </div>
    </Form>
  );
}
