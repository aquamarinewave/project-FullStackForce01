import styled from 'styled-components';

export const AddPetButton = styled.button`
  border-radius: 40px;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  color: var(--container-bg);
  cursor: pointer;
  display: inline-flex;
  width: 129px;
  height: 40px;
  padding: 9px 16px;
  align-items: center;

  gap: 8px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;

  /* 
  letter-spacing: 0.64px; */
  /* 
  :hover {
    background: var(--container-bg);
    color: var(--dark-blue);
  } */
`;
export const PetDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
