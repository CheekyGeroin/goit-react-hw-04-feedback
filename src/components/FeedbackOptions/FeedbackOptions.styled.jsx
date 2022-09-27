import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 25px;
`;

export const Item = styled.li``;

export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid #cccccc;
  padding: 4px 10px;
  cursor: pointer;
  :active {
    box-shadow: 2px 2px 2px 2px #4d4e4f;
  }
`;
