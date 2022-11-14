import styled from 'styled-components';

export const CategoryTag = ({ name }) => {
  return <Tag>{name}</Tag>;
};

const Tag = styled.span`
  height: 20px;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.font.xs};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => theme.style.border_main};
  border-radius: 15px;
  display: inline-block;
`;
