import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export const ScrollHorizon = ({ children, margin }) => {
  return (
    <ScrollContainer
      className="container"
      style={{ margin: margin ? '0 15px' : '' }}
    >
      {children}
    </ScrollContainer>
  );
};
