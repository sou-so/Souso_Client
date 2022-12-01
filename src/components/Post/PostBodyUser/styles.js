import styled from 'styled-components';

export const BodyContainer = styled.div``;

export const PostUser = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: auto;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  .name {
    font-size: 15.5px;
    padding: 0 8px 0 11px;
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.color.black_2};
    &.town {
      position: relative;
      padding-left: 7px;
      margin-left: 7px;
      &:before {
        content: '';
        width: 1px;
        height: 10px;
        left: 0;
        top: 4px;
        background: #bcbcbc;
        position: absolute;
      }
    }
  }
`;

export const PostText = styled.div`
  font-size: 15px;
  padding: 12px 0;
`;
