import styled from 'styled-components';

export const BackdropModalCongrats = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 9999;
`;

export const ContainerModalCongrats = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 280px;

  padding: 60px 16px;
  border-radius: 20px;
  background-color: var(--main-light-color);

  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    min-width: 608px;
    border-radius: 40px;
    padding: 60px 0;
  }
`;

export const CrossIcon = styled.svg`
  stroke: var(--dark-blue);
`;

export const CloseIconModalCongrats = styled.div`
  position: absolute;
  display: flex;
  top: 4px;
  right: 4px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #c5dff6;
  }
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const ContentModalCongrats = styled.div`
  text-align: center;
`;

export const BtnContainerModalCongrats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* margin: 40px 16px 60 12px; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ApproveBtnModalCongrats = styled.button`
  display: flex;
  /* width: 248px; */
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  /* display: inline-flex;
  align-items: center;
  justify-content: center; */

  width: 100%;
  height: 40px;
  /* padding: 9px 0; */
  border-radius: 40px;
  border: none;
  background-color: var(--dark-blue);

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;

  cursor: pointer;

  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
  @media screen and (min-width: 768px) {
    width: 248px;
  }
`;

export const BtnTextModalCongrats = styled.span`
  margin-right: 8px;
`;

export const BtnIcon = styled.svg`
  stroke: ${({ color }) => color};
  fill: ${({ color }) => color};
`;

export const TitleModalCongrats = styled.h1`
  margin-top: 28px;
  margin-bottom: 24px;
  color: var(--main-color);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    margin-bottom: 52px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const TextModalCongrats = styled.p`
  margin-bottom: 40px;
  color: var(--main-color);
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 24px;
    letter-spacing: 0.96px;
  }
`;

// import styled from 'styled-components';

// export const ModalCongratsBackdrop = styled.div`
//   height: 100vh;
//   width: 100vw;

//   background: rgba(87, 86, 86, 0.6);

//   position: fixed;
//   top: 0;
//   left: 0;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* border-radius: 4px;
//   padding: 20px;
//   margin: 0 auto;
//   border-radius: 20px; */

//   /* Shadow default */
//   /* box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19); */

//   @media screen and (min-width: 768px) {
//     /* display: flex;
//     width: 703px;
//     height: 256px; */
//   }

//   @media screen and (min-width: 1280px) {
//     /* width: 821px;
//     height: 212px; */
//   }
// `;

// export const ModalContent = styled.div`
//   width: 280px;
//   height: 287px;

//   padding: 16px;
//   border-radius: 20px;
//   background: #fff;
//   box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

//   position: relative;

//   @media screen and (min-width: 768px) {
//     width: 608px;
//     height: 354px;

//     padding: 24px;
//     border-radius: 40px;
//     /* display: flex;
//     width: 703px;
//     height: 256px; */
//   }

//   @media screen and (min-width: 1280px) {
//     /* width: 821px;
//     height: 212px; */
//   }
// `;

// export const GoToProfileButton = styled.button`
//   border-radius: 40px;
//   background: var(--dark-blue);
//   border: 2px solid var(--dark-blue);
//   color: var(--container-bg);
//   cursor: pointer;
//   display: inline-flex;
//   width: 129px;
//   height: 40px;
//   padding: 9px 16px;
//   align-items: center;

//   gap: 8px;
//   font-family: Manrope;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: normal;
//   font-style: normal;

//   /* letter-spacing: 0.64px; */

//   &:hover,
//   &:focus {
//     background: var(--gradient-blue-bg);
//   }
// `;

// export const IconPawPrint = styled.svg`
//   stroke: currentColor;
// `;
// export const CloseButton = styled.button`
//   position: absolute;
//   top: -12px;
//   right: -12px;
//   padding: 0;
//   width: 40px;
//   height: 40px;

//   background: transparent;
//   border: none;
//   border-radius: 50%;

//   cursor: pointer;
//   color: var(--dark-blue);

//   &:hover {
//     background: var(--dark-blue);
//     color: white;
//   }
// `;

// export const IconCrossSmall = styled.svg`
//   stroke: currentColor;
// `;
