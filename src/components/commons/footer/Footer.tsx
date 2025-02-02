import styled from 'styled-components';

import { FOOTER_COPYRIGHT, FOOTER_TAG } from '../../../assets/constants/footerTag';
import {
  BlogBlackIcon,
  CopyrightIcon,
  FacebookBlackIcon,
  InstaBalckIcon,
  InternetBlackIcon,
  NaverBlackIcon,
  XBlackIcon,
} from '../../../assets/svgs';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTagWrapper>
        {FOOTER_TAG.map((tagCategory, idx) => (
          <FooterTagContainer key={tagCategory[0].title + idx.toString()}>
            {tagCategory.map((category, idx) => (
              <FooterTag key={category + idx.toString()} $isBold={category.id === 0}>
                {category.content}
              </FooterTag>
            ))}
          </FooterTagContainer>
        ))}
      </FooterTagWrapper>
      <FooterInfoContainer>
        <SnsInfoContainer>
          <CopyrightContainer>
            <CopyrightIcon />
            {FOOTER_COPYRIGHT.map((item, idx) => (
              <CopyrightSpan key={item.content + idx.toString()}>{item.content}</CopyrightSpan>
            ))}
          </CopyrightContainer>
          <SnsContainer>
            <LangDiv>
              <InternetBlackIcon />
              <SnsSpan>한국어(KR)</SnsSpan>
            </LangDiv>
            <SnsSpan>₩ KRW</SnsSpan>
            <SnsIconWrapper>
              <FacebookBlackIcon />
              <XBlackIcon />
              <InstaBalckIcon />
              <BlogBlackIcon />
              <NaverBlackIcon />
            </SnsIconWrapper>
          </SnsContainer>
        </SnsInfoContainer>
        <LawContainer>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland |
          이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 |
          연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는
          통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
          에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </LawContainer>
      </FooterInfoContainer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 1366px;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

const FooterTagWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 25.6rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const FooterTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
  width: 27.4rem;
`;

const FooterTag = styled.span<{ $isBold: boolean }>`
  color: ${({ theme }) => theme.colors.black};
  ${({ $isBold, theme }) => ($isBold ? theme.fonts.body03_heavy : theme.fonts.body03_light)};
  cursor: pointer;
`;

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0 25.6rem 2.2rem 25.6rem;
`;

const CopyrightContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

const CopyrightSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_light};
`;

const SnsInfoContainer = styled.div`
  display: flex;
  gap: 11rem;
  align-items: center;
  justify-content: space-between;
  width: 85.4rem;
  padding: 1.2rem 0 0.4rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const SnsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0;
`;

const LangDiv = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

const SnsSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_heavy};
`;

const SnsIconWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const LawContainer = styled.div`
  width: 85.4rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.detail3};
  white-space: pre-wrap;
`;
