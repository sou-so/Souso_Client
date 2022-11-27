import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { PageHeader } from 'components/Common';
import { FeedForm, CategoryModal } from 'components/FeedAdd';
import { feed } from 'api/queries/feed';
import * as S from './styles';

export const FeedAddPage = () => {
  // const [toggleSelect, setToggleSelect] = useState(true);
  const [modal, setModal] = useState(true);
  const [category, setCategory] = useState({ id: '', name: '' });

  const toggleModal = () => setModal(prev => !prev);

  const { mutate } = useMutation(feed.add, {
    onSuccess: res => {
      console.log(res);
      alert('게시글 생성 성공 🎉');
    },
    onError: error => {
      console.log(error.message);
      alert('게시글 생성에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />

      {modal && (
        <CategoryModal
          toggleModal={toggleModal}
          category={category}
          setCategory={setCategory}
        />
      )}

      <FeedForm mutate={mutate} category={category} toggleModal={toggleModal} />
    </S.PageContainer>
  );
};
