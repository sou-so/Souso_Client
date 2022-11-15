import React from 'react';
import styled from 'styled-components';

export const TextClamp = ({ children, line }) => {
  return <Clamper line={line}>{children}</Clamper>;
};

export const Clamper = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${({ line }) => line};
  overflow: hidden;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0 2px;
`;
