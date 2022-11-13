import * as S from './styles';

export const ProfileImage = ({ size, url }) => {
  return (
    <S.ImageContainer size={size}>
      {url ? (
        <img src={url} alt="profile" className="profile" />
      ) : (
        <img
          src="https://user-images.githubusercontent.com/68415905/169463648-966ee0da-3dbd-4b4e-9eb5-104bd124e2b1.jpg"
          alt="profile"
          className="profile"
        />
      )}
    </S.ImageContainer>
  );
};
