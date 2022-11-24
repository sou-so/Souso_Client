import styled from 'styled-components';
import { button } from 'styles/Shared';

export const PageContainer = styled.div`
  position: relative;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  height: ${({ theme }) => theme.style.inner_height};
`;

export const SubmitButton = styled.button`
  ${button}
  margin: auto 0 20px;
`;
