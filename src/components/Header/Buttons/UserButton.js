import styled from 'styled-components';

const UserButton = styled.button`
background: #FFFFFF;
  border-radius: 20px;
  border: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    ${
      '' /* max-width: 768px;
    padding-left: 32px;
    padding-right: 32px; */
    }

    height: 40px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 113px;
    display: flex;
    align-items: center;
  }
`;

export default UserButton;
