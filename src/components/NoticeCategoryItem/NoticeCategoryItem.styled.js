import styled from 'styled-components';

const heartActive = {
  lightblue: 'var(--lightblue)',
  darkblue: 'var(--dark-blue)',
};

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
  width: 126px;
  background-color: var(--lightblue);
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

const IconDelete = styled.svg`
  fill: var(--lightblue);
  stroke: var(--dark-blue);
`;

const IconHeart = styled.svg`
  fill: ${props => (props.isSelected && props.isLoggedIn ? heartActive.darkblue : heartActive.lightblue)};
  stroke: var(--dark-blue);
`;

const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 50%;
  top: 12px;
  right: 12px;
`;

const FavoriteBtnContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--lightblue);
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
  &:hover ${IconHeart} {
    fill: var(--dark-blue);
  }
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 50%;
  background-color: var(--lightblue);
  padding: 0;
  &:hover {
    background-color: var(--dark-blue);
  }

  &:hover ${IconDelete}, :focus ${IconDelete} {
    fill: var(--dark-blue);
    stroke: var(--lightblue);
  }
`;

// const AddPet = styled(Link)`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 50%;
//   background: var(--dark-blue);
//   border: 2px solid var(--dark-blue);
//   color: var(--container-bg);
//   cursor: pointer;
//   display: inline-flex;
//   width: 80px;
//   height: 80px;
//   padding: 17px 16px;
//   gap: 4px;
//   font-size: 12px;
//   right: 0;
//   bottom: 60px;

//   &:hover,
//   &:focus {
//     background: var(--gradient-blue-bg);
//     border: var(--gradient-blue-bg);
//   }
// `;

// const IconPlusSmall = styled.svg`
//   stroke: var(--main-light-color);
// `;
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
  position: absolute;
  bottom: 24px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 248px;
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
  @media screen and (min-width: 768px) {
    left: 44px;
  }
  @media screen and (min-width: 1280px) {
    left: 20px;
  }
`;

const InfoTitle = styled.h3`
  color: var(--main-color);

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    color: #000;
    font-size: 28px;
    letter-spacing: -0.28px;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

const InfoDesc = styled.p`
  width: 240px;

  color: var(--main-color);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 393px;
    color: #000;

    font-size: 16px;
    letter-spacing: -0.16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

const Subtitle = styled.span`
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }

  @media screen and (min-width: 1280px) {
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
  IconDelete,
  IconHeart,
  IconConatiner,
  BtnContainer,
  FavoriteBtnContainer,
  AddToFavoriteBtn,
  DeleteBtn,
  ContentContainer,
  Title,
  LearnMoreBtn,
  InfoTitle,
  InfoDesc,
  Subtitle,
};
