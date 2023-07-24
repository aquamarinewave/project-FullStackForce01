import styled from 'styled-components';

export const PetCard = styled.li`
  width: 280px;
  height: 541px;

  border-radius: 4px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 703px;
    height: 256px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    height: 212px;
  }
`;
export const PetDesc = styled.p`
  margin-bottom: 12px;
  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
