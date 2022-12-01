import styled from 'styled-components';

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 40px;
  min-height: 172px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ddd;
  }
`;

export const MyTown = styled.span`
  display: flex;
  margin-bottom: 10px;
  margin-right: 3px;
  font-size: ${({ theme }) => theme.font.sm};
  .icon {
    margin-right: 2px;
  }
`;

export const Name = styled.p`
  margin: 10px 0 5px;
  font-size: ${({ theme }) => theme.font.lg};
  font-weight: 600;
`;

export const Age = styled.span`
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.color.black_3};
`;
