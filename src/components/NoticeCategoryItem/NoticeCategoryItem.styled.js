import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoticesItemThumb = styled.div`
  position: relative;
`;

const CategoriesContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightblue);
  padding: 10px 16px;
  height: 36px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  top: 12px;
`;

const CategoriesName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const DiscriptionList = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0 8px;
  bottom: 0;
`;

const DiscriptionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  width: 80px;
  border-radius: 16px;
  background-color: var(--lightblue);
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

const FavoriteBtnContainer = styled.div`
  position: absolute;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--lightblue);
  top: 12px;
  right: 12px;
`;

const AddToFavoriteBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 50%;
  background-color: var(--lightblue);
  padding: 0;
  &:hover ${IconSvg}, :focus ${IconSvg} {
    fill: var(--dark-blue);
  }
`;

const AddPet = styled(Link)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  color: var(--container-bg);
  cursor: pointer;
  display: inline-flex;
  width: 80px;
  height: 80px;
  padding: 17px 16px;
  gap: 4px;
  font-size: 12px;
  right: 0;
  bottom: 60px;

  &:hover,
  &:focus {
    background: var(--gradient-blue-bg);
    border: var(--gradient-blue-bg);
  }
`;

const IconPlusSmall = styled.svg`
  stroke: var(--main-light-color);
`;

export {
  NoticesItemThumb,
  CategoriesName,
  CategoriesContainer,
  DiscriptionList,
  DiscriptionItem,
  IconSvg,
  IconConatiner,
  FavoriteBtnContainer,
  AddToFavoriteBtn,
  AddPet,
  IconPlusSmall,
};
