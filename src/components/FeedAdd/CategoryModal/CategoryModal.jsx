import React from 'react';
import { Category } from 'components/Common';
import { SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const CategoryModal = ({ toggleModal, category, setCategory }) => {
  const handleSelect = e => {
    const curretId = e.target.parentElement.id;
    const currentName = e.target.innerText;

    if (currentName !== category) {
      setCategory({ id: curretId, name: currentName });
    }

    toggleModal();
  };

  return (
    <S.SelectingView onClick={toggleModal}>
      <SelectedCategory toggleModal={toggleModal} category={category} />
      <S.CategoryList onClick={e => e.stopPropagation()}>
        <Category onClick={handleSelect} />
      </S.CategoryList>
    </S.SelectingView>
  );
};
