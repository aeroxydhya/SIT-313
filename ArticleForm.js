import React, { useState } from 'react';
import { Form, Input, TextArea, Button} from 'semantic-ui-react';

export default function ArticleForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handlePost = () => {
    if (!title.trim()) return alert('Please enter a title.');
    if (!abstract.trim()) return alert('Please enter an abstract.');
    if (!content.trim()) return alert('Please write the article text.');
    onSubmit({
      title: title.trim(),
      abstract: abstract.trim(),
      content: content.trim(),
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 3),
    });
  };

  return (
    <Form>
      {/* Section Header with explanatory note */}
     
      <Form.Field>
        <label>Title</label>
        <Input
          placeholder="Enter a descriptive title"
          value={title}
          onChange={(e, { value }) => setTitle(value)}
        />
      </Form.Field>

      <Form.Field>
        <label>Abstract</label>
        <Input
          placeholder="Enter a 1-paragraph abstract"
          value={abstract}
          onChange={(e, { value }) => setAbstract(value)}
        />
      </Form.Field>

      <Form.Field>
        <label>Article Text</label>
        <TextArea
          placeholder="Enter the full article text"
          value={content}
          onChange={(e, { value }) => setContent(value)}
          rows={8}
        />
      </Form.Field>

      <Form.Field>
        <label>Tags</label>
        <Input
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          value={tags}
          onChange={(e, { value }) => setTags(value)}
        />
      </Form.Field>

      <Button primary onClick={handlePost} style={{ marginTop: '1rem' }}>
        Post
      </Button>
    </Form>
  );
}
