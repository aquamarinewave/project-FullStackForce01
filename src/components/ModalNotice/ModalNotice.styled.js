import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.60);
  backdrop-filter: blur(4px); 
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 681px;
  height: 540px;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 40px;
`;

export const ModalContent = styled.div`
  padding: 32px;
  width: 681px;

  .modal-header {
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px; 
    margin-bottom: 20px; 
  }

  .modal-info {
    display: flex;
    gap: 24px;
    margin-bottom: 28px; 
  }

  .modal-info-list {
    display: flex;
    gap: 51px;
  }

  .modal-info-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .modal-info-item--name {
    font-weight: 600; 
  }

  .modal-contact {
    color: var(--accent-color);
    font-weight: 500;  
  } 
  
  .modal-img {
    border-radius: 0px 0px 40px 40px;
  }

  .modal-comments {
    color: var(--main-color);
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.64px;
    margin-bottom: 70px  
  }

  .modal-buttons {
    display: flex;
    flex-direction: row-reverse;
    gap: 17px;
  }
  
  .modal-button {
    display: flex;
    gap: 6px;
    width: 129px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 40px; 
    font-size: 16px;
    font-family: inherit;
    font-weight: 700;  
    line-height: normal;
    letter-spacing: 0.64px; 
  }

  .modal-button--primary {
    border: 2px solid var(--dark-blue);
    color: var(--dark-blue);
  }

  .modal-button--primary:hover {
    background: var(--dark-blue, linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)); 
    color: #fff;
  }

  .modal-button--second {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-blue);
    border: none;
    color: #fff;
  }

  .modal-button--second:hover {
    background: var(--lightblue);
    color: var(--dark-blue);

    svg {
      stroke: var(--dark-blue);
    }
  }

  span {
    display: flex;
  }

`;

export const CloseModalButton = styled.button`
  border: transparent;
  background: transparent;
  position: absolute;
  top: 23px;
  right: 26px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

`;

export const IconHeart = styled.svg`
  stroke: #ffffff;

  &:hover {
    stroke: var(--dark-blue);
  }
`;


export const IconCross = styled.svg`
  stroke: var(--dark-blue);

  &:hover {
    border: 1px solid var(--dark-blue);
    border-radius: 50%;
  }
`;