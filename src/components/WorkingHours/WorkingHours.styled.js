import styled from 'styled-components';

// const InfoTime = styled.button`
// `;

const ModalWeek= styled.div`
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

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const ModalClose = styled.span`
  float: right;
  cursor: pointer;
`;


export { ModalWeek, ModalContent, ModalClose}
