import styled from 'styled-components';

export const Icon = ({ Icon, size, color }) => {
  return (
    <IconBlock className="icon" color={color}>
      <Icon style={{ width: size + 'px', fill: color }} />
    </IconBlock>
  );
};

const IconBlock = styled.div`
  svg {
    display: block;
  }
  svg,
  path {
    fill: ${({ color }) => color};
  }
`;
