import styled from 'styled-components';

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 40px;
  tex-align: center;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  width: 50px;

  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;
