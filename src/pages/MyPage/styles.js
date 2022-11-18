import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyDataSection = styled.section`
  padding: 15px ${({ theme }) => theme.style.edge_padding} 0;
`;

export const MeetupSection = styled.section`
  margin: 40px 0 30px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.07);
  padding: 0 ${({ theme }) => theme.style.edge_padding};

  h2 {
    margin: 20px 5px 10px;
    font-size: ${({ theme }) => theme.font.md};
    font-weight: 600;
    letter-spacing: -0.8px;
  }
`;

export const EditButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 5px 12px;
  font-size: ${({ theme }) => theme.font.sm};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.black_2};
  background: #f1f1f1;
`;

export const LinkBoxWrap = styled.ul`
  display: flex;
`;
