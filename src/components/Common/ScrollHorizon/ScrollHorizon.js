import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export const ScrollHorizon = ({ children }) => {
  return <ScrollContainer className="container">{children}</ScrollContainer>;
};
