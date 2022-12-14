import { Icon } from 'components/Common';
import { ReactComponent as BackIcon } from 'assets/icons/arrow_l.svg';
import * as S from './styles';

export const PageHeader = ({ title, backTo }) => {
  return (
    <S.PageHeaderContainer>
      {backTo && (
        <S.BackIcon to={backTo}>
          <Icon Icon={BackIcon} size={19} />
        </S.BackIcon>
      )}
      <S.PageTitle>{title}</S.PageTitle>
    </S.PageHeaderContainer>
  );
};
