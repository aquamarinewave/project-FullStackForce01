import styled from 'styled-components';

const NewsItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ImgWrapper = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 252px;
  border-radius: 20px;
`;
const IconConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconSvg = styled.svg`
  fill: var(--lightblue);
  stroke: var(--dark-blue);
`;

const ContentContainer = styled.div`
  padding: 16px 12px 8px 12px;
`;

const Title = styled.h3`
  margin-bottom: 16px;

  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
`;
const Description = styled.p`
  margin-bottom: 36px;
`;
const BottomContainer = styled.div`
  position: absolute;
  bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateD = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  color: #888;
  font-size: 16px;
`;
const ReadMoreBtn = styled.a`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 100px;
  padding: 4px 8px;

  color: var(--dark-blue);
  text-align: center;

  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: var(--lightblue);
  }
`;

export {
  NewsItemWrapper,
  ImgWrapper,
  Img,
  IconSvg,
  IconConatiner,
  ContentContainer,
  Title,
  BottomContainer,
  Description,
  DateD,
  ReadMoreBtn,
};
