import React from 'react';
import styled from 'styled-components';

export const TextClamp = ({ children, width, line }) => {
  return (
    <Clamper className={line ? 'multi' : 'single'} line={line} width={width}>
      {children}
    </Clamper>
  );
};

export const Clamper = styled.p`
  &.single {
    display: inline-block;
    max-width: ${({ width }) => (width ? width + 'px' : '100%')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  &.multi {
    display: -webkit-box;
    -webkit-line-clamp: ${({ line }) => line};
    overflow: hidden;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
