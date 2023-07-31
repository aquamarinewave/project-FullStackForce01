
import styled from 'styled-components';

const WorkingTimeToday = styled.button`
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

const InfoTitle = styled.p`
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

const InfoLink = styled.div`
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

const EmptyBlock = styled.div`
  height: 17px;
  @media screen and (min-width: 768px) {
    height: 19px;
    width: 173px;
  }
  @media screen and (min-width: 1280px) {
    height: 22px;
    width: 197px;
  }
`;

const ModalContent = styled.div`
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

const TableDayWeek = styled.div`
  display: inline-block;
  width: 19px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 9px;  
`;

const TableDayTime = styled.div`
  display: inline-block;
  width: 72px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;


export { ModalContent, WorkingTimeToday, InfoTitle, InfoLink, EmptyBlock, TableDayWeek, TableDayTime };
