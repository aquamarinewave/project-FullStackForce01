import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { Item, List } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <div>
      {notices && (
        <List>
          {notices.map(
            ({
              _id,
              comments,
              title,
              birthday,
              category,
              location,
              name,
              owner,
              sex,
              type,
              avatarURL,
              allowDelete,
            }) => {
              return (
                <Item key={_id}>
                  <NoticeCategoryItem
                    notices={{
                      _id,
                      comments,
                      title,
                      birthday,
                      category,
                      location,
                      name,
                      owner,
                      sex,
                      type,
                      avatarURL,
                      allowDelete,
                    }}
                  />
                </Item>
              );
            }
          )}
        </List>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
