import styled from 'styled-components';

const FriendsItemThumb = styled.div`
  position: relative;
  width: 280px;
  height: auto;
  border-radius: 40px;
  padding: 16px 12px;
  background: var(--unnamed, #fff);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 12px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px;
    width: 395px;
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
  @media screen and (min-width: 768px) {
    height: 54px;
  }
  @media screen and (min-width: 1280px) {
    height: 54px;
  }
`;

const Info = styled.div``;

const InfoItemFriend = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

const LogoDiv = styled.div`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 124px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 146px;
  }
`;

const Logo = styled.img`
  width: 100%;
  object-fit: contain;
  }
  @media screen and (min-width: 1280px) {
    width: 146px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EmptyBlock = styled.div`
  height: 17px;
  @media screen and (min-width: 768px) {
    height: 19px;
    width: 173px;
  }
  @media screen and (min-width: 1280px) {
    height: 22px;
    width: 197px;
  }
`;

const EmptyBlockAddress = styled.div`
  height: 56px;
  width: 145px;
  @media screen and (min-width: 768px) {
    width: 173px;
  }
  @media screen and (min-width: 1280px) {
    width: 197px;
  }
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
    display: block;
    font-size: 16px;
    width: 197px;
  }
`;

const InfoLinkAddress = styled.a`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 56px;
  width: 145px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    height: 56px;
    width: 197px;
  }
`;
const InfoLinkAddressDiv = styled.div`
  height: 56px;
  width: 145px;
  @media screen and (min-width: 768px) {
    height: 56px;
    width: 173px;
  }
  @media screen and (min-width: 1280px) {
    height: 56px;
    width: 197px;
  }
`;

export {
  FriendsItemThumb,
  Title,
  LogoDiv,
  Logo,
  InfoItemFriend,
  InfoBlock,
  EmptyBlock,
  EmptyBlockAddress,
  Info,
  InfoTitle,
  InfoLink,
  InfoLinkAddress,
  InfoLinkAddressDiv,
};
