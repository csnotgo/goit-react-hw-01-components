import {
  ProfileBox,
  ProfileDescription,
  Username,
  StatsList,
  StatsItem,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileBox>
      <ProfileDescription>
        <img src={avatar} alt="User avatar" width={150} height={150} />
        <Username>{username}</Username>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>
      <StatsList>
        <StatsItem>
          <span className="label">❤</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">👁‍🗨</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">👍🏻</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
