import React, { useState } from 'react';
import { Container, Header, Segment, Divider, Message } from 'semantic-ui-react';
import PostTypeSelector from '../components/PostTypeSelector';
import QuestionForm from '../components/QuestionForm';
import ArticleForm from '../components/ArticleForm';
import PreviewPost from '../components/PreviewPost';

export default function PostPage() {
  const [postType, setPostType] = useState('question');
  const [postData, setPostData] = useState(null);

  const handleSubmit = (data) => {
    setPostData({ type: postType, ...data });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container style={{ margin: '2rem 0' }}>
      <Header as="h1" content="New Post" subheader="Create a question or an article" />

      <Segment>
        <Header as="h4">Post Type</Header>
        <PostTypeSelector value={postType} onChange={setPostType} />
      </Segment>

      <Segment>
        {postType === 'question'
          ? <QuestionForm onSubmit={handleSubmit} />
          : <ArticleForm onSubmit={handleSubmit} />}
      </Segment>

      <Divider hidden />

      <Segment>
        {postData ? (
          <>
            <Header as="h3">Preview</Header>
            <Message info content="This is a preview only. Saving to database will be implemented in future tasks." />
            <PreviewPost data={postData} />
          </>
        ) : (
          <Header as="h4" content="Nothing to preview yet" subheader="Fill the form and click Post to see a live preview here." />
        )}
      </Segment>
    </Container>
  );
}
