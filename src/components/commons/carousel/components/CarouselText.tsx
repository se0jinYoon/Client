import styled from 'styled-components';

import { StarCarouselIcon } from '../../../../assets/svgs';

interface CarouselTextProps {
  roomlocation: string;
  currentDistance: string;
  roomRating: number;
  recommendedDates: string;
  guestReview: string;
  roomPrice: number;
  type: string;
}

const CarouselText = (props: CarouselTextProps) => {
  const { roomlocation, currentDistance, roomRating, recommendedDates, guestReview, roomPrice, type } = props;
  return (
    <CarouselTextWrapper $type={type}>
      <TextTitleWrapper>
        <TextTitle>{roomlocation}</TextTitle>
        <TextRate>
          <StarCarouselIcon />
          {roomRating}
        </TextRate>
      </TextTitleWrapper>
      <TextContent>{currentDistance}</TextContent>
      <TextContentWrapper>
        <TextContent>예약 추천 </TextContent>
        <TextContentBold>{recommendedDates} </TextContentBold>
      </TextContentWrapper>
      <TextContentWrapper>
        <TextContent>게스트 리뷰 </TextContent>
        <TextContentBold>{guestReview} </TextContentBold>
      </TextContentWrapper>
      <TextPriceContent>₩{roomPrice.toLocaleString()} /박</TextPriceContent>
    </CarouselTextWrapper>
  );
};

export default CarouselText;

const CarouselTextWrapper = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $type }) => ($type === 'home' ? '23.7rem' : '26.2rem')};
`;

export const TextTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextTitle = styled.p`
  padding-top: 0.6rem;
  ${({ theme }) => theme.fonts.body02_heavy}
`;

export const TextRate = styled.p`
  padding: 0.6rem 0.2rem;
  ${({ theme }) => theme.fonts.body03_light}
`;

export const TextContentWrapper = styled.div`
  display: flex;
  padding-top: 0.2rem;
`;

export const TextContent = styled.p`
  ${({ theme }) => theme.fonts.body03_middle}
  color: ${({ theme }) => theme.colors.gray800};
`;

export const TextContentBold = styled.span`
  ${({ theme }) => theme.fonts.detail1_heavy}
  padding-left: 0.6rem;
`;

export const TextPriceContent = styled.p`
  padding-top: 0.3rem;
  ${({ theme }) => theme.fonts.body03_heavy}
`;
