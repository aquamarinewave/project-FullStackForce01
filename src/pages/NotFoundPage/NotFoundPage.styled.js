import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageHeader = styled.h2`
  padding-top: 80px;
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ImageError = styled.picture`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 18px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkBtn = styled(Link)`
  width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px 28px;
  background-color: var(--dark-blue);
  color: var(--main-light-color);
  border-radius: 40px;

  &:hover {
    background: var(--gradient-blue-bg);
  }
`;

export const BtnText = styled.span`
  margin-right: 12px;
`;

export const IconPawPrint = styled.svg`
  fill: var(--main-light-color);
`;
