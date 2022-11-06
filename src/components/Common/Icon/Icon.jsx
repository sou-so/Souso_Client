import styled from 'styled-components';

export const Icon = ({ Icon, size, color }) => {
  return (
    <IconBlock className="icon">
      <Icon style={{ width: size + 'px', fill: color }} />
    </IconBlock>
  );
};

const IconBlock = styled.div`
  svg {
    display: block;
  }
`;
