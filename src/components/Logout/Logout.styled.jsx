import styled from 'styled-components';

const Logout = styled.button`
  border-radius: 40px;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    height: 44px;
    height: 40px;
    width: 135px;
    justify-content: center;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    width: 135px;
    ${'' /* margin-top: 20px; */}
    ${'' /* padding-top: 4px; */}
    padding-right:20px;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
  }
`;

export default Logout;
