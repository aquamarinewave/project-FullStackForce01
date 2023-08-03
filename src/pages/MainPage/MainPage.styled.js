import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  color: var(--main-color);
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.37;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    text-align: left;
    width: 588px;
    font-size: 68px;
    font-weight: 700;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
    margin-left: calc((100% - 1246px) / 2);
    margin-top: 188px;
    width: 501px;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const ImgBlock = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    width: 917px;
    height: 200px;
  }
`;

export const Picture = styled.picture`
  position: absolute;
  left: 0;
  top: 120px;
  width: 100%;

  @media screen and (min-width: 768px) {
    top: 210px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    width: 917px;
    height: 851px;
    margin-top: 0px;
    left: 350px;
    top: -510px;
  }
`;

export const ImgPic = styled.img`
  width: 100%;
  height: auto;
`;
