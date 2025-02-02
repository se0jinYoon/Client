import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeftBlackICon } from '../../../../assets/svgs/index.tsx';
import { PostContent } from '../../constatnts/postReservationText.ts';

const PostReservationHeaders = () => {
  const navigate = useNavigate();

  const onClickBefore = () => {
    navigate(-1);
  };

  return (
    <>
      <PostHeader>
        <IconWrapper onClick={onClickBefore}>
          <ArrowLeftBlackICon />
        </IconWrapper>
        <PostTxt>{PostContent.title}</PostTxt>
      </PostHeader>
    </>
  );
};

export default PostReservationHeaders;

const PostHeader = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  height: 2.4rem;
  padding: 4.4rem 0 4rem 0;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const PostTxt = styled.p`
  height: 2.4rem;
  padding-left: 0.9rem;
  ${({ theme }) => theme.fonts.heading01};
`;
