import React from 'react';
import { Container, BlogWrap, BlogInfo } from './Blog.styled';

export const Blog = () => {
  return (
    <Container>
      <BlogWrap>
        <BlogInfo>Blog1</BlogInfo>
        <BlogInfo>Blog2</BlogInfo>
        <BlogInfo>Blog3</BlogInfo>
      </BlogWrap>
    </Container>
  );
};
