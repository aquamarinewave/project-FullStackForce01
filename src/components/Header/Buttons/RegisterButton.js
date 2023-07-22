import styled from 'styled-components';

const RegisterButton = styled.button`
  display: none;
  border-radius: 40px;
  border: 2px solid var(--accent-color);
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
    width: 142px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    width: 142px;
    display: flex;
    align-items: center;
  }
`;

export default RegisterButton;
