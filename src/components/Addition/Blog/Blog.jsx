import React from 'react';
import { Container, BlogWrap, BlogInfo } from './Blog.styled';
import { Health } from 'components/HomeComp/Health/Health';
import { Care } from 'components/HomeComp/Care/Care';

export const Blog = () => {
  return (
    <Container>
      {/* <BlogWrap> */}
      {/* <BlogInfo>Blog1</BlogInfo>
        <BlogInfo>Blog2</BlogInfo>
        <BlogInfo>Blog3</BlogInfo> */}
      {/* </BlogWrap> */}
      <Health />
      <Care />
    </Container>
  );
};
