import React, { useEffect } from 'react';
import { Container, BlogWrap, BlogInfo } from './Blog.styled';

export const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
