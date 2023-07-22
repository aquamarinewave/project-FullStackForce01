import styled from 'styled-components';

const LoginButton = styled.button`
  border-radius: 40px;
  border: 2px solid var(--accent-color);
  background: var(--accent-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 165px;
    padding-right: 20px;
    padding-left: 20px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    width: 165px;
    ${'' /* margin-top: 20px; */}
    ${'' /* padding-top: 4px; */}
    padding-right:20px;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
  }
`;

export default LoginButton;