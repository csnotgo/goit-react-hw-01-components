import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid gray;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;
const setBgColor = isOnline => {
  if (isOnline.children) {
    return 'green';
  } else {
    return 'red';
  }
};

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
