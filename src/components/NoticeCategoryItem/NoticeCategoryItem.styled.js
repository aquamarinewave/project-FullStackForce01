import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const stylesBtnActive = {
//   lightblue: "var(--lightblue)",
//   darkblue: "var(--dark-blue)",
// };

const NoticesItemThumb = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 288px;
`;
const CategoriesAndFilterContainer = styled.div``;

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
  top: 16px;
`;

const CategoriesName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const DiscriptionList = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 12px;
  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const DiscriptionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 28px;
  padding: 0 5px;
  border-radius: 16px;
  background-color: var(--lightblue);
`;
const TextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

const IconHeart = styled.svg`
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
const ContentContainer = styled.div`
  padding: 0 16px;
`;

const Title = styled.h3`
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;

  margin: 20px;
`;

const LearnMoreBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 38px;
  padding: 9px 0;
  border-radius: 40px;
  border: 2px solid var(--dark-blue);
  background-color: inherit;

  color: var(--dark-blue);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  cursor: pointer;

  &:hover {
    color: white;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
    border: none;
  }
`;

export {
  NoticesItemThumb,
  Img,
  CategoriesAndFilterContainer,
  CategoriesName,
  CategoriesContainer,
  DiscriptionList,
  DiscriptionItem,
  TextContainer,
  IconSvg,
  IconHeart,
  IconConatiner,
  FavoriteBtnContainer,
  AddToFavoriteBtn,
  AddPet,
  IconPlusSmall,
  ContentContainer,
  Title,
  LearnMoreBtn,
};
