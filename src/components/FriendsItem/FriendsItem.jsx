import React from 'react';
import WorkingHours from '../WorkingHours/WorkingHours';

import {
  FriendsItemThumb,
  Title,
  LogoDiv,
  Logo,
  InfoItemFriend,
  InfoBlock,
  EmptyBlock,
  EmptyBlockAddress,
  // Info,
  InfoTitle,
  InfoLink,
  InfoLinkAddress,
  InfoLinkAddressDiv,
} from './FriendsItem.styled';

const FriendsItem = ({ responseByFriends }) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = responseByFriends;

  return (
    <div>
      <FriendsItemThumb>
        <Title href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Title>

        <InfoItemFriend>
          <LogoDiv>
            <Logo src={imageUrl} alt="Logo friend"></Logo>
          </LogoDiv>

          <InfoBlock>

              <WorkingHours daysWorkingInWeek={workDays}></WorkingHours>

            <div>
              <InfoTitle>Address:</InfoTitle>
              {!address ? (
                <EmptyBlockAddress>-</EmptyBlockAddress>
              ) : (
                <InfoLinkAddressDiv>
                  <InfoLinkAddress href={addressUrl} target="_blank" rel="noopener noreferrer">
                    {address}
                  </InfoLinkAddress>
                </InfoLinkAddressDiv>
              )}
            </div>

            <div>
              <InfoTitle>Email:</InfoTitle>
              {!email ? <EmptyBlock>-</EmptyBlock> : <InfoLink href={`mailto:${email}`}> {email} </InfoLink>}
            </div>

            <div>
              <InfoTitle>Phone:</InfoTitle>
              {!phone ? <EmptyBlock>-</EmptyBlock> : <InfoLink href={`tel:${phone}`}> {phone} </InfoLink>}
            </div>
          </InfoBlock>
        </InfoItemFriend>
      </FriendsItemThumb>
    </div>
  );
};

export default FriendsItem;
