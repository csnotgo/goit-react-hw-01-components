import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  padding: 40px 0;
`;

export const Th = styled.th`
  padding: 10px;
  border-bottom: 1px solid gray;

  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid gray;

  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;
