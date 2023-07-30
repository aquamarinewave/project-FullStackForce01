import styled from 'styled-components';
import { Field } from 'formik';

export const ProfileInfo = styled.div`
  position: relative;
  width: 100%;

  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 20px 8px 68px 8px;
  gap: 21px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background: var(--unnamed, #fff);
  margin-bottom: 57px;
`;

export const WrapperCard = styled.div`
  margin-right: 32px;
`;

export const ProfileTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.37;
  letter-spacing: 4%;
  color: var(--unnamed, #111);

  text-align: left;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: flex;
  color: var(--unnamed, #111);
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.72px;
  margin-right: 41px;
  margin-left: 16px;
`;
export const ProfileField = styled(Field)`
  display: flex;
  width: 255px;
  padding: 4px 12px;
  align-items: center;
  gap: 191px;
  border-radius: 20px;
  border: 1px solid var(--unnamed, #54adff);
  margin-bottom: 10px;
  margin-right: 24px;
  ::placeholder {
    color: var(--unnamed, #111);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;

export const WrapperField = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgAvatar = styled.img`
  margin: 0 auto;
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 63px;
`;
