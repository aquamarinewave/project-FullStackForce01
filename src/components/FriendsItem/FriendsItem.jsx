import React from 'react';

import { FriendsItemThumb, Title, Logo, InfoItemFriend, InfoBlock, Info, InfoTitle, InfoLink } from './FriendsItem.styled';

const FriendsItem = ({ responseByFriends }) => {

const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = responseByFriends;

  return (
    <div>
      <FriendsItemThumb>
        <Title href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Title>

        <InfoItemFriend>
          <Logo src={imageUrl} alt="Logo friend"></Logo>

          <InfoBlock>
            <Info>
              <InfoTitle>Time:</InfoTitle>
              <button type="button">{workDays[0]}</button>
            </Info>

            <Info>
              <InfoTitle>Address:</InfoTitle>
              <InfoLink href={addressUrl} target="_blank" rel="noopener noreferrer">
                if (!{address}) ? ""
              </InfoLink>
            </Info>

            <Info>
              <InfoTitle>Email:</InfoTitle>
              {!email ? "" : <InfoLink href={`mailto:${email}`}> {email} </InfoLink>}

              {/* <InfoLink href={`mailto:${email}`}> {!email ? '' : email} </InfoLink> */}
            </Info>

            <Info>
              <InfoTitle>Phone:</InfoTitle>
              <InfoLink href={`tel:${phone}`}>{phone}</InfoLink>
            </Info>
          </InfoBlock>
        </InfoItemFriend>
      </FriendsItemThumb>
    </div>
  );
};

export default FriendsItem;
