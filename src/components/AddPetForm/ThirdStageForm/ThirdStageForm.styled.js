import styled from 'styled-components';
import { Field } from 'formik';

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 207px;
  margin-bottom: 24px;
`;
export const ParagraphPetAvatar = styled.p`
  max-width: 81px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #111;
`;
export const BoxPetAvatar = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  overflow: hidden;
`;
export const ShowPlaceholderAvatar = styled.div`
  background-color: var(--lightblue);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TextSpan = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #111;
`;
export const InputFieldTextArea = styled(Field)`
  margin-top: 4px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  height: 92px;
  padding: 8px 16px;
  border: 1px solid var(--dark-blue);
  border-radius: 20px;
  resize: vertical;
`;
