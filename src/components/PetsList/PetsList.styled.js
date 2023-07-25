import styled from 'styled-components';

export const UserPetsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;
