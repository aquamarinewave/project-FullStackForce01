
import styled from 'styled-components';

export const WorkingTimeToday = styled.div`
  position: relative;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background-color: var(--main-light-color);
  text-align: left;
  padding: 0;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const InfoTitle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const InfoLink = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    font-size: 16px;
    width: 197px;
  }
`;

export const EmptyBlock = styled.div`
  height: 17px;
  cursor: auto;
  
    color: var(--main-color);

  @media screen and (min-width: 768px) {
    height: 19px;
    width: 173px;
  }
  @media screen and (min-width: 1280px) {
    height: 22px;
    width: 197px;
  }
`;

export const ModalWeek = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 126px;
  border: 1px solid var(--dark-blue);
  background-color: var(--main-light-color);
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    border: 1px solid var(--accent-color);
  }
`;

export const TableDayWeek = styled.div`
  display: inline-block;
  width: 19px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 9px;  
`;

export const TableDayTime = styled.div`
  display: inline-block;
  width: 72px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

