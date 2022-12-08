import React from 'react';
import styled from 'styled-components';

export const Skeleton = ({ type, height, width, size, line }) => {
  return [...Array(line)].map((_, i) => (
    <SkeletonItem
      key={i}
      className={type}
      height={height}
      width={width}
      size={size}
    >
      <HighLight />
    </SkeletonItem>
  ));
};

const SkeletonItem = styled.div`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : 'auto')};
  background: #eee;
  margin-bottom: 7px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &.title {
    height: 20px;
  }

  &.text {
    height: 10px;
  }

  &.circle {
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    border-radius: 50%;
  }
`;

const HighLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 1s infinite;

  &::before {
    content: '';
    width: 50%;
    height: 100%;
    background-color: #f3f3f3;
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
    position: absolute;
  }

  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;
