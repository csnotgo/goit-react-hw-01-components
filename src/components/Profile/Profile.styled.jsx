import styled from 'styled-components';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;

  border-right: 1px solid gray;
  border-left: 1px solid gray;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  text-align: center;

  color: gray;
`;

export const Username = styled.p`
  padding: 10px 0;
  font-size: 32px;
  font-weight: 700;
  color: black;
  border-top: 1px solid gray;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  border-top: 1px solid gray;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 40px;
  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;
