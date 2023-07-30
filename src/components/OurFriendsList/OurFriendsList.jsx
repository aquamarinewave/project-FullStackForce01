import FriendsItem from 'components/FriendsItem/FriendsItem.jsx';
import { useState, useEffect } from 'react';
import { fetchByFriends } from '../../services/api/friendsFetch.js';

import { Wrapper } from './OurFriendsList.styled.js';

const OurFriendsList = () => {
  const [resByFriends, setResByFriends] = useState();

  useEffect(() => {
    async function fetchDataByFriends() {
      try {
        const response = await fetchByFriends();
        setResByFriends(response.data[0].friends);
      } catch (error) {}
    }

    fetchDataByFriends();
  }, []);

  return (
    <div>
      {resByFriends && (
        <Wrapper>
          {resByFriends.map(({ _id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) => {
            return (
              <li key={_id}>
                <FriendsItem
                  responseByFriends={{
                    title,
                    url,
                    addressUrl,
                    imageUrl,
                    address,
                    workDays,
                    phone,
                    email,
                  }}
                />
              </li>
            );
          })}
        </Wrapper>
      )}
    </div>
  );
};

export default OurFriendsList;
