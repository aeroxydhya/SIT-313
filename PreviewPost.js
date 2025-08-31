import React from 'react';
import { Header, Segment, List, Label, Grid } from 'semantic-ui-react';

export default function PreviewPost({ data }) {
  if (!data) return null;

  if (data.type === 'question') {
    return (
      <Segment>
        <Header as="h2">{data.title}</Header>
        {data.details && <p style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>{data.details}</p>}

        {data.tags?.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <Header as="h4">Tags</Header>
            <List horizontal>
              {data.tags.map((t, idx) => (
                <List.Item key={idx}>
                  <Label>{t}</Label>
                </List.Item>
              ))}
            </List>
          </div>
        )}
      </Segment>
    );
  }

  // Article preview
  return (
    <Segment>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h2">{data.title}</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <div style={{ whiteSpace: 'pre-wrap' }}>{data.content}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
