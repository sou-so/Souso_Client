import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { PageHeader } from 'components/Common';
import { FeedForm, CategoryModal } from 'components/FeedAdd';
import { feed } from 'api/queries/feed';
import * as S from './styles';

export const FeedAddPage = () => {
  const [modal, setModal] = useState(true);
  const [category, setCategory] = useState({ id: '', name: '' });

  const navigate = useNavigate();
  const toggleModal = () => setModal(prev => !prev);

  const { mutate } = useMutation(feed.add, {
    onSuccess: res => {
      toast.success('게시글 생성 성공 🎉');
      navigate(`/feed/${res.feed_id}`);
    },
    onError: error => {
      console.log(error.message);
      toast.error('게시글 생성에 실패했습니다. 다시 시도해주세요.');
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
