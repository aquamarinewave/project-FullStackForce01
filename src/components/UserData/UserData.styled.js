import styled from 'styled-components';
import { Field } from 'formik';

export const WrapperCard = styled.div``;

export const ProfileTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.37;
  letter-spacing: 4%;
  color: var(--main-color);

  text-align: left;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: flex;
  color: var(--main-color);
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.72px;
  margin-left: 16px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.56px;
    margin: 0;
    margin-right: 8px;
  }
`;
export const ProfileField = styled(Field)`
  display: flex;
  width: 190px;
  padding: 4px 12px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid var(--dark-blue);
  margin-bottom: 10px;

  ::placeholder {
    color: var(--main-color);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 768px) {
    width: 255px;
  }
  @media screen and (min-width: 1280px) {
    width: 255px;
  }
`;

export const WrapperField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    margin-left: 71px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto;
  }
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 26px;
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 182px;
  height: 182px;
  background: transparent;
  border-radius: 40px;
  margin: 0 auto;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;
