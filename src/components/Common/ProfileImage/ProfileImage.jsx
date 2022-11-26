import defaultProfile from 'assets/images/default_profile.jpg';
import * as S from './styles';

export const ProfileImage = ({ size, url }) => {
  return (
    <S.ImageContainer size={size}>
      <img src={url || defaultProfile} alt="profile" className="profile" />
    </S.ImageContainer>
  );
};
