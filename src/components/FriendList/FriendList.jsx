import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendSet } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendSet>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        </li>
      ))}
    </FriendSet>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
