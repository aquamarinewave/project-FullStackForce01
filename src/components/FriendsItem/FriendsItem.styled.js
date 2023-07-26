import styled from 'styled-components';

const FriendsItemThumb = styled.div`
  position: relative;
  width: 280px;
  ${'' /* height: 239px; */}
  border-radius: 40px;
  padding: 16px;
  background: var(--unnamed, #fff);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin: 36px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 275px;
    padding: 12px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: auto;
  }
`;

const Title = styled.a`
  display: block;
  color: var(--unnamed, #54adff);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
margin-bottom: 16px;
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 124px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`;

const InfoItemFriend = styled.div`
  display: flex;
  gap: 12px;
`;

const InfoBlock = styled.div`
display:flex;
flex-direction: column;
gap: 12px;
`;

const Info = styled.div`
`;

const InfoTitle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

const InfoLink = styled.a`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export { FriendsItemThumb, Title, Logo, InfoItemFriend, InfoBlock, Info, InfoTitle, InfoLink };
